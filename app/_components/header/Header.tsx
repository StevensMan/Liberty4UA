// import Image from "next/image";
import { Container, MainMenu } from '@/app/_components'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="relative z-50 h-[100px] w-full bg-transparent">
      <Container className="relative flex h-full items-center justify-between">
        <Link href="/">
          <p className="text-2xl font-bold text-white">
            Liberty4<span className="text-yellow-400">UA</span>
          </p>
        </Link>
        <MainMenu />
      </Container>
    </header>
  )
}
