import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/about.module.css";
import Mockup1 from "@/assets/mockups/mockup1-min.png";
import Mockup2 from "@/assets/mockups/mockup2-min.png";
import Mockup3 from "@/assets/mockups/mockup3-min.png";
import Mockup4 from "@/assets/mockups/mockup4-min.png";
import Mockup5 from "@/assets/mockups/mockup5-min.png";

function About() {

    useEffect(() => {
    }, []);

    return(      
        <div className={styles.about} id="about">  
            <div>
                <h2>About us</h2>
                <p>Tickety was founded by a group of friends who were passionate about live events and frustrated with the ticket buying process. They saw an opportunity to create a better experience for customers, and Tickety was born. Today, we're proud to be a leading ticket provider, helping people across the country enjoy the events they love.</p>

                <div>
                    <div>
                        <section>
                            <Image src={Mockup4} alt="prototype" data-aos="fade-up"/>
                        </section>
                        <section>
                            <h3>Talk with K.A.I</h3>
                            <p>Say hi to K.A.I., your ticketing guru! This AI buddy makes snagging tickets a breeze, with style.</p>
                            <Link href="/tickety-app">Learn More</Link>
                        </section>
                    </div>
                    <div>
                        <section>
                            <Image src={Mockup5} alt="prototype" data-aos="fade-up"/>
                        </section>
                        <section>
                            <h3>Ticket results with AI</h3>
                            <p>K.A.I. swiftly delivers ticketing results tailored just for you, making the process seamless and hassle-free.</p>
                            <Link href="/tickety-app">Learn More</Link>
                        </section>
                    </div>
                    <div>
                        <section>
                            <Image src={Mockup2} alt="prototype" data-aos="fade-up"/>
                        </section>
                        <section>
                            <h3>Add tickets to your wallet</h3>
                            <p>Effortlessly add purchased tickets to your Wallet with K.A.I., ensuring smooth access to your events.</p>
                            <Link href="/tickety-app">Learn More</Link>
                        </section>
                    </div>
                    <div>
                        <section>
                            <Image src={Mockup1} alt="prototype" data-aos="fade-up"/>
                        </section>
                        <section>
                            <h3>Register and login with Apple ID</h3>
                            <p>Enjoy top-notch security with FaceID integration, ensuring safe access to your app using your AppleID.</p>
                            <Link href="/tickety-app">Learn More</Link>
                        </section>
                    </div>
                    <div>
                        <section>
                            <Image src={Mockup3} alt="prototype" data-aos="fade-up"/>
                        </section>
                        <section>
                            <h3>Select seats and pay secure</h3>
                            <p>Handpick your seats and breeze through secure payments with the futuristic combo of FaceID and Wallet magic!</p>
                            <Link href="/tickety-app">Learn More</Link>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    )
}
  
export default About;