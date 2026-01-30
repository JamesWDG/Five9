"use client";
import { gsap } from "gsap";
import React, { use, useEffect } from 'react'
import aboutBannerimg1 from "@/app/(web)/assets/images/about-banner-front.png"
import aboutBannerimg2 from "@/app/(web)/assets/images/about-banner-back.png"
import Image from 'next/image'
import Secondarybtn from "@/components/Secondarybtn";
import Newsletter from "@/components/Newsletter";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header2 from "@/components/Header2";
import AOS from 'aos';
import SocialLinks from "@/components/SocialLinks";
import Testimonials from "@/components/Testimonials";
const page = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let xValue = -540;
        let startPoint = "top 300";
        let endPoint = "bottom 400";
        let showMarkers = false;
        if (window.innerWidth <= 375) {
            xValue = -1205;
            startPoint = "top 900";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 500) {
            xValue = -1100;
            startPoint = "top 900";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 767) {
            xValue = -820;
            startPoint = "top 900";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 991) {
            xValue = -600;
            startPoint = "top 900";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 1024) {
            xValue = -560;
            startPoint = "top 700";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 1200) {
            xValue = -880;
            startPoint = "top 700";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 1280) {
            xValue = -775;
            startPoint = "top 700";
            endPoint = "bottom 300";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1366) {
            xValue = -700;
            startPoint = "top 700";
            endPoint = "bottom 300";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1400) {
            xValue = -670;
            startPoint = "top 700";
            endPoint = "bottom 300";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1440) {
            xValue = -620;
            startPoint = "top 900";
            endPoint = "bottom 300";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1500) {
            xValue = -570;
            startPoint = "top 900";
            endPoint = "bottom 300";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1600) {
            xValue = -455;
            startPoint = "top 900";
            endPoint = "bottom 300";
            showMarkers = false;
        }


        gsap.to(".slider-black .marquee-mega-wrapper", {
            x: xValue,
            ease: "none",
            scrollTrigger: {
                trigger: ".slider-black .marquee-wrapper1",
                start: startPoint,
                end: endPoint,
                scrub: 2,
                scroller: "body",
                markers: showMarkers,
            },
        });
        AOS.init({
            duration: 2000,
            once: true,
            offset: -3500
        });
    }, []);
    return (
        <>
            <Header2 />
            <section className='video-banner capable-video inner-blog-video'>
                <SocialLinks />
                <div className="container">
                    <div className="video-area">
                        <div className='heading-wrapper'>
                            <h3 className='banner-hd-mini hd security-hd'>Your Trusted Technology Partner <br /> for Over a Decade</h3>
                            {/* <h1 className='banner-hd hd' style={{ textShadow: "0px 0px 3px rgba(0,0,0,1)" }}>Helping companies stay online with scalable, <br /> expert IT solutions since 2014.</h1> */}
                            <h1 className='banner-hd hd' style={{ textShadow: "0px 0px 3px rgba(0,0,0,1)" }}>About Us</h1>
                        </div>
                        <div className='video-area-sec'>
                            <video src="/images/about-banner-video.mp4" autoPlay playsInline muted loop>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>
            <section className='about-content-sec'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="term-hd">Helping companies stay online with scalable, expert IT solutions since 2014.</h2>
                            <p className='banner-para'>Five 9 has spent over a decade helping companies stay online with reliable, scalable IT solutions. We started after seeing businesses lose money from downtime, security breaches, and outdated technology. Our founders’ experience building dependable systems shaped our approach. Named after the gold standard of 99.999% uptime—just 5 minutes of downtime per year—Five 9 keeps critical systems operational, secure, and scalable. We don’t just give advice; we stay through implementation to ensure solutions actually work. Our on-demand technology teams provide database, security, and cloud experts exactly when you need them, giving businesses the expertise to solve complex problems without the cost or overhead of full-time hires.</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content-img-wrapper">
                                <Image src={aboutBannerimg1} className='about-img1' alt="" />
                                <Image src={aboutBannerimg2} className='about-img2' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="capabilities-sec cap-sec">
                <section className='marquee-slider slider-black'>
                    <div className="marquee-mega-wrapper">
                        <p className='marquee-wrapper1 m-0'>
                            EMPOWERING RESILIENCE,
                        </p>
                        <p className='marquee-wrapper1 m-0'>
                            ANYTIME,
                        </p>
                        <p className='marquee-wrapper1 m-0'>
                            ANYWHERE
                        </p>
                    </div>
                </section>
                <div className="container text-center" data-aos="fade-right" data-aos-delay="500">
                    <h3 className='banner-hd-mini'>Who We Are</h3>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <p className='banner-para'>We are specialists in building systems that work. From Fortune 500 to startups, our team solves downtime, security, and scalability challenges. We focus on real results, keeping your business running smoothly without unnecessary costs or complexity.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-buisness">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1000">
                            <h3 className='banner-hd-mini hd'>Get Enterprise Technology <br /> Support Now</h3>
                            <h1 className='banner-hd hd'>Our Mission</h1>
                            <p className="banner-para">We help businesses use technology the right way. Every recommendation must improve operations. No wasted software, no unnecessary consultants, no downtime. Our success comes from making your systems reliable, scalable, and aligned with your business goals.</p>
                            <Secondarybtn />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-buisness-why-choose">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-6 col-12" data-aos="fade-left" data-aos-delay="2000">
                            <h1 className='banner-hd hd'>What We Do</h1>
                            <p className="banner-para">We don’t just advise—you get implementation too. Our on-demand teams deliver expertise when you need it. Security, infrastructure, applications, AI, and transformation projects are handled by specialists. We ensure systems work reliably, improve efficiency, and grow with your business.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-advisory-sec" data-aos="fade-up" data-aos-delay="2500">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-7 col-12">
                            <div className="about-advisory-ul-wrapper">
                                <div className="col-lg-6 col-sm-6">
                                    <ul className="about-advisory-ul">
                                        <li>
                                            <p className="banner-para">On-demand technology experts</p>
                                        </li>
                                        <li>
                                            <p className="banner-para">Security planning and <br /> audits</p>
                                        </li>
                                        <li>
                                            <p className="banner-para">Scalable infrastructure solutions</p>
                                        </li>
                                        <li>
                                            <p className="banner-para">Cloud migrations and management</p>
                                        </li>
                                        <li>
                                            <p className="banner-para">Custom application development</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 col-sm-5">
                                    <ul className="about-advisory-ul">
                                        <li>
                                            <p className="banner-para">AI and automation solutions</p>
                                        </li>
                                        <li>
                                            <p className="banner-para">System monitoring and support</p>
                                        </li>
                                        <li>
                                            <p className="banner-para">Disaster recovery planning</p>
                                        </li>
                                        <li>
                                            <p className="banner-para">Continuous improvement guidance</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5 advisory-para">
                            <h3 className='banner-hd-mini hd text-center'>Why Clients Choose Five 9 Services</h3>
                            <p className='banner-para'>Our 90% retention rate reflects the trust clients place in us. We stay involved long-term, solving issues quickly and scaling technology alongside your business. No surprise bills, no disappearing consultants, no unnecessary services. From startups to enterprises across 35+ U.S. markets, every client receives the same commitment: reliable systems, expert guidance, and solutions that genuinely support growth. Your technology works when you need it most.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-available-sec" data-aos="fade-right" data-aos-delay="3000">
                <div className="container">
                    <h3 className='banner-hd-mini hd text-center'>We Answer When You Call</h3>
                    <p className="banner-para">Our 24/7 support isn't outsourced to a call center in another country. When you have an emergency at 2 AM, you talk to someone who knows your systems and can actually fix the problem.</p>
                </div>
            </section>
            <Testimonials/>
        </>
    )
}

export default page
