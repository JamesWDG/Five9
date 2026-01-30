"use client";
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Newsletter from '@/components/Newsletter'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header2 from '@/components/Header2';
import AOS from 'aos';
import rightArrow from "@/app/(web)/assets/images/right-arrow.png"
import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';

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
                            <h3 className='banner-hd-mini hd'>Transformation With Clear Goals And Controlled Change.</h3>
                            <h1 className='banner-hd hd'>Transformation</h1>
                        </div>
                        <div className='video-area-sec'>
                            <video src="/images/capable-banner-video.mp4" autoPlay playsInline muted loop>
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
            <div className="container text-center mt-5 mb-5 service-btn-max2" data-aos="fade-right" data-aos-delay="500">
                <h3 className='banner-hd-mini hd'>Modernize systems, streamline processes, and run your operation better.</h3>
                <p className='banner-para text-center mt-3 mb-5'>Every business eventually needs to transform. New competitors disrupt markets. Customer expectations evolve. Technology advances. Companies that adapt survive. Companies that don't get left behind. We provide <span className="red">business transformation consulting</span> that helps you change successfully. You get the benefits of transformation without betting everything on one risky initiative.</p>
                <div className="btn-wrapper">
                    <div className="btn-fill"></div>
                    <div className="btn-content">
                        <div className="left-icon">
                            <Image src={rightArrow} className='img-fluid' alt="" />
                        </div>
                        <div className="btn-text">START TRANSFORMATION PLANNING</div>
                    </div>
                </div>
            </div>
            <section className="security-sec">
                <div className="container">
                    <div className="security-content-wrapper" data-aos="fade-right" data-aos-delay="1000">
                        <div className="row align-items-center">
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1500">
                                {/* <h3 className='banner-hd-mini hd'>Bridge Strategy Design</h3> */}
                                <h1 className='banner-hd hd'>TRANSFORMATION</h1>
                                <p className="banner-para">Modernize legacy systems without breaking everything in the process. We help you move from outdated technology to modern platforms through careful planning, safe data migration, team retraining, and change management.</p>
                                <h4 className='term-hd-mini'>Common challenges we solve:</h4>
                                <p className='banner-para'> Systems that can't integrate with modern tools, technology that limits business growth, fear of disrupting operations during upgrades, failed transformation projects from other vendors.</p>
                            </div>
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="2000">
                                <video src="/images/Transformation-video.mp4" className='img-fluid' data-aos="fade-left" data-aos-delay="2500" autoPlay muted playsInline loop></video>
                                {/* <p className='banner-para'>With Five 9, transformation is not disruption for its own sake—it's a structured evolution toward a stronger, more capable organization. We help you accelerate progress, reduce complexity, and deliver meaningful change that positions your business for the future.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">WHY TRANSFORMATIONS FAIL</h2>
                    <p className='banner-para'>Most transformation initiatives fail because companies try to change too much too fast. They announce big visions without detailed plans. They underestimate the complexity. They ignore employee concerns. They expect technology to solve people problems.</p>
                    <p className='banner-para'>We've led successful transformations across industries. We know what works and what fails. Our <span className="red">end-to-end digital transformation</span> approach balances ambition with pragmatism. You get meaningful change that actually sticks, not flashy announcements that never deliver.</p>

                </div>
            </section>







            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">TRANSFORMATION SERVICES</h2>
                    <h2 className="term-hd-mini">Enterprise Transformation Strategy</h2>
                    <p className='banner-para'>Large-scale change requires clear strategy. What's the vision? What's the timeline? What are the phases? How do you measure progress? Our <span className="red">enterprise transformation strategy</span> services create roadmaps that guide change systematically. You get a path from current state to future state with realistic milestones along the way.</p>

                    <h2 className="term-hd-mini">Organizational Digital Change</h2>
                    <p className='banner-para'>Technology changes are only part of transformation. Culture must evolve. Processes must adapt. Skills must develop. Organizational structure might need adjustment. Our <span className="red">organizational digital change</span> services address the people side of transformation. You get adoption and sustained change, not just new systems that nobody uses properly.</p>

                    <h2 className="term-hd-mini">Technology-Led Transformation</h2>
                    <p className='banner-para'>Sometimes technology capabilities enable entirely new ways of operating. Cloud platforms enable flexible scaling. AI enables intelligent automation. Mobile enables field productivity. APIs enable partner integration. Our <span className="red">technology-led transformation</span> services help you reimagine what's possible using modern capabilities.</p>

                    <h2 className="term-hd-mini">Enterprise Transformation Solutions</h2>
                    <p className='banner-para'>Large organizations face unique transformation challenges. Multiple business units with different needs. Global operations spanning regions and time zones. Legacy systems supporting critical operations. Regulatory requirements limiting options. Our <span className="red">enterprise transformation solutions</span> handle this complexity systematically.</p>

                </div>
            </section>









            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">TRANSFORMATION FOCUS AREAS</h2>
                    <h2 className="term-hd-mini">Operating Model Transformation</h2>
                    <p className='banner-para'>How your company operates determines what it can achieve. Centralized versus decentralized decision-making. Functional versus product-oriented organization. Waterfall versus agile development. We help you design and implement operating models that support your strategy.</p>

                    <h2 className="term-hd-mini">Technology Platform Transformation</h2>
                    <p className='banner-para'>Legacy platforms eventually limit what you can do. Monolithic systems that take months to change. Outdated databases that can't scale. Fragile integrations that break constantly. We help you migrate to modern platforms systematically while maintaining operations.</p>

                    <h2 className="term-hd-mini">Business Process Transformation</h2>
                    <p className='banner-para'>Processes designed for yesterday's reality hold you back today. Manual workflows that could be automated. Handoffs that create delays. Approvals that slow decisions. We redesign processes to eliminate waste and accelerate throughput.</p>

                    <h2 className="term-hd-mini">Cultural Transformation</h2>
                    <p className='banner-para'>Technology and process changes fail without cultural support. Risk aversion prevents innovation. Siloed thinking prevents collaboration. Fixed mindsets prevent learning. We help you evolve culture to support new ways of working.</p>

                </div>
            </section>

            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">TRANSFORMATION APPROACH</h2>
                    <h2 className="term-hd-mini">Phase 1: Discovery & Strategy</h2>
                    <p className='banner-para'>We start by understanding your current state and desired future state. What works well? What's broken? What are the goals? What are the constraints? This phase creates shared understanding and realistic transformation strategy.</p>

                    <h2 className="term-hd-mini">Phase 2: Pilot Programs</h2>
                    <p className='banner-para'>We test major changes through small pilots before full rollout. Pilots prove the approach works. They identify issues to address. They build organizational confidence. You see results before committing fully.</p>

                    <h2 className="term-hd-mini">Phase 3: Phased Rollout</h2>
                    <p className='banner-para'>We implement transformation systematically. One business unit at a time. One process at a time. One system at a time. Each phase builds on previous success. You maintain operations while transforming them.</p>

                    <h2 className="term-hd-mini">Phase 4: Capability Building</h2>
                    <p className='banner-para'>Transformation requires new capabilities. New skills. New tools. New processes. We build these capabilities through training, documentation, and hands-on support. Your organization becomes capable of operating the new way.</p>

                    <h2 className="term-hd-mini">Phase 5: Continuous Improvement</h2>
                    <p className='banner-para'>Transformation doesn't end with implementation. We establish mechanisms for ongoing improvement. Metrics to track progress. Feedback loops to identify issues. Regular reviews to make adjustments. You keep improving after initial transformation completes.</p>

                </div>
            </section>

            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CASE STUDY: MANUFACTURING COMPANY</h2>
                    <h2 className="term-hd-mini">The Challenge:</h2>
                    <p className='banner-para'>A 75-year-old manufacturing company faced declining margins and lost market share. Competitors delivered faster with better quality. Their production systems were designed 30 years ago. Manual processes created bottlenecks. Quality problems weren't detected until final inspection. Customers were defecting</p>

                    <h2 className="term-hd-mini">What We Did:</h2>
                    <p className='banner-para'>We led a comprehensive transformation over 18 months. Implemented IoT sensors throughout production. Automated quality checks at each stage. Digitized work orders and tracking. Trained employees on new systems. Redesigned workflows around real-time data.</p>

                    <h2 className="term-hd-mini">The Result:</h2>
                    <p className='banner-para'>Production cycle time decreased 45%. Quality defects dropped 67%. On-time delivery improved from 72% to 96%. Customer retention improved. The company regained market share. Margins improved through efficiency gains. Employees embraced changes after seeing results.</p>

                </div>
            </section>


            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">GET STARTED WITH TRANSFORMATION</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Free Transformation Readiness Assessment</h4>
                            <p className="banner-para">We'll evaluate your organization's readiness for transformation. You'll understand what's required, what risks exist, and what timeline makes sense. </p>
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
