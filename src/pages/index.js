import { useEffect } from "react";
import Head from "next/head";
import Hero from "@/components/hero";
import About from "@/components/about";
import Partners from "@/components/partners";

export default function Home() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Tickety</title>
          <meta name="description" content="The official website of the Tickety App"/>
          <meta name="og:description" content="The official website of the Tickety App"/>
          <meta name="keywords" content="Tickety, tickets, Tickety App"/>
          <meta property="og:url" content="https://www.tickety.com/"/>
          <meta property="og:title" content="Tickety"/>
      </Head>

      <Hero/>
      <About/>
      <Partners/>
      
    </>
  );
}
