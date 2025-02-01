import { Container, Section } from '@/app/_components'
import { Link } from '@/lib/i18n/routing'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TelegramIcon from '@mui/icons-material/Telegram'
import LanguageIcon from '@mui/icons-material/Language'
import EmailIcon from '@mui/icons-material/Email'
import { useTranslations } from 'next-intl'

export const Footer = () => {
  const t = useTranslations('footer')

  return (
    <footer className="mt-auto flex min-h-[100px] w-full bg-[#004080] font-bold text-white md:items-center">
      <Section>
        <Container className="flex flex-col gap-6 md:flex-row md:justify-between">
          <p className="text-2xl font-bold">
            Liberty4<span className="text-yellow-400">UA</span>
          </p>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold">{t('titles.contact')}</h4>
            <Link
              className="flex items-center gap-2 text-sm md:text-base"
              href="mailto:contact@liberty4ua.org"
            >
              <EmailIcon />
              contact@liberty4ua.org
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold">{t('titles.partners')}</h4>
            <Link
              className="flex items-center gap-2 text-sm md:text-base"
              href="https://protectukrainenow.org"
              target="_blank"
            >
              <LanguageIcon />
              Protect Ukraine Now
            </Link>
            <Link
              className="flex items-center gap-2 text-sm md:text-base"
              href="https://www.youtube.com/@SergeyLubarsky"
              target="_blank"
            >
              <YouTubeIcon />
              Sergey Lubarsky
            </Link>
            <Link
              className="flex items-center gap-2 text-sm md:text-base"
              href="https://t.me/SergeyLubarsky"
              target="_blank"
            >
              <TelegramIcon />
              Sergey Lubarsky
            </Link>
          </div>
        </Container>
      </Section>
    </footer>
  )
}
