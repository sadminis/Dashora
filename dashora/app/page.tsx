"use client";

// Resources
import Image from "next/image";

// Components
import Card from "@/components/Card";
import AddNewCard from "@/components/AddNewCard";

// Hooks
import RenderCards from "@/hooks/RenderCards";
import InitCards from "@/hooks/InitCards";

// Packages
import { useState, useEffect } from "react";

export default function Home() {
  const [cards, setCards] = useState([]);
  console.log(Array.isArray(cards));

  useEffect(() => {
    InitCards(cards, setCards);
  }, []);

  return (
    <div className="grid items-center justify-items-center min-h-screen p-50 gap-5 sm:p-10 font-[family-name:var(--font-geist-sans)] grid-rows-[auto,1fr,auto]">
      <header className="flex items-center justify-center w-full h-full row-start-1">
        <h1 className="text-4xl font-bold">Dashora</h1>
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
