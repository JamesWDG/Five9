"use client";
import React, { useEffect } from 'react'
import Newsletter from '@/components/Newsletter'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Header2 from '@/components/Header2';
import AOS from 'aos';
import SocialLinks from '@/components/SocialLinks';
import Image from 'next/image';
import rightArrow from "@/app/(web)/assets/images/right-arrow.png"
const page = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let xValue = -540;
        let startPoint = "top 300";
        let endPoint = "bottom 400";
        let showMarkers = false;
        if (window.innerWidth <= 375) {
            xValue = -1205;
            startPoint = "top 200";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 500) {
            xValue = -1100;
            startPoint = "top 200";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 767) {
            xValue = -820;
            startPoint = "top 300";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 991) {
            xValue = -600;
            startPoint = "top 200";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 1024) {
            xValue = -560;
            startPoint = "top 200";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 1200) {
            xValue = -880;
            startPoint = "top 300";
            endPoint = "bottom 300";
            showMarkers = false; // ✅ 1200 par ON
        }
        else if (window.innerWidth <= 1280) {
            xValue = -775;
            startPoint = "top 300";
            endPoint = "bottom 300";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1366) {
            xValue = -700;
            startPoint = "top 300";
            endPoint = "bottom 300";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1400) {
            xValue = -670;
            startPoint = "top 400";
            endPoint = "bottom 300";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1440) {
            xValue = -620;
            startPoint = "top 420";
            endPoint = "bottom 300";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1500) {
            xValue = -570;
            startPoint = "top 430";
            endPoint = "bottom 300";
            showMarkers = false;
        }
        else if (window.innerWidth <= 1600) {
            xValue = -455;
            startPoint = "top 430";
            endPoint = "bottom 300";
            showMarkers = false;
        }


        gsap.to(".transparent .marquee-mega-wrapper", {
            x: xValue,
            ease: "none",
            scrollTrigger: {
                trigger: ".transparent .marquee-wrapper1",
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
            offset: -2000
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
                            <h3 className='banner-hd-mini hd'>Make your tech investments work for the business.</h3>
                            <h1 className='banner-hd hd'>Strategy Services</h1>
                        </div>
                        <div className='video-area-sec'>
                            <video src="/images/our-services-sec-banner.mp4" autoPlay playsInline muted loop controls={false}>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>
            <section className='marquee-slider transparent'>
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
            <div className="container text-center mt-5 service-btn-max" data-aos="fade-right" data-aos-delay="500">
                <h3 className='banner-hd-mini hd'>We help you set priorities and create plans you can actually execute.</h3>
                <p className='banner-para text-center mt-3 mb-5'>Technology decisions affect your business for years. Choose wrong and waste millions. Choose right and gain competitive advantage. We provide <span className="red">IT strategy consulting</span> that helps you make sound decisions. You get roadmaps showing what to do first, what can wait, and why each step matters to your business.</p>
                <div className="btn-wrapper">
                    <div className="btn-fill"></div>
                    <div className="btn-content">
                        <div className="left-icon">
                            <Image src={rightArrow} className='img-fluid' alt="" />
                        </div>
                        <div className="btn-text">START STRATEGY PLANNING</div>
                    </div>
                </div>
            </div>
            <section className="bridge-strategy">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1000">
                            {/* <h3 className='banner-hd-mini hd'>Bridge Strategy Design</h3> */}
                            <h1 className='banner-hd hd'>WHY STRATEGY MATTERS</h1>
                            <p className="banner-para">Most companies lack clear technology strategy. Different departments want different things. Projects compete for budget without priorities. Technology investments happen reactively instead of strategically. Nobody knows if spending aligns with business goals.</p>
                            <p className='banner-para'> This creates expensive problems. Redundant systems that should be integrated. Capabilities purchased but never used. Projects that deliver technically but don't help the business. Money spent without measurable returns.</p>
                        </div>
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1500">
                            <video src="/images/strategy-page-video.mp4" className='img-fluid' autoPlay muted loop playsInline></video>
                        </div>
                    </div>
                    <div className="row mt-5 align-items-center">
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="2000">
                            <video src="/images/strategy-video2.mp4" className='img-fluid' autoPlay muted loop playsInline controls={false}></video>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="2500">
                            {/* <p className="banner-para">From cloud adoption and architecture choices to data strategy, cybersecurity, automation, AI integration, and application modernization, we ensure every decision is grounded in both business impact and technical reality.</p> */}
                            <p className='banner-para'> We develop <span className="red">digital business strategy</span> that connects technology to business outcomes. Every recommendation must answer one question: how does this help achieve business goals? If it doesn't, we won't suggest it.</p>
                        </div>
                    </div>
                </div>
            </section>




            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">STRATEGY SERVICES</h2>
                    <h2 className="term-hd-mini">IT Strategy Consulting</h2>
                    <p className='banner-para'>What should your technology do over the next 3-5 years? How much should you invest? What capabilities do you need? How do you prioritize competing initiatives? Our <span className="red">IT strategy consulting</span> services answer these questions systematically. You get plans based on business strategy, not technology trends.</p>

                    <h2 className="term-hd-mini">Digital Business Strategy</h2>
                    <p className='banner-para'>Digital capabilities reshape how businesses operate and compete. E-commerce. Mobile engagement. Data-driven decisions. Process automation. Platform business models. Our <span className="red">digital business strategy</span> services help you leverage digital to strengthen competitive position. You understand where digital creates advantage for your specific business.</p>

                    <h2 className="term-hd-mini">Technology Roadmap Planning</h2>
                    <p className='banner-para'>Strategy needs translation to concrete plans. What gets done this quarter? Next quarter? Next year? What resources are required? What dependencies exist? Our <span className="red">technology roadmap planning</span> services create actionable plans from strategic direction. You know what's happening and when.</p>

                    <h2 className="term-hd-mini">Enterprise Transformation Strategy</h2>
                    <p className='banner-para'>Large-scale change requires comprehensive strategy. Technology changes. Process changes. Organizational changes. Cultural changes. Our <span className="red">enterprise transformation strategy</span> services design coordinated approaches that address all dimensions. You get transformation that actually delivers promised benefits.</p>

                </div>
            </section>




            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">STRATEGY DEVELOPMENT PROCESS</h2>
                    <h2 className="term-hd-mini">Phase 1: Business Context</h2>
                    <p className='banner-para'>We start by understanding your business deeply. Market position. Competitive landscape. Growth plans. Customer needs. Operational challenges. Strategic goals. Technology strategy must support business strategy. We can't develop good technology strategy without understanding the business context.</p>

                    <h2 className="term-hd-mini">Phase 2: Current State Assessment</h2>
                    <p className='banner-para'>What technology do you have? How well does it work? What does it cost? Where are the gaps? What technical debt exists? What capabilities are strong and weak? We assess current state honestly to understand the starting point.</p>

                    <h2 className="term-hd-mini">Phase 3: Future State Definition</h2>
                    <p className='banner-para'>What capabilities do you need to achieve business goals? What systems should exist? How should data flow? What should be automated? How should teams work? We define future state based on business requirements, not just technology possibilities.</p>

                    <h2 className="term-hd-mini">Phase 4: Gap Analysis</h2>
                    <p className='banner-para'>What's the difference between current and future state? What needs to be built? What needs to be replaced? What needs to be integrated? What can stay as-is? Gap analysis identifies everything that needs to happen.</p>

                    <h2 className="term-hd-mini">Phase 5: Roadmap Creation</h2>
                    <p className='banner-para'>How do you get from current to future state? What's the sequence? What are the phases? What are the dependencies? What are the costs? What are the risks? We create practical roadmaps that account for resources, priorities, and organizational capacity for change.</p>

                    <h2 className="term-hd-mini">Phase 6: Implementation Planning</h2>
                    <p className='banner-para'>Who does what? When do things happen? What resources are needed? How do you measure progress? We plan first initiatives in detail so execution can start immediately after strategy approval.</p>

                </div>
            </section>



            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">STRATEGY FOCUS AREAS</h2>
                    <h2 className="term-hd-mini">Cloud Strategy</h2>
                    <p className='banner-para'>Which workloads move to cloud and which stay on-premises? Which cloud providers make sense? What's the migration sequence? How do you optimize costs? What skills does your team need?</p>

                    <h2 className="term-hd-mini">Application Strategy</h2>
                    <p className='banner-para'>What applications should you build versus buy? Which legacy systems need replacement? What integration approach makes sense? How do you balance customization with standardization?</p>

                    <h2 className="term-hd-mini">Data Strategy</h2>
                    <p className='banner-para'>How do you capture and use data effectively? What's your approach to analytics? How do you ensure data quality? What governance makes sense? How do you leverage AI and machine learning?</p>

                    <h2 className="term-hd-mini">Security Strategy</h2>
                    <p className='banner-para'>What's your approach to security and compliance? How do you balance security with usability? What frameworks and standards apply? How do you detect and respond to threats?</p>

                    <h2 className="term-hd-mini">Infrastructure Strategy</h2>
                    <p className='banner-para'>What's your approach to infrastructure? Cloud, on-premises, or hybrid? How do you ensure availability and performance? How do you plan capacity? What's your disaster recovery approach?</p>

                </div>
            </section>


            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CASE STUDY: MANUFACTURING COMPANY</h2>
                    <h2 className="term-hd-mini">The Challenge:</h2>
                    <p className='banner-para'>A manufacturing company had grown through acquisition. They operated 15 different ERP systems across business units. IT costs were high. Data was fragmented. Reporting was impossible. Leadership wanted consolidation but didn't know where to start or what it would cost.</p>

                    <h2 className="term-hd-mini">What We Did:</h2>
                    <p className='banner-para'>Conducted comprehensive strategy engagement. Assessed all current systems. Defined future state architecture. Evaluated ERP platforms. Created 5-year roadmap for consolidation. Prioritized based on business impact and technical dependencies. Estimated costs and resources.</p>

                    <h2 className="term-hd-mini">The Result:</h2>
                    <p className='banner-para'>Clear roadmap approved by leadership. Implementation started with highest-value business unit. First consolidation completed successfully under budget. Provided template for remaining consolidations. Company now executing multi-year plan confidently with realistic expectations.</p>

                </div>
            </section>





            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">GET STRATEGIC CLARITY</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Schedule Strategy Discussion</h4>
                            <p className="banner-para">Let's talk about your business goals and technology challenges. We'll discuss whether strategy services make sense and what they would deliver.</p>
                            <div className="btn-wrapper">
                                <div className="btn-fill"></div>
                                <div className="btn-content">
                                    <div className="left-icon">
                                        <Image src={rightArrow} className='img-fluid' alt="" />
                                    </div>
                                    <div className="btn-text">SCHEDULE DISCUSSION</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
