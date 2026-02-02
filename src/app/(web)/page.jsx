"use client";
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import MarqueeSlider from '@/components/MarqueeSlider'
import { montserrat } from '../../../public/font/font.js'
import InsightSlider from '@/components/InsightSlider';
import { gsap } from "gsap";
import rightArrow from "../../../public/images/right-arrow.png"
import aboutBannerimg1 from "../../../public/images/about-banner-front.png"
import aboutBannerimg2 from "../../../public/images/about-banner-back.png"
import chooseImage1 from "../../../public/images/choose-sec-img1.png"
import chooseImage2 from "../../../public/images/choose-sec-img2.png"
import chooseImage3 from "../../../public/images/choose-sec-img3.png"
import chooseImage4 from "../../../public/images/choose-sec-img4.png"
import capableImage1 from "../../../public/images/capable-img-1.png"
import capableImage2 from "../../../public/images/capable-img-2.png"
import capableImage3 from "../../../public/images/capable-img-3.png"
import capableImage4 from "../../../public/images/capable-img-4.png"
import capableImage5 from "../../../public/images/capable-img-5.png"
import SocialLinks from '@/components/SocialLinks';
import Secondarybtn from '@/components/Secondarybtn';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from '@/components/Header.jsx';
import { useRouter } from 'next/navigation';
import ServicesSection from '@/components/ServicesSection.jsx';
import Testimonials from '@/components/Testimonials.jsx';
const page = () => {
  const router = useRouter();
  const logoRef = useRef(null);
  const videoRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  // LOGO ANIMATION STARTS HERE
  useEffect(() => {
    const tl = gsap.timeline();
    let scaleValue, finalY, moveX;
    const w = window.innerWidth;
    const h = window.innerHeight;

    if (w === 1900 && h === 650) {
      scaleValue = 2;
      finalY = -270;
      moveX = 80;
    } else if (w === 1600 && h === 650) {
      scaleValue = 2;
      finalY = -270;
      moveX = 80;
    } else if (w === 1536 && h === 703) {
      scaleValue = 2;
      finalY = -300;
      moveX = 80;
    } else if (w === 1500 && h === 650) {
      scaleValue = 2;
      finalY = -275;
      moveX = 80;
    } else if (w === 1400 && h === 650) {
      scaleValue = 2;
      finalY = -275;
      moveX = 80;
    } else if (w === 1440 && h === 650) {
      scaleValue = 2;
      finalY = -275;
      moveX = 80;
    } else if (w === 1366 && h === 650) {
      scaleValue = 2;
      finalY = -275;
      moveX = 80;
    } else if (w === 1280 && h === 650) {
      scaleValue = 2;
      finalY = -275;
      moveX = 80;
    } else if (w === 1200 && h === 650) {
      scaleValue = 1.5;
      finalY = -280;
      moveX = 50;
    } else if (w === 1024 && h === 650) {
      scaleValue = 1;
      finalY = 0;
      moveX = 0;
    } else if (w <= 1025) {
      scaleValue = 1;
      finalY = 0;
      moveX = 0;
    } else if (w <= 1200) {
      scaleValue = 1.5;
      finalY = -385;
      moveX = 50;
    } else if (w <= 1280) {
      scaleValue = 2;
      finalY = -375;
      moveX = 80;
    } else if (w <= 1366) {
      scaleValue = 2;
      finalY = -380;
      moveX = 80;
    } else if (w <= 1440) {
      scaleValue = 2;
      finalY = -380;
      moveX = 80;
    } else if (w <= 1500) {
      scaleValue = 2;
      finalY = -380;
      moveX = 80;
    } else if (w <= 1600) {
      scaleValue = 2;
      finalY = -375;
      moveX = 80;
    } else if (w <= 1900) {
      scaleValue = 2;
      finalY = -380;
      moveX = 80;
    } else {
      scaleValue = 4;
      finalY = -420;
      moveX = 200;
    }

    tl.fromTo(
      ".num",
      { scale: 800, y: 800, x: 0, opacity: 1, zIndex: 5 },
      { scale: scaleValue, y: 0, x: 0, duration: 2.3, ease: "power3.out" }
    );

    tl.fromTo(
      ".word",
      {
        x: 120,
        opacity: 0,
        scale: scaleValue,
        zIndex: 1,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.1"
    );

    tl.to(
      ".num",
      {
        x: moveX,
        duration: 1,
        ease: "power2.out",
      },
      "-=1"
    );

    tl.to([".num", ".word"], {
      x: 0,
      y: finalY,
      scale: 1,
      duration: 1.4,
      ease: "power3.inOut",
    });

    tl.fromTo(
      ".header-wrapper",
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        zIndex: 999999999,
      }
    );

    tl.to(".social-links", {
      left: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    tl.to([".hero-banner .hd", ".hero-banner .banner-hd-mini"], {
      opacity: 1,
      duration: 1.4,
      ease: "power2.inOut",
    });

    tl.to([".para-up", ".video-banner .btn-wrapper"], {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    });

    tl.to(".overlay", {
      opacity: 0,
      duration: 1.2,
      ease: "power3.inOut",
      onComplete: () => {
        const overlay = document.querySelector(".overlay");
        if (overlay) overlay.style.display = "none";

        if (videoRef.current) {
          videoRef.current.play();
        }
      },
    });
  }, []);
  // LOGO ANIMATION ENDS HERE



  // TEXT SLIDER ANIMATION STARTS HERE (BOTH TRASPARENT AND WHITE SLIDER)
  useEffect(() => {
    let xValue = -565;
    let startVal = "top 500";
    let endVal = "bottom 400";
    let scrubVal = 2;
    const width = window.innerWidth;
    if (width >= 1900) {
      xValue = -150;
      scrubVal = 1.5;
    } else if (width >= 1600) {
      xValue = -460;
      scrubVal = 2.5;
    } else if (width >= 1500) {
      xValue = -560;
      scrubVal = 2;
    } else if (width >= 1440) {
      xValue = -620;
      scrubVal = 2;
    } else if (width >= 1400) {
      xValue = -660;
      scrubVal = 2;
    } else if (width >= 1366) {
      xValue = -690;
      scrubVal = 2;
      startVal = "top 500";
      endVal = "bottom 300";
    } else if (width >= 1280) {
      xValue = -780;
      scrubVal = 2;
      startVal = "top 500";
      endVal = "bottom 300";
    } else if (width >= 1200) {
      xValue = -860;
      scrubVal = 2;
      startVal = "top 500";
      endVal = "bottom 300";
    } else if (width >= 1024) {
      xValue = -565;
      scrubVal = 2;
    } else if (width >= 991) {
      xValue = -590;
      scrubVal = 2;
      startVal = "top 400";
      endVal = "bottom 300";
    } else if (width >= 800) {
      xValue = -790;
      scrubVal = 1.7;
      startVal = "top 320";
      endVal = "bottom 300";
    } else if (width >= 767) {
      xValue = -820;
      startVal = "top 400";
      endVal = "bottom 300";
      scrubVal = 1.5;
    } else if (width >= 500) {
      xValue = -770;
      startVal = "top 400";
      endVal = "bottom 300";
      scrubVal = 1.5;
    } else if (width >= 375) {
      xValue = -740;
      startVal = "top 400";
      endVal = "bottom 300";
      scrubVal = 2.5;
    } else {
      xValue = -250;
      startVal = "top 90%";
      endVal = "bottom 10%";
      scrubVal = 1;
    }
    gsap.to(".marquee-mega-wrapper", {
      x: xValue,
      ease: "none",
      scrollTrigger: {
        trigger: ".marquee-wrapper1",
        start: startVal,
        end: endVal,
        scrub: scrubVal,
      },
    });
  }, []);

  // TRANSPARENT SLIDER STARTS HERE
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let xValue = -540;
    let startPoint = "top 300";
    let endPoint = "bottom 400";
    let showMarkers = false;
    let scrubVal = 2;
    if (window.innerWidth <= 375) {
      xValue = -400;
      startPoint = "top 200";
      endPoint = "bottom 300";
      showMarkers = false;
      scrubVal = 1;
    } else if (window.innerWidth <= 500) {
      xValue = -760;
      startPoint = "bottom 500";
      endPoint = "bottom 500";
      showMarkers = false;
      scrubVal = 1;
    } else if (window.innerWidth <= 767) {
      xValue = -820;
      startPoint = "bottom 800";
      endPoint = "bottom 800";
      showMarkers = false;
      scrubVal = 2;
    } else if (window.innerWidth <= 991) {
      xValue = -600;
      startPoint = "top 200";
      endPoint = "bottom 300";
      showMarkers = false;
      scrubVal = 1;
    } else if (window.innerWidth <= 1024) {
      xValue = -560;
      startPoint = "top 200";
      endPoint = "bottom 300";
      showMarkers = false;
      scrubVal = 1;
    } else if (window.innerWidth <= 1200) {
      xValue = -880;
      startPoint = "top 300";
      endPoint = "bottom 300";
      showMarkers = false;
      scrubVal = 2;
    } else if (window.innerWidth <= 1280) {
      xValue = -775;
      startPoint = "top 300";
      endPoint = "bottom 300";
      showMarkers = false;
      scrubVal = 1;
    } else if (window.innerWidth <= 1366) {
      xValue = -700;
      startPoint = "top 300";
      endPoint = "bottom 300";
      showMarkers = false;
      scrubVal = 1;
    } else if (window.innerWidth <= 1400) {
      xValue = -670;
      startPoint = "top 400";
      endPoint = "bottom 300";
      showMarkers = false;
      scrubVal = 1;
    } else if (window.innerWidth <= 1440) {
      xValue = -620;
      startPoint = "top 420";
      endPoint = "bottom 300";
      showMarkers = false;
      scrubVal = 1;
    } else if (window.innerWidth <= 1500) {
      xValue = -560;
      startPoint = "top 500";
      endPoint = "bottom 300";
      showMarkers = false;
      scrubVal = 1;
    } else if (window.innerWidth <= 1600) {
      xValue = -455;
      startPoint = "top 500";
      endPoint = "bottom 300";
      showMarkers = false;
      scrubVal = 1;
    } else if (window.innerWidth <= 1900) {
      xValue = -155;
      startPoint = "bottom 500";
      endPoint = "bottom 300";
      showMarkers = false;
      scrubVal = 0.6;
    }
    gsap.to(".transparent .marquee-mega-wrapper", {
      x: xValue,
      ease: "none",
      scrollTrigger: {
        trigger: ".why-choose-us",
        start: startPoint,
        end: endPoint,
        scrub: scrubVal,
        scroller: "body",
        markers: showMarkers,
      },
    });
  }, []);
  // TRANSPARENT SLIDER STARTS HERE
  // TEXT SLIDER ANIMATION END HERE


  // ABOUT US IMAGE ANIMATION STARTS HERE
  useEffect(() => {
    const w = window.innerWidth;
    let finalWidth, finalLeft, finalHeight, scrubVal = 2;
    if (w >= 1900) {
      finalWidth = "200px";
      finalLeft = "52%";
      finalHeight = "622px";
      scrubVal = 1.5;
    } else if (w >= 1600) {
      finalWidth = "200px";
      finalLeft = "52%";
      finalHeight = "540px";
    } else if (w >= 1500) {
      finalWidth = "200px";
      finalLeft = "52%";
      finalHeight = "530px";
    } else if (w >= 1440) {
      finalWidth = "200px";
      finalLeft = "52%";
      finalHeight = "500px";
    } else if (w >= 1366) {
      finalWidth = "180px";
      finalLeft = "59%";
      finalHeight = "530px";
    } else if (w >= 1280) {
      finalWidth = "160px";
      finalLeft = "48%";
      finalHeight = "450px";
    } else if (w >= 1200) {
      finalWidth = "160px";
      finalLeft = "48%";
      finalHeight = "450px";
    } else if (w >= 1024) {
      finalWidth = "160px";
      finalLeft = "48%";
      finalHeight = "450px";
    } else if (w >= 991) {
      finalWidth = "100%";
      finalLeft = "0%";
      finalHeight = "400px";
    } else if (w >= 500) {
      finalWidth = "100%";
      finalLeft = "0%";
      finalHeight = "400px";
    } else if (w >= 400) {
      finalWidth = "100%";
      finalLeft = "0%";
      finalHeight = "400px";
    } else if (w >= 375) {
      finalWidth = "100%";
      finalLeft = "0%";
      finalHeight = "350px";
    } else {
      finalWidth = "140px";
      finalLeft = "45%";
      finalHeight = "729px";
    }
    gsap.to(".img2", {
      width: finalWidth,
      right: 0,
      left: finalLeft,
      ease: "none",
      height: finalHeight,
      scrollTrigger: {
        trigger: ".about-us",
        start: "top 400",
        end: "top 300",
        scrub: scrubVal,
      },
    });
  }, []);

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    let finalWidth, finalHeight, finalTop, finalLeft;
    if (w >= 1900) {
      finalWidth = "500px";
      finalHeight = "520px";
      finalTop = "16.5%";
      finalLeft = "15px"
    } else if (w >= 1600) {
      finalWidth = "430px";
      finalHeight = "470px";
      finalTop = "13%";
      finalLeft = "45px"
    } else if (w >= 1500) {
      finalWidth = "430px";
      finalHeight = "465px";
      finalTop = "13%";
      finalLeft = "45px"
    } else if (w >= 1440) {
      finalWidth = "430px";
      finalHeight = "450px";
      finalTop = "10%";
      finalLeft = "45px"
    } else if (w >= 1366) {
      finalWidth = "100%";
      finalHeight = "460px";
      finalTop = "13.1%";
    } else if (w >= 1280) {
      finalWidth = "400px";
      finalHeight = "450px";
      finalTop = "0%";
    } else if (w >= 1200) {
      finalWidth = "400px";
      finalHeight = "450px";
      finalTop = "0%";
    } else if (w >= 1024) {
      finalWidth = "400px";
      finalHeight = "432px";
      finalTop = "4%";
    } else if (w >= 991) {
      finalWidth = "400px";
      finalHeight = "400px";
      finalTop = "0%";
      finalLeft = "18%"
    } else if (w >= 500) {
      finalWidth = "400px";
      finalHeight = "400px";
      finalTop = "0%";
      finalLeft = "0%"
    } else if (w >= 400) {
      finalWidth = "100%";
      finalHeight = "100%";
      finalTop = "0%";
      finalLeft = "0%"
    } else if (w >= 375) {
      finalWidth = "100%";
      finalHeight = "100%";
      finalTop = "0%";
      finalLeft = "0%"
    } else {
      finalWidth = "100%";
      finalHeight = "600px";
      finalTop = "4%";
      finalLeft: 0;
    }
    gsap.to(".img1", {
      width: finalWidth,
      height: finalHeight,
      left: finalLeft,
      right: 0,
      top: finalTop,
      ease: "none",
      scrollTrigger: {
        trigger: ".about-us",
        start: "top 400",
        end: "top 300",
        scrub: 2,
      },
    });
  }, []);
  // ABOUT US IMAGE ANIMATION ENDS HERE

  // SERVICES CARDS ANIMATION STARTS HERE
  useEffect(() => {
    const w = window.innerWidth;
    let finalWidth;
    let finalLeft;
    let finalScale;
    if (w >= 1600) {
      finalWidth = "700px";
      finalLeft = "2.7%";
      finalScale = 0.85;
    } else if (w >= 1500) {
      finalWidth = "650px";
      finalLeft = "3.1%";
      finalScale = 0.82;
    } else if (w >= 1440) {
      finalWidth = "650px";
      finalLeft = "3.2%";
      finalScale = 0.82;
    } else if (w >= 1400) {
      finalWidth = "600px";
      finalLeft = "3.4%";
      finalScale = 0.8;
    } else if (w >= 1366) {
      finalWidth = "600px";
      finalLeft = "3.5%";
      finalScale = 0.8;
    } else if (w >= 1280) {
      finalWidth = "550px";
      finalLeft = "3.3%";
      finalScale = 0.8;
    } else if (w >= 1200) {
      finalWidth = "500px";
      finalLeft = "3.3%";
      finalScale = 0.8;
    } else {
      finalWidth = "100%";
      finalLeft = "0%";
      finalScale = 1;
    }
    gsap.fromTo(
      ".service1",
      {
        position: "relative",
        width: "800px",
        scale: 0.9,
        y: 20,
      },
      {
        width: finalWidth,
        left: finalLeft,
        scale: finalScale,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-sec",
          start: "top 600",
          end: "top 0",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    const w = window.innerWidth;
    let finalWidth;
    let finalRight;
    let finalScale;
    if (w >= 1600) {
      finalWidth = "700px";
      finalRight = "2.8%";
      finalScale = 0.85;
    } else if (w >= 1500) {
      finalWidth = "650px";
      finalRight = "3.3%";
      finalScale = 0.82;
    } else if (w >= 1440) {
      finalWidth = "650px";
      finalRight = "3.2%";
      finalScale = 0.82;
    } else if (w >= 1400) {
      finalWidth = "600px";
      finalRight = "3.2%";
      finalScale = 0.82;
    } else if (w >= 1366) {
      finalWidth = "600px";
      finalRight = "3.5%";
      finalScale = 0.8;
    } else if (w >= 1280) {
      finalWidth = "550px";
      finalRight = "3.3%";
      finalScale = 0.8;
    } else if (w >= 1200) {
      finalWidth = "500px";
      finalRight = "3.3%";
      finalScale = 0.8;
    } else {
      finalWidth = "100%";
      finalRight = "0%";
      finalScale = 1;
    }
    gsap.fromTo(
      ".service3",
      {
        position: "relative",
        width: "800px",
        scale: 0.9,
        y: 20,
      },
      {
        width: finalWidth,
        right: finalRight,
        scale: finalScale,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-sec",
          start: "top 600",
          end: "top 0",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
  // SERVICES CARDS ANIMATION STARTS HERE


  // HOVER ANIMATION ON CARDS
  useEffect(() => {
    const serviceCards = document.querySelectorAll(".service-card-wrapper");


    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("active");
      });
      card.addEventListener("mouseleave", () => {
        card.classList.remove("active");
      });
    });
    return () => {
      serviceCards.forEach((card) => {
        card.removeEventListener("mouseenter", () => { });
        card.removeEventListener("mouseleave", () => { });
      });
    };
  }, []);
  // HOVER ANIMATION ON CARDS

  return (
    <>
      <Header />
      <div className="overlay"></div>
      <div ref={logoRef} className="header-logo center-box logo-none">
        <a href="#" className='d-flex gap-2'>
          <p className="word">FIVE</p>
          <p className="num">9</p>
        </a>
      </div>
      <SocialLinks />
      <section className='hero-banner'>
        <div className="container">
          <h3 className='banner-hd-mini hd'>Reliable Systems, Zero Downtime</h3>
          <h1 className='banner-hd hd'>Stay Online, Scale Cleanly, and Remove Capital Strain.</h1>
        </div>
      </section>
      <section className='video-banner main-page'>
        <div className="container">
          <div className="video-area">
            <div className='main-video'>
              <video ref={videoRef} src="/video-back.mp4" muted loop>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className='banner-para para-up'>Your systems can't afford to go down. We architect, deploy, and monitor infrastructure that stays operational when competitors are scrambling to recover. HAaaS and DRaaS services are designed for organizations that demand reliability, not excuses.</p>
              <Secondarybtn />
            </div>
          </div>
        </div>
        <MarqueeSlider />
        <div className="row justify-content-center para-row">
          <div className="col-lg-6">
            <h3 className='banner-hd-mini hd'>Our Name Comes from “Five Nines”</h3>
            <p className='banner-para'>Which means 99.999% Uptime is Our Standard. Five 9 is your enterprise technology partner, delivering senior expertise and execution power on demand without hiring additional full-time staff.</p>
            <Secondarybtn />
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h3 className='banner-hd-mini'>About Us</h3>
              <h1 className='banner-hd'>More Than 35 Markets Protected Across the United States</h1>
              <p className="banner-para">Since 2014, Five 9 has focused on keeping business systems operational. Our name refers to the industry gold standard of 99.999% availability. That number represents what we deliver every single day. We build the technology foundations that companies rely on to serve their customers, process transactions, and run their operations.on: </p>
              <div className="btn-wrapper">
                <div className="btn-fill"></div>
                <div className="btn-content">
                  <div className="left-icon">
                    <Image src={rightArrow} className='img-fluid' alt="" />
                  </div>
                  <div className="btn-text" onClick={() => router.push("/about-us")}>READ MORE</div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-img-wrapper">
                <Image src={aboutBannerimg1} className='img1' alt="" />
                <Image src={aboutBannerimg2} className='img2' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" >
              <div className="mission-btn-wrapper" >
                <div className='w-100'>
                  <div className='mission-wrapper' >
                    <h3 className='vision-hd'>Our Vision</h3>
                    <Image src={rightArrow} className='img-fluid' alt="" />
                  </div>
                  <div className="mission-btn-content-wrapper">
                    <p className='banner-para'>Technology should make businesses run more smoothly, not make them more complicated. Companies of any size deserve access to the same quality infrastructure that large enterprises use. We're working toward a future where your budget and company size don't limit your technology capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mission-btn-wrapper" >
                <div className='w-100'>
                  <div className='mission-wrapper'>
                    <h3 className='vision-hd'>Our Mission</h3>
                    <Image src={rightArrow} className='img-fluid' alt="" />
                  </div>
                  <div className="mission-btn-content-wrapper">
                    <p className='banner-para'>We help organizations build technology that actually supports their growth. Every system we work on gets stronger, costs less to maintain over time, and grows alongside your business. Strategy alone isn’t enough. We stay accountable through execution, so plans actually move the business forward.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-sec position-relative service-mob-none">
        <div className="container">
          <h3 className='banner-hd-mini'>Our Services</h3>
          <h1 className='banner-hd'>Access senior expertise exactly when you need it. Pay only for what you use.</h1>
        </div>
        <div className="service-card-mega-wrapper">
          <div className="service-card-wrapper service1 service-box-gsap">
            <h3 className={`${montserrat.className}`}>Consulting</h3>
            <p className='banner-para'>When your team faces complex technical challenges, we provide experienced experts for targeted projects like security audits, cloud migrations, or performance improvements delivering fast solutions without the cost of permanent hires.</p>
            <div className="btn-wrapper" onClick={() => router.push("/our-services/consulting")}>
              <div className="btn-fill"></div>
              <div className="btn-content">
                <div className="left-icon">
                  <Image src={rightArrow} className='img-fluid' alt="" />
                </div>
                <div className="btn-text">LEARN MORE</div>
              </div>
            </div>
          </div>
          <div className="service-card-wrapper service2">
            <h3 className={`${montserrat.className}`} >Advisory</h3>
            <p className='banner-para'>Major technology decisions need expert insight. Our human-led advisors bring Fortune 500 and startup experience, offering proven judgment to guide critical choices and help you avoid costly mistakes.</p>
            <div className="btn-wrapper" onClick={() => router.push("/our-services/advisory")}>
              <div className="btn-fill"></div>
              <div className="btn-content">
                <div className="left-icon">
                  <Image src={rightArrow} className='img-fluid' alt="" />
                </div>
                <div className="btn-text">LEARN MORE</div>
              </div>
            </div>
          </div>
          <div className="service-card-wrapper service3 service-box-gsap2">
            <h3 className={`${montserrat.className}`}>Strategy</h3>
            <p className='banner-para'>We assess your current systems, identify what works and what doesn’t, then create a clear technology roadmap that prioritizes spending, fits your budget, and drives measurable revenue growth over time.</p>
            <div className="btn-wrapper" onClick={() => router.push("/our-services/strategy")}>
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
      </section>
      <ServicesSection />
      <section className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h3 className='banner-hd-mini'>Why Choose Five9?</h3>
              <h1 className='banner-hd'>We Extend Your Capabilities, So You Don’t Hire More</h1>
              <p className='banner-para'>Over the past decade, we've fixed the problems that destroy businesses. System crashes. Security breaches. Failed recovery attempts. We know what breaks and learned how to prevent it. Our managed technology execution approach implements, monitor, and optimize them as your needs change.</p>
              <Secondarybtn />
            </div>
            <div className="col-lg-5">
              <div className="row justify-content-between choose-row1">
                <div className="col-lg-6 text-center">
                  <div className="choose-wrapper">
                    <Image src={chooseImage1} className='img-fluid' alt="" />
                    <h3 className='banner-hd-mini'>35+</h3>
                    <p className="banner-para">Markets in U.S.</p>
                  </div>
                </div>
                <div className="col-lg-6 text-center">
                  <div className="choose-wrapper choose-wrapper-black">
                    <Image src={chooseImage2} className='img-fluid' alt="" />
                    <h3 className='banner-hd-mini'>90%</h3>
                    <p className="banner-para">Retention Rate</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between mt-5 choose-row2">
                <div className="col-lg-6 text-center">
                  <div className="choose-wrapper choose-wrapper-black">
                    <Image src={chooseImage3} className='img-fluid' alt="" />
                    <h3 className='banner-hd-mini'>24/7</h3>
                    <p className="banner-para">Support</p>
                  </div>
                </div>
                <div className="col-lg-6 text-center">
                  <div className="choose-wrapper">
                    <Image src={chooseImage4} className='img-fluid' alt="" />
                    <h3 className='banner-hd-mini'>15+</h3>
                    <p className="banner-para">Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="capabilities-sec">
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
        <div className="container text-center">
          <h3 className='banner-hd-mini'>Five Specialized Domains. One Reliable Partner.</h3>
          <p className='banner-para'>Five 9 delivers technology capability as a service across five specialized areas. Each domain has dedicated experts focusing entirely on their field. You get deep knowledge from specialists, and advices from generalists.</p>
          <div className="capabilities-card-mega-wrapper home-capablities-wrapper">
            <div className="capabilities-card-wrapper">
              <Image src={capableImage1} className='img-fluid' alt="" />
              <h4 className='cap-para'>Security</h4>
              <p className='banner-para'>Protect your data with testing, compliance, and incident response services.</p>
            </div>
            <div className="capabilities-card-wrapper">
              <Image src={capableImage2} className='img-fluid' alt="" />
              <h4 className='cap-para'>Transformation</h4>
              <p className='banner-para'>Modernize systems safely, migrate data, train staff, and improve operations.</p>
            </div>
            <div className="capabilities-card-wrapper">
              <Image src={capableImage3} className='img-fluid' alt="" />
              <h4 className='cap-para'>Infrastructure</h4>
              <p className='banner-para'>Build scalable, redundant infrastructure with monitoring to prevent failures.</p>
            </div>
            <div className="capabilities-card-wrapper">
              <Image src={capableImage4} className='img-fluid' alt="" />
              <h4 className='cap-para'>AI</h4>
              <p className='banner-para'>Implement AI for analytics, automation, and measurable business results.</p>
            </div>
            <div className="capabilities-card-wrapper">
              <Image src={capableImage5} className='img-fluid' alt="" />
              <h4 className='cap-para'>Applications</h4>
              <p className='banner-para'>Develop, integrate, and optimize applications to boost team productivity.</p>
            </div>
          </div>
        </div>
      </section>
      <InsightSlider />
      <Testimonials/>
    </>
  )
}

export default page
