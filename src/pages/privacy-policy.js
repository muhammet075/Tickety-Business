import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import chevronLeft from '@/assets/icons/chevron-left.svg';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
  }, []);



  return (
    <>
      <Head>
        <title>Tickety | Privacy Policy</title>
        <meta name="description" content="This is the privacy policy page of Tickety."/>
        <meta name="og:description" content="This is the privacy policy page of Tickety."/>
        <meta property="og:url" content="https://www.tickety.com/privacy-policy/"/>
        <meta property="og:title" content="Tickety | Privacy Policy"/>
      </Head>
      <div className="pageheader">
        <div>
          <h1>Privacy Policy</h1>
          <Link href="/"><Image src={chevronLeft} alt="Chevron Left Icon" /></Link>
        </div>
      </div>

      <div class="pagecontent">
  <div>
    <p><b>Effective Date: 8 April 2024.</b></p>
    <br/>
    <p>At Tickety.com, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our website.</p>

    <section>
      <h2>1. Information We Collect</h2>
      <p>Personal Information: When you use Tickety.com to order tickets or submit inquiries, we may collect personal information such as your name, email address, phone number, and billing details.
      <br/><br/>
      Usage Data: We automatically collect certain information about your device and usage of Tickety.com, including your IP address, browser type, pages visited, and duration of visit.</p>
    </section>
    <section>
      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to process ticket orders, respond to inquiries, and provide customer support.
      <br/><br/>
      Your personal information may also be used for marketing purposes, such as sending promotional offers or newsletters. You can opt out of these communications at any time.</p>
    </section>
    <section>
      <h2>3. Data Security</h2>
      <p>We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
      <br/><br/>
      However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
    </section>
    <section>
      <h2>4. Sharing of Information</h2>
      <p>We may share your personal information with trusted third parties who assist us in providing services to you, such as payment processors or marketing partners.
      <br/><br/>
      We do not sell or rent your personal information to third parties for their marketing purposes.</p>
    </section>
    <section>
      <h2>5. Your Rights</h2>
      <p>You have the right to access, correct, or delete your personal information stored by Tickety.com. You may also request to receive a copy of your data in a commonly used format.
      <br/><br/>
      If you have any questions or concerns about your privacy rights or our handling of your personal information, please contact us.</p>
    </section>
    <section>
      <h2>6. Changes to This Policy</h2>
      <p>We reserve the right to update this Privacy Policy as necessary to reflect changes in our practices or for other operational, legal, or regulatory reasons.
      <br/><br/>
      We will notify you of any material changes to this policy by posting the updated version on Tickety.com.</p>
    </section>
    <section>
      <h2>7. Contact Us</h2>
      <p>If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at info @ tickety.com.
      <br/><br/>
      By using Tickety.com, you consent to the collection and use of your personal information as described in this Privacy Policy.
      <br/><br/>
      Thank you for trusting Tickety.com with your information.</p>
    </section>
  </div>
</div>

    </>
  );
}
