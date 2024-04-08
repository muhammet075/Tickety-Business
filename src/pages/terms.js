import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import chevronLeft from '@/assets/icons/chevron-left.svg';
import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
  }, []);



  return (
    <>
      <Head>
        <title>Tickety | Terms</title>
        <meta name="description" content="This is the Terms page of Tickety."/>
        <meta name="og:description" content="This is the Terms page of Tickety."/>
        <meta property="og:url" content="https://www.tickety.com/terms/"/>
        <meta property="og:title" content="Tickety | Terms"/>
      </Head>
      <div className="pageheader">
        <div>
          <h1>Terms</h1>
          <Link href="/"><Image src={chevronLeft} alt="Chevron Left Icon" /></Link>
        </div>
      </div>

      <div class="pagecontent">
  <div>
    <p><b>Effective Date: 8 April 2024.</b></p>
    <br/>
    <p>Welcome to Tickety.com. By using our website, you agree to comply with these Terms and Conditions. Please read them carefully.</p>

    <section>
      <h2>1. Ticket Orders</h2>
      <p>When you place an order for tickets on Tickety.com, you agree to provide accurate and complete information, including your name, email address, and payment details.
      <br/><br/>
      All ticket orders are subject to availability and confirmation by Tickety.com.</p>
    </section>
    <section>
      <h2>2. Pricing and Payment</h2>
      <p>Prices for tickets displayed on Tickety.com are subject to change without notice.
      <br/><br/>
      Payment for ticket orders must be made in full at the time of purchase.</p>
    </section>
    <section>
      <h2>3. Cancellation and Refunds</h2>
      <p>Ticket orders may be subject to cancellation and refund policies determined by Tickety.com and/or the event organizers.
      <br/><br/>
      Refunds, if applicable, will be issued in accordance with our refund policy.</p>
    </section>
    <section>
      <h2>4. Intellectual Property</h2>
      <p>The content and materials on Tickety.com, including text, graphics, logos, and images, are the property of Tickety.com and are protected by copyright and other intellectual property laws.
      <br/><br/>
      You may not reproduce, distribute, or modify any content from Tickety.com without our prior written consent.</p>
    </section>
    <section>
      <h2>5. Limitation of Liability</h2>
      <p>Tickety.com shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website or the purchase of tickets.
      <br/><br/>
      In no event shall Tickety.com's total liability exceed the amount paid by you for the tickets purchased.</p>
    </section>
    <section>
      <h2>6. Governing Law</h2>
      <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of the state of Connecticut.
      <br/><br/>
      Any disputes arising out of or related to these terms shall be resolved exclusively by the courts of the state of Connecticut.</p>
    </section>
    <section>
      <h2>7. Changes to These Terms</h2>
      <p>We reserve the right to update or modify these Terms and Conditions at any time without prior notice.
      <br/><br/>
      Your continued use of Tickety.com after any changes to these terms constitutes acceptance of the updated terms.</p>
    </section>
    <section>
      <h2>8. Contact Us</h2>
      <p>If you have any questions or concerns about these Terms and Conditions, please contact us at info @ tickety.com.
      <br/><br/>
      Thank you for using Tickety.com. We hope you enjoy your experience!</p>
    </section>
  </div>
</div>

    </>
  );
}
