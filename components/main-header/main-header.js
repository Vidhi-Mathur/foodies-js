import Link from "next/link";
//Path to image is stored under src property, if using <img>, otherwise no need as other info. is also req. to  optimise it further. Added to priority, as present in <header>, no need for laxy loading as always req., so better is to load ASAP, to avoid unecessay booting  
import Image from "next/image";
import LogoImg from "@/assets/logo.png"
import MainHeaderBackground from '@/components/main-header/main-header-background';
import classes from "./main-header.module.css"
import NavLink from "./nav-link";
import { Children } from "react";

export default function MainHeader(){
    
    return (
        <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                {/* <img src={LogoImg.src} alt="Food plate"/> */}
                <Image src={LogoImg} alt="Food plate" priority/>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink href="/meals">Browse Meals</NavLink></li>
                    <li><NavLink href="/community">Join Community</NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}