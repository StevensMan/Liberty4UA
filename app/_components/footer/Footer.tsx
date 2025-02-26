'use client'

import { Container, Logo, LanguageSwitcher } from '@/app/_components'
import { Link, usePathname } from '@/lib/i18n/routing'
import { routes } from '@/lib/routes'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TelegramIcon from '@mui/icons-material/Telegram'
import LanguageIcon from '@mui/icons-material/Language'
// import FacebookIcon from '@mui/icons-material/Facebook'
// import TwitterIcon from '@mui/icons-material/Twitter'
// import InstagramIcon from '@mui/icons-material/Instagram'
// import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
  // import PhoneIcon from '@mui/icons-material/Phone'
  // import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useTranslations } from 'next-intl'

export const Footer = () => {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()
  const t = useTranslations()
  const footerLinks = [
    { name: 'Home', href: routes.home },
    { name: 'About', href: routes.about },
    { name: 'Call', href: routes.call },
    { name: 'Contact', href: routes.contact }
  ]

  // const socialLinks = [
  //   { name: 'Facebook', icon: <FacebookIcon />, href: 'https://facebook.com' },
  //   { name: 'Twitter', icon: <TwitterIcon />, href: 'https://twitter.com' },
  //   { name: 'Instagram', icon: <InstagramIcon />, href: 'https://instagram.com' },
  //   { name: 'LinkedIn', icon: <LinkedInIcon />, href: 'https://linkedin.com' }
  // ]

  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="border-b border-gray-800">
        <Container className="py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo and About */}
            <div className="flex flex-col gap-4">
              <Link href={routes.home} className="flex items-center gap-2">
                <Logo />
              </Link>
              <p className="mt-2 text-sm text-gray-400">
                {t('footer.titles.description')}
              </p>
              {/* <div className="mt-4 flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary hover:text-white"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))} */}
              </div>
            

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-bold">{t('footer.titles.quickLinks')}</h3>
              <ul className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`text-sm text-gray-400 transition-colors hover:text-secondary ${
                        pathname === link.href ? 'text-secondary' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://actionnetwork.org/letters/fund-ukraines-military-end-wasteful-aid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 transition-colors hover:text-secondary"
                  >
                    Letter
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 id="contact" className="mb-4 text-lg font-bold">{t('footer.titles.contact')}</h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <EmailIcon className="text-secondary" fontSize="small" />
                  <a href="mailto:info@liberty4ua.org" className="hover:text-secondary">
                    info@liberty4ua.org
                  </a>
                </li>
                {/* <li className="flex items-center gap-2 text-sm text-gray-400">
                  <PhoneIcon className="text-secondary" fontSize="small" />
                  <a href="tel:+1234567890" className="hover:text-secondary">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-400">
                  <LocationOnIcon className="text-secondary" fontSize="small" />
                  <span>Washington, D.C., United States</span>
                </li> */}
              </ul>
            </div>

            {/* Newsletter */}
            {/* <div>
              <h3 className="mb-4 text-lg font-bold">Stay Updated</h3>
              <p className="mb-4 text-sm text-gray-400">
                Subscribe to our newsletter for the latest updates and news.
              </p>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="rounded bg-gray-800 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
                <button
                  type="submit"
                  className="rounded bg-secondary px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-secondary-dark"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
            {/*Partners*/}
            <div>
              <h3 className="mb-4 text-lg font-bold">{t('footer.titles.partners')}</h3>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <LanguageIcon className="text-secondary" fontSize="small" />
                  <a
                    className="hover:text-secondary"
                    href="https://protectukrainenow.org"
                    target="_blank"
                  >
                    Protect Ukraine Now
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <YouTubeIcon className="text-secondary" fontSize="small" />
                  <a
                    className="hover:text-secondary"
                    href="https://www.youtube.com/@SergeyLubarsky"
                    target="_blank"
                  >
                    Sergey Lubarsky
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <TelegramIcon className="text-secondary" fontSize="small" />
                  <a
                    className="hover:text-secondary"
                    href="https://t.me/SergeyLubarsky"
                    target="_blank"
                  >                    
                    Sergey Lubarsky
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      
      


      {/* Bottom Footer */}
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <div className="text-sm text-gray-500">
            @ {currentYear} Liberty4UA. {t('footer.titles.copyright')}
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            {/* <div className="flex gap-4 text-sm text-gray-500">
              <Link href="#" className="hover:text-secondary">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-secondary">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </Container>
      </div>
    </footer>
  )
}
