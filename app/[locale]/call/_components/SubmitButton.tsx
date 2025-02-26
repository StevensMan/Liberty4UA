'use client'

import { useFormStatus } from 'react-dom'
import SearchIcon from '@mui/icons-material/Search'
import CircularProgress from '@mui/material/CircularProgress'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-primary/70"
    >
      {pending ? (
        <>
          <CircularProgress size={16} thickness={4} className="text-white" />
          <span>Searching...</span>
        </>
      ) : (
        <>
          <SearchIcon fontSize="small" />
          <span>Find Representatives</span>
        </>
      )}
    </button>
  )
}
