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
                            <h3 className='banner-hd-mini hd'>Migrate Safely. Scale Efficiently. Control Costs. </h3>
                            <h1 className='banner-hd hd'>Cloud</h1>
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
                <h3 className='banner-hd-mini hd'>We help you use cloud platforms the right way.</h3>
                <p className='banner-para text-center mt-3 mb-5'>Cloud computing promises flexibility and cost savings. Reality is more complicated. Migrations go over budget and behind schedule. Applications don't work the same way. Costs spiral out of control. Security becomes unclear. We provide <span className="red">cloud consulting services</span> that deliver the benefits without the painful surprises.</p>
            </div>
            <section className="security-sec">
                <div className="container">
                    <div className="security-content-wrapper" data-aos="fade-right" data-aos-delay="1000">
                        <div className="row align-items-center">
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1500">
                                {/* <h3 className='banner-hd-mini hd'>Bridge Strategy Design</h3> */}
                                <h1 className='banner-hd hd'>Cloud</h1>
                                <p className="banner-para">Move to the cloud confidently with solutions that improve flexibility, reduce costs, and support business growth. We design, implement, and manage cloud infrastructure tailored to your needs, from public, private, and hybrid environments.</p>
                                <h4 className='term-hd-mini'>Common challenges we solve:</h4>
                                <p className='banner-para'>Difficulty scaling on-premises systems, lack of cloud expertise, insecure cloud deployments, high cloud costs due to poor management.</p>
                            </div>
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="2000">
                                <video src="/images/cloud-video.mp4" className='img-fluid' data-aos="fade-left" data-aos-delay="2500" playsInline autoPlay loop muted></video>
                                {/* <p className='banner-para'>With Five 9, you gain a cloud foundation engineered for the real world—where outages, spikes, and failures must be planned for, not reacted to. We help you adopt best practices for security, automation, observability, and disaster recovery, ensuring your cloud infrastructure is not just functional but strategically positioned for growth and resilience.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>










            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">WHY CLOUD MIGRATION FAILS</h2>
                    <p className='banner-para'>Most cloud projects fail because companies treat them like simple infrastructure moves. They lift applications to the cloud without redesigning them. They don't optimize for cloud economics. They underestimate the complexity of migrating data. They forget about network dependencies.</p>
                    <p className='banner-para'>We've migrated hundreds of systems successfully. We know what breaks and how to prevent it. Our <span className="red">cloud migration solutions</span> minimize risk through careful planning, pilot programs, and phased rollouts. You get the benefits of cloud without betting your entire business on one big move.</p>
                </div>
            </section>





            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">OUR CLOUD SERVICES</h2>
                    <h2 className="term-hd-mini">Cloud Strategy & Planning</h2>
                    <p className='banner-para'>Where should your workloads run? What stays on-premises and what moves to cloud? Which cloud provider fits your needs? How do you control costs? Our <span className="red">enterprise cloud strategy</span> services answer these questions before you commit resources. You get a clear plan based on your specific requirements, not vendor marketing.</p>

                    <h2 className="term-hd-mini">Cloud Migration Solutions</h2>
                    <p className='banner-para'>Moving existing systems to cloud requires more than just spinning up servers. Applications need assessment for cloud readiness. Data needs migration without loss or corruption. Dependencies need mapping and testing. Our <span className="red">cloud migration solutions</span> handle the entire process. You get working systems in cloud, not half-finished projects that create more problems than they solve.</p>

                    <h2 className="term-hd-mini">Hybrid & Multi-Cloud Services</h2>
                    <p className='banner-para'>Your infrastructure might span on-premises data centers, AWS, Azure, and Google Cloud. Each platform has strengths. Using multiple platforms creates complexity. Our <span className="red">hybrid & multi-cloud services</span> help you manage this complexity. We design architectures that work across platforms and handle the integration work that makes everything function together.</p>

                    <h2 className="term-hd-mini">Cloud Infrastructure Management</h2>
                    <p className='banner-para'>Running cloud infrastructure requires different skills than managing traditional data centers. Cost optimization. Auto-scaling configuration. Security group management. Backup and disaster recovery. Our <span className="red">cloud infrastructure management</span> services handle daily operations. Your systems run efficiently while you focus on your business.</p>

                    <h2 className="term-hd-mini">Scalable Cloud Solutions</h2>
                    <p className='banner-para'>One major benefit of cloud is the ability to scale resources up and down based on demand. But making this work requires proper architecture. Load balancing. Database replication. Caching strategies. Queue-based processing. We design <span className="red">scalable cloud solutions</span> that automatically handle increased load. Your systems stay responsive as usage grows.</p>

                </div>
            </section>




            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CLOUD PLATFORMS WE WORK WITH</h2>
                    <h2 className="term-hd-mini">Amazon Web Services (AWS)</h2>
                    <p className='banner-para'>The largest cloud provider with the most services. Strong in compute, storage, and databases. Good choice for companies needing extensive service catalogs and global presence. We've designed and deployed systems across hundreds of AWS services.</p>

                    <h2 className="term-hd-mini">Microsoft Azure</h2>
                    <p className='banner-para'>Best choice for organizations heavily invested in Microsoft technologies. Excellent integration with Windows Server, SQL Server, and Office 365. Strong hybrid cloud capabilities. We help companies leverage Azure for both new development and existing system migrations.</p>

                    <h2 className="term-hd-mini">Google Cloud Platform (GCP)</h2>
                    <p className='banner-para'>Leading in big data and machine learning services. Strong network performance. Good fit for data-intensive workloads and AI applications. We use GCP when these capabilities align with business requirements.</p>

                    <h2 className="term-hd-mini">Private & Hybrid Cloud</h2>
                    <p className='banner-para'>Some workloads need to stay on-premises for regulatory, performance, or cost reasons. We design hybrid architectures that connect private infrastructure to public cloud. You get flexibility where it helps and control where it matters.</p>

                </div>
            </section>



            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CLOUD COST OPTIMIZATION</h2>
                    <p className='banner-para'>Cloud billing seems simple until the invoices arrive. Reserved instances versus on-demand pricing. Data transfer charges. Storage tiers. Compute options. The combinations create complexity that often results in significant overspending.</p>
                    <p className='banner-para'>We optimize cloud costs through right-sizing resources, choosing appropriate pricing models, eliminating waste, and setting up proper monitoring. Most clients reduce cloud spending by 25-40% without impacting performance. You get the same capabilities for less money.</p>
                </div>
            </section>

            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CLOUD SECURITY & COMPLIANCE</h2>
                    <p className='banner-para'>Cloud providers secure their infrastructure. You secure what runs on it. This shared responsibility model confuses many companies. Who protects what? How do you prove compliance to auditors?</p>
                    <p className='banner-para'>We implement cloud security that addresses your specific requirements. Identity and access management. Encryption. Network segmentation. Logging and monitoring. Compliance frameworks. Your data stays protected regardless of where it lives.</p>
                </div>
            </section>

            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CASE STUDY: RETAIL COMPANY</h2>
                    <h2 className="term-hd-mini">The Challenge:</h2>
                    <p className='banner-para'>A retail company ran its e-commerce platform on owned data centers. Infrastructure costs were fixed and high. Seasonal traffic spikes required over-provisioning capacity that sat idle most of the year. They wanted cloud flexibility but feared the migration risk.</p>

                    <h2 className="term-hd-mini">What We Did:</h2>
                    <p className='banner-para'>We designed a phased migration starting with non-critical systems. Proved the approach worked. Built confidence in the team. Then migrated the e-commerce platform using a parallel-run strategy. Old and new systems ran simultaneously until we verified everything worked correctly.</p>

                    <h2 className="term-hd-mini">The Result:</h2>
                    <p className='banner-para'>Successful migration completed in 8 months. Infrastructure costs reduced 35% through right-sizing and auto-scaling. Black Friday traffic handled effortlessly through automatic scaling. No customer-facing issues during migration. The company now deploys new features weekly instead of monthly.</p>

                </div>
            </section>

            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">GET STARTED WITH CLOUD</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Free Cloud Readiness Assessment</h4>
                            <p className="banner-para">We'll evaluate your current infrastructure and identify what's ready for cloud migration. You'll get a clear picture of migration complexity, timeline estimates, and expected costs.</p>
                            <div className="btn-wrapper" onClick={() => router.push("/contact-us")}>
                                <div className="btn-fill"></div>
                                <div className="btn-content">
                                    <div className="left-icon">
                                        <Image src={rightArrow} className='img-fluid' alt="" />
                                    </div>
                                    <div className="btn-text">BOOK YOUR ASSESSMENT</div>
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
