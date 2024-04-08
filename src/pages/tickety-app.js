import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import chevronLeft from '@/assets/icons/chevron-left.svg';
import emailjs from "@emailjs/browser";
import { useEffect } from 'react';

export default function TicketyApp() {
  useEffect(() => {
  }, []);



  return (
    <>
        <Head>
        <title>Tickety | The new App</title>
        <meta name="description" content="Comming soon..."/>
        <meta name="og:description" content="Comming soon..."/>
        <meta property="og:url" content="https://www.tickety.com/tickety-app/"/>
        <meta property="og:title" content="Tickety | The new App"/>
      </Head>
      
      <div className="pageheader">
        <div>
          <h1>Tickety App</h1>
          <Link href="/"><Image src={chevronLeft} alt="Chevron Left Icon" /></Link>
        </div>
      </div>

      <div className="pagecontent">
        <div>
            <br/><h2>Comming soon...</h2>
        </div>
      </div>
    </>
  );
}
