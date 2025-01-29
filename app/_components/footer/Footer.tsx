import { Container, Section } from "@/app/_components";
import Image from "next/image";
import Link from "next/link";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
  return (
    <footer className="mt-auto flex min-h-[100px] w-full items-center bg-[#004080] font-bold text-[#b7b7b7]">
      <Section>
        <Container className="flex items-center justify-between">
          <Image
            src="/pun-logo-horizontal-dark.svg"
            alt="Logo"
            width={232}
            height={37}
            className="h-auto w-auto"
          />
          <div className="flex flex-col gap-2">
            <Link className="block" href="mailto:contact@protectukrainenow.org">
              contact@protectukrainenow.org
            </Link>
            <SocialIcons />
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
          </div>
        </Container>
      </Section>
    </footer>
  );
};
