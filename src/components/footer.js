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
            <Link href="#" target="_blank"><Image src={appStoreButton} alt="Download on the App Store Button" data-aos="fade-up"/></Link>
        </section>
        
        <section>
            <div>
                <div>
                    <Link href="/"><Image src={Logo} alt="Logo of Tickety"/></Link>
                    <ul>
                        <li><Link href="/"><Image src={instagramIco} alt="Instagram Logo"/></Link></li>
                        <li><Link href="/"><Image src={linkedinIco} alt="Linkedin Logo"/></Link></li>
                        <li><Link href="/"><Image src={facebookIco} alt="Facebook Logo"/></Link></li>
                        <li><Link href="/"><Image src={twitterIco} alt="Twitter Logo"/></Link></li>
                    </ul>
                </div>

                <div>
                    <h3>Our Company</h3>
                    <ul>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Partners</Link></li>
                        <li><Link href="/">Blog</Link></li>
                        <li><Link href="/">Privacy Policy</Link></li>
                        <li><Link href="/">Cookie Policy</Link></li>
                        <li><Link href="/">Terms</Link></li>
                    </ul>
                </div>

                <div>
                    <h3>Browser By</h3>
                    <ul>
                        <li><Link href="/">All Events</Link></li>
                        <li><Link href="/">NBA</Link></li>
                        <li><Link href="/">NBA</Link></li>
                        <li><Link href="/">NBA</Link></li>
                        <li><Link href="/">NBA</Link></li>
                        <li><Link href="/">NBA</Link></li>
                    </ul>
                </div>

                <div>
                    <h3>Helpful Links</h3>
                    <ul>
                        <li><Link href="/">Help/FAQ</Link></li>
                        <li><Link href="/">App Store</Link></li>
                        <li><Link href="/">Contact Us</Link></li>
                        <li><Link href="/">Gift Cards</Link></li>
                        <li><Link href="/">Careers</Link></li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <p>© 2023 Tickety. All rights reserved.</p>
            <div>
                <Link href="/">Privacy</Link>
                <Link href="/">Cookie</Link>
                <Link href="/">Terms</Link>
                <Link href="/">Site map</Link>
            </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
