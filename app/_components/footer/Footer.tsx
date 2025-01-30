import { Container, Section } from "@/app/_components";
// import Image from "next/image";
import Link from "next/link";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <footer className="mt-auto flex min-h-[100px] w-full bg-[#004080] font-bold text-white md:items-center">
      <Section>
        <Container className="flex flex-col gap-6 md:flex-row md:justify-between">
          {/* <Image
            src="/pun-logo-horizontal-dark.svg"
            alt="Logo"
            width={232}
            height={37}
            className="h-[37px] w-[232px]"
          /> */}
          <p className="text-2xl font-bold">Liberty4UA</p>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold">Contact</h4>
            <Link
              className="flex items-center gap-2 text-sm xs:text-base"
              href="mailto:contact@liberty4ua.org"
            >
              <EmailIcon />
              contact@liberty4ua.org
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold">Partners</h4>
            <Link
              className="flex items-center gap-2 text-sm xs:text-base"
              href="https://protectukrainenow.org"
              target="_blank"
            >
              <LanguageIcon />
              Protect Ukraine Now
            </Link>
            <Link
              className="flex items-center gap-2 text-sm xs:text-base"
              href="https://www.youtube.com/@SergeyLubarsky"
              target="_blank"
            >
              <YouTubeIcon />
              Sergey Lubarsky
            </Link>
            <Link
              className="flex items-center gap-2 text-sm xs:text-base"
              href="https://t.me/SergeyLubarsky"
              target="_blank"
            >
              <TelegramIcon />
              Sergey Lubarsky
            </Link>
          </div>
        </Container>
      </Section>
    </footer>
  );
};
