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
                            <h3 className='banner-hd-mini hd'>Custom apps, seamless integrations, and updated systems.</h3>
                            <h1 className='banner-hd hd'>Applications</h1>
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
            <div className="container text-center mt-5 startegy-video" data-aos="fade-right" data-aos-delay="500">
                <h3 className='banner-hd-mini hd'>Modernize legacy systems, integrate your tools, and make every application work for you.</h3>
                <p className='banner-para text-center mt-3 mb-5'>Your team uses software constantly. The quality of those applications directly impacts productivity. Slow applications waste time. Confusing interfaces frustrate users. Systems that don't integrate create manual work. We provide <span className='red'>business application consulting</span> that makes software serve your needs instead of the other way around.</p>
            </div>

            <section className="security-sec">
                <div className="container">
                    <div className="security-content-wrapper" data-aos="fade-right" data-aos-delay="1000">
                        <div className="row align-items-center">
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1500">
                                {/* <h3 className='banner-hd-mini hd'>Bridge Strategy Design</h3> */}
                                <h1 className='banner-hd hd'>APPLICATIONS</h1>
                                <p className="banner-para">Develop and optimize software your team actually wants to use. We create custom applications, integrate different systems, improve performance, and redesign user experiences that reduce training time and increase productivity.</p>
                                <h4 className='term-hd-mini'>Common challenges we solve:</h4>
                                <p className="banner-para">Software that frustrates employees, systems that don't talk to each other, slow applications that waste time, poor user experiences that require extensive training.</p>
                            </div>
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="2000">
                                <video src="/images/app-video.mp4" className='img-fluid' data-aos="fade-left" data-aos-delay="2500" autoPlay playsInline loop muted></video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">APPLICATION SERVICES</h2>
                    <h2 className="term-hd-mini">Custom Software Solutions</h2>
                    <p className='banner-para'>Sometimes off-the-shelf software doesn't fit your needs. Unique processes. Specific requirements. Competitive differentiation. We build <span className='red'>custom software solutions</span> designed exactly for how your business operates. You get applications that match your workflows instead of forcing workflows to match generic software.</p>

                    <h2 className="term-hd-mini">Enterprise Application Development</h2>
                    <p className='banner-para'>Large organizations have complex application needs. Integration with existing systems. Security and compliance requirements. Scale and performance demands. Our <span className="red">enterprise application development</span> services build applications that work in complex enterprise environments. You get software that handles real-world demands.</p>

                    <h2 className="term-hd-mini">Application Modernization Services</h2>
                    <p className='banner-para'>Legacy applications eventually hold businesses back. Old code that's hard to change. Outdated technology that limits capabilities. Systems that can't integrate with modern platforms. Our <span className="red">application modernization services</span> update applications systematically. You get modern capabilities without rebuilding everything.</p>

                    <h2 className="term-hd-mini">Digital Application Platforms</h2>
                    <p className='banner-para'>Modern applications need modern platforms. Cloud-native architecture. API-first design. Mobile-ready interfaces. Microservices structure. We build <span className="red">digital application platforms</span> using current best practices. You get applications built for how software works today, not how it worked 20 years ago.</p>

                    <h2 className="term-hd-mini">Scalable Business Applications</h2>
                    <p className='banner-para'>Applications need to grow with your business. What works for 10 users breaks with 10,000 users. We design <span className="red">scalable business applications</span> that handle growth gracefully. You don't outgrow your software as your business succeeds.</p>

                </div>
            </section>



            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">APPLICATION DEVELOPMENT APPROACH</h2>
                    <h2 className="term-hd-mini">Discovery & Requirements</h2>
                    <p className='banner-para'>We start by understanding what you need. What problems does the application solve? Who uses it? What workflows must it support? What systems must it integrate with? What performance is required? Clear requirements prevent building the wrong thing.</p>

                    <h2 className="term-hd-mini">Design & Prototyping</h2>
                    <p className='banner-para'>We design user interfaces and application architecture before coding. Interactive prototypes let you see and test the design. Feedback happens early when changes are inexpensive. You know what you're getting before development begins.</p>

                    <h2 className="term-hd-mini">Agile Development</h2>
                    <p className='banner-para'>We build applications iteratively. Working software every 2-4 weeks. Regular demos and feedback. Course corrections based on what you learn. You see progress continuously instead of waiting months for a big reveal.</p>

                    <h2 className="term-hd-mini">Testing & Quality Assurance</h2>
                    <p className='banner-para'>Applications must work correctly under real conditions. Automated testing catches bugs early. Performance testing ensures speed under load. Security testing identifies vulnerabilities. You get quality software that works reliably.</p>

                    <h2 className="term-hd-mini">Deployment & Support</h2>
                    <p className='banner-para'>We deploy applications to production carefully. Monitoring catches issues immediately. We provide support during stabilization. Documentation helps your team maintain the application. You don't get abandoned after launch.</p>

                </div>
            </section>


            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">APPLICATION TYPES WE BUILD</h2>
                    {/* <ul className='term-list'>
                        <li className='banner-para'><span className='red'>Internal Business Applications:</span> ERP, HR, project management, inventory systems.</li>
                        <li className='banner-para'><span className='red'>Customer-Facing Software: </span> Portals, e-commerce platforms, mobile apps, self-service solutions.</li>
                        <li className='banner-para'><span className='red'>Analytics & Reporting Tools: </span> Dashboards, BI applications, data visualization platforms.</li>
                        <li className='banner-para'><span className='red'>Integration Applications: </span> APIs, middleware, and automation for seamless system connectivity.</li>
                    </ul> */}
                    <h2 className="term-hd-mini">Business Applications</h2>
                    <p className='banner-para'>CRM systems. Project management tools. Inventory management. Scheduling systems. Order processing. Workflow automation. Applications that help run daily operations efficiently.</p>

                    <h2 className="term-hd-mini">Customer-Facing Applications</h2>
                    <p className='banner-para'>E-commerce platforms. Customer portals. Mobile apps. Self-service systems. Applications that customers interact with directly to do business with you.</p>

                    <h2 className="term-hd-mini">Data & Analytics Applications</h2>
                    <p className='banner-para'>Reporting dashboards. Business intelligence tools. Data visualization. Analytics platforms. Applications that help make sense of data and drive decisions.</p>

                    <h2 className="term-hd-mini">Integration Applications</h2>
                    <p className='banner-para'>APIs and middleware that connect different systems. Allow data to flow between platforms. Enable automation across applications. Make your technology ecosystem work together.</p>
                </div>
            </section>



            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">APPLICATION TECHNOLOGIES</h2>
                    <p className='banner-para'>We use modern technologies appropriate for each application:</p>
                    <ul className='term-list'>
                        <li className='banner-para'><span className='red'>Frontend:</span> React, Vue, Angular for responsive web interfaces</li>
                        <li className='banner-para'><span className='red'>Mobile: </span> iOS, Android native or React Native for cross-platform</li>
                        <li className='banner-para'><span className='red'>Backend: </span> Node.js, Python, Java, .NET for server applications</li>
                        <li className='banner-para'><span className='red'>Databases: </span> PostgreSQL, MongoDB, MySQL for data storage</li>
                        <li className='banner-para'><span className='red'>Cloud: </span> AWS, Azure, GCP for hosting and services</li>
                        <li className='banner-para'><span className='red'>APIs: </span> RESTful and GraphQL for integrations</li>
                    </ul>
                    <p className='banner-para'>Technology choices depend on your specific requirements, not what's trendy.</p>
                </div>
            </section>


            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CASE STUDY: LOGISTICS COMPANY</h2>
                    <h2 className="term-hd-mini">The Challenge:</h2>
                    <p className='banner-para'>A logistics company used spreadsheets to manage deliveries. Drivers called dispatchers for route changes. Customers called for delivery updates. The manual process limited capacity and created errors. They couldn't scale operations without adding massive staff.</p>

                    <h2 className="term-hd-mini">What We Did:</h2>
                    <p className='banner-para'>Built custom logistics management application. Real-time route optimization. Mobile app for drivers. Customer portal for tracking. Integration with existing systems. Automated dispatching based on constraints and priorities.</p>

                    <h2 className="term-hd-mini">The Result:</h2>
                    <p className='banner-para'>Delivery capacity increased 60% with same staff. Route efficiency improved 35%. Customer service calls decreased 70%. Drivers saved hours daily through better routing. System paid for itself in 6 months through labor savings. Company scaled to new markets confidently.</p>

                </div>
            </section>




            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">GET STARTED WITH APPLICATIONS</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Schedule Application Consultation</h4>
                            <p className="banner-para">Tell us what you're trying to accomplish. We'll discuss whether custom development, modernization, or integration makes sense for your situation.</p>
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
