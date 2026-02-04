"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import capableImage1 from '@/app/(web)/assets/images/capable-img-1.png'
import capableImage2 from '@/app/(web)/assets/images/capable-img-2.png'
import capableImage3 from '@/app/(web)/assets/images/capable-img-3.png'
import capableImage4 from '@/app/(web)/assets/images/capable-img-4.png'
import capableImage5 from '@/app/(web)/assets/images/capable-img-5.png'
import rightArrow from "@/app/(web)/assets/images/right-arrow.png"
import Newsletter from '@/components/Newsletter'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import Header2 from '@/components/Header2';
import SocialLinks from '@/components/SocialLinks';
import { useRouter } from 'next/navigation';
const page = () => {
    const router = useRouter();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let xValue = -540;
        let startPoint = "top 400";
        let endPoint = "bottom 400";
        let showMarkers = false;
        if (window.innerWidth <= 375) {
            xValue = -800;
            startPoint = "top 200";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 500) {
            xValue = -700;
            startPoint = "top 200";
            endPoint = "bottom 10";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 767) {
            xValue = -400;
            startPoint = "top 200";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 991) {
            xValue = -200;
            startPoint = "top 200";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 1024) {
            xValue = -160;
            startPoint = "top 200";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 1200) {
            xValue = -450;
            startPoint = "top 400";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 1280) {
            xValue = -380;
            startPoint = "top 400";
            endPoint = "bottom 100";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1366) {
            xValue = -310;
            startPoint = "top 400";
            endPoint = "bottom 100";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1400) {
            xValue = -270;
            startPoint = "top 400";
            endPoint = "bottom 300";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1440) {
            xValue = -220;
            startPoint = "top 400";
            endPoint = "bottom 300";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1500) {
            xValue = -150;
            startPoint = "top 400";
            endPoint = "bottom 300";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1600) {
            xValue = -60;
            startPoint = "top 400";
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

    }, []);
    return (
        <>
            <Header2 />
            <section className='video-banner capable-video'>
                <SocialLinks />
                <div className="container">
                    <div className="video-area">
                        <div className='heading-wrapper'>
                            <h3 className='banner-hd-mini hd'>Our Capabilities</h3>
                            <h1 className='banner-hd hd'>We Deliver Technology Capability <br /> As A Service In Five Specialized Domains.</h1>
                        </div>
                        <div className='video-area-sec'>
                            <video src="/images/capable-banner-video.mp4" autoPlay playsInline muted loop>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>
            <section className='marquee-slider slider-black services-slider'>
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
            <div className="container">
                <h3 className='banner-hd-mini hd text-center mt-5'>WHY SPECIALIZED CAPABILITIES MATTER</h3>
                <p className='banner-para text-center mt-5 mb-5'>Most IT consultants are generalists. They know a little about everything but aren't experts in anything. When you face complex problems, generalists give generic advice. We built our team differently. Each capability area has dedicated specialists who focus only on their domain. Our security experts only do security. Our infrastructure engineers only do infrastructure. Our AI developers only do AI. You get depth of knowledge, not breadth of inexperience. When we work on your systems, the people doing the work have solved these exact problems dozens of times before.</p>
            </div>
            <section className="capable-services">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12">
                            <div className="capabilities-card-mega-wrapper">
                                <div className="capabilities-card-wrapper">
                                    <Image src={capableImage1} className='img-fluid' alt="" />
                                    <h4 className='cap-para'>Security</h4>
                                    <p className='banner-para'>Protect your data with testing, compliance, and incident response services.</p>
                                    <div className="btn-wrapper" onClick={() => router.push("/our-capabilities/security")}>
                                        <div className="btn-fill"></div>
                                        <div className="btn-content">
                                            <div className="left-icon">
                                                <Image src={rightArrow} className='img-fluid' alt="" />
                                            </div>
                                            <div className="btn-text">EXPLORE</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="capabilities-card-wrapper">
                                    <Image src={capableImage2} className='img-fluid' alt="" />
                                    <h4 className='cap-para'>Transformation</h4>
                                    <p className='banner-para'>Modernize systems safely, migrate data, train staff, and improve operations.</p>
                                    <div className="btn-wrapper" onClick={() => router.push("/our-capabilities/Transformation")}>
                                        <div className="btn-fill"></div>
                                        <div className="btn-content">
                                            <div className="left-icon">
                                                <Image src={rightArrow} className='img-fluid' alt="" />
                                            </div>
                                            <div className="btn-text">EXPLORE</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="capabilities-card-wrapper">
                                    <Image src={capableImage3} className='img-fluid' alt="" />
                                    <h4 className='cap-para'>Infrastructure</h4>
                                    <p className='banner-para'>Build scalable, redundant infrastructure with monitoring to prevent failures.</p>
                                    <div className="btn-wrapper" onClick={() => router.push("/our-capabilities/Infrastructure")}>
                                        <div className="btn-fill"></div>
                                        <div className="btn-content">
                                            <div className="left-icon">
                                                <Image src={rightArrow} className='img-fluid' alt="" />
                                            </div>
                                            <div className="btn-text">EXPLORE</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="capabilities-card-wrapper">
                                    <Image src={capableImage4} className='img-fluid' alt="" />
                                    <h4 className='cap-para'>AI</h4>
                                    <p className='banner-para'>Implement AI for analytics, automation, and measurable business results.</p>
                                    <div className="btn-wrapper" onClick={() => router.push("/our-capabilities/Artificial-intelligence")}>
                                        <div className="btn-fill"></div>
                                        <div className="btn-content">
                                            <div className="left-icon">
                                                <Image src={rightArrow} className='img-fluid' alt="" />
                                            </div>
                                            <div className="btn-text">EXPLORE</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row capable-row">
                        <div className="col-12">
                            <div className="capabilities-card-mega-wrapper">
                                <div className="capabilities-card-wrapper">
                                    <Image src={capableImage5} className='img-fluid' alt="" />
                                    <h4 className='cap-para'>Applications</h4>
                                    <p className='banner-para'>Develop, integrate, and optimize applications to boost team productivity.</p>
                                    <div className="btn-wrapper" onClick={() => router.push("/our-capabilities/Applications")}>
                                        <div className="btn-fill"></div>
                                        <div className="btn-content">
                                            <div className="left-icon">
                                                <Image src={rightArrow} className='img-fluid' alt="" />
                                            </div>
                                            <div className="btn-text">EXPLORE</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="capabilities-card-wrapper">
                                    <Image src={capableImage2} className='img-fluid' alt="" />
                                    <h4 className='cap-para'>Enterprise Applications</h4>
                                    <p className='banner-para'>Develop, integrate, and optimize enterprise software to streamline operations.</p>
                                    <div className="btn-wrapper" onClick={() => router.push("/our-capabilities/Enterprise-Applications")}>
                                        <div className="btn-fill"></div>
                                        <div className="btn-content">
                                            <div className="left-icon">
                                                <Image src={rightArrow} className='img-fluid' alt="" />
                                            </div>
                                            <div className="btn-text">EXPLORE</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="capabilities-card-wrapper">
                                    <Image src={capableImage3} className='img-fluid' alt="" />
                                    <h4 className='cap-para'>Data Engineering</h4>
                                    <p className='banner-para'>Transform raw data into actionable insights with pipelines and analytics.</p>
                                    <div className="btn-wrapper" onClick={() => router.push("/our-capabilities/Data-Engineering")}>
                                        <div className="btn-fill"></div>
                                        <div className="btn-content">
                                            <div className="left-icon">
                                                <Image src={rightArrow} className='img-fluid' alt="" />
                                            </div>
                                            <div className="btn-text">EXPLORE</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="capabilities-card-wrapper">
                                    <Image src={capableImage1} className='img-fluid' alt="" />
                                    <h4 className='cap-para'>Cloud</h4>
                                    <p className='banner-para'>Deploy, manage, and scale cloud solutions securely and efficiently.</p>
                                    <div className="btn-wrapper" onClick={() => router.push("/our-capabilities/Cloud")}>
                                        <div className="btn-fill"></div>
                                        <div className="btn-content">
                                            <div className="left-icon">
                                                <Image src={rightArrow} className='img-fluid' alt="" />
                                            </div>
                                            <div className="btn-text">EXPLORE</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center">HOW OUR CAPABILITIES WORK TOGETHER</h2>
                    <p className='banner-para'>Technology problems rarely fit into neat categories. A slow application might be caused by poor code, inadequate infrastructure, or database design issues. A security breach might require incident response, 	infrastructure hardening, and application updates.</p>
                    <p className='banner-para'>Our capabilities work together because our specialists collaborate. When your problem crosses domains, you get a coordinated team that understands how everything connects. No finger-pointing between vendors. No gaps where responsibilities overlap. You get one partner who handles everything, with specialists in each area working together toward your success.</p>
                </div>
            </section>
            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center">CAPABILITY DELIVERY MODELS</h2>
                    <h4 className='term-hd-mini'>Project-Based</h4>
                    <p className='banner-para'>You need specific capability work for a defined period. We scope the project, agree on deliverables and timeline, and execute. When the work is complete, you have what you need.</p>
                    <p className='banner-para'><span className="red">Best for: </span>One-time initiatives, specific problems to solve, defined goals with clear endpoints.</p>

                    <h4 className='term-hd-mini'>Retainer-Based</h4>
                    <p className='banner-para'>You need ongoing access to capabilities. Monthly retainer gives you consistent support and expertise. We become an extension of your team.</p>
                    <p className='banner-para'><span className="red">Best for: </span>Continuous improvement, ongoing monitoring and optimization, regular capability needs across multiple domains.</p>

                    <h4 className='term-hd-mini'>Hybrid Approach</h4>
                    <p className='banner-para'>Some clients combine both models. Retainer for steady-state work. Projects for major initiatives. The structure adapts to what makes sense for your situation.</p>
                    <p className='banner-para'><span className="red">Best for: </span>Companies with both ongoing needs and occasional large projects.</p>
                </div>
            </section>
            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center">TECHNICAL CERTIFICATIONS & EXPERTISE</h2>
                    <p className='banner-para'>Our team maintains certifications across all major platforms and frameworks. AWS, Azure, Google Cloud. Cisco, CompTIA, CISSP. We invest in continuous learning because technology changes constantly. More importantly, we have real-world experience. Certifications prove you passed tests. Experience proves you've solved actual problems. Our team brings both.</p>
                </div>
            </section>
            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">READY TO LEVERAGE OUR CAPABILITIES?</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Start With a Free Capability Assessment</h4>
                            {/* <div className="contact-content-wrapper justify-content-center">
                                            <i className='fa-solid fa-phone'></i>
                                            <Link className='banner-para' href={"tel:18778534839"}>+1 877 853 4839</Link>
                                        </div>
                                        <div className="contact-content-wrapper justify-content-center">
                                            <i className='fa-solid fa-envelope'></i>
                                            <Link className='banner-para' href={"mailto:info@five9.co"}>info@five9.co</Link>
                                        </div>
                                        <div className="contact-content-wrapper justify-content-center">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <p className='banner-para' href="#">8310 S. Valley Highway Suite 300</p>
                                        </div> */}

                            <p className="banner-para">We'll review your current state across all five capability domains. You'll get a clear picture of where you're strong and where vulnerabilities exist. No cost. No obligation. Just honest assessment.</p>
                            <div className="btn-wrapper" onClick={() => router.push("/contact-us/")}>
                                <div className="btn-fill"></div>
                                <div className="btn-content">
                                    <div className="left-icon">
                                        <Image src={rightArrow} className='img-fluid' alt="" />
                                    </div>
                                    <div className="btn-text">BOOK YOUR ASSESSMENT</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Newsletter /> */}
        </>
    )
}

export default page
