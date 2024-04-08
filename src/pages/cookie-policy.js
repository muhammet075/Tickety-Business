import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import chevronLeft from '@/assets/icons/chevron-left.svg';
import { useEffect } from 'react';

export default function CookiePolicy() {
  useEffect(() => {
  }, []);



  return (
    <>
    <Head>
        <title>Tickety | Cookie Policy</title>
        <meta name="description" content="This is the cookie policy page of Tickety."/>
        <meta name="og:description" content="This is the cookie policy page of Tickety."/>
        <meta property="og:url" content="https://www.tickety.com/cookie-policy/"/>
        <meta property="og:title" content="Tickety | Cookie Policy"/>
      </Head>
      <div className="pageheader">
        <div>
          <h1>Cookie Policy</h1>
          <Link href="/"><Image src={chevronLeft} alt="Chevron Left Icon" /></Link>
        </div>
      </div>

      <div className="pagecontent">
        <div>
            <p><b>Effective Date: 8 April 2024.</b></p>
            <br/>
            <p>At Tickety.com, we value your privacy and strive to provide a transparent experience when you visit our website. This Cookie Policy outlines the use of cookies on Tickety.com and how they enhance your browsing experience.</p>

            <section>
                <h2>1. What are Cookies?</h2>
                <p>Cookies are small pieces of data stored on your device (computer, smartphone, or tablet) when you visit a website. They serve various purposes, including improving your browsing experience and providing website owners with valuable insights into site usage.</p>
            </section>
            <section>
                <h2>2. Types of Cookies We Use</h2>
                <p>Essential Cookies: These cookies are necessary for the operation of Tickety.com. They enable you to navigate the website and use its features, such as accessing secure areas and placing ticket orders.
                <br/><br/>
                Analytical/Performance Cookies: These cookies help us understand how visitors interact with Tickety.com by collecting information anonymously. We use this data to enhance the functionality of the website and improve your user experience.
                <br/><br/>
                Functionality Cookies: These cookies allow Tickety.com to remember choices you make (such as your language preferences) and provide enhanced features tailored to your needs.</p>
            </section>
            <section>
                <h2>3. How We Use Cookies</h2>
                <p>Tickety.com uses cookies primarily to:</p>
                <ul>
                    <li>Ensure the smooth operation of our website.</li>
                    <li>Analyze website traffic and usage patterns.</li>
                    <li>Customize your browsing experience based on your preferences.</li>
                    <li>Provide personalized offers and recommendations.</li>
                </ul>
            </section>
            <section>
                <h2>4. Your Cookie Choices</h2>
                <p>You have the option to accept or decline cookies when you visit Tickety.com. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, please note that disabling cookies may affect your experience on our website and limit certain features.</p>
            </section>
            <section>
                <h2>5. Third-Party Cookies</h2>
                <p>We may also use third-party cookies, such as those from analytics providers, to gather information about your interactions with Tickety.com. These cookies are subject to the respective privacy policies of the third parties involved.</p>
            </section>
            <section>
                <h2>6. Updates to This Policy</h2>
                <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically for any updates.</p>
            </section>
            <section>
                <h2>7. Contact Us</h2>
                <p>If you have any questions or concerns about our Cookie Policy or the use of cookies on Tickety.com, please contact us at info @ tickety.com.
                <br/><br/>
                By continuing to use Tickety.com, you consent to the use of cookies as described in this policy.
                <br/><br/>
                Thank you for choosing Tickety.com. We appreciate your trust and are committed to safeguarding your privacy.</p>
            </section>
        </div>
      </div>
    </>
  );
}
