import Link from 'next/link'
import { routes } from '@/lib/routes'

export const MainMenu = () => {
  return (
    <ul className="flex flex-row items-center justify-center gap-8 text-white">
      <li>
        <Link className="hover:text-yellow-400" href={routes.home}>
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-yellow-400" href={routes.about}>
          About
        </Link>
      </li>
      <li>
        <Link className="hover:text-yellow-400" href={routes.contact}>
          Contact
        </Link>
      </li>
    </ul>
  )
}
