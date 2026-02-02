"use client";
import React, { useEffect, useRef, useState } from "react";
import Secondarybtn from "./Secondarybtn";
import { gsap } from "gsap";
import downArrow from '../../public/images/down-arrow.png'
import Image from "next/image";
import Link from "next/link";
import rightArrow from "@/app/(web)/assets/images/right-arrow.png"
import { useRouter } from 'next/navigation';
import FullscreenMenu from "./FullscreenMenu";
import SearchModal from "./SearchModal";

const Header2 = () => {
    const router = useRouter();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    return (
        <>
            <header className="header main-header">
                <div className="container-fluid">
                    <div className="header-wrapper header-main-wrapper">
                        <ul className="nav-links">
                            <li><Link href={"/"}>HOME</Link></li>
                            <li><Link href={"/about-us"}>ABOUT US</Link></li>
                            <li className="drop-down">
                                <div className="link-wrapper">
                                    <Link href={"/our-services"}>SERVICES </Link>
                                    <Image src={downArrow} className="img-fluid" alt="" />
                                </div>
                                <ul className="dropdown-menu">
                                    <li><Link href={"/our-services/strategy"}>Strategy</Link></li>
                                    <li><Link href={"/our-services/fractional-CTO"}>Fractional CTO</Link></li>
                                    <li><Link href={"/our-services/digital-services"}>Digital</Link></li>
                                    <li><Link href={"/our-services/consulting"}>Consulting</Link></li>
                                    <li><Link href={"/our-services/advisory"}>Advisory</Link></li>
                                </ul>
                            </li>
                            <li className="drop-down">
                                <div className="link-wrapper">
                                    <Link href={"/our-capabilities"}>CAPABILITIES </Link>
                                    <Image src={downArrow} className="img-fluid" alt="" />
                                </div>
                                <ul className="dropdown-menu">
                                    <li><Link href={"/our-capabilities/Transformation"}>Transformation</Link></li>
                                    <li><Link href={"/our-capabilities/Artificial-intelligence"}>Artificial Intelligence</Link></li>
                                    <li><Link href={"/our-capabilities/security"}>Security</Link></li>
                                    <li><Link href={"/our-capabilities/Infrastructure"}>Infrastructure</Link></li>
                                    <li><Link href={"/our-capabilities/Enterprise-Applications"}>Enterprise Applications</Link></li>
                                    <li><Link href={"/our-capabilities/Applications"}>Applications</Link></li>
                                    <li><Link href={"/our-capabilities/Data-Engineering"}>Data Engineering</Link></li>
                                    <li><Link href={"/our-capabilities/Cloud"}>Cloud</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="header-logo center-box">
                            <Link href={"/"} className='d-flex gap-2'>
                                <p className="word">FIVE</p>
                                <p className="num">9</p>
                            </Link>
                        </div>
                        <ul className="nav-links">
                            <li><Link href={"/blogs"}>BLOG</Link></li>
                            <li><Link href={"/contact-us"}>CONTACT US</Link></li>
                            <li onClick={() => setIsSearchOpen(true)} style={{ cursor: "pointer" }}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </li>
                            <li>
                                <div className="btn-wrapper">
                                    <div className="btn-fill"></div>
                                    <div className="btn-content">
                                        <div className="left-icon">
                                            <Image src={rightArrow} className='img-fluid' alt="" />
                                        </div>
                                        <div className="btn-text" onClick={() => router.push("/our-services")}>GET STARTED</div>
                                    </div>
                                </div></li>
                        </ul>
                    </div>
                </div>
            </header>
            <FullscreenMenu />
            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </>
    )
}

export default Header2
