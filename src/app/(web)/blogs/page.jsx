"use client";
import React, { useEffect } from 'react'
import gsap from "gsap";
import Image from 'next/image'
import Link from 'next/link'
import blogImage1 from "@/app/(web)/assets/images/blogs-card-img1.png"
import blogImage2 from "@/app/(web)/assets/images/blogs-card-img2.png"
import blogImage3 from "@/app/(web)/assets/images/blogs-card-img3.png"
import blogImage4 from "@/app/(web)/assets/images/blogs-card-img4.png"
import blogImage5 from "@/app/(web)/assets/images/blogs-card-img5.png"
import blogImage6 from "@/app/(web)/assets/images/blogs-card-img6.png"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import rightArrow from "@/app/(web)/assets/images/right-arrow.png"
import Newsletter from '@/components/Newsletter';
import Header2 from '@/components/Header2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SocialLinks from '@/components/SocialLinks';

const page = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            offset: -2000
        });
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".transparent .marquee-mega-wrapper", {
            x: -540,
            ease: "none",
            scrollTrigger: {
                trigger: ".transparent .marquee-wrapper1",
                start: "top 300",
                end: "bottom 400",
                scrub: 2,
                scroller: "body",
                // markers: true, 
            },
        });
    }, []);
    return (
        <>
            <Header2 />
            <section className='video-banner capable-video'>
                <SocialLinks/>
                <div className="container">
                    <div className="video-area">
                        <div className='heading-wrapper'>
                            <h3 className='banner-hd-mini hd'>Latest Tips & Insights</h3>
                            <h1 className='banner-hd hd'>Browse through our blogs to learn <br /> more about IT trends, solutions, <br /> and best practices.</h1>
                        </div>
                        <div className='video-area-sec'>
                            <video src="/images/blog-banner-video.mp4" autoPlay playsInline muted loop>
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
            <section className="blog-cards">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 blog-card" data-aos="fade-up" data-aos-delay="0">
                            <Link href="/blogs/future-proofing-it-infrastructure-emerging-trends-in-high-availability-and-disaster-recovery">
                                <div className="blog-card-wrapper">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <Image src={blogImage1} className='img-fluid' alt="" />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card-bottom-wrapper">
                                                <p className='mini-para'>Blog</p>
                                                <h4 className='blog-hd-mini'>What Does 99.999% Uptime Really Mean for...</h4>
                                                <p className='banner-para'>Most people know \"five nines\" sounds impressive. Few...</p>
                                                <div className="blog-para-wrapper">
                                                    <p className="mini-para">Dec 20, 2025</p>
                                                    <p className="mini-para">0 Comments</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></Link>
                        </div>
                        <div className="col-lg-6 blog-card" data-aos="fade-up" data-aos-delay="200">
                            <Link href={"/blogs/disaster-recovery-vs-high-availability-what-s-the-difference-and-why-does-it-matter"}>
                                <div className="blog-card-wrapper">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <Image src={blogImage2} className='img-fluid' alt="" />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card-bottom-wrapper">
                                                <p className='mini-para'>Blog</p>
                                                <h4 className='blog-hd-mini'>Why Most Disaster Recovery Plans Fail...</h4>
                                                <p className='banner-para'>60% of businesses that test their disaster recovery plans...</p>
                                                <div className="blog-para-wrapper">
                                                    <p className="mini-para">Dec 20, 2025</p>
                                                    <p className="mini-para">0 Comments</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></Link>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6 blog-card" data-aos="fade-up" data-aos-delay="0">
                            <Link href={"/blogs/moving-to-the-cloud-here-s-how-to-keep-your-business-running-smoothly"}>
                                <div className="blog-card-wrapper">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <Image src={blogImage3} className='img-fluid' alt="" />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card-bottom-wrapper">
                                                <p className='mini-para'>Blog</p>
                                                <h4 className='blog-hd-mini'>How to Move to the Cloud Without Breaking...</h4>
                                                <p className='banner-para'>Cloud migration sounds simple until you try it. Then you discover...</p>
                                                <div className="blog-para-wrapper">
                                                    <p className="mini-para">Dec 20, 2025</p>
                                                    <p className="mini-para">0 Comments</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></Link>
                        </div>
                        <div className="col-lg-6 blog-card" data-aos="fade-up" data-aos-delay="200">
                            <Link href={"/blogs/the-role-of-ai-in-keeping-your-business-online-24-7"}>
                                <div className="blog-card-wrapper">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <Image src={blogImage4} className='img-fluid' alt="" />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card-bottom-wrapper">
                                                <p className='mini-para'>Blog</p>
                                                <h4 className='blog-hd-mini'>7 Security Holes Lurking in Your Infrastructure...</h4>
                                                <p className='banner-para'>After auditing hundreds of companies, we see the same vulnerabilities...</p>
                                                <div className="blog-para-wrapper">
                                                    <p className="mini-para">Dec 20, 2025</p>
                                                    <p className="mini-para">0 Comments</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></Link>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6 blog-card" data-aos="fade-up" data-aos-delay="0">
                            <Link href={"/blogs/how-to-build-a-plan-for-avoiding-downtime-before-problems-happen"}>
                                <div className="blog-card-wrapper">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <Image src={blogImage5} className='img-fluid' alt="" />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card-bottom-wrapper">
                                                <p className='mini-para'>Blog</p>
                                                <h4 className='blog-hd-mini'>What a Fractional CTO Actually Does...</h4>
                                                <p className='banner-para'>The fractional CTO role confuses people. Is it consulting? Is it management?...</p>
                                                <div className="blog-para-wrapper">
                                                    <p className="mini-para">Dec 20, 2025</p>
                                                    <p className="mini-para">0 Comments</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></Link>
                        </div>
                        <div className="col-lg-6 blog-card" >
                            <Link href={"/blogs/from-reactive-to-proactive-how-to-keep-your-business-online-no-matter-what"}>
                                <div className="blog-card-wrapper">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <Image src={blogImage6} className='img-fluid' alt="" />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card-bottom-wrapper">
                                                <p className='mini-para'>Blog</p>
                                                <h4 className='blog-hd-mini'>Should You Build or Buy? A Framework for...</h4>
                                                <p className='banner-para'>Every growing company faces this question: build custom software or buy an...</p>
                                                <div className="blog-para-wrapper">
                                                    <p className="mini-para">Dec 20, 2025</p>
                                                    <p className="mini-para">0 Comments</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></Link>
                        </div>
                    </div>
                    <div className="btn-wrapper" >
                        <div className="btn-fill"></div>

                        <div className="btn-content">
                            <div className="left-icon">
                                <Image src={rightArrow} className='img-fluid' alt="" />
                            </div>
                            <div className="btn-text">LOAD MORE</div>
                        </div>
                    </div>
                </div>
            </section>
                  {/* <Newsletter /> */}
        </>
    )
}

export default page