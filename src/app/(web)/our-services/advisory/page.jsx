"use client";
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Newsletter from '@/components/Newsletter'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header2 from '@/components/Header2';
import AOS from 'aos';
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
                            <h3 className='banner-hd-mini hd'>Support your strategy, manage risks, and accelerate initiatives.</h3>
                            <h1 className='banner-hd hd'>Advisory Services</h1>
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
                <h3 className='banner-hd-mini hd'>Access experienced technology advisors without hiring full-time executives. </h3>
                <p className='banner-para text-center mt-3 mb-5'>Major technology decisions carry real risk. Choose the wrong vendor and waste hundreds of thousands. Approve the wrong architecture and limit growth for years. Make the wrong security trade-off and face regulatory fines. Our technology advisory services firm gives you access to people who've made these decisions successfully at companies across industries.</p>
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
            <section className="bridge-strategy">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1000">
                            {/* <h3 className='banner-hd-mini hd'>Aligning Technology with</h3> */}
                            <h1 className='banner-hd hd'>WHAT ADVISORY SERVICES PROVIDE</h1>
                            <p className="banner-para">Business technology advisory means having experienced people to call when important questions arise. Should we approve this IT budget request? Is this vendor quoting us fairly? Does this security risk actually matter? Can we trust this vendor's roadmap?</p>
                            <p className='banner-para'>You don't need full-time help, but you do need someone knowledgeable. Our advisors have built systems at Fortune 500 companies and fast-growing startups. They've seen what works and what fails. They've made expensive mistakes so you don't have to.</p>
                        </div>
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1500">
                            <video src="/images/advisory-page-video.mp4" className='img-fluid' loop autoPlay muted playsInline></video>
                        </div>
                    </div>
                    <div className="row mt-5 align-items-center">
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="2000">
                            <video src="/images/advisory-page-video2.mp4" className='img-fluid' autoPlay muted controls={false} loop playsInline></video>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="2500">
                            <p className="banner-para">Some clients call us weekly. Others reach out monthly. The relationship stays flexible based on what's happening in your business. You get strategic advisory services exactly when you need them, not on a rigid schedule that doesn't match reality.</p>
                            {/* <p className='banner-para'>In short: working with Five 9 means having a strategic partner — someone who doesn't just deliver IT advice, but helps make technology an engine of resilience, agility, and business growth.</p> */}
                        </div>
                    </div>
                </div>
            </section>





            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">ADVISORY SERVICE AREAS</h2>
                    <h2 className="term-hd-mini">Enterprise IT Governance</h2>
                    <p className='banner-para'>Large organizations need governance frameworks that balance control with agility. Too much process slows everything down. Too little process creates chaos. We help you design <span className='red'> enterprise IT governance</span> that works for your culture. Decision rights get clarified. Approval processes get streamlined. Technology investments align with business strategy.</p>

                    <h2 className="term-hd-mini">Executive Technology Advisory</h2>
                    <p className='banner-para'>Your leadership team makes technology decisions that affect the entire company. Cloud migrations. ERP implementations. Security investments. Digital transformation initiatives. Our <span className="red">executive technology advisory</span> provides strategic guidance at the board level. We help executives understand technology implications of business decisions and business implications of technology choices.</p>

                    <h2 className="term-hd-mini">IT Advisory Services</h2>
                    <p className='banner-para'>Your IT team needs outside perspective sometimes. Is our architecture sound? Are we building technical debt? Are our practices current? Our <span className="red">IT advisory services</span> provide that objective view. We review your technical strategy, architecture decisions, and operational practices. You get honest feedback from people who've built and scaled systems across industries.</p>

                    <h2 className="term-hd-mini">Strategic Advisory Services</h2>
                    <p className='banner-para'>Where should your technology go over the next 3-5 years? What trends actually matter to your business? How do competitors use technology? What investments position you for growth? Our <span className="red">strategic advisory services</span> help you think long-term while managing short-term needs. You get perspective beyond daily firefighting.</p>
                </div>
            </section>



            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">WHO NEEDS ADVISORY SERVICES</h2>
                    <h2 className="term-hd-mini">Companies Without Technical Leadership</h2>
                    <p className='banner-para'>Your CEO and CFO make technology decisions without technical backgrounds. They're smart people, but technology isn't their expertise. Advisory services give them access to experienced judgment without hiring a CTO. They get answers they can trust when evaluating major initiatives.</p>

                    <h2 className="term-hd-mini">Companies Evaluating Major Changes</h2>
                    <p className='banner-para'>Cloud migration. ERP replacement. Data center consolidation. These projects represent massive investments and multi-year commitments. Getting them wrong wastes millions. Advisory services help you evaluate options, challenge vendor claims, and make decisions based on facts instead of sales pitches.</p>

                    <h2 className="term-hd-mini">Companies Needing Second Opinions</h2>
                    <p className='banner-para'>Your internal team recommends something expensive. A vendor promises amazing results. You want someone outside your organization to tell you if it makes sense. Advisory services provide that independent perspective. We have no stake in what you choose beyond wanting you to succeed.</p>

                    <h2 className="term-hd-mini">Companies Facing Regulatory Requirements</h2>
                    <p className='banner-para'>Industries like healthcare, finance, and government contracting face strict technology requirements. HIPAA. PCI-DSS. FedRAMP. CMMC. Understanding what's actually required versus what vendors claim you need saves significant money. Advisory services help you meet requirements without overspending.</p>

                </div>
            </section>



            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">HOW ADVISORY ENGAGEMENTS WORK</h2>
                    <h2 className="term-hd-mini">Initial Discussion</h2>
                    <p className='banner-para'>We start with a conversation about your situation. What decisions are you facing? What concerns do you have? What outcomes matter most? This discussion helps us understand if advisory services make sense for your needs.</p>

                    <h2 className="term-hd-mini">Engagement Structure</h2>
                    <p className='banner-para'>Advisory relationships typically run on monthly retainers. You get a set number of hours each month for calls, reviews, and guidance. Some months you use all the time. Other months you use less. Unused hours usually roll over for a reasonable period.</p>

                    <h2 className="term-hd-mini">Ongoing Relationship</h2>
                    <p className='banner-para'>As we work together, we learn your business deeply. Your goals. Your constraints. Your culture. Your risk tolerance. This knowledge makes our advice more relevant over time. We become an extension of your leadership team.</p>

                    <h2 className="term-hd-mini">Deliverables</h2>
                    <p className='banner-para'>Advisory engagements focus on guidance, not documentation. You get our expertise through conversations, not lengthy reports. When documentation helps, we provide it. But the real value is having experienced people to talk through complex decisions.</p>
                </div>
            </section>



            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CASE STUDY: MANUFACTURING COMPANY</h2>
                    <h2 className="term-hd-mini">The Challenge:</h2>
                    <p className='banner-para'>A manufacturing company planned to spend $2 million on an ERP replacement. The vendor promised transformation. The sales team showed impressive demos. Leadership wanted to sign but had concerns about implementation risk.</p>

                    <h2 className="term-hd-mini">What We Did:</h2>
                    <p className='banner-para'>We conducted due diligence on the vendor and solution. Interviewed reference customers. Reviewed the implementation plan. Identified several red flags the sales process glossed over. The vendor's timeline was unrealistic. Their industry experience was limited. Their implementation team was understaffed.</p>

                    <h2 className="term-hd-mini">The Result:</h2>
                    <p className='banner-para'>We recommended exploring alternatives. The company evaluated three other vendors. They selected a different solution that cost $1.4 million and fit their needs better. Implementation took 14 months instead of the originally promised 8 months, which our assessment predicted. The company avoided a failed implementation that would have cost millions to fix.</p>

                </div>
            </section>


            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">ADVISORY TEAM EXPERTISE</h2>
                    <p className='banner-para'>Our advisors have held CTO, CIO, and VP Engineering roles at companies ranging from startups to public enterprises. They've managed technology budgets from $500,000 to $50 million annually. They've led teams from 5 people to 500 people.</p>
                    <p className='banner-para'>More importantly, they've made and learned from real decisions. They've chosen technologies that succeeded and failed. They've hired well and hired poorly. They've managed successful transformations and rescued failing ones. This experience is what you're accessing through advisory services.</p>
                </div>
            </section>

            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">GET STARTED WITH ADVISORY SERVICES</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Schedule a 30-Minute Consultation</h4>
                            <p className="banner-para">Start with a conversation. You’ll leave knowing whether advisory support is worth pursuing.</p>
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
