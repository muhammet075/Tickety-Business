import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/hero.module.css";
import Mockup1 from "@/assets/mockups/mockup1.png";
import Mockup2 from "@/assets/mockups/mockup2.png";
import Mockup3 from "@/assets/mockups/mockup3.png";
import appStoreButton from "@/assets/icons/appstorebutton.svg";

function Hero() {

    useEffect(() => {
        AOS.init();
    }, []);

    return(      
        <div className={styles.hero}>  
            <div>
                <section>
                    <h1>Tickety, the app for<br/> all your tickets.</h1>
                    <p>With a user-friendly interface and advanced features, managing your event tickets has never been easier.</p>
                    <Link href="#" target="_blank"><Image src={appStoreButton} alt="Download on the App Store Button"/></Link>
                </section>
            </div>
            <div>
                <Image src={Mockup2} alt="" data-aos="fade-up" data-aos-delay="200"/>
                <Image src={Mockup1} alt="" data-aos="fade-up" />
                <Image src={Mockup3} alt="" data-aos="fade-up" data-aos-delay="200"/>
            </div>
        </div>
    )
}
  
export default Hero;