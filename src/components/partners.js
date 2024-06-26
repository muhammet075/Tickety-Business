import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/partners.module.css";
import Mockup1 from "@/assets/mockups/mockup1.png";
import Mockup2 from "@/assets/mockups/mockup2.png";
import Mockup3 from "@/assets/mockups/mockup3.png";

function Partners() {

    useEffect(() => {
    }, []);

    return(      
        <div className={styles.partners} id="partners">  
            <div>
                <h2>Partners</h2>
                <p>Explore Tickerty's partners below. These companies contribute to our collaborative network, enhancing the services we provide.</p>

                <ul>
                    <li><Link target="_blank" href="https://altinweb.nl/en/"><img src="https://altinweb.nl/_next/static/media/altinweb-logo.dda733f0.svg" alt="Logo of Altinweb"/></Link></li>
                    {/* <li><Link href="">Partner</Link></li>
                    <li><Link href="">Partner</Link></li>
                    <li><Link href="">Partner</Link></li>
                    <li><Link href="">Partner</Link></li>
                    <li><Link href="">Partner</Link></li>
                    <li><Link href="">Partner</Link></li>
                    <li><Link href="">Partner</Link></li> */}
                </ul>

            </div>
        </div>
    )
}
  
export default Partners;