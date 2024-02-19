import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
import Logo from "@/assets/logo/tickety-logo.svg";
import menuIco from "@/assets/icons/blue-menu.svg";
import closeIco from "@/assets/icons/blue-close.svg";

function Header() {

    useEffect(() => {
    }, []);

    function openHamburger(){
        document.querySelector("#hamburgermenu").classList.remove("closehamburger");
        document.querySelector("#hamburgermenu").classList.add("openhamburger");
    }

    function closehamburger(){
        document.querySelector("#hamburgermenu").classList.add("closehamburger");
    }

    return(      
        <header className={styles.header + " fadeinheader stickyheader"} id="ticketyheader">  
            <div>
                <Link href="/"><Image src={Logo} alt="Logo of Tickety"/></Link>

                <nav id="hamburgermenu">
                    <ul>
                        <li><Link href="#about" onClick={closehamburger}>About</Link></li>
                        <li><Link href="#partners" onClick={closehamburger}>Partners</Link></li>
                        <li><Link href="/" onClick={closehamburger}>Link 3</Link></li>
                        <li><Link href="/" onClick={closehamburger}>Link 4</Link></li>
                        <li><button onClick={closehamburger}><Image src={closeIco} alt="Close icon"/></button></li>
                    </ul>
                </nav>

                <button onClick={openHamburger}><Image src={menuIco} alt="Hamburger menu icon"/></button>

            </div>
        </header>
    )
}
  
export default Header;