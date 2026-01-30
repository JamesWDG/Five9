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
                            <h3 className='banner-hd-mini hd'>Integrated, Governed, And Aligned.</h3>
                            <h1 className='banner-hd hd'>Artificial Intelligence</h1>
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
            <div className="container text-center mt-5 service-btn-max mb-5" data-aos="fade-right" data-aos-delay="500">
                <h3 className='banner-hd-mini hd'>We turn AI into a working part of your operation.</h3>
                <p className='banner-para text-center mt-3 mb-5'>Artificial intelligence promises to transform businesses. Most AI projects fail because companies chase technology before understanding the problem. We provide <span className="red">enterprise AI services</span> that start with your actual challenges and apply AI only where it delivers measurable value. You get results, not science experiments.</p>
                <div className="btn-wrapper">
                    <div className="btn-fill"></div>
                    <div className="btn-content">
                        <div className="left-icon">
                            <Image src={rightArrow} className='img-fluid' alt="" />
                        </div>
                        <div className="btn-text">EXPLORE AI SOLUTIONS</div>
                    </div>
                </div>
            </div>
            <section className="security-sec">
                <div className="container">
                    <div className="security-content-wrapper" data-aos="fade-right" data-aos-delay="1000">
                        <div className="row align-items-center">
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1500">
                                {/* <h3 className='banner-hd-mini hd'>Bridge Strategy Design</h3> */}
                                <h1 className='banner-hd hd'>AI</h1>
                                <p className="banner-para">Implement artificial intelligence that delivers measurable returns. We develop custom AI solutions including natural language processing, predictive analytics, and automation that solves real business problems you face every day.</p>
                                <h4 className='term-hd-mini'>Common challenges we solve:</h4>
                                <p className='banner-para'>AI projects that never deliver value, lack of expertise to implement AI internally, difficulty identifying where AI actually helps, science projects that never become real solutions.</p>
                            </div>
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="2000">
                                <video src="/images/ai-page-video.mp4" className='img-fluid' data-aos="fade-left" data-aos-delay="2500" playsInline autoPlay loop muted></video>
                                {/* <p className='banner-para'>By embedding AI into your existing processes—not forcing you to rebuild them—we help you increase efficiency, reduce manual effort, and unlock new digital capabilities. With Five 9, AI becomes more than a tool; it becomes a core organizational strength that evolves with your needs and accelerates your path forward.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>









            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">WHY MOST AI PROJECTS FAIL</h2>
                    <p className='banner-para'>Companies read about AI success stories and want the same results. They hire data scientists and buy AI platforms. Then nothing happens. The data isn't ready. The use cases aren't clear. The organization isn't prepared.</p>
                    <p className='banner-para'>AI works best on problems with clear patterns and abundant data. Predicting customer churn. Optimizing inventory. Detecting fraud. Automating routine decisions. Our <span className="red">artificial intelligence consulting</span> helps you identify problems where AI actually helps versus problems better solved through simpler approaches.</p>
                </div>
            </section>



            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">OUR AI SERVICES</h2>
                    <h2 className="term-hd-mini">AI Strategy & Use Case Identification</h2>
                    <p className='banner-para'>Where can AI help your business? We assess your operations and data to find opportunities. Not every problem needs AI. Some situations benefit from simpler solutions. We identify <span className="red">AI business solutions</span> that deliver clear ROI through improved decisions, automated processes, or better customer experiences.</p>

                    <h2 className="term-hd-mini">Machine Learning Consulting</h2>
                    <p className='banner-para'>Machine learning powers most practical AI applications. Predicting outcomes. Classifying data. Recommending actions. Our <span className="red">machine learning consulting</span> services build custom models trained on your specific data. You get predictions and insights tailored to your business, not generic algorithms that don't understand your context.</p>

                    <h2 className="term-hd-mini">Intelligent Automation Solutions</h2>
                    <p className='banner-para'>Repetitive tasks waste employee time. AI can handle routine decisions and processes automatically. Customer service inquiries. Data entry. Document processing. Scheduling. Our <span className="red">intelligent automation solutions</span> identify processes worth automating and implement AI that actually works. You free employees to focus on complex work that requires human judgment.</p>

                    <h2 className="term-hd-mini">AI-Driven Digital Transformation</h2>
                    <p className='banner-para'>AI becomes most powerful when integrated throughout operations. Marketing uses it for personalization. Sales uses it for lead scoring. Operations uses it for optimization. Finance uses it for forecasting. Our <span className="red">AI-driven digital transformation</span> services help you implement AI across departments systematically. You get coordinated improvements instead of isolated projects.</p>

                </div>
            </section>



            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">AI APPLICATIONS BY FUNCTION</h2>
                    <h2 className="term-hd-mini">Sales & Marketing</h2>
                    <p className='banner-para'>Predict which leads will convert. Personalize content for each visitor. Optimize ad spending across channels. Forecast demand accurately. Score customer lifetime value. AI helps you acquire and retain customers more efficiently.</p>

                    <h2 className="term-hd-mini">Operations & Supply Chain</h2>
                    <p className='banner-para'>Optimize inventory levels. Predict equipment failures before they happen. Route deliveries efficiently. Forecast demand across locations. AI helps you run operations more smoothly with less waste.</p>

                    <h2 className="term-hd-mini">Customer Service</h2>
                    <p className='banner-para'>Answer common questions automatically. Route complex issues to the right specialists. Predict why customers might cancel. Personalize support based on customer history. AI helps you serve customers faster while reducing costs.</p>

                    <h2 className="term-hd-mini">Finance & Risk</h2>
                    <p className='banner-para'>Detect fraudulent transactions in real-time. Assess credit risk accurately. Forecast cash flow. Optimize pricing dynamically. AI helps you make better financial decisions with less risk.</p>

                </div>
            </section>



            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">AI IMPLEMENTATION PROCESS</h2>
                    <h2 className="term-hd-mini">Step 1: Problem Definition</h2>
                    <p className='banner-para'>What are you trying to achieve? What decisions could be better? What processes take too much time? We start by understanding your actual challenges, not by looking for places to apply AI.</p>

                    <h2 className="term-hd-mini">Step 2: Data Assessment</h2>
                    <p className='banner-para'>AI requires data. Do you have enough? Is it clean? Is it accessible? We evaluate whether your data can support the AI applications you need. Sometimes data preparation becomes the first project.</p>

                    <h2 className="term-hd-mini">Step 3: Pilot Development</h2>
                    <p className='banner-para'>We build small pilot projects to prove AI works for your use case. Pilots test the approach, validate the value, and build organizational confidence. You see results before committing to full implementation.</p>

                    <h2 className="term-hd-mini">Step 4: Production Deployment</h2>
                    <p className='banner-para'>Once pilots succeed, we deploy to production. Models get integrated into your systems. Automated processes get implemented. Training gets delivered. You start seeing value from AI in daily operations.</p>

                    <h2 className="term-hd-mini">Step 5: Ongoing Refinement</h2>
                    <p className='banner-para'>AI systems need continuous improvement. As your business changes, models need retraining. As you collect more data, predictions get better. We monitor performance and update models to maintain accuracy.</p>

                </div>
            </section>




            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">AI TECHNOLOGY STACK</h2>
                    <p className='banner-para'>We work with leading AI platforms and frameworks. TensorFlow. PyTorch. Scikit-learn. AWS SageMaker. Azure Machine Learning. Google Vertex AI. We choose technologies based on your specific needs, not based on what's trendy.</p>
                    <p className='banner-para'>Our team includes data scientists, machine learning engineers, and AI specialists. They've built models for customer behavior prediction, natural language processing, computer vision, and recommendation systems. They know what works in production, not just in research papers.</p>
                </div>
            </section>



            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CASE STUDY: MANUFACTURING COMPANY</h2>
                    <h2 className="term-hd-mini">The Challenge:</h2>
                    <p className='banner-para'>A manufacturing company struggled with equipment failures that halted production. Unplanned downtime cost $75,000 per incident. Maintenance happened on fixed schedules, regardless of actual equipment condition. Some machines got serviced too often. Others failed between scheduled maintenance.</p>

                    <h2 className="term-hd-mini">What We Did:</h2>
                    <p className='banner-para'>We implemented predictive maintenance using sensor data from equipment. Machine learning models learned patterns that preceded failures. The system predicted problems 5-7 days in advance with 87% accuracy. Maintenance shifted from fixed schedules to predicted needs.</p>

                    <h2 className="term-hd-mini">The Result:</h2>
                    <p className='banner-para'>Unplanned downtime dropped 78%. Maintenance costs decreased 32% through better scheduling. Equipment lifespan increased through earlier problem detection. The system paid for itself in 4 months through avoided downtime costs.</p>

                </div>
            </section>


            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">START YOUR AI JOURNEY</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Free AI Readiness Assessment</h4>
                            <p className="banner-para">We'll evaluate your data, processes, and potential use cases. You'll get a clear picture of where AI can help your business and what it would take to implement.</p>
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
