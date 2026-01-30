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
                            <h3 className='banner-hd-mini hd'>Make Data Accessible, Dependable, And Actionable.</h3>
                            <h1 className='banner-hd hd'>Data Engineering</h1>
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
            <div className="container text-center mt-5 mb-5 service-btn-max" data-aos="fade-right" data-aos-delay="500">
                <h3 className='banner-hd-mini hd'>Build systems that capture, process, and deliver data when and where you need it.</h3>
                <p className='banner-para text-center mt-3 mb-5'>Your business generates massive amounts of data. Customer interactions. Transactions. Operations. Most companies struggle to use this data effectively. We provide <span className="red">data engineering services</span> that build the infrastructure to collect, process, and deliver data reliably. You get insights that drive better decisions instead of drowning in information you can't access.</p>
                <div className="btn-wrapper">
                    <div className="btn-fill"></div>
                    <div className="btn-content">
                        <div className="left-icon">
                            <Image src={rightArrow} className='img-fluid' alt="" />
                        </div>
                        <div className="btn-text">EXPLORE DATA SOLUTIONS</div>
                    </div>
                </div>
            </div>
            <section className="security-sec">
                <div className="container">
                    <div className="security-content-wrapper" data-aos="fade-right" data-aos-delay="1000">
                        <div className="row align-items-center">
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1500">
                                {/* <h3 className='banner-hd-mini hd'>Bridge Strategy Design</h3> */}
                                <h1 className='banner-hd hd'>DATA ENGINEERING</h1>
                                {/* <h4 className='term-hd-mini'>Common challenges we solve:</h4> */}
                                <p className="banner-para">Turn data into value with pipelines, analytics, and reporting that drive smarter decisions. We build scalable data architectures, automate workflows, and ensure your data is clean, accessible, and actionable.</p>
                                <h4 className='term-hd-mini'>Common challenges we solve:</h4>
                                <p className="banner-para">Data scattered across systems, slow reporting, unreliable analytics, difficulty turning raw data into insights.</p>
                            </div>
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="2000">
                                <video src="/images/Data-Engineering-video.mp4" className='img-fluid' data-aos="fade-left" data-aos-delay="2500" autoPlay muted playsInline loop></video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">WHY DATA ENGINEERING MATTERS</h2>
                    <p className='banner-para'>Data only helps if you can access it when needed. Raw data sits in systems that don't talk to each other. Important information is trapped in formats nobody can read. Reports take days to generate. Questions can't be answered because data isn't available.</p>
                    <p className='banner-para'>We build <span className="red">enterprise data solutions</span> that solve these problems. Data flows from source systems to where it's needed. Processing happens automatically. Information becomes accessible to people who need it. You make decisions based on facts, not gut feelings.</p>
                </div>
            </section>





            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">DATA ENGINEERING SERVICES</h2>
                    <h2 className="term-hd-mini">Data Architecture & Pipelines</h2>
                    <p className='banner-para'>Data must flow reliably from where it's created to where it's needed. Sales data to analytics. Customer data to marketing systems. Operations data to dashboards. Our <span className="red">data architecture & pipelines</span> services design and build these flows. You get data that moves automatically and reliably between systems.</p>

                    <h2 className="term-hd-mini">Big Data Consulting</h2>
                    <p className='banner-para'>Traditional databases struggle with massive data volumes. Customer behavior logs. IoT sensor readings. Transaction histories. Social media feeds. Our <span className="red">big data consulting</span> services help you process and analyze data at scale. You extract insights from information volumes that overwhelm traditional tools.</p>

                    <h2 className="term-hd-mini">Cloud Data Engineering</h2>
                    <p className='banner-para'>Cloud platforms offer powerful data capabilities. Scalable storage. Distributed processing. Managed databases. Analytics services. Our <span className="red">cloud data engineering</span> services help you leverage these capabilities. You get modern data infrastructure without building it from scratch.</p>

                    <h2 className="term-hd-mini">Business Intelligence Engineering</h2>
                    <p className='banner-para'>Data becomes valuable when it answers business questions. Which products sell best? Which customers will churn? Where do operations have bottlenecks? Our <span className="red">business intelligence engineering</span> services build systems that deliver answers. You get dashboards and reports that actually help make decisions.</p>

                </div>
            </section>




            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">DATA ENGINEERING COMPONENTS</h2>
                    <h2 className="term-hd-mini">Data Collection & Integration</h2>
                    <p className='banner-para'>Data lives in many places. CRM systems. ERP platforms. Websites. Mobile apps. Point-of-sale terminals. We build integration that collects data from all sources. You get complete pictures instead of fragmentary views.</p>

                    <h2 className="term-hd-mini">Data Processing & Transformation</h2>
                    <p className='banner-para'>Raw data rarely matches the format you need. Formats need conversion. Values need calculation. Information needs enrichment. We build processing pipelines that transform data automatically. You get clean, usable information instead of raw dumps requiring manual work.</p>

                    <h2 className="term-hd-mini">Data Storage & Management</h2>
                    <p className='banner-para'>Different data needs different storage. Operational data needs fast access. Historical data needs cost-effective archival. Analytics data needs optimized structures. We design storage that balances performance, cost, and reliability.</p>

                    <h2 className="term-hd-mini">Data Quality & Governance</h2>
                    <p className='banner-para'>Poor quality data leads to poor decisions. Duplicate records. Missing values. Inconsistent formats. We implement data quality controls and governance frameworks. You get data you can trust for important decisions.</p>

                </div>
            </section>



            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">DATA PLATFORM TECHNOLOGIES</h2>
                    <h2 className="term-hd-mini">Relational Databases</h2>
                    <p className='banner-para'>Structured data with clear relationships. PostgreSQL. MySQL. SQL Server. Oracle. We design relational databases for transactional workloads and normalized data.</p>

                    <h2 className="term-hd-mini">Data Warehouses</h2>
                    <p className='banner-para'>Analytics workloads need different optimization than operational databases. Snowflake. Redshift. BigQuery. We build data warehouses optimized for analytical queries across large datasets.</p>

                    <h2 className="term-hd-mini">Data Lakes</h2>
                    <p className='banner-para'>Raw data storage for flexible analysis. S3. Azure Data Lake. GCP Cloud Storage. We design data lakes that store everything while remaining accessible and governable.</p>

                    <h2 className="term-hd-mini">Stream Processing</h2>
                    <p className='banner-para'>Real-time data needs real-time processing. Kafka. Kinesis. Pub/Sub. We build streaming pipelines that process data as it arrives instead of in batches.</p>

                </div>
            </section>






            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CASE STUDY: RETAIL CHAIN</h2>
                    <h2 className="term-hd-mini">The Challenge:</h2>
                    <p className='banner-para'>A retail chain operated 200 stores with inconsistent data. Sales data took 3 days to reach headquarters. Inventory data was often wrong. Pricing varied between systems. The company couldn't answer basic questions about performance because data wasn't accessible.</p>

                    <h2 className="term-hd-mini">What We Did:</h2>
                    <p className='banner-para'>We built a centralized data platform. Real-time integration from all stores. Automated data quality checks. Data warehouse for analytics. Self-service dashboards for managers. Forecasting models for inventory optimization.</p>

                    <h2 className="term-hd-mini">The Result:</h2>
                    <p className='banner-para'>Sales data available within 15 minutes instead of 3 days. Inventory accuracy improved from 73% to 97%. Stockouts decreased 45%. Managers make data-driven decisions daily. The company opened 50 new stores confidently because they could track performance effectively.</p>

                </div>
            </section>

            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">START YOUR DATA JOURNEY</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Free Data Assessment</h4>
                            <p className="banner-para">We'll evaluate your current data landscape and identify opportunities. You'll understand what's possible and what it would take to implement.</p>
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
