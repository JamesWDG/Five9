"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import infrastuctureImage from '@/app/(web)/assets/images/infrastructure-img.png'
import Newsletter from '@/components/Newsletter'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header2 from '@/components/Header2';
import AOS from 'aos';
import rightArrow from "@/app/(web)/assets/images/right-arrow.png"
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
                            <h3 className='banner-hd-mini hd'>No More Outages. No More Limitations.</h3>
                            <h1 className='banner-hd hd'>Infrastructure</h1>
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
                <h3 className='banner-hd-mini hd'>Infrastructure designed to stay up and scale cleanly.</h3>
                <p className='banner-para text-center mt-3 mb-5'>Infrastructure is everything running underneath your applications. Servers. Networks. Storage. Databases. When it works, nobody thinks about it. When it fails, everything stops. We build <span className="red">scalable IT infrastructure</span> that handles growth without breaking. Your systems stay available while competitors deal with outages.</p>
            </div>
            <section className="security-sec">
                <div className="container">
                    <div className="security-content-wrapper" data-aos="fade-right" data-aos-delay="1000">
                        <div className="row align-items-center">
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1500">
                                {/* <h3 className='banner-hd-mini hd'>Bridge Strategy Design</h3> */}
                                <h1 className='banner-hd hd'>INFRASTRUCTURE</h1>
                                <p className="banner-para">Build technical foundations that don't buckle under growth. We design and implement scalable architecture, redundant systems, performance monitoring, and disaster recovery that actually works when you need it.</p>
                                <h4 className='term-hd-mini'>Common challenges we solve:</h4>
                                <p className='banner-para'> Frequent outages that lose revenue, systems that can't handle increased load, no disaster recovery plan, infrastructure costs that spiral out of control.</p>
                            </div>
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="2000">
                                <video src="/images/Infrastructure-video.mp4" className='img-fluid' data-aos="fade-left" data-aos-delay="2500" autoPlay muted loop playsInline></video>
                                {/* <p className='banner-para'>With Five 9, you gain an infrastructure foundation that's built to scale, reduce downtime, and adapt to changing business needs. We combine modern engineering practices with practical experience to deliver environments you can trust—so your teams can stay focused on innovation rather than firefighting.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">WHY INFRASTRUCTURE MATTERS</h2>
                    <p className='banner-para'>Every business depends on infrastructure even if they don't realize it. Your website runs on servers. Your email relies on networks. Your applications need databases. Your files require storage. When infrastructure fails, business stops.</p>
                    <p className='banner-para'>Poor infrastructure creates constant problems. Slow applications frustrate users. Outages lose revenue. Limited capacity prevents growth. Security vulnerabilities invite attacks. We design <span className="red">cloud infrastructure solutions</span> that eliminate these problems before they impact your business.</p>
                </div>
            </section>




            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">INFRASTRUCTURE SERVICES</h2>
                    <h2 className="term-hd-mini">Infrastructure Modernization</h2>
                    <p className='banner-para'>Old infrastructure eventually becomes a liability. Physical servers that require constant maintenance. Outdated network equipment that limits speed. Legacy storage that can't scale. Our <span className="red">infrastructure modernization</span> services update foundations systematically. You get modern capabilities without replacing everything at once.</p>

                    <h2 className="term-hd-mini">IT Infrastructure Consulting</h2>
                    <p className='banner-para'>Building reliable infrastructure requires expertise most companies don't have internally. Architecture design. Capacity planning. Redundancy implementation. Performance optimization. Our <span className="red">IT infrastructure consulting</span> provides this expertise. You get infrastructure designed by people who've built systems that handle millions of users.</p>

                    <h2 className="term-hd-mini">Network & Systems Consulting</h2>
                    <p className='banner-para'>Networks connect everything. Poorly designed networks create bottlenecks. Misconfigured networks expose security risks. Growing networks become unmanageable. Our <span className="red">network & systems consulting</span> services design networks that perform reliably and scale easily. You get connectivity that supports business needs.</p>

                    <h2 className="term-hd-mini">Enterprise Infrastructure Services</h2>
                    <p className='banner-para'>Large organizations have complex infrastructure needs. Multiple data centers. Global operations. High availability requirements. Compliance obligations. Our <span className="red">enterprise infrastructure services</span> handle this complexity. You get infrastructure that works at enterprise scale.</p>

                    <h2 className="term-hd-mini">Cloud Infrastructure Solutions</h2>
                    <p className='banner-para'>Cloud platforms offer flexibility traditional infrastructure can't match. Scale up when needed. Scale down when not. Pay only for what you use. But cloud requires different approaches than physical infrastructure. We design <span className="red">cloud infrastructure solutions</span> optimized for cloud economics and capabilities.</p>

                </div>
            </section>


            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">INFRASTRUCTURE COMPONENTS</h2>
                    <h2 className="term-hd-mini">Compute Infrastructure</h2>
                    <p className='banner-para'>Servers run your applications. Physical servers in data centers. Virtual machines in cloud. Containers for modern applications. Serverless functions for event-driven workloads. We design compute infrastructure that matches your needs and scales with demand.</p>

                    <h2 className="term-hd-mini">Network Infrastructure</h2>
                    <p className='banner-para'>Networks connect users to applications and applications to data. LANs connect local resources. WANs connect distant locations. Load balancers distribute traffic. Firewalls control access. CDNs accelerate delivery. We design networks that perform reliably under load.</p>

                    <h2 className="term-hd-mini">Storage Infrastructure</h2>
                    <p className='banner-para'>Data needs to live somewhere. Block storage for databases. File storage for documents. Object storage for media. Backup storage for recovery. Archive storage for compliance. We design storage infrastructure that balances performance, cost, and reliability.</p>

                    <h2 className="term-hd-mini">Database Infrastructure</h2>
                    <p className='banner-para'>Databases store critical business information. Relational databases for structured data. NoSQL databases for flexible schemas. Data warehouses for analytics. Caching layers for speed. We design database infrastructure that performs well and scales smoothly.</p>

                </div>
            </section>


            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">INFRASTRUCTURE RELIABILITY</h2>
                    <h2 className="term-hd-mini">High Availability Design</h2>
                    <p className='banner-para'>Single points of failure create outages. We design infrastructure with redundancy built in. Multiple servers handle load. If one fails, others take over instantly. Multiple data centers provide geographic redundancy. If one location fails, another handles traffic. Your users stay productive regardless of individual component failures.</p>

                    <h2 className="term-hd-mini">Disaster Recovery Planning</h2>
                    <p className='banner-para'>What happens if your primary data center fails? If ransomware encrypts your data? If a natural disaster strikes? We design disaster recovery that actually works. Regular backups. Tested restore procedures. Alternative infrastructure ready to activate. Recovery measured in minutes, not days.</p>

                    <h2 className="term-hd-mini">Performance Monitoring</h2>
                    <p className='banner-para'>Problems should be detected before users notice them. We implement monitoring that watches everything constantly. Server CPU and memory. Network bandwidth. Database query performance. Application response times. When something approaches limits, we know immediately and can address it proactively.</p>

                    <h2 className="term-hd-mini">Capacity Planning</h2>
                    <p className='banner-para'>Infrastructure needs to grow with your business. We plan capacity based on actual usage trends and growth projections. You avoid both under-provisioning that causes outages and over-provisioning that wastes money. Infrastructure scales ahead of demand.</p>

                </div>
            </section>



            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CASE STUDY: E-COMMERCE COMPANY</h2>
                    <h2 className="term-hd-mini">The Challenge:</h2>
                    <p className='banner-para'>An e-commerce company ran its platform on aging physical servers. Infrastructure was expensive to maintain. Seasonal traffic spikes required over-provisioning capacity. Black Friday regularly crashed the site. Growth was limited by data center capacity.</p>

                    <h2 className="term-hd-mini">What We Did:</h2>
                    <p className='banner-para'>We migrated infrastructure to cloud with auto-scaling capabilities. Designed architecture that scales automatically based on traffic. Implemented CDN for faster content delivery. Set up monitoring and automated response. Optimized databases for cloud performance.</p>

                    <h2 className="term-hd-mini">The Result:</h2>
                    <p className='banner-para'>Black Friday handled record traffic without issues. Infrastructure costs decreased 40% through right-sizing. Site performance improved 3x. Deployment frequency increased from monthly to weekly. The company scaled to 5x revenue without infrastructure constraints.</p>

                </div>
            </section>


            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">START INFRASTRUCTURE IMPROVEMENT</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Free Infrastructure Assessment</h4>
                            <p className="banner-para">We'll review your current infrastructure and identify risks and opportunities. You'll get a clear picture of what works, what doesn't, and what improvements make sense.</p>
                            <div className="btn-wrapper" onClick={() => router.push("/contact-us")}>
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
