"use client";

// Resources
import Image from "next/image";

// Components

// Hooks
import RenderCards from "@/hooks/RenderCards";
import InitCards from "@/hooks/InitCards";

// Packages
import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    InitCards(cards, setCards);
  }, []);

  return (
    <div className="grid items-center justify-items-center min-h-screen" style={{ gridTemplateRows: "auto 1fr auto", padding: "32px" }}>
      <header className="flex items-center justify-center w-full h-full row-start-1">
        <Heading as="h1" size={["xl", "3xl", "5xl"]} className="text-center" color={"#4A5568"} mt={10} mb={4}>
          Dashora
        </Heading>
      </header>

      <main className="gap-[16px] row-start-2 items-center sm:items-start w-full h-full">
        <RenderCards cards={cards} setCards={setCards} />
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
