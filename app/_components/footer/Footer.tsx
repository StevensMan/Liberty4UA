import { Container, Section } from "@/app/_components";
import Image from "next/image";
import Link from "next/link";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
  return (
    <footer className="mt-auto flex min-h-[100px] w-full bg-[#004080] font-bold text-white md:items-center">
      <Section>
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Image
            src="/pun-logo-horizontal-dark.svg"
            alt="Logo"
            width={232}
            height={37}
            className="h-[37px] w-[232px]"
          />

          <div className="flex flex-col gap-2">
            <Link
              className="xs:text-base text-sm"
              href="mailto:contact@protectukrainenow.org"
            >
              contact@protectukrainenow.org
            </Link>
            <SocialIcons />
          </div>
          <div className="flex flex-col gap-2">
            <Link className="xs:text-base text-sm" href="/">
              Privacy Policy
            </Link>
            <Link className="xs:text-base text-sm" href="/">
              Terms of Service
            </Link>
          </div>
        </Container>
      </Section>
    </footer>
  );
};
