"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import functionalImage1 from "@/app/(web)/assets/images/functional-img1.png"
import Newsletter from '@/components/Newsletter'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Header2 from '@/components/Header2';
import AOS from 'aos';
import SocialLinks from '@/components/SocialLinks';
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
                            <h3 className='banner-hd-mini hd'>Clear strategy, accountable execution, and informed decisions.</h3>
                            <h1 className='banner-hd hd'>Fractional CTO</h1>
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
                <h3 className='banner-hd-mini hd'>Get CTO-level guidance without hiring a CTO.</h3>
                <p className='banner-para text-center mt-3 mb-5'>Most growing companies need experienced <span className="red">technology leadership</span> but can't justify a $300,000+ executive salary. Our <span className="red">fractional CTO services</span> provide part-time technology leadership that scales with your needs. You get strategic direction, technical oversight, and vendor management from executives who've built systems at companies across industries.</p>
                <div className="btn-wrapper">
                    <div className="btn-fill"></div>
                    <div className="btn-content">
                        <div className="left-icon">
                            <Image src={rightArrow} className='img-fluid' alt="" />
                        </div>
                        <div className="btn-text">SCHEDULE CTO CONSULTATION</div>
                    </div>
                </div>
            </div>
            <section className="bridge-strategy">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1000">
                            {/* <h3 className='banner-hd-mini hd'>Bridge Strategy Design</h3> */}
                            <h1 className='banner-hd hd'>WHAT FRACTIONAL CTOs DO</h1>
                            <p className="banner-para">A <span className="red">fractional CTO</span> functions as your part-time technology executive. They join leadership meetings. They guide technical strategy. They evaluate major decisions. They oversee development teams or vendors. They provide the strategic thinking and technical judgment that growing companies need.</p>
                            {/* <p className='banner-para'>  At Five 9, our Fractional CTO service gives your organization access to senior-level technology leadership without the cost or commitment of a full-time executive. We provide the strategic vision, architectural guidance, and hands-on oversight needed to align technology with business goals, modernize complex environments, and support long-term growth.</p> */}
                        </div>
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1500">
                            <video src="/images/functional-video.mp4" className='img-fluid' playsInline muted loop autoPlay></video>
                        </div>
                    </div>
                    <div className="row mt-5 align-items-center">
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="2000">
                            <Image src={functionalImage1} className='img-fluid' alt="" />
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="2500">
                            {/* <p className="banner-para">We step in as a trusted partner, helping you define a clear technology roadmap, prioritize investments, and make informed decisions across cloud, infrastructure, cybersecurity, applications, data, and AI. Whether you're navigating a major transformation, stabilizing an environment, preparing for scale, or simply need experienced leadership to guide your team, we provide the clarity and direction to move your organization forward with confidence. </p> */}
                            <p className='banner-para'> The difference between <span className="red">fractional CTO consulting</span> and traditional consulting is integration level. Consultants visit occasionally and deliver recommendations. Fractional CTOs become part of your team. They understand your business deeply. They're available when questions arise. They own outcomes, not just advice.</p>
                        </div>
                    </div>
                </div>
            </section>





            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">FRACTIONAL CTO SERVICES</h2>
                    <h2 className="term-hd-mini">Strategic IT Leadership</h2>
                    <p className='banner-para'>Technology decisions affect your entire business. Cloud migrations. ERP implementations. Security investments. Platform choices. Our <span className="red">strategic IT leadership</span> services ensure these decisions support business strategy. Your technology investments drive growth instead of just maintaining operations.</p>

                    <h2 className="term-hd-mini">Technology Leadership Services</h2>
                    <p className='banner-para'>Growing companies need someone making sure technology enables rather than limits the business. Architecture decisions. Team structure. Development practices. Tool selection. Our <span className="red">technology leadership services</span> provide this oversight. You avoid accumulating technical debt that becomes expensive to fix later.</p>

                    <h2 className="term-hd-mini">CTO Advisory Services</h2>
                    <p className='banner-para'>Sometimes you need experienced judgment on specific questions rather than ongoing involvement. Should we build or buy? Is this vendor proposal reasonable? Does this architecture make sense? Our <span className="red">CTO advisory services</span> provide expert input when needed. You get answers from people who've faced these decisions successfully.</p>

                    <h2 className="term-hd-mini">Virtual CTO Consulting</h2>
                    <p className='banner-para'>Not every company needs on-site executive presence. Our <span className="red">virtual CTO consulting</span> services provide leadership remotely. Video calls. Slack communication. Periodic on-site visits. You get the expertise without geographic constraints.</p>

                </div>
            </section>




            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">WHO NEEDS A FRACTIONAL CTO</h2>
                    <h2 className="term-hd-mini">Startups & Scale-ups</h2>
                    <p className='banner-para'>Early-stage companies need technology leadership but can't afford full-time CTOs. They face critical decisions about technology stack, team building, and architecture. <span className="red">Startup & enterprise CTO advisory</span> helps them make sound decisions during crucial growth phases.</p>

                    <h2 className="term-hd-mini">Companies Without Technical Leadership</h2>
                    <p className='banner-para'>Your CEO and CFO understand business but not technology. They're making technology decisions without technical backgrounds. A fractional CTO gives them someone to consult who understands both business and technology.</p>

                    <h2 className="term-hd-mini">Companies Outgrowing Current Leadership</h2>
                    <p className='banner-para'>Your technical lead excels at writing code but struggles with strategy and management. You need executive-level thinking but don't want to displace someone valuable. A fractional CTO provides strategic oversight while your technical lead focuses on what they do best.</p>

                    <h2 className="term-hd-mini">Companies Facing Major Initiatives</h2>
                    <p className='banner-para'>Cloud migration. System replacement. Security overhaul. Major projects carry significant risk. Having experienced leadership for the duration reduces failure probability substantially.</p>

                </div>
            </section>




            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">FRACTIONAL CTO ENGAGEMENT MODELS</h2>
                    <h2 className="term-hd-mini">Part-Time Recurring</h2>
                    <p className='banner-para'>Regular involvement on a consistent schedule. 1-2 days per week. Monthly retainer. Fractional CTO joins leadership meetings, reviews technical work, and provides ongoing guidance. Best for companies needing steady strategic input.</p>

                    <h2 className="term-hd-mini">Project-Based</h2>
                    <p className='banner-para'>Intensive involvement for defined initiatives. Full-time or near full-time for 3-6 months. Fractional CTO leads major projects like technology transformations or platform migrations. Best for companies facing critical initiatives requiring experienced leadership.</p>

                    <h2 className="term-hd-mini">Advisory Only</h2>
                    <p className='banner-para'>Lower-intensity involvement for specific decisions. Monthly or quarterly check-ins. Available for questions between meetings. Fractional CTO provides guidance without day-to-day involvement. Best for companies with solid technical teams needing occasional expert input.</p>

                </div>
            </section>



            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">WHAT FRACTIONAL CTOs DELIVER</h2>
                    <h2 className="term-hd-mini">Technology Strategy</h2>
                    <p className='banner-para'>Clear roadmaps connecting technology investments to business goals. Prioritized initiatives based on impact. Realistic timelines accounting for resources and dependencies.</p>

                    <h2 className="term-hd-mini">Architecture Oversight</h2>
                    <p className='banner-para'>Sound technical architecture that supports growth. Reviewed designs before implementation. Prevention of technical debt accumulation.</p>

                    <h2 className="term-hd-mini">Team Development</h2>
                    <p className='banner-para'>Guidance on hiring, organizing, and developing technical teams. Interview participation for key hires. Team structure recommendations. Development of technical leadership.</p>

                    <h2 className="term-hd-mini">Vendor Management</h2>
                    <p className='banner-para'>Objective evaluation of vendor proposals. Negotiation support for major contracts. Management of vendor relationships and deliverables.</p>

                    <h2 className="term-hd-mini">Risk Management</h2>
                    <p className='banner-para'>Identification of technical risks before they become problems. Security vulnerability assessment. Compliance requirement verification. Disaster recovery planning.</p>

                </div>
            </section>


            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">FRACTIONAL CTO BACKGROUNDS</h2>
                    <p className='banner-para'>Our fractional CTOs have held senior technology leadership roles at companies ranging from venture-backed startups to public enterprises. They've managed technology budgets from $500,000 to $50 million. They've led teams from 5 people to 500 people.</p>

                    <p className='banner-para'>More importantly, they've built systems that worked and fixed systems that didn't. They've made technology decisions that succeeded and learned from ones that failed. This experience is what you're accessing through <span className="red">on-demand CTO for businesses</span> services.</p>




                </div>
            </section>

            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CASE STUDY: HEALTHCARE STARTUP</h2>
                    <h2 className="term-hd-mini">The Challenge:</h2>
                    <p className='banner-para'>A healthcare technology startup raised Series A funding and needed to scale from MVP to production-ready platform. The founding team had strong domain expertise but limited technology leadership experience. They faced critical architecture decisions without the knowledge to evaluate options confidently.</p>

                    <h2 className="term-hd-mini">What We Did:</h2>
                    <p className='banner-para'>Provided fractional CTO services 2 days per week for 12 months. Redesigned architecture for HIPAA compliance and scale. Established development practices and quality standards. Hired and organized engineering team. Oversaw vendor relationships. Guided technology decisions at board level.</p>

                    <h2 className="term-hd-mini">The Result:</h2>
                    <p className='banner-para'>Platform successfully launched to first customers. Achieved HIPAA compliance. Scaled to 100,000 users without performance issues. Raised Series B based on technology credibility. Transitioned to full-time CTO hire after establishing solid foundation.</p>

                </div>
            </section>




            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">GET STARTED WITH FRACTIONAL CTO SERVICES</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Schedule a Free Consultation</h4>
                            <p className="banner-para">Tell us about your technology challenges and business goals. We'll discuss whether fractional CTO services make sense for your situation and what engagement model fits your needs.</p>
                            <div className="btn-wrapper">
                                <div className="btn-fill"></div>
                                <div className="btn-content">
                                    <div className="left-icon">
                                        <Image src={rightArrow} className='img-fluid' alt="" />
                                    </div>
                                    <div className="btn-text">SCHEDULE CONSULTATION</div>
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
