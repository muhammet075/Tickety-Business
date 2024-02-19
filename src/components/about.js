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
                <h2 data-aos="fade-down">About us</h2>

                <div>
                    <div>
                        <section>
                            <Image src={Mockup4} alt="prototype"/>
                        </section>
                        <section>
                            <h3>Talk with K.A.I</h3>
                            <p>With a user-friendly interface and advanced features, managing your event tickets has never been easier. With a user-friendly interface and advanced features, managing your event tickets has never been easier.</p>
                            <Link href="">Learn More</Link>
                        </section>
                    </div>
                    <div>
                        <section>
                            <Image src={Mockup5} alt="prototype" data-aos="fade-up"/>
                        </section>
                        <section>
                            <h3>Ticket results with AI</h3>
                            <p>With a user-friendly interface and advanced features, managing your event tickets has never been easier. With a user-friendly interface and advanced features, managing your event tickets has never been easier.</p>
                            <Link href="">Learn More</Link>
                        </section>
                    </div>
                    <div>
                        <section>
                            <Image src={Mockup2} alt="prototype" data-aos="fade-up"/>
                        </section>
                        <section>
                            <h3>Add tickets to your wallet</h3>
                            <p>With a user-friendly interface and advanced features, managing your event tickets has never been easier. With a user-friendly interface and advanced features, managing your event tickets has never been easier.</p>
                            <Link href="">Learn More</Link>
                        </section>
                    </div>
                    <div>
                        <section>
                            <Image src={Mockup1} alt="prototype" data-aos="fade-up"/>
                        </section>
                        <section>
                            <h3>Register and login with Apple ID</h3>
                            <p>With a user-friendly interface and advanced features, managing your event tickets has never been easier. With a user-friendly interface and advanced features, managing your event tickets has never been easier.</p>
                            <Link href="">Learn More</Link>
                        </section>
                    </div>
                    <div>
                        <section>
                            <Image src={Mockup3} alt="prototype" data-aos="fade-up"/>
                        </section>
                        <section>
                            <h3>Select seats and pay secure</h3>
                            <p>With a user-friendly interface and advanced features, managing your event tickets has never been easier. With a user-friendly interface and advanced features, managing your event tickets has never been easier.</p>
                            <Link href="">Learn More</Link>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    )
}
  
export default About;