"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import footerLogo from '@/app/dashboard/assets/images/footer-logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SidebarDashboard = ({ sidebarOpen, closeSidebar }) => {
    const pathname = usePathname()

    const [isCMSOpen, setIsCMSOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false)

    // CMS routes
    const cmsRoutes = [
        "/dashboard/header",
        "/dashboard/home-page",
        "/dashboard/about-page",
        "/dashboard/services-page",
        "/dashboard/capabilities-page",
        "/dashboard/Blog-page",
        "/dashboard/Contact-page",
        "/dashboard/footer",
    ]

    useEffect(() => {
        const isCMSPage = cmsRoutes.some(route => pathname.startsWith(route))
        setIsCMSOpen(isCMSPage)
    }, [pathname])

    return (
        <div className={`side-bar-area ${sidebarOpen ? "open" : "closed"}`}>

            {/* LOGO + CLOSE ICON */}
            <div className="side-bar-logo-img d-flex align-items-center justify-content-between">
                <Link href="/dashboard">
                    <Image src={footerLogo} alt="Logo" className="sidebar-logo" />
                </Link>

                {/* ❌ Close icon (tablet/mobile only) */}
                <button
                    type="button"
                    className="sidebar-close-btn d-lg-none"
                    onClick={() => {
                        const sidebar = document.querySelector(".side-panel");
                        if (sidebar) {
                            sidebar.classList.remove("show");
                        }
                    }}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>

            <nav className="side-nav">
                <ul className="side-nav-btn p-0">

                    <li className={`s-nav-link ${pathname === "/dashboard" ? "active-li" : ""}`}>
                        <Link href="/dashboard" className="s-nav-active link">
                            Dashboard
                        </Link>
                    </li>

                    <li className="s-nav-link d-block">
                        <button
                            className="s-nav-active link d-flex align-items-center justify-content-between sidebar-drop-btn"
                            type="button"
                            onClick={() => setIsCMSOpen(prev => !prev)}
                        >
                            CMS
                            <i className={`fa-solid fa-chevron-down collapse-angel ${isCMSOpen ? "rotate" : ""}`} />
                        </button>

                        {isCMSOpen && (
                            <ul className="cms-pages-list sidebar-dropdown-link p-0">

                                <li>
                                    <Link href="/dashboard/header" className={`drop-link ${pathname === "/dashboard/header" ? "active" : ""}`}>
                                        Header
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/dashboard/home-page" className={`drop-link ${pathname === "/dashboard/home-page" ? "active" : ""}`}>
                                        Home page
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/dashboard/about-page" className={`drop-link ${pathname === "/dashboard/about-page" ? "active" : ""}`}>
                                        About us page
                                    </Link>
                                </li>

                                {/* SERVICES */}
                                <li className="drop-parent">
                                    <div className="drop-down-text-butn d-flex align-items-center">
                                        <Link
                                            href="/dashboard/services-page"
                                            className={`flex-grow-1 drop-link ${pathname.startsWith("/dashboard/services-page") ? "active" : ""}`}
                                        >
                                            Services page
                                        </Link>

                                        <button
                                            type="button"
                                            className="drop-link-btn"
                                            onClick={() => setIsServicesOpen(prev => !prev)}
                                        >
                                            <i className={`fa-solid fa-chevron-down ${isServicesOpen ? "rotate" : ""}`} />
                                        </button>
                                    </div>

                                    {isServicesOpen && (
                                        <ul className="nested-dropdown p-0">
                                            <li><Link href="/dashboard/services-page/services-inner-pages/strategy-page" className="drop-link">1-strategy</Link></li>
                                            <li><Link href="/dashboard/services-page/services-inner-pages/fractional-cto-page" className="drop-link">2-fractional-CTO</Link></li>
                                            <li><Link href="/dashboard/services-page/services-inner-pages/digital-services-page" className="drop-link">3-digital-services</Link></li>
                                            <li><Link href="/dashboard/services-page/services-inner-pages/consulting-page" className="drop-link">4-consulting</Link></li>
                                            <li><Link href="/dashboard/services-page/services-inner-pages/advisory-page" className="drop-link">5-advisory</Link></li>
                                        </ul>
                                    )}
                                </li>

                                {/* CAPABILITIES */}
                                <li className="drop-parent">
                                    <div className="drop-down-text-butn d-flex align-items-center">
                                        <Link
                                            href="/dashboard/capabilities-page"
                                            className={`flex-grow-1 drop-link ${pathname.startsWith("/dashboard/capabilities-page") ? "active" : ""}`}
                                        >
                                            Capabilities Page
                                        </Link>

                                        <button
                                            type="button"
                                            className="drop-link-btn"
                                            onClick={() => setIsCapabilitiesOpen(prev => !prev)}
                                        >
                                            <i className={`fa-solid fa-chevron-down ${isCapabilitiesOpen ? "rotate" : ""}`} />
                                        </button>
                                    </div>

                                    {isCapabilitiesOpen && (
                                        <ul className="nested-dropdown p-0">
                                            <li><Link href="/dashboard/capabilities-page/capabilities-inner-pages/transformation-page" className="drop-link">1-Transformation</Link></li>
                                            <li><Link href="/dashboard/capabilities-page/capabilities-inner-pages/artificial-intelligence-page" className="drop-link">2-Artificial Intelligence</Link></li>
                                            <li><Link href="/dashboard/capabilities-page/capabilities-inner-pages/security-page" className="drop-link">3-Security</Link></li>
                                            <li><Link href="/dashboard/capabilities-page/capabilities-inner-pages/infrastructure-page" className="drop-link">4-Infrastructure</Link></li>
                                            <li><Link href="/dashboard/capabilities-page/capabilities-inner-pages/applications-page" className="drop-link">5-Applications</Link></li>
                                            <li><Link href="/dashboard/capabilities-page/capabilities-inner-pages/data-engineering-page" className="drop-link">6-Data Engineering</Link></li>
                                            <li><Link href="/dashboard/capabilities-page/capabilities-inner-pages/cloud-page" className="drop-link">7-Cloud</Link></li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Link href="/dashboard/Blog-page" className={`drop-link ${pathname === "/dashboard/Blog-page" ? "active" : ""}`}>
                                        Blog page
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/dashboard/Contact-page" className={`drop-link ${pathname === "/dashboard/Contact-page" ? "active" : ""}`}>
                                        Contact us page
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/dashboard/footer" className={`drop-link ${pathname === "/dashboard/footer" ? "active" : ""}`}>
                                        Footer
                                    </Link>
                                </li>

                            </ul>
                        )}
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default SidebarDashboard
