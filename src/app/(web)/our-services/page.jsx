"use client";
import Newsletter from '@/components/Newsletter'
import React, { useEffect } from 'react'
import { montserrat } from '../../../../public/font/font'
import Image from 'next/image'
import rightArrow from "@/app/(web)/assets/images/right-arrow.png"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import Header2 from '@/components/Header2';
import AOS from 'aos';
import { useRouter } from 'next/navigation';
import SocialLinks from '@/components/SocialLinks';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
const page = () => {
    const router = useRouter();
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
                            <h3 className='banner-hd-mini hd'>SERVICES OVERVIEW</h3>
                            <h1 className='banner-hd hd'>We Built Five Distinct Service Lines To Match <br /> The Different Ways Companies Need Help With Technology.</h1>
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
            <section className="services-provided">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-10 col-sm-12" data-aos="fade-right" data-aos-delay="200">
                            <div className="services-provide-wrapper1 services">
                                <h3 className={`${montserrat.className}`}>Strategy</h3>
                                <p className='banner-para mb-3 text-start'><span className='red'>What you need:</span> Clear direction on where your technology investments should go.</p>
                                <p className='banner-para mb-3 text-start'><span className='red'>What we deliver:</span> A practical roadmap that connects technology spending to revenue growth, with clear priorities and realistic timelines.</p>
                                <p className='banner-para mb-3 text-start'><span className='red'>Who this helps:</span> Companies making major technology decisions without a clear plan. Organizations where different departments compete for IT budget without understanding what matters most.</p>
                                <div className="btn-wrapper mt-3" onClick={() => router.push('/our-services/strategy')}>
                                    <div className="btn-fill"></div>
                                    <div className="btn-content">
                                        <div className="left-icon">
                                            <Image src={rightArrow} className='img-fluid' alt="" />
                                        </div>
                                        <div className="btn-text">LEARN MORE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 col-sm-12" data-aos="fade-left" data-aos-delay="200">
                            <div className="services-provide-wrapper2 services">
                                <h3 className={`${montserrat.className}`}>Fractional CTO</h3>
                                <p className='banner-para mb-3 text-start'><span className='red'>What you need:</span> Executive-level technology leadership without a full-time salary.</p>
                                <p className='banner-para mb-3 text-start'><span className='red'>What we deliver:</span> Part-time CTO services that provide strategic direction, technical oversight, and vendor management. This is technology leadership as a service that scales with your growth.</p>
                                <p className='banner-para mb-3 text-start'><span className='red'>Who this helps:</span> Growing companies that need experienced leadership but aren't ready for a $300,000+ executive hire. Organizations where the CEO or CFO is making tech decisions without the expertise to back them up.</p>
                                <div className="btn-wrapper mt-3" onClick={() => router.push('/our-services/fractional-CTO')}>
                                    <div className="btn-fill"></div>
                                    <div className="btn-content">
                                        <div className="left-icon">
                                            <Image src={rightArrow} className='img-fluid' alt="" />
                                        </div>
                                        <div className="btn-text">LEARN MORE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-6 col-md-10 col-sm-12" data-aos="fade-right" data-aos-delay="1000">
                            <div className="services-provide-wrapper3 services">
                                <h3 className={`${montserrat.className}`}>Digital</h3>
                                <p className='banner-para mb-3 text-start'><span className='red'>What you need:</span> Modern workflows that don't waste employee time.</p>
                                <p className='banner-para mb-3 text-start'><span className='red'>What we deliver:</span> Updated processes and tools that remove friction from daily work. Your teams spend less time fighting with technology and more time being productive.</p>
                                <p className='banner-para mb-3 text-start'><span className='red'>Who this helps:</span> Companies frustrated with how long things take. Businesses losing customers because competitors move faster. Organizations where outdated processes create bottlenecks.</p>
                                <div className="btn-wrapper mt-3" onClick={() => router.push("/our-services/digital-services")}>
                                    <div className="btn-fill"></div>
                                    <div className="btn-content">
                                        <div className="left-icon">
                                            <Image src={rightArrow} className='img-fluid' alt="" />
                                        </div>
                                        <div className="btn-text">LEARN MORE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 col-sm-12" data-aos="fade-left" data-aos-delay="1000">
                            <div className="services-provide-wrapper4 services">
                                <h3 className={`${montserrat.className}`}>Consulting</h3>
                                <p className='banner-para mb-3 text-start'><span className='red'>What you need:</span> Expert help for specific technical challenges.</p>
                                <p className='banner-para mb-3 text-start'><span className='red'>What we deliver:</span> <b>On-demand technology teams</b> for focused projects like security audits, cloud migrations, or performance optimization. You get specialists without permanent hires.</p>
                                <p className='banner-para mb-3 text-start'><span className='red'>Who this helps:</span> Companies facing problems their internal teams can't solve. Organizations starting projects that require specialized knowledge they don't have in-house.</p>
                                <div className="btn-wrapper mt-3" onClick={() => router.push("/our-services/consulting")}>
                                    <div className="btn-fill"></div>
                                    <div className="btn-content">
                                        <div className="left-icon">
                                            <Image src={rightArrow} className='img-fluid' alt="" />
                                        </div>
                                        <div className="btn-text">LEARN MORE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                        <div className="col-lg-6 col-md-10 col-sm-12" data-aos="fade-up" data-aos-delay="2000">
                            <div className="services-provide-wrapper5 services">
                                <h3 className={`${montserrat.className}`}>Advisory</h3>
                                <p className='banner-para mb-3 text-start'><span className='red'>What you need:</span> Ongoing access to experienced technology advisors.</p>
                                <p className='banner-para mb-3 text-start'><span className='red'>What we deliver:</span> <b>Human-led technology services</b> that provide guidance on major decisions. Think of it as having a trusted technology advisor on retainer.</p>
                                <p className='banner-para mb-3 text-start'><span className='red'>Who this helps:</span> Companies without deep technical expertise in leadership. Organizations that want second opinions on major technology decisions before committing resources.</p>
                                <div className="btn-wrapper mt-3" onClick={() => router.push("/our-services/advisory")}>
                                    <div className="btn-fill"></div>
                                    <div className="btn-content">
                                        <div className="left-icon">
                                            <Image src={rightArrow} className='img-fluid' alt="" />
                                        </div>
                                        <div className="btn-text">LEARN MORE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center">HOW WE WORK</h2>
                    <h4 className="term-hd-mini">Step 1: Discovery Call</h4>
                    <p className='banner-para'>We start with a conversation about your situation. What's working? What's broken? What are you trying to achieve? This call takes about 30 minutes and helps us understand if we're the right fit.</p>
                    <h4 className="term-hd-mini">Step 2: Assessment</h4>
                    <p className='banner-para'>If we move forward, we dig deeper. We review your current systems, talk to your teams, and identify the real problems. You get a clear picture of where you stand.</p>
                    <h4 className="term-hd-mini">Step 3: Recommendation</h4>
                    <p className='banner-para'>We present specific recommendations based on what we found. No generic proposals. No selling you things you don't need. Just honest advice about what will actually help.</p>
                    <h4 className="term-hd-mini">Step 4: Execution</h4>
                    <p className='banner-para'>If you decide to proceed, we get to work. Implementation timelines depend on the service, but we stay involved until the work is complete and you're seeing results.</p>
                    <h4 className="term-hd-mini">Step 5: Ongoing Support</h4>
                    <p className='banner-para'>Most clients continue working with us after initial projects. Technology needs ongoing attention. We're here when you need us, whether that's daily support or occasional check-ins.</p>
                </div>
            </section>
            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center">WHY COMPANIES CHOOSE FIVE 9</h2>
                    <h4 className="banner-para"><span className='red'>No Surprise Bills:</span> Fixed project costs or clear monthly retainers. You know what you're paying before work starts.</h4>
                    <h4 className="banner-para"><span className='red'>No Vendor Lock-In:</span> Our job is to make you more independent, not more dependent. We transfer knowledge so you're never stuck needing us.</h4>
                    <h4 className="banner-para"><span className='red'>No Overnight Disappearances:</span> When we take on a project, we finish it. We don't abandon clients when something better comes along.</h4>
                    <h4 className="banner-para"><span className='red'>24/7 Availability:</span> Real emergencies happen at 2 AM. We answer when you call, not during business hours only.</h4>
                    <h4 className="banner-para"><span className='red'>90% Retention Rate:</span> Most clients stick with us year after year. That tells you something about whether we deliver what we promise.</h4>
                </div>
            </section>
            <Testimonials />
            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">READY TO GET STARTED?</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Book a Free 30-Minute Consultation</h4>
                            <p className="banner-para">Tell us about your technology challenges. We'll tell you honestly if we can help. No sales pitch. No pressure. Just a straightforward conversation about your situation.</p>
                            <div className="btn-wrapper">
                                <div className="btn-fill"></div>
                                <div className="btn-content">
                                    <div className="left-icon">
                                        <Image src={rightArrow} className='img-fluid' alt="" />
                                    </div>
                                    <div className="btn-text">SCHEDULE YOUR CALL</div>
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
