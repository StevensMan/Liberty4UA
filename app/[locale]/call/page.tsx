'use client'

import { Form } from './_components'
import { Section, Container, Text } from '@/app/_components'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import PhoneIcon from '@mui/icons-material/Phone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import Image from 'next/image'

export default function CallPage() {
  return (
    <>
      {/* Hero Section */}
      <Section id="call-hero" className="relative pt-20 pb-0 bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark opacity-90 z-0"></div>
        <Image
          src="/header-bg-1.jpg"
          alt="Background"
          fill
          className="object-cover object-center mix-blend-overlay opacity-30"
          sizes="100vw"
        />
        <Container className="relative z-10 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Text 
              variant="h1" 
              size="lg" 
              className="mb-6 text-balance animate-fade-in"
            >
              Contact Your Representatives
            </Text>
            <Text 
              variant="p" 
              size="lg" 
              className="mb-8 text-balance text-white/90 animate-[fade_0.5s_ease-in-out_0.2s_both]"
            >
              Make your voice heard by calling your elected officials. A personal call is one of the most effective ways to influence policy decisions.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Form Section */}
      <Section id="form" className="bg-white py-16">
        <Container className="flex flex-col items-center justify-center gap-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-2 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <PhoneIcon fontSize="medium" />
              </div>
            </div>
            <Text 
              variant="h2" 
              size="lg" 
              className="mb-4 text-primary"
            >
              Find Your Representatives
            </Text>
            <Text 
              variant="p" 
              size="md" 
              className="text-gray-600"
            >
              Enter your address below to find your Representatives and Senators. You can also{' '}
              <a
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                href="https://actionnetwork.org/letters/fund-ukraines-military-end-wasteful-aid"
                target="_blank"
                rel="noopener noreferrer"
              >
                write a letter
                <KeyboardArrowRightIcon fontSize="small" />
              </a>{' '}
              if you prefer.
            </Text>
          </div>
          
          <div className="w-full max-w-xl rounded-xl bg-gray-50 p-6 shadow-sm">
            <Form />
          </div>
        </Container>
      </Section>

      {/* Sample Script Section */}
      <Section id="sample-text" className="bg-gray-50 py-16">
        <Container className="flex flex-col gap-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-2 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-primary">
                <MailOutlineIcon fontSize="medium" />
              </div>
            </div>
            <Text 
              variant="h2" 
              size="lg" 
              className="mb-4 text-primary"
            >
              Sample Call Script
            </Text>
            <Text 
              variant="p" 
              size="md" 
              className="text-gray-600"
            >
              Use this script as a guide when calling your representatives. Feel free to personalize it with your own thoughts and experiences.
            </Text>
          </div>
          
          <div className="mx-auto w-full max-w-3xl rounded-xl bg-white p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-gray-700 flex flex-col gap-4">
              <p className="lead font-medium text-gray-900">
                &quot;I am calling to draw your attention to critical concerns about
                the effectiveness of U.S. assistance to Ukraine and to urge a
                reassessment of how funds are allocated to better support
                Ukraine&apos;s defense and long-term stability.
              </p>
              
              <p>
                Our organization Liberty for Ukraine strives to ensure that American aid is used in a
                way that directly strengthens Ukraine&apos;s ability to resist
                aggression and promote genuine democratic resilience.
              </p>
              
              <p>
                Ending support
                for politicized media projects and shutting down USAGM programs such
                as Voice of America and Radio Liberty Europe — U.S. funds should not be used to
                support media programs that engage in biased storytelling or partisan
                propaganda. Instead, funding should promote authentic, independent
                journalism that reinforces democratic values.
              </p>
              
              <p>
                Stop financing the
                Ukrainian government, anti-corruption programs and humanitarian aid,
                which are often the subject of money laundering and corruption schemes
                in Ukraine.
              </p>
              
              <p>
                Reallocation of USAID funding — the proposed $482 million
                in 2025 should be redirected to strengthening Ukraine&apos;s military
                capabilities, rather than ineffective programs.
              </p>
              
              <p>
                Refrain from resuming
                civilian support programs such as USAID or USAGM, and ensure that
                military assistance is provided exclusively in the form of material
                resources, in physical form, in order to make possible embezzlement
                more difficult.
              </p>
              
              <p>
                Ensuring transparency and accountability — every
                dollar sent to Ukraine must be properly accounted for and contribute
                to its ability to resist Russian aggression. Stricter oversight and
                effective aid distribution will ensure that American aid truly
                benefits Ukraine&apos;s security and stability.
              </p>
              
              <p>
                A Russian victory in
                Ukraine not only would be catastrophic for the Ukrainian people but
                also would embolden further authoritarian aggression, posing security
                risks to the United States and our allies. The strategic redirection
                of U.S. civilian aid can help prevent such an outcome by making
                Ukraine more self-reliant and able to defend itself.
              </p>
              
              <p className="font-medium text-gray-900">
                I strongly
                recommend that you consider advocating for these necessary changes in
                the distribution of aid to Ukraine to ensure that American support is
                used effectively. Thank you for your time and dedication to this
                important issue. I would be glad to have the opportunity to discuss
                this issue in more detail and provide additional information.&quot;
              </p>
            </div>
          </div>
          
          <div className="mx-auto mt-4 text-center">
            <Text 
              variant="p" 
              size="sm" 
              className="text-gray-500"
            >
              Remember: Be polite, concise, and specific about what actions you want your representative to take.
            </Text>
          </div>
        </Container>
      </Section>
    </>
  )
}
