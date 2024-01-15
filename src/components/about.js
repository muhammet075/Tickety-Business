import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/about.module.css";
import Mockup1 from "@/assets/mockups/mockup1.png";
import Mockup2 from "@/assets/mockups/mockup2.png";
import Mockup3 from "@/assets/mockups/mockup3.png";

function About() {

    useEffect(() => {
    }, []);

    return(      
        <div className={styles.about}>  
            <div>
                <h2>About us</h2>

                <div>
                    <div>
                        <section>
                            <Image src={Mockup2} alt="prototype" data-aos="fade-up"/>
                        </section>
                        <section>
                            <h3>Heading 3</h3>
                            <p>With a user-friendly interface and advanced features, managing your event tickets has never been easier. With a user-friendly interface and advanced features, managing your event tickets has never been easier.</p>
                            <Link href="">Learn More</Link>
                        </section>
                    </div>
                    <div>
                        <section>
                            <Image src={Mockup1} alt="prototype" data-aos="fade-up"/>
                        </section>
                        <section>
                            <h3>Heading 3</h3>
                            <p>With a user-friendly interface and advanced features, managing your event tickets has never been easier. With a user-friendly interface and advanced features, managing your event tickets has never been easier.</p>
                            <Link href="">Learn More</Link>
                        </section>
                    </div>
                    <div>
                        <section>
                            <Image src={Mockup3} alt="prototype" data-aos="fade-up"/>
                        </section>
                        <section>
                            <h3>Heading 3</h3>
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