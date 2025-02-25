'use client'

import { Form } from './_components'
import { Section, Container, Text } from '@/app/_components'

export default function CallPage() {
  return (
    <>
    <Section id="form">
      <Container className="flex flex-col items-center justify-center gap-4 pt-16">
      <Text variant="h2" size="lg" className="text-center">
        Please enter your address in the form below to find your
        Representatives
      </Text>
      <Text variant="p" size="lg" className="text-center">
        A Call is allways better, however you can also{' '}
        <a
          className="text-blue-500"
          href="https://actionnetwork.org/letters/fund-ukraines-military-end-wasteful-aid"
        >
          Write
        </a>{' '}
        to your Representative and Senators.
      </Text>
        <Form />
      </Container>
      </ Section>

      <Section id="sample-text">
        <Container className="flex flex-col gap-4 mt-8 pb-16">
        <Text variant="h2" size="md" className="text-balance">
          Sample text for calling your Representative and Senators
        </Text>
        <Text variant="p" size="md">
          &quot;I am calling to draw your attention to critical concerns about
          the effectiveness of U.S. assistance to Ukraine and to urge a
          reassessment of how funds are allocated to better support
          Ukraine&apos;s defense and long-term stability. Our organization
          Liberty for Ukraine strives to ensure that American aid is used in a
          way that directly strengthens Ukraine&apos;s ability to resist
          aggression and promote genuine democratic resilience. Ending support
          for politicized media projects and shutting down USAGM programs such
          as Voice of America and shutting down USAGM programs such as Voice of
          America and Radio Liberty Europe — U.S. funds should not be used to
          support media programs that engage in biased storytelling or partisan
          propaganda. Instead, funding should promote authentic, independent
          journalism that reinforces democratic values. Stop financing the
          Ukrainian government, anti-corruption programs and humanitarian aid,
          which are often the subject of money laundering and corruption schemes
          in Ukraine. Reallocation of USAID funding — the proposed $482 million
          in 2025 should be redirected to strengthening Ukraine&apos;s military
          capabilities, rather than ineffective programs. Refrain from resuming
          civilian support programs such as USAID or USAGM, and ensure that
          military assistance is provided exclusively in the form of material
          resources, in physical form, in order to make possible embezzlement
          more difficult. Ensuring transparency and accountability — every
          dollar sent to Ukraine must be properly accounted for and contribute
          to its ability to resist Russian aggression. Stricter oversight and
          effective aid distribution will ensure that American aid truly
          benefits Ukraine&apos;s security and stability. A Russian victory in
          Ukraine not only would be catastrophic for the Ukrainian people but
          also would embolden further authoritarian aggression, posing security
          risks to the United States and our allies. The strategic redirection
          of U.S. civilian aid can help prevent such an outcome by making
          Ukraine more self-reliant and able to defend itself. I strongly
          recommend that you consider advocating for these necessary changes in
          the distribution of aid to Ukraine to ensure that American support is
          used effectively. Thank you for your time and dedication to this
          important issue. I would be glad to have the opportunity to discuss
          this issue in more detail and provide additional information.&quot;
        </Text>
      </Container>
      </Section>
    </>
  )
}
