import {
  Accordion,
  ButtonDownload,
  Container,
  Section
} from '@/app/_components'
import { routes } from '@/lib/routes'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
            Fund Ukraine&apos;s Military,
            <br />
            End Wasteful Aid
          </h1>
          <p className="text-balance text-lg md:text-2xl">
            Exposing Corruption and Bias to Prioritize Military Support
            <br /> and Secure Ukraine&apos;s Future.
          </p>
          <ButtonDownload />
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-6 pt-16">
          <h2 className="text-center text-4xl font-bold md:text-6xl">
            Mission:
          </h2>
          <p className="text-lg md:text-2xl">
            Our mission is to ensure that U.S. aid to Ukraine is used
            effectively to support its defense capabilities and long-term
            stability. Current programs are not achieving their goals and may
            even be counterproductive. We aim to{' '}
            <span className="font-bold">
              redirect funds from ineffective projects to the Ukrainian military
            </span>
            , enhancing its ability to defend the country from aggression.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-center text-4xl font-bold md:text-6xl">Goals:</h2>
          <ul className="list-inside list-disc text-lg md:text-2xl">
            <li>
              To <span className="font-bold">redirect the $482 million</span> in
              2025 USAID funding, and other funds, to directly strengthen the
              Ukrainian military .
            </li>
            <li>
              To{' '}
              <span className="font-bold">
                end funding for ineffective anti-corruption programs
              </span>{' '}
              that have not decreased corruption in Ukraine.
            </li>
            <li>
              To{' '}
              <span className="font-bold">end funding for media programs</span>{' '}
              that have demonstrated biased and partisan propaganda.
            </li>
            <li>
              To{' '}
              <span className="font-bold">
                promote transparency and accountability
              </span>{' '}
              in the allocation of US aid to Ukraine.
            </li>
            <li>
              To{' '}
              <span className="font-bold">
                prevent the spread of russian aggression
              </span>{' '}
              and protect the security interests of the United States and its
              allies. security interests of the United States and its allies.
            </li>
          </ul>
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-center text-4xl font-bold md:text-6xl">
            Issues:
          </h2>
          <ul className="list-inside list-disc text-lg md:text-2xl">
            <li>
              <span className="font-bold">
                Ineffective Anti-Corruption Efforts:
              </span>{' '}
              Despite U.S. support, corruption in Ukraine persists, with
              numerous scandals involving luxury car sales, military food
              procurement, and misuse of funds.
            </li>
            <li>
              <span className="font-bold">Biased Media Coverage:</span>{' '}
              U.S.-funded media outlets in Ukraine have been found to engage in
              one-sided propaganda, misrepresenting political figures and
              promoting partisan views, rather than objective reporting.
            </li>
            <li>
              <span className="font-bold">Misuse of Humanitarian Aid:</span>{' '}
              Significant amounts of humanitarian aid have been embezzled, with
              evidence of organized theft by high-ranking officials.
            </li>
            <li>
              <span className="font-bold">Human Rights Abuses:</span> There are
              credible reports of human rights abuses, including illegal
              detentions, torture, and beatings, within Ukrainian government
              institutions, and a lack of appropriate response from human rights
              organizations.
            </li>
          </ul>
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="flex w-full flex-col items-center justify-center gap-8 rounded-lg border-2 border-gray-600 p-8">
            <h2 className="text-center text-4xl font-bold md:text-6xl">
              Call to Congress
            </h2>
            <p className="text-lg md:text-2xl">???</p>
            <Link href={routes.call} className="w-full">
              <Button className="w-full">Call to Congress</Button>
            </Link>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8 rounded-lg border-2 border-gray-600 p-8">
            <h2 className="text-center text-4xl font-bold md:text-6xl">
              Letter to Congress
            </h2>
            <p className="text-lg md:text-2xl">???</p>
            <Link href={routes.letter} className="w-full">
              <Button className="w-full">Letter to Congress</Button>
            </Link>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-center text-4xl font-bold md:text-6xl">
            Why Redirecting Aid is Crucial:
          </h2>
          <ul className="list-inside list-disc text-lg md:text-2xl">
            <li>
              A russian victory in Ukraine would have far-reaching negative
              consequences. Russia could become emboldened to further expand its
              influence in other countries, increasing global tensions.
            </li>
            <li>
              The US must not appear weak on the international stage, which
              could encourage other adversarial nations.
            </li>
            <li>
              The current trajectory of US aid is not maximizing its intended
              impact. By prioritizing military support, the U.S. can help
              Ukraine secure its own future.
            </li>
          </ul>
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-8 pb-16">
          <h2 className="text-center text-4xl font-bold md:text-6xl">FAQ</h2>
          <Accordion />
        </Container>
      </Section>
    </main>
  )
}
