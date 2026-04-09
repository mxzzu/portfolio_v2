"use client";

import Image from "next/image";
import styles from "./header.module.css";
import Separator from "@/app/components/Separator";
import TextType from "@/app/components/TextType";
import { useEffect, useState } from "react";

export default function Header() {
  const [numbers, setNumbers] = useState<number[]>([]);

  const text = "MAZZURANA RICCARDO";
  const typingSpeed = 125;

  useEffect(() => {
    const generated = Array.from({ length: 11 }, () =>
      Math.floor(Math.random() * 10),
    );
    setNumbers(generated);
  }, []);

  return (
    <header>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <Image src="/logo.webp" alt="mazzu logo" width={3038} height={580} />
        </div>

        <div className="flex items-center flex-col gap-(--spacing-gap-8)">
          <h2>Software developer</h2>
          <Separator className="p-0! w-4/5! h-(--padding) md:p-(--padding)! md:h-auto md:w-full!">
            <div className={`hidden! ${styles.headerSeparatorDiv} md:flex!`}>
              <h3>price: one great opportunity</h3>
              <h3>{new Date().toLocaleDateString()}</h3>
            </div>
          </Separator>
        </div>

        <div className={`hidden! ${styles.barCodeContainer} lg:flex! `}>
          <div className={styles.barCodeBarContainer}>
            {[...Array(15)].map((_, index) => (
              <div key={index} className={styles.barCodeBar} />
            ))}
          </div>
          <div className={styles.barCodeNumber}>
            {numbers.map((number, index) => (
              <p key={index}>{number}</p>
            ))}
            {/* {[...Array(11)].map((_, index) => (
              <p key={index}>{Math.floor(Math.random() * 10)}</p>
            ))} */}
          </div>
        </div>
      </div>

      {/* WEB TITLE */}
      <div className="relative hidden md:block">
        <h1 className="opacity-0 pointer-events-none select-none">{text}</h1>

        <div className="absolute top-0 left-0 w-full h-full">
          <TextType
            text={text}
            typingSpeed={typingSpeed}
            showCursor={false}
            as="h1"
            loop={false}
          />
        </div>
      </div>

      {/* MOBILE TITLE */}
      <div className="block md:hidden">
        <TextType
          text="Mazzurana"
          typingSpeed={typingSpeed}
          showCursor={false}
          as="h1"
          loop={false}
          className="surnameSmall"
        />
        <TextType
          text="Riccardo"
          typingSpeed={typingSpeed}
          showCursor={false}
          as="h1"
          loop={false}
          className="nameSmall"
          initialDelay={1150}
        />
      </div>

      <Separator />
    </header>
  );
}
