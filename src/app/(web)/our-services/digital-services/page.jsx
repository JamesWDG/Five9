"use client";
import React, { use, useEffect } from 'react'
import gsap from 'gsap'
import Newsletter from '@/components/Newsletter'
import { ScrollTrigger } from 'gsap/all';
import AOS from 'aos';
import Header2 from '@/components/Header2';
import SocialLinks from '@/components/SocialLinks';
import rightArrow from "@/app/(web)/assets/images/right-arrow.png"
import Image from 'next/image';
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
                            <h3 className='banner-hd-mini hd'>Fewer handoffs. Fewer errors. Faster execution.</h3>
                            <h1 className='banner-hd hd'>Digital Services</h1>
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
                <h3 className='banner-hd-mini hd'>We help you go digital the right way.</h3>
                <p className='banner-para text-center mt-3 mb-5'>Your business runs on processes built years ago. Manual tasks that could be automated. Paper-based workflows that create bottlenecks. Systems that don't talk to each other. We provide digital consulting services and solutions that transform how work gets done. Your teams become more productive. Your customers get faster service. Your business becomes more competitive.</p>
                <div className="btn-wrapper">
                    <div className="btn-fill"></div>
                    <div className="btn-content">
                        <div className="left-icon">
                            <Image src={rightArrow} className='img-fluid' alt="" />
                        </div>
                        <div className="btn-text">START DIGITAL ASSESSMENT</div>
                    </div>
                </div>
            </div>
            <section className="bridge-strategy">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1000">
                            {/* <h3 className='banner-hd-mini hd'>Bridge Strategy Design</h3> */}
                            <h1 className='banner-hd hd'>WHAT DIGITAL TRANSFORMATION MEANS</h1>
                            <p className="banner-para">Digital transformation isn't about buying new technology. It's about redesigning how work happens. Paper forms become digital workflows. Manual approvals become automated processes. Separate systems become integrated platforms. Slow tasks become fast tasks.</p>
                            {/* <p className='banner-para'>We focus on solutions that drive measurable impact. That includes cloud-native development, API integrations, workflow automation, user experience improvements, and modern application architectures that reduce overhead and accelerate delivery.</p> */}
                        </div>
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1500">
                            <video src="/images/digital-services-page-video.mp4" className='img-fluid' autoPlay muted loop playsInline></video>
                        </div>
                    </div>
                    <div className="row mt-5 align-items-center">
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="2000">
                            <video src="/images/digital-services-page-video2.mp4" className='img-fluid' autoPlay muted loop playsInline></video>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="2500">
                            {/* <p className="banner-para">Our team works across the full lifecycle — from discovery and design to build, testing, deployment, and ongoing optimization — ensuring every digital product is built to support both current needs and future growth. </p> */}
                            <p className='banner-para'>We've helped companies across industries modernize operations. Retailers implementing omnichannel commerce. Manufacturers digitizing supply chains. Healthcare providers adopting telehealth. Service companies automating scheduling. The specific changes vary. The goal stays the same: make work easier and faster through better use of technology.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">OUR DIGITAL SERVICES</h2>
                    <h2 className="term-hd-mini">Digital Strategy & Roadmap</h2>
                    <p className='banner-para'>Where should digitization start? What processes matter most? What delivers the quickest returns? Our digital business strategy services help you prioritize initiatives. You get a clear roadmap showing what to do first, what can wait, and why each change matters. No trying to change everything at once. Just systematic progress that builds momentum.</p>

                    <h2 className="term-hd-mini">Business Digitization Solutions</h2>
                    <p className='banner-para'>Many business processes still rely on paper, spreadsheets, and manual work. Order processing. Employee onboarding. Expense approvals. Inventory tracking. Our business digitization solutions convert manual processes to digital workflows. Forms become electronic. Approvals become automated. Data flows between systems. Work gets done faster with fewer errors.</p>

                    <h2 className="term-hd-mini">Enterprise Digital Solutions</h2>
                    <p className='banner-para'>Large organizations face unique digitization challenges. Multiple departments with different needs. Legacy systems that can't be replaced quickly. Change management across hundreds of employees. Our enterprise digital solutions handle this complexity. We design transformations that work for large, established organizations with existing constraints.</p>

                    <h2 className="term-hd-mini">Digital Innovation Consulting</h2>
                    <p className='banner-para'>Staying competitive means constantly improving how you operate. New technologies enable new approaches. Customer expectations keep rising. Competitors keep innovating. Our digital innovation consulting helps you identify opportunities to work differently. Not change for change's sake. Innovation that delivers measurable business value.</p>

                    <h2 className="term-hd-mini">Technology Modernization Services</h2>
                    <p className='banner-para'>Old systems eventually hold businesses back. Legacy software that can't integrate with modern tools. Outdated platforms that limit functionality. Technology debt that makes changes expensive. Our technology modernization services update systems strategically. You get modern capabilities without throwing away everything that works.</p>

                </div>
            </section>

            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">DIGITAL TRANSFORMATION BY AREA</h2>
                    <h2 className="term-hd-mini">Customer Experience</h2>
                    <p className='banner-para'>Customers expect seamless experiences across channels. Website. Mobile app. Phone. In-store. Social media. Five9’s digital transformation experts help you create connected experiences where customer data flows between touchpoints. Your customers get consistent service regardless of how they interact with you.</p>

                    <h2 className="term-hd-mini">Employee Productivity</h2>
                    <p className='banner-para'>Employees waste time on tasks technology could handle. Data entry. Report generation. Scheduling. Approvals. We identify processes worth automating and implement solutions that actually help. Your employees focus on work that requires human judgment, not repetitive tasks.</p>

                    <h2 className="term-hd-mini">Operations Efficiency</h2>
                    <p className='banner-para'>Better processes mean lower costs and faster delivery. Automated workflows reduce errors. Digital tracking improves visibility. Integrated systems eliminate duplicate entry. We redesign operations to remove waste and accelerate throughput.</p>

                    <h2 className="term-hd-mini">Business Model Innovation</h2>
                    <p className='banner-para'>Digital capabilities enable new ways to serve customers. Subscription models. Platform businesses. Self-service options. Data-driven services. We help you explore new models that digital transformation makes possible.</p>

                </div>
            </section>

            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">DIGITAL TRANSFORMATION PROCESS</h2>
                    <h2 className="term-hd-mini">Step 1: Current State Assessment</h2>
                    <p className='banner-para'>We map how work actually gets done. Not how processes are supposed to work. How they actually work. We talk to employees doing the work daily. They know what's broken better than anyone. You get clear understanding of current pain points.</p>

                    <h2 className="term-hd-mini">Step 2: Future State Design</h2>
                    <p className='banner-para'>We design improved processes that leverage digital capabilities. Workflows get streamlined. Automation gets applied where it helps. Integration connects systems. You see exactly what operations look like after transformation.</p>

                    <h2 className="term-hd-mini">Step 3: Solution Selection</h2>
                    <p className='banner-para'>The right tools depend on your specific needs. Sometimes custom development makes sense. Other times existing platforms work fine. We recommend solutions based on requirements, not vendor relationships. You get technology that fits your situation.</p>

                    <h2 className="term-hd-mini">Step 4: Phased Implementation</h2>
                    <p className='banner-para'>We implement changes systematically. One process at a time. One department at a time. Pilot programs test approaches before broad rollout. You see results quickly while managing risk carefully.</p>

                    <h2 className="term-hd-mini">Step 5: Change Management</h2>
                    <p className='banner-para'>Technology changes are easy. People changes are hard. We help employees adapt through training, documentation, and ongoing support. You get adoption, not resistance.</p>

                </div>
            </section>

            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CASE STUDY: HEALTHCARE PROVIDER</h2>
                    <h2 className="term-hd-mini">The Challenge:</h2>
                    <p className='banner-para'>A healthcare network used paper forms for patient intake. Registration took 15 minutes per patient. Forms often had errors requiring callbacks. Records were stored in filing cabinets. Staff spent hours locating patient information. The process frustrated patients and wasted employee time.</p>

                    <h2 className="term-hd-mini">What We Did:</h2>
                    <p className='banner-para'>We implemented digital patient intake. Patients complete forms online before appointments. Data flows directly into the electronic health record system. Validation catches errors immediately. Staff can access records instantly from any location. Integration with insurance systems automates eligibility checks.</p>

                    <h2 className="term-hd-mini">The Result:</h2>
                    <p className='banner-para'>Registration time dropped to 3 minutes. Form errors decreased 85%. Staff productivity increased 40%. Patient satisfaction scores improved. The system paid for itself in 8 months through labor savings. Compliance improved through complete digital audit trails.</p>

                </div>
            </section>


            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">GET STARTED WITH DIGITAL TRANSFORMATION</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Free Process Assessment</h4>
                            <p className="banner-para">We'll evaluate your current operations and identify opportunities for digital improvement. You'll get a clear picture of what's possible and what it would take to implement.</p>
                            <div className="btn-wrapper">
                                <div className="btn-fill"></div>
                                <div className="btn-content">
                                    <div className="left-icon">
                                        <Image src={rightArrow} className='img-fluid' alt="" />
                                    </div>
                                    <div className="btn-text">SCHEDULE ASSESSMENT</div>
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
