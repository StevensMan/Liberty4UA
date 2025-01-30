// import Image from "next/image";
import { Container } from "@/app/_components";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="relative z-50 h-[100px] w-full bg-transparent">
      {/* <Image
        className="object-cover object-center"
        src="/header-bg-1.jpg"
        alt="Background"
        fill
        priority
        sizes="100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-[#004080]/50" /> */}
      <Container className="relative flex h-full items-center justify-between">
        <Link href="/">
          {/* <Image
              src="/pun-logo-horizontal-light.svg"
              alt="Logo"
              width={300}
              height={62}
              className="xs:w-[250px] h-auto w-[200px] md:w-[300px]"
          /> */}
          <p className="text-2xl font-bold text-white">Liberty4UA</p>
        </Link>
      </Container>
    </header>
  );
};
