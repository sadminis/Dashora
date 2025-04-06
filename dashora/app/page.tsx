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
    <div className="grid items-center justify-items-center min-h-screen p-100 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid gap-[32px] items-center sm:items-start grid-cols-[repeat(4,minmax(200px,1fr))]">
        <RenderCards cards={cards} setCards={setCards} />
      </main>
      
      <footer className="row-start-2 flex gap-[24px] flex-wrap items-center justify-center">
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
