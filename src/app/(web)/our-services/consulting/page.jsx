"use client";
import React, { useEffect } from 'react'
import { gsap } from "gsap";
import Newsletter from '@/components/Newsletter'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header2 from '@/components/Header2';
import AOS from 'aos';
import SocialLinks from '@/components/SocialLinks';
import rightArrow from "@/app/(web)/assets/images/right-arrow.png"
import Image from 'next/image';
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
                            <h3 className='banner-hd-mini hd'>Get solutions, not proposals.</h3>
                            <h1 className='banner-hd hd'>Consulting Services</h1>
                        </div>
                        <div className="video-area-sec">
                            <video src="/images/our-services-sec-banner.mp4" autoPlay playsInline muted loop controls={false}>
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

            <div className="container text-center mt-5" data-aos="fade-right" data-aos-delay="500">
                <h3 className='banner-hd-mini hd'>Solve specific technical challenges without permanent hires. </h3>
                <p className='banner-para text-center mt-3 mb-5'>Sometimes you face technical problems your internal team can't solve alone. Security audits. Cloud migrations. Performance optimization. System integrations. You need expertise fast for defined projects. We provide <span className="red">strategic technology consulting</span> that solves problems efficiently. You get specialists without expanding headcount.</p>
            </div>

            <section className="bridge-strategy">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1000">
                            {/* <h3 className='banner-hd-mini hd'>Solve Complex Challenges</h3> */}
                            <h1 className='banner-hd hd'>WHAT MAKES CONSULTING WORK</h1>
                            <p className="banner-para">Most <span className="red">IT support & consulting</span> fails because consultants don't transfer knowledge. They create dependency instead of capability. We approach consulting differently. We solve your immediate problem while teaching your team how we did it. When we leave, the problem stays solved and your team knows more than before.</p>
                            {/* <p className='banner-para'>Our approach is grounded in understanding your business first. We assess your current environment, identify bottlenecks, and map out actionable solutions that align with your goals, budget, and timelines.</p> */}
                        </div>
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1500">
                            <video src="/images/Consulting-video.mp4" className='img-fluid' autoPlay loop playsInline muted></video>
                        </div>
                    </div>
                    <div className="row mt-5 align-items-center">
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="2000">
                            <video src="/images/consulting-page-video2.mp4" className='img-fluid startegy-video' autoPlay loop playsInline muted controls={false}></video>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="2500">
                            {/* <p className="banner-para">From infrastructure and application modernization to cybersecurity, automation, ERP/MES planning, and integration strategy, we bring a 360-degree perspective that ensures all parts of your technology ecosystem work together seamlessly.</p> */}
                            <p className='banner-para'>Our consultants have solved these exact problems dozens of times. They know what works and what fails. They've seen every variation and complication. You get solutions based on proven experience, not experiments on your systems.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CONSULTING SERVICE AREAS</h2>
                    <h2 className="term-hd-mini">Technology Consulting for Business</h2>
                    <p className='banner-para'>Business challenges often have technology solutions. Improving customer service. Reducing operational costs. Accelerating time-to-market. Increasing competitive differentiation. Our <span className="red">technology consulting for business</span> services connect business needs to technical solutions. You get recommendations that actually help achieve business goals.</p>

                    <h2 className="term-hd-mini">Premium IT Solutions</h2>
                    <p className='banner-para'>Standard solutions work for standard problems. Complex challenges need custom approaches. Our <span className="red">premium IT solutions</span> services design and implement solutions tailored to your specific situation. You get exactly what you need, not close enough.</p>

                    <h2 className="term-hd-mini">Digital Consulting Firm</h2>
                    <p className='banner-para'>Digital initiatives often require specialized expertise. API development. Mobile applications. E-commerce platforms. Digital workflows. Our <span className="red">digital consulting firm</span> capabilities help you implement modern digital solutions. You move faster with people who've built these systems before.</p>

                    <h2 className="term-hd-mini">Management & IT Consulting</h2>
                    <p className='banner-para'>Technology and business management intersect constantly. Portfolio management. Program delivery. Change management. Governance frameworks. Our <span className="red">management & IT consulting</span> services address both technical and organizational aspects of initiatives. You get solutions that work technically and organizationally.</p>

                </div>
            </section>


            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CONSULTING ENGAGEMENT TYPES</h2>
                    <h2 className="term-hd-mini">Assessment & Advisory</h2>
                    <p className='banner-para'>Sometimes you need objective evaluation before committing resources. Technology assessments. Architecture reviews. Security audits. Vendor evaluations. We provide expert analysis and recommendations. You make decisions based on facts from experienced sources.</p>

                    <h2 className="term-hd-mini">Implementation Support</h2>
                    <p className='banner-para'>You've decided what to do and need help executing. Cloud migrations. System implementations. Integration projects. We provide hands-on support that gets projects across the finish line. Your team works alongside our experts and learns while building.</p>

                    <h2 className="term-hd-mini">Problem Solving</h2>
                    <p className='banner-para'>Something's broken and needs fixing fast. Performance issues. Security incidents. System failures. Integration problems. We diagnose root causes and implement fixes. Your systems get back to working properly quickly.</p>

                    <h2 className="term-hd-mini">Knowledge Transfer</h2>
                    <p className='banner-para'>Your team needs to develop specific capabilities. New technologies. Best practices. Architecture patterns. We provide focused training and mentoring. Your team gains expertise that stays after consultants leave.</p>

                </div>
            </section>


            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">HOW CONSULTING ENGAGEMENTS WORK</h2>
                    <h2 className="term-hd-mini">Step 1: Problem Definition</h2>
                    <p className='banner-para'>We start by fully understanding your challenge. What's the specific problem? What have you tried? What constraints exist? What does success look like? This clarity ensures we solve the right problem correctly.</p>

                    <h2 className="term-hd-mini">Step 2: Approach Planning</h2>
                    <p className='banner-para'>We design an approach that fits your situation. What expertise is needed? What timeline makes sense? What deliverables matter? What risks need management? You see the plan before work begins.</p>

                    <h2 className="term-hd-mini">Step 3: Execution</h2>
                    <p className='banner-para'>We execute the plan while staying flexible as new information emerges. Regular updates keep you informed. Course corrections happen based on what we learn. You stay involved throughout.</p>

                    <h2 className="term-hd-mini">Step 4: Knowledge Transfer</h2>
                    <p className='banner-para'>We document what we did and why. We train your team on solutions we implemented. We answer questions and explain rationale. When we finish, your team can maintain and extend what we built.</p>

                    <h2 className="term-hd-mini">Step 5: Handoff & Closure</h2>
                    <p className='banner-para'>We don't just deliver and disappear. We stay involved during transition to ensure solutions work in production. We're available for questions during the stabilization period. You have confidence everything works before we close the engagement.</p>

                </div>
            </section>


            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className='term-hd'>CONSULTING EXPERTISE AREAS</h2>
                    <p className='banner-para'>Our consultants specialize in specific domains. You get experts who live and breathe their particular field:</p>
                    <ul className='term-list'>
                        <li className='banner-para'><span className='red'>Cloud Architecture:</span> AWS, Azure, GCP migrations and optimization</li>
                        <li className='banner-para'><span className='red'>Security: </span> Penetration testing, compliance, incident response</li>
                        <li className='banner-para'><span className='red'>Data Engineering: </span> Pipelines, warehouses, analytics platforms</li>
                        <li className='banner-para'><span className='red'>Application Development: </span> Custom software, integrations, modernization</li>
                        <li className='banner-para'><span className='red'>Infrastructure: </span> Networks, servers, storage, monitoring</li>
                        <li className='banner-para'><span className='red'>AI/ML: </span> Model development, deployment, MLOps</li>
                    </ul>
                </div>
            </section>



            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CASE STUDY: FINANCIAL SERVICES FIRM</h2>
                    <h2 className="term-hd-mini">The Challenge:</h2>
                    <p className='banner-para'>A financial services firm needed to migrate their trading platform to cloud within 6 months for regulatory compliance. Their internal team lacked cloud expertise. The platform processed millions in transactions daily. Any downtime would cost significantly. They couldn't hire cloud architects fast enough to meet the deadline.</p>

                    <h2 className="term-hd-mini">What We Did:</h2>
                    <p className='banner-para'>Provided a team of cloud consultants for the 6-month project. Assessed the current architecture. Designed cloud-native replacement. Executed migration in phases. Ran parallel systems until confident. Transferred knowledge to internal team throughout.</p>

                    <h2 className="term-hd-mini">The Result:</h2>
                    <p className='banner-para'>Migration completed on schedule. Zero downtime during cutover. Platform performance improved 40%. Cloud costs optimized through proper architecture. Internal team gained cloud capabilities through knowledge transfer. Regulatory compliance achieved.</p>

                </div>
            </section>


            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">GET EXPERT CONSULTING HELP</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Schedule a Free Consultation</h4>
                            <p className="banner-para">Tell us about the challenge you're facing. We'll discuss whether consulting makes sense and outline how we'd approach solving it.</p>
                            <div className="btn-wrapper" onClick={() => router.push("/contact-us")}>
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
