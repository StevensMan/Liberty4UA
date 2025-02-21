'use client'

import { useActionState } from 'react'
import Form from 'next/form'
import { Official } from './_lib/types'
import { getCivicInfo } from './_lib/action'
import { SubmitButton, OfficialCard } from './_components'
import { Section, Container } from '@/app/_components'

export default function CallPage() {
  const [state, formAction] = useActionState(getCivicInfo, null)

  return (
    <Section>
      <Container className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-4xl font-bold">
          Please enter your address in the form below to find your
          Representatives
        </h1>
        <p className="text-center text-lg">
          A Call is allways better, however you can also{' '}
          <a
            className="text-blue-500"
            href="https://actionnetwork.org/letters/fund-ukraines-military-end-wasteful-aid"
          >
            Write
          </a>{' '}
          to your Representative and Senators.
        </p>
        <Form
          action={formAction}
          className="grid max-w-2xl grid-cols-1 items-end gap-4 md:grid-cols-2"
        >
          <div className="w-full">
            <label htmlFor="address" className="block">
              Street Address:
            </label>
            <input
              type="text"
              placeholder="Address"
              className="input w-full"
              id="address"
              name="address"
              style={{ color: 'white' }}
            />
          </div>
          <div className="w-full">
            <label htmlFor="city" className="block">
              City:
            </label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="City"
              className="input w-full text-white"
              style={{ color: 'white' }}
            />
          </div>
          <div className="w-full">
            <label htmlFor="zip" className="block">
              ZIP Code:
            </label>
            <input
              id="zip"
              name="zip"
              type="text"
              placeholder="ZIP Code"
              className="input w-full text-white"
              style={{ color: 'white' }}
            />
          </div>

          <SubmitButton />
        </Form>

        {state?.error && <div className="mt-4 text-red-500">{state.error}</div>}
        {state?.data?.officials && (
          <div className="mt-8 space-y-6">
            <h2 className="mb-4 text-2xl font-bold">Found Officials</h2>
            {state.data.officials.map((official: Official) => (
              <OfficialCard key={official.uniqueId} official={official} />
            ))}
          </div>
        )}
      </Container>
      <Container className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold">
          Sample text for calling your Representative and Senators
        </h2>
        <p className="text-lg">
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
        </p>
      </Container>
    </Section>
  )
}
