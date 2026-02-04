"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import rightArrowSlick from "@/app/(web)/assets/images/right-arrow-slick.png";
import rightArrow from "@/app/(web)/assets/images/right-arrow.png";

import blogImage1 from "@/app/(web)/assets/images/blogs-card-img1.png";
import blogImage2 from "@/app/(web)/assets/images/blogs-card-img2.png";
import blogImage3 from "@/app/(web)/assets/images/blogs-card-img3.png";
import blogImage4 from "@/app/(web)/assets/images/blogs-card-img4.png";
import blogImage5 from "@/app/(web)/assets/images/blogs-card-img5.png";
import blogImage6 from "@/app/(web)/assets/images/blogs-card-img6.png";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const blogData = [
    {
        image: blogImage1,
        title: "What Does 99.999% Uptime Really Mean for...",
        date: "Dec 05, 2025",
        desc: "Most people know \"five nines\" sounds impressive. Few...",
        link: "/blogs/future-proofing-it-infrastructure-emerging-trends-in-high-availability-and-disaster-recovery",
    },
    {
        image: blogImage2,
        title: "Why Most Disaster Recovery Plans Fail...",
        date: "Jan 12, 2026",
        desc: "60% of businesses that test their disaster recovery plans...",
        link: "/blogs/cybersecurity-enterprises",
    },
    {
        image: blogImage3,
        title: "How to Move to the Cloud Without Breaking...",
        date: "Feb 02, 2026",
        desc: "Cloud migration sounds simple until you try it. Then you discover...",
        link: "/blogs/cloud-migration",
    },
    {
        image: blogImage4,
        title: "7 Security Holes Lurking in Your Infrastructure...",
        date: "Mar 15, 2026",
        desc: "After auditing hundreds of companies, we see the same vulnerabilities...",
        link: "/blogs/ai-automation",
    },
    {
        image: blogImage5,
        title: "What a Fractional CTO Actually Does...",
        date: "Apr 23, 2026",
        desc: "The fractional CTO role confuses people. Is it consulting? Is it management?...",
        link: "/blogs/ai-automation",
    },
    {
        image: blogImage6,
        title: "Should You Build or Buy? A Framework for...",
        date: "May 30, 2026",
        desc: "Every growing company faces this question: build custom software or buy an...",
        link: "/blogs/ai-automation",
    },
];

const InsightSlider = () => {
    const router = useRouter();
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="latest-insight-sec">
            <div className="container position-relative">
                <div className="heading-btn-wrapper">
                    <h3 className="banner-hd-mini">Our Latest Blog</h3>
                    <div
                        className="btn-wrapper"
                        onClick={() => router.push("/blogs")}
                    >
                        <div className="btn-fill"></div>
                        <div className="btn-content">
                            <div className="left-icon">
                                <Image src={rightArrow} alt="" />
                            </div>
                            <div className="btn-text">READ MORE</div>
                        </div>
                    </div>
                </div>

                <p className="banner-para text-center">
                    Expert perspectives on building resilient, secure, and scalable technology systems.
                </p>

                {/* NAV BUTTONS */}
                <button ref={prevRef} className="slider-arrow slider-arrow-left">
                    <Image src={rightArrowSlick} alt="Prev" className="rotate-arrow" />
                </button>
                <button ref={nextRef} className="slider-arrow slider-arrow-right">
                    <Image src={rightArrowSlick} alt="Next" />
                </button>

                {/* SLIDER */}
                <Swiper
                    modules={[Autoplay, Navigation]}
                    loop
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {blogData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="insight-card">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="w-100"
                                />

                                <h3>{item.title}</h3>
                                <p className="insight-para">{item.date}</p>
                                <p className="banner-para">{item.desc}</p>

                                <div
                                    className="btn-wrapper"
                                    onClick={() => router.push(item.link)}
                                >
                                    <div className="btn-fill"></div>
                                    <div className="btn-content">
                                        <div className="left-icon">
                                            <Image src={rightArrow} alt="" />
                                        </div>
                                        <div className="btn-text">READ MORE</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default InsightSlider;
