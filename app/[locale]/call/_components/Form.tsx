'use client'

import { useActionState } from 'react'
import { getCivicInfo } from '../_lib/action'
import { SubmitButton } from '.'
import { OfficialCard } from '.'
import { Text } from '@/app/_components'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Official } from '../_lib/types'

type FormState = {
  error?: string;
  data?: {
    officials: Official[];
  };
} | null;

export function Form() {
  const [state, formAction] = useActionState<FormState, FormData>(getCivicInfo, null)

  return (
    <div className="w-full">
      <form action={formAction} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LocationOnIcon className="h-5 w-5 text-gray-400" fontSize="small" />
              </div>
              <input
                type="text"
                name="address"
                id="address"
                required
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                placeholder="123 Main St"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                required
                className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                placeholder="Your City"
              />
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code
              </label>
              <input
                type="text"
                name="zip"
                id="zip"
                required
                className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                placeholder="12345"
              />
            </div>
          </div>
        </div>
        
        <div className="pt-2">
          <SubmitButton />
        </div>
      </form>

      {state?.error && (
        <div className="mt-6 rounded-lg bg-red-50 p-4 border border-red-100">
          <Text variant="p" size="sm" className="text-red-800">
            {state.error}
          </Text>
        </div>
      )}

      {state?.data?.officials && state.data.officials.length > 0 && (
        <div className="mt-8 space-y-6">
          <div className="border-t border-gray-200 pt-6">
            <Text variant="h3" size="md" className="mb-4 text-gray-900">
              Your Representatives
            </Text>
            <div className="grid grid-cols-1 gap-4">
              {state.data.officials.map((official: Official, index: number) => (
                <OfficialCard key={official.uniqueId || index} official={official} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
