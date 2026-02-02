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
                            <h3 className='banner-hd-mini hd'>Make Enterprise Applications Work For Your Business</h3>
                            <h1 className='banner-hd hd'>Enterprise Applications</h1>
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
            <div className="container text-center mt-5 service-btn-max3 mb-5" data-aos="fade-right" data-aos-delay="500">
                <h3 className='banner-hd-mini hd'>Upgrade Enterprise Applications Without Slowing Down Operations</h3>
                <p className='banner-para text-center mt-3 mb-5'>Teams juggle outdated software, disconnected systems, and slow applications that waste hours every day. Employees struggle with manual workflows, frustrating interfaces, and tools that don’t communicate, while managers lose visibility into operations and critical data. These challenges slow growth, reduce productivity, and create stress across the organization. We can fix these problems—and that’s exactly what we help you do.</p>
                <div className="btn-wrapper">
                    <div className="btn-fill"></div>
                    <div className="btn-content">
                        <div className="left-icon">
                            <Image src={rightArrow} className='img-fluid' alt="" />
                        </div>
                        <div className="btn-text">DISCUSS YOUR ENTERPRISE APPLICATION NEEDS </div>
                    </div>
                </div>

            </div>

            <section className="security-sec">
                <div className="container">
                    <div className="security-content-wrapper" data-aos="fade-right" data-aos-delay="1000">
                        <div className="row align-items-center">
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1500">
                                {/* <h3 className='banner-hd-mini hd'>Bridge Strategy Design</h3> */}
                                <h1 className='banner-hd hd'>ENTERPRISE APPLICATIONS</h1>
                                <p className="banner-para">Enhance productivity with software that meets your business needs. We create custom enterprise applications, integrate systems for seamless workflows, optimize performance, and improve user experiences to ensure teams can work efficiently and effectively.</p>
                                <h4 className='term-hd-mini'>Common challenges we solve:</h4>
                                <p className="banner-para">Disjointed systems that don’t communicate, slow or outdated software, complex workflows that frustrate employees, difficulty scaling applications as the business grows.</p>
                            </div>
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="2000">
                                <video src="/images/application-video.mp4" className='img-fluid' data-aos="fade-left" data-aos-delay="2500" autoPlay playsInline loop muted></video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            <section className="service-work-sec">
                <div className="container">
                    {/* <h2 className="term-hd text-center mb-5">ADVISORY SERVICE AREAS</h2> */}
                    <h2 className="term-hd-mini">Custom Enterprise Software</h2>
                    <p className='banner-para'>We build software tailored to your business processes and goals. Unlike off-the-shelf tools, custom applications fit your workflows perfectly, reduce friction, and maximize efficiency.</p>

                    <h2 className="term-hd-mini">Application Integration</h2>
                    <p className='banner-para'>Seamlessly connect your software ecosystem. We link ERP, CRM, analytics, and productivity tools so information flows automatically and teams work smarter.</p>

                    <h2 className="term-hd-mini">Modernization & Updates</h2>
                    <p className='banner-para'>Update legacy applications without disrupting operations. We modernize code, improve performance, and enable integration with modern platforms while maintaining reliability.</p>

                    <h2 className="term-hd-mini">Scalable Applications</h2>
                    <p className='banner-para'>Design software that grows with your business. From small teams to enterprise-level scale, we ensure applications remain fast, reliable, and capable as demand increases.</p>
                </div>
            </section>



            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">APPLICATION DEVELOPMENT APPROACH</h2>
                    <h2 className="term-hd-mini">Discovery & Planning</h2>
                    <p className='banner-para'>We analyze your workflows, user needs, and technology environment. This ensures applications solve the right problems and integrate seamlessly with your systems.</p>

                    <h2 className="term-hd-mini">Design & Prototyping</h2>
                    <p className='banner-para'>Wireframes, prototypes, and mockups allow early feedback, reducing rework. You see the design before development begins.</p>

                    <h2 className="term-hd-mini">Iterative Development</h2>
                    <p className='banner-para'>Agile processes deliver working software in short cycles. Regular demos let you provide feedback and adjust priorities continuously.</p>

                    <h2 className="term-hd-mini">Testing & Quality Assurance</h2>
                    <p className='banner-para'>Automated and manual testing ensures security, performance, and reliability under real-world conditions.</p>

                    <h2 className="term-hd-mini">Deployment & Support</h2>
                    <p className='banner-para'>We deploy carefully, monitor systems, and provide ongoing support to maintain performance. Your team never gets left behind.</p>

                </div>
            </section>


            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">APPLICATION TYPES WE BUILD</h2>
                    <ul className='term-list'>
                        <li className='banner-para'><span className='red'>Internal Business Applications:</span> ERP, HR, project management, inventory systems.</li>
                        <li className='banner-para'><span className='red'>Customer-Facing Software: </span> Portals, e-commerce platforms, mobile apps, self-service solutions.</li>
                        <li className='banner-para'><span className='red'>Analytics & Reporting Tools: </span> Dashboards, BI applications, data visualization platforms.</li>
                        <li className='banner-para'><span className='red'>Integration Applications: </span> APIs, middleware, and automation for seamless system connectivity.</li>
                    </ul>
                </div>
            </section>



            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">TECHNOLOGIES WE USE</h2>
                    <ul className='term-list'>
                        <li className='banner-para'><span className='red'>Frontend:</span> React, Vue, Angular</li>
                        <li className='banner-para'><span className='red'>Mobile: </span> iOS, Android, React Native</li>
                        <li className='banner-para'><span className='red'>Backend: </span> Node.js, Python, Java, .NET</li>
                        <li className='banner-para'><span className='red'>Databases: </span> PostgreSQL, MySQL, MongoDB</li>
                        <li className='banner-para'><span className='red'>Cloud: </span> AWS, Azure, GCP</li>
                        <li className='banner-para'><span className='red'>APIs: </span> REST, GraphQL</li>
                    </ul>
                    <p className='banner-para'>Technology choices are based on your needs, not trends.</p>
                </div>
            </section>


            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CASE STUDY: MANUFACTURING FIRM</h2>
                    <h2 className="term-hd-mini">The Challenge:</h2>
                    <p className='banner-para'>A manufacturing company used spreadsheets and outdated software to track orders and production. Manual processes caused errors, delayed shipments, and frustrated employees.</p>

                    <h2 className="term-hd-mini">Our Solution:</h2>
                    <p className='banner-para'>Developed a custom production management application, integrated with inventory and order systems, added reporting dashboards, and mobile tools for staff.</p>

                    <h2 className="term-hd-mini">The Result:</h2>
                    <p className='banner-para'>Production errors dropped 50%, shipment times improved 40%, and employees saved hours weekly. Operations scaled efficiently without adding headcount.</p>

                </div>
            </section>




            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">GET STARTED WITH ENTERPRISE APPLICATIONS</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Discuss Your Software Needs</h4>
                            <p className="banner-para">Tell us your goals. We’ll advise on custom development, modernization, or integration strategies that fit your business.</p>
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
