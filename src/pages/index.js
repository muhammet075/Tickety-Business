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
          <meta name="description" content="Tickety.com"/>
          <meta name="og:description" content="Tickety.com"/>
          <meta property="og:url" content="https://www.tickety.com/"/>
          <meta property="og:title" content="Tickety"/>
      </Head>

      <Hero/>
      <About/>
      <Partners/>
      
    </>
  );
}
