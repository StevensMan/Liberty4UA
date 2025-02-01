import { useLocale } from 'next-intl'
import { Link, usePathname } from '@/lib/i18n/routing'
import Image from 'next/image'

export const LanguageSwitcher = () => {
  const locale = useLocale()
  const pathname = usePathname()
  const oppositeLocale = locale === 'en' ? 'ua' : 'en'
  const buttonText = locale === 'en' ? <UkrainianButton /> : <EnglishButton />

  return (
    <Link href={pathname} locale={oppositeLocale}>
      {buttonText}
    </Link>
  )
}

const UkrainianButton = () => {
  return (
    <button className="flex items-center gap-2 font-bold uppercase md:text-white">
      <Image src="/ua.svg" alt="Ukrainian flag" width={24} height={24} />
      Укр
    </button>
  )
}

const EnglishButton = () => {
  return (
    <button className="flex items-center gap-2 font-bold uppercase md:text-white">
      <Image src="/usa.svg" alt="English flag" width={24} height={24} />
      Eng
    </button>
  )
}
