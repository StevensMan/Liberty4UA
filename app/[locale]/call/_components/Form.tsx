'use client'

import { useActionState } from 'react'
import NextForm from 'next/form'
import { Official } from '../_lib/types'
import { getCivicInfo } from '../_lib/action'
import { SubmitButton, OfficialCard } from './'

export const Form = () => {
  const [state, formAction] = useActionState(getCivicInfo, null)

  return (
    <>
      <NextForm
        action={formAction}
        className="flex w-full max-w-md flex-col items-end gap-4"
      >
        <div className="w-full">
          <label htmlFor="address" className="block">
            Street Address:
          </label>
          <input
            type="text"
            placeholder="Address"
            className="input w-full"
            id="address"
            name="address"
            style={{ color: 'white' }}
          />
        </div>
        <div className="w-full">
          <label htmlFor="city" className="block">
            City:
          </label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="City"
            className="input w-full text-white"
            style={{ color: 'white' }}
          />
        </div>
        <div className="w-full">
          <label htmlFor="zip" className="block">
            ZIP Code:
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            placeholder="ZIP Code"
            className="input w-full text-white"
            style={{ color: 'white' }}
          />
        </div>

        <SubmitButton />
      </NextForm>

      {state?.error && <div className="mt-4 text-red-500">{state.error}</div>}
      {state?.data?.officials && (
        <div className="mt-8 space-y-6">
          <h2 className="mb-4 text-2xl font-bold">Found Officials</h2>
          {state.data.officials.map((official: Official) => (
            <OfficialCard key={official.uniqueId} official={official} />
          ))}
        </div>
      )}
    </>
  )
}

export default Form
