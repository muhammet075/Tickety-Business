import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/footer.module.css";
import Logo from "@/assets/logo/tickety-logo.svg"
import instagramIco from "@/assets/icons/instagram-gray.svg";
import linkedinIco from "@/assets/icons/linkedin-gray.svg";
import facebookIco from "@/assets/icons/facebook-gray.svg";
import twitterIco from "@/assets/icons/twitter-gray.svg";
import appStoreButton from "@/assets/icons/appstorebutton.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <section>
            <h2>Download the <span>Tickety</span> app now!</h2>
            <p>With a user-friendly interface and advanced features, managing your event tickets has never been easier.</p>
            <Link href="/tickety-app"><Image src={appStoreButton} alt="Download on the App Store Button"/></Link>
        </section>
        
        <section>
            <div>
                <div>
                    <Link href="/"><Image src={Logo} alt="Logo of Tickety"/></Link>
                    <ul>
                        <li><Link target="_blank" href="https://www.instagram.com/ticketytickets"><Image src={instagramIco} alt="Instagram Logo"/></Link></li>
                        <li><Link target="_blank" href="https://www.linkedin.com/company/tickety2023"><Image src={linkedinIco} alt="Linkedin Logo"/></Link></li>
                        {/* <li><Link href="/"><Image src={facebookIco} alt="Facebook Logo"/></Link></li> */}
                        {/* <li><Link href="/"><Image src={twitterIco} alt="Twitter Logo"/></Link></li> */}
                    </ul>
                </div>

                <div>
                    <h3>Our Company</h3>
                    <ul>
                        <li><Link href="/order-tickets">Order Tickets</Link></li>
                        <li><Link href="/tickety-app">Tickety App</Link></li>
                        <li><Link href="/#about">About</Link></li>
                        <li><Link href="/#partners">Partners</Link></li>
                    </ul>
                </div>

                <div>
                    <h3>Browser By</h3>
                    <ul>
                        <li><Link href="/">Comming soon</Link></li>
                        <li><Link href="/">Comming soon</Link></li>
                        <li><Link href="/">Comming soon</Link></li>
                        <li><Link href="/">Comming soon</Link></li>
                    </ul>
                </div>

                <div>
                    <h3>Helpful Links</h3>
                    <ul>
                        <li><Link href="/">Comming soon</Link></li>
                        <li><Link href="/">Comming soon</Link></li>
                        <li><Link href="/">Comming soon</Link></li>
                        <li><Link href="/">Comming soon</Link></li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <p>© 2023 Tickety. All rights reserved.</p>
            <div>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/cookie-policy">Cookie Policy</Link>
                <Link href="/terms">Terms</Link>
                <Link target="_blank" href="/sitemap.xml">Site map</Link>
            </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
