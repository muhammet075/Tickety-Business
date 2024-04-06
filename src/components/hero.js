import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/hero.module.css";
import Mockup1 from "@/assets/mockups/mockup1-min.png";
import Mockup2 from "@/assets/mockups/mockup2-min.png";
import Mockup3 from "@/assets/mockups/mockup3-min.png";
import Mockup4 from "@/assets/mockups/mockup4-min.png";
import Mockup5 from "@/assets/mockups/mockup5-min.png";
import appStoreButton from "@/assets/icons/appstorebutton.svg";
import ParticlesContainer from "@/components/particlescontainer.js";

function Hero() {

    useEffect(() => {
        AOS.init();
    }, []);

    return(      
        <div className={styles.hero}> 
            <div>
            <ParticlesContainer/> 
                <section>
                    <h1>Launching soon:<br/> new Tickety App</h1>
                    <p>With a user-friendly interface and advanced features, managing your event tickets has never been easier.</p>
                    <section>
                        <Link href="/tickety-app"><Image src={appStoreButton} alt="Download on the App Store Button"/></Link>
                        <Link href="/order-tickets">Order Tickets Now</Link>
                    </section>
                </section>
            </div>
            <div>
                <Image src={Mockup5} alt="Mockup of the AI Chatbot on the Tickety app" data-aos="fade-up" data-aos-delay="200"/>
                <Image src={Mockup1} alt="Mockup of the login/register page on the Tickety app" data-aos="fade-up" />
                <Image src={Mockup4} alt="Mockup of the AI Chatbot on the Tickety app" data-aos="fade-up" data-aos-delay="200"/>
            </div>
        </div>
    )
}
  
export default Hero;