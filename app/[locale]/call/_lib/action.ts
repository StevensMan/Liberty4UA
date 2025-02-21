'use server'

import type {
  CivicInfoResponse,
  Official,
  OfficeLevels,
  OfficeRoles
} from './types'

import { addressSchema } from './schema'

const API_URL = 'https://civicinfo.googleapis.com/civicinfo/v2/representatives'

export async function getCivicInfo(
  prevState: { error?: string; data?: { officials: Official[] } } | null,
  formData: FormData
) {
  try {
    // Gather form data
    const rawData = {
      address: formData.get('address') as string,
      city: formData.get('city') as string,
      zip: formData.get('zip') as string,
      includeOffices: formData.get('includeOffices') === 'true',
      levels: formData.getAll('levels') as OfficeLevels[],
      roles: formData.getAll('roles') as OfficeRoles[]
    }

    // Validate input
    const parsed = addressSchema.safeParse(rawData)
    if (!parsed.success) {
      return {
        error: parsed.error.issues.map((issue) => issue.message).join(', ')
      }
    }

    // Build query
    const { address, city, zip } = parsed.data
    const queryParams = new URLSearchParams({
      key: process.env.GOOGLE_CIVIC_API_KEY || '',
      address: `${address}, ${city}, ${zip}`,
      roles: 'legislatorLowerBody',
      levels: 'country'
    })

    queryParams.append('roles', 'legislatorUpperBody')

    // Fetch from Civic Info API
    const response = await fetch(`${API_URL}?${queryParams.toString()}`, {
      method: 'GET',
      headers: { Accept: 'application/json' }
    })

    // Handle non-200 responses with specific error messages
    if (!response.ok) {
      if (response.status === 400) {
        throw new Error('Invalid address. Please check your address details.')
      } else if (response.status === 403) {
        throw new Error('API access denied. Please try again later.')
      } else if (response.status === 404) {
        throw new Error('No representatives found for this address.')
      } else {
        throw new Error(
          `Civic Info API error (${response.status}): ${response.statusText}`
        )
      }
    }

    // Process response
    const data: CivicInfoResponse = await response.json()

    const filteredOfficials = (data.officials || [])
      .map((official, index) => {
        const office = data.offices?.find((o) =>
          o.officialIndices.includes(index)
        )
        return {
          ...official,
          officeName: office?.name,
          divisionId: office?.divisionId,
          uniqueId: `${official.name}-${office?.name}-${index}`
        }
      })
      .filter(
        (o) =>
          o.photoUrl ||
          o.phones?.length ||
          o.emails?.length ||
          o.channels?.length ||
          o.address?.length ||
          o.uniqueId
      )

    // console.log(filteredOfficials)

    // Return filtered data
    return { data: { officials: filteredOfficials } }
  } catch (error) {
    return { error: (error as Error).message || 'Unknown error occurred' }
  }
}
