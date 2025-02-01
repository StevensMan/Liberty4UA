import {
  Accordion,
  ButtonDownload,
  Container,
  Section
} from '@/app/_components'
import { routes } from '@/lib/routes'
import Image from 'next/image'
import { Link } from '@/lib/i18n/routing'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <main className="w-full">
      <Section className="relative mt-[-100px] h-screen text-white">
        <Image
          src="/hero-bkg.jpg"
          alt="Background"
          fill
          className="object-cover object-[60%] sm:object-center"
          priority={true}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 3840px"
          quality={90}
        />
        <div className="absolute inset-0 bg-[#004080]/50" />
        <Container className="relative z-10 flex h-full flex-col justify-center gap-8">
          <h1 className="text-balance text-4xl font-bold md:text-8xl">
            {t('title')}
          </h1>
          <p className="text-balance text-lg md:text-2xl">{t('subtitle')}</p>
          <ButtonDownload />
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-6 pt-16">
          <h2 className="text-center text-4xl font-bold md:text-6xl">
            {t('mission.title')}
          </h2>
          <p className="text-lg md:text-2xl">
            {t.rich('mission.text', {
              b: (chunks) => <span className="font-bold">{chunks}</span>
            })}
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-center text-4xl font-bold md:text-6xl">
            {t('goals.title')}
          </h2>
          <ul className="list-inside list-disc text-lg md:text-2xl">
            <li>
              {t.rich('goals.point1', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </li>
            <li>
              {t.rich('goals.point2', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </li>
            <li>
              {t.rich('goals.point3', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </li>
            <li>
              {t.rich('goals.point4', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </li>
            <li>
              {t.rich('goals.point5', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </li>
          </ul>
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-center text-4xl font-bold md:text-6xl">
            {t('issues.title')}
          </h2>
          <ul className="list-inside list-disc text-lg md:text-2xl">
            <li>
              {t.rich('issues.point1', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </li>
            <li>
              {t.rich('issues.point2', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </li>
            <li>
              {t.rich('issues.point3', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </li>
            <li>
              {t.rich('issues.point4', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </li>
          </ul>
        </Container>
      </Section>
      <Section>
        <Container className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-8 rounded-2xl border-2 border-gray-600 p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold md:text-6xl">
                {t('call.title')}
              </h2>
              <p className="text-lg md:text-2xl">???</p>
            </div>
            <Link
              href={routes.call}
              className="flex items-center gap-2 self-start text-lg text-blue-600 underline hover:no-underline"
            >
              {t('call.link')}
              <KeyboardArrowRightIcon />
            </Link>
          </div>
          <div className="flex flex-col justify-between gap-8 rounded-2xl border-2 border-gray-600 p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold md:text-6xl">
                {t('letter.title')}
              </h2>
              <p className="text-lg md:text-2xl">???</p>
            </div>
            <Link
              href={routes.letter}
              className="flex items-center gap-2 self-start text-lg text-blue-600 underline hover:no-underline"
            >
              {t('letter.link')}
              <KeyboardArrowRightIcon />
            </Link>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-center text-4xl font-bold md:text-6xl">
            {t('why.title')}
          </h2>
          <ul className="list-inside list-disc text-lg md:text-2xl">
            <li>
              {t.rich('why.point1', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </li>
            <li>
              {t.rich('why.point2', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </li>
            <li>
              {t.rich('why.point3', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </li>
          </ul>
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-8 pb-16">
          <h2 className="text-center text-4xl font-bold md:text-6xl">
            {t('faq.title')}
          </h2>
          <Accordion />
        </Container>
      </Section>
    </main>
  )
}
