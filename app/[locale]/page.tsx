import { Accordion, Container, Section, LinkAsButton, Text } from '@/app/_components'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { routes } from '@/lib/routes'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Section id="hero" className="relative mt-0 min-h-screen pt-20 text-white">
        <Image
          src="/hero-bkg.jpg"
          alt="Background"
          fill
          className="object-cover object-[60%] brightness-[0.85] sm:object-center"
          priority={true}
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/80" />
        <Container className="relative z-10 flex h-full flex-col justify-center gap-8 py-16 md:py-24">
          <div className="animate-fade-in">
            <Text 
              variant="h1" 
              size="lg" 
              className="max-w-3xl text-balance leading-tight"
            >
              {t('title')}
            </Text>
          </div>
          
          <div className="animate-[fade_0.5s_ease-in-out_0.2s_both]">
            <Text 
              variant="p" 
              size="lg" 
              className="max-w-2xl text-balance text-white/90"
            >
              {t('subtitle')}
            </Text>
          </div>
          
          <div className="card-actions mt-4 flex flex-wrap justify-start gap-4 animate-[fade_0.5s_ease-in-out_0.4s_both]">
            <LinkAsButton 
              href={routes.call}
              className="btn-primary btn-lg gap-2 rounded-full border-2 border-white/20 px-8 shadow-lg hover:translate-y-[-2px] hover:shadow-xl"
            >
              {t('call.linkText')}
              <KeyboardArrowRightIcon />
            </LinkAsButton>
            <LinkAsButton
              target="_blank"
              href={'https://actionnetwork.org/letters/fund-ukraines-military-end-wasteful-aid'}
              className="btn-secondary btn-lg gap-2 rounded-full border-2 border-white/20 px-8 shadow-lg hover:translate-y-[-2px] hover:shadow-xl"
            >
              {t('letter.linkText')}
              <KeyboardArrowRightIcon />
            </LinkAsButton>
          </div>
          
          <div className="mt-8 flex flex-col items-start gap-4 animate-[fade_0.5s_ease-in-out_0.6s_both]">
            <Text variant="p" size="lg" bold className="text-white">{t('learnMore')}</Text>
            <a
              href="/2025.02.24_ReportForCongressmen.pdf"
              target="_blank"
              className="group flex items-center gap-3 rounded-lg bg-white/10 px-6 py-4 text-lg text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-lg md:text-xl"
            >
              <DownloadForOfflineIcon className="text-secondary text-2xl group-hover:animate-bounce" />
              <div className="flex flex-row items-baseline gap-2">
                {t('downloadReport')}
                <span className="text-sm opacity-70">1.1 MB</span>
              </div>
            </a>
          </div>
        </Container>
      </Section>
      
      {/* About Us Section */}
      <Section id="about" className="bg-white py-20">
        <Container className="flex flex-col gap-8">
          <div className="mx-auto max-w-3xl text-center">
            <Text 
              variant="h2" 
              size="lg" 
              className="mb-6 text-primary"
            >
              {t('aboutUs.title')}
            </Text>
            <Text 
              variant="p" 
              size="lg" 
              className="text-pretty text-gray-700"
            >
              {t.rich('aboutUs.text', {
                b: (chunks) => <span className="font-bold text-primary">{chunks}</span>
              })}
            </Text>
          </div>
        </Container>
      </Section>
      
      {/* Mission Section */}
      <Section id="mission" className="bg-gray-50 py-20">
        <Container className="flex flex-col gap-8">
          <div className="mx-auto max-w-3xl">
            <Text 
              variant="h2" 
              size="lg" 
              className="mb-6 text-center text-primary"
            >
              {t('mission.title')}
            </Text>
            <div className="rounded-xl bg-white p-8 shadow-md">
              <Text 
                variant="p" 
                size="lg" 
                className="text-pretty text-gray-700"
              >
                {t.rich('mission.text', {
                  b: (chunks) => <span className="font-bold text-primary">{chunks}</span>
                })}
              </Text>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Goals Section */}
      <Section id="goals" className="bg-white py-20">
        <Container className="flex flex-col gap-8">
          <Text 
            variant="h2" 
            size="lg" 
            className="mb-6 text-center text-primary"
          >
            {t('goals.title')}
          </Text>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="card border-t-4 border-t-secondary p-6 transition-all hover:shadow-lg">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                  <CheckCircleOutlineIcon />
                </div>
                <Text variant="p" size="md" className="text-gray-700">
                  {t.rich(`goals.point${i}`, {
                    b: (chunks) => <span className="font-bold text-primary">{chunks}</span>
                  })}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Issues Section */}
      <Section id="issues" className="bg-gray-50 py-20">
        <Container className="flex flex-col gap-8">
          <Text 
            variant="h2" 
            size="lg" 
            className="mb-6 text-center text-primary"
          >
            {t('issues.title')}
          </Text>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="card border-l-4 border-l-accent p-6 transition-all hover:shadow-lg">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <ErrorOutlineIcon />
                </div>
                <Text variant="p" size="md" className="text-gray-700">
                  {t.rich(`issues.point${i}`, {
                    b: (chunks) => <span className="font-bold text-accent">{chunks}</span>
                  })}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Section */}
      <Section id="why" className="bg-primary py-20 text-white">
        <Container className="flex flex-col gap-8">
          <Text 
            variant="h2" 
            size="lg" 
            className="mb-6 text-center text-white"
          >
            {t('why.title')}
          </Text>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                  <span className="font-bold">{i}</span>
                </div>
                <Text variant="p" size="md" className="text-white">
                  {t.rich(`why.point${i}`, {
                    b: (chunks) => <span className="font-bold text-secondary">{chunks}</span>
                  })}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* FAQ Section */}
      <Section id="faq" className="bg-white py-20">
        <Container className="flex flex-col gap-8">
          <div className="mx-auto max-w-3xl text-center">
            <Text 
              variant="h2" 
              size="lg" 
              className="mb-2 text-primary"
            >
              {t('faq.title')}
            </Text>
          </div>
          
          <div className="mx-auto w-full max-w-3xl">
            <Accordion />
          </div>
          
        </Container>
      </Section>
      
      {/* CTA Section */}
      <Section id="cta" className="bg-gradient-to-r from-primary to-primary-dark py-16 text-white">
        <Container className="flex flex-col items-center gap-8 text-center">
          <Text 
            variant="h2" 
            size="lg" 
            className="max-w-2xl text-balance"
          >
            {t('cta.title')}
          </Text>
          
          <Text 
            variant="p" 
            size="md" 
            className="max-w-2xl text-white/90"
          >
              {t('cta.description')}
          </Text>
          
          <div className="mt-4 flex flex-wrap justify-center gap-4">
          <LinkAsButton 
              href={routes.call}
              className="btn-primary btn-lg gap-2 rounded-full border-2 border-white/20 px-8 shadow-lg hover:translate-y-[-2px] hover:shadow-xl"
            >
              {t('call.linkText')}
              <KeyboardArrowRightIcon />
            </LinkAsButton>
            <LinkAsButton
              target="_blank"
              href={'https://actionnetwork.org/letters/fund-ukraines-military-end-wasteful-aid'}
              className="btn-secondary btn-lg gap-2 rounded-full border-2 border-white/20 px-8 shadow-lg hover:translate-y-[-2px] hover:shadow-xl"
            >
              {t('letter.linkText')}
              <KeyboardArrowRightIcon />
            </LinkAsButton>
          </div>
        </Container>
      </Section>
    </div>
  )
}
