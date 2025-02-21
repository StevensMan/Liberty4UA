import { useFormStatus } from 'react-dom'

export const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn w-full rounded bg-blue-500 px-4 py-2 text-white disabled:bg-blue-300"
    >
      {pending ? 'Searching...' : 'Search'}
    </button>
  )
}
