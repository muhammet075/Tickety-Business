import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
import Logo from "@/assets/logo/tickety-logo.svg"

function Header() {

    useEffect(() => {
    }, []);

    return(      
        <header className={styles.header + " fadeinheader stickyheader"} id="ticketyheader">  
            <div>
                <Link href="/"><Image src={Logo} alt="Logo of Tickety"/></Link>

                <nav>
                    <ul>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Partners</Link></li>
                        <li><Link href="/">Link 3</Link></li>
                        <li><Link href="/">Link 4</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
  
export default Header;