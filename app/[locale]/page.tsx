import { Accordion, Container, Section, LinkAsButton, Text } from '@/app/_components'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { routes } from '@/lib/routes'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <main className="w-full">
      <Section id="hero" className="relative mt-[-100px] h-screen text-white">
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
          <Text variant="h1" size="lg">{t('title')}</Text>
          <Text variant="p" size="lg" className="text-balance">{t('subtitle')}</Text>
          
          <div className="card-actions justify-start">
            <LinkAsButton href={routes.call}>
              {t('call.linkText')}
              <KeyboardArrowRightIcon />
            </LinkAsButton>
            <LinkAsButton
              target="_blank"
              href={'https://actionnetwork.org/letters/fund-ukraines-military-end-wasteful-aid'}
            >
              {t('letter.linkText')}
              <KeyboardArrowRightIcon />
            </LinkAsButton>
          </div>
          
          <div className="flex flex-col items-start gap-4">
            <Text variant="p" size="lg" bold>Learn more</Text>
            <a
              href="/2025.01.15_ReportForCongressmen.pdf"
              target="_blank"
              className="btn bg-yellow-400 text-lg text-black hover:bg-yellow-100 md:text-2xl"
            >
              <DownloadForOfflineIcon />
              <div className="flex flex-row items-baseline gap-2">
                {t('downloadReport')}
                <span className="text-sm">1.1 MB</span>
              </div>
            </a>
          </div>
        </Container>
      </Section>
      
      <Section id="about-us">
        <Container className="flex flex-col gap-6 pt-16">
          <Text variant="h2" size="lg">{t('aboutUs.title')}</Text>
          <Text variant="p" size="lg">
            {t.rich('aboutUs.text', {
              b: (chunks) => <span className="font-bold">{chunks}</span>
            })}
          </Text>
        </Container>
      </Section>
      
      <Section id="mission">
        <Container className="flex flex-col gap-6">
          <Text variant="h2" size="lg">{t('mission.title')}</Text>
          <Text variant="p" size="lg">
            {t.rich('mission.text', {
              b: (chunks) => <span className="font-bold">{chunks}</span>
            })}
          </Text>
        </Container>
      </Section>
      
      <Section id="goals">
        <Container className="flex flex-col gap-6">
          <Text variant="h2" size="lg">{t('goals.title')}</Text>
          <ul className="text-lg md:text-2xl">
            <Text variant="list-item" size="lg">
              {t.rich('goals.point1', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </Text>
            <Text variant="list-item" size="lg">
              {t.rich('goals.point2', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </Text>
            <Text variant="list-item" size="lg">
              {t.rich('goals.point3', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </Text>
            <Text variant="list-item" size="lg">
              {t.rich('goals.point4', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </Text>
            <Text variant="list-item" size="lg">
              {t.rich('goals.point5', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </Text>
          </ul>
        </Container>
      </Section>
      
      <Section id="issues">
        <Container className="flex flex-col gap-8">
          <Text variant="h2" size="lg">{t('issues.title')}</Text>
          <ul>
            <Text variant="list-item" size="lg">
              {t.rich('issues.point1', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </Text>
            <Text variant="list-item" size="lg">
              {t.rich('issues.point2', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </Text>
            <Text variant="list-item" size="lg">
              {t.rich('issues.point3', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </Text>
            <Text variant="list-item" size="lg">
              {t.rich('issues.point4', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </Text>
          </ul>
        </Container>
      </Section>

      <Section id="why">
        <Container className="flex flex-col gap-8">
          <Text variant="h2" size="lg">{t('why.title')}</Text>
          <ul>
            <Text variant="list-item" size="lg">
              {t.rich('why.point1', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </Text>
            <Text variant="list-item" size="lg">
              {t.rich('why.point2', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </Text>
            <Text variant="list-item" size="lg">
              {t.rich('why.point3', {
                b: (chunks) => <span className="font-bold">{chunks}</span>
              })}
            </Text>
          </ul>
        </Container>
      </Section>
      
      <Section id="faq">
        <Container className="flex flex-col gap-8 pb-16">
          <Text variant="h2" size="lg">{t('faq.title')}</Text>
          <Accordion />
        </Container>
      </Section>
    </main>
  )
}
