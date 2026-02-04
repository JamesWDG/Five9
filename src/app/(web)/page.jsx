"use client";
import React, { useEffect, useLayoutEffect, useRef } from 'react'
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
import Link from 'next/link.js';
import RailSec from '@/components/RailSec.jsx';
const page = () => {
  const router = useRouter();
  const logoRef = useRef(null);
  const videoRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
  }, []);

  // LOGO ANIMATION STARTS HERE
  useEffect(() => {
    const tl = gsap.timeline();
    const static1 = 0.05;
    const static2 = 0.50;
    const w = window.innerWidth;
    let h = window.visualViewport?.height || window.innerHeight;
    let topPadding = 40;

    if (h == 1600) {
      topPadding = -27;
    }
    else if (h >= 1500) {
      topPadding = -20;
    }
    else if (h >= 1400) {
      topPadding = -17;
    }
    else if (h >= 1300) {
      topPadding = -17;
    }
    else if (h >= 1200) {
      topPadding = -7;
    }
    else if (h >= 1100) {
      topPadding = -3;
    }
    else if (h >= 1000) {
      topPadding = -3;
    }
    else if (h >= 900) {
      topPadding = 3;
    }
    else if (h >= 800) {
      topPadding = 10;
    }
    else if (h >= 700) {
      topPadding = 15;
    }
    else if (h >= 600) {
      topPadding = 20;
    }
    else if (h >= 500) {
      topPadding = 27;
    }
    else if (h >= 400) {
      topPadding = 30;
    }
    else if (h >= 300) {
      topPadding = 35;
    }

    let scaleValue = Math.min(w / 800, 2);
    let moveX = w * static1;
    let finalY = -h * static2 + topPadding;

    if (w <= 1100) {
      finalY = 0;
      h = 0;
      topPadding = 0;
      moveX = 0;
      scaleValue = 1;
    }

    const numStartScale = Math.max(w / 2, 800);
    tl.fromTo(
      ".num",
      { scale: numStartScale, y: h, x: 0, opacity: 1, zIndex: 5 },
      { scale: scaleValue, y: 0, x: 0, duration: 2.3, ease: "power3.out" }
    );

    tl.fromTo(
      ".word",
      { x: w * 0.1, opacity: 0, scale: scaleValue, zIndex: 1 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.1"
    );

    tl.to(
      ".num",
      { x: moveX, duration: 1, ease: "power2.out" },
      "-=1"
    );

    tl.to([".num", ".word"], {
      x: 0,
      y: finalY + h * 0.05,
      scale: 1,
      duration: 1.4,
      ease: "power3.inOut",
    });

    tl.fromTo(
      ".header-wrapper",
      { y: -h * 0.05, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", zIndex: 999999999 }
    );

    tl.to(".social-links", { right: 0, duration: 1, ease: "power2.inOut" });

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
        if (videoRef.current) videoRef.current.play();
      },
    });

    ScrollTrigger.refresh();
  }, []);
  // LOGO ANIMATION ENDS HERE



  // TEXT SLIDER ANIMATION STARTS HERE (BOTH TRASPARENT AND WHITE SLIDER)
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1900px)", () => {
      gsap.to(".marquee-mega-wrapper", {
        x: -150,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-wrapper1",
          start: "top 500",
          end: "bottom 400",
          scrub: 1.5,
        },
      });
    });

    mm.add("(min-width: 1600px) and (max-width: 1699px)", () => {
      gsap.to(".marquee-mega-wrapper", {
        x: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-wrapper1",
          start: "top 500",
          end: "bottom 400",
          scrub: 2.5,
        },
      });
    });

    mm.add("(min-width: 1500px) and (max-width: 1599px)", () => {
      gsap.to(".marquee-mega-wrapper", {
        x: -150,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-wrapper1",
          start: "top 500",
          end: "bottom 400",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1400px) and (max-width: 1499px)", () => {
      gsap.to(".marquee-mega-wrapper", {
        x: -250,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-wrapper1",
          start: "top 500",
          end: "bottom 400",
          scrub: 2,
        },
      });
    });

    // mm.add("(min-width: 1400px) and (max-width: 1439px)", () => {
    //   gsap.to(".marquee-mega-wrapper", {
    //     x: -660,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: ".marquee-wrapper1",
    //       start: "top 500",
    //       end: "bottom 400",
    //       scrub: 2,
    //     },
    //   });
    // });

    mm.add("(min-width: 1366px) and (max-width: 1399px)", () => {
      gsap.to(".marquee-mega-wrapper", {
        x: -300,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-wrapper1",
          start: "top 500",
          end: "bottom 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1280px) and (max-width: 1365px)", () => {
      gsap.to(".marquee-mega-wrapper", {
        x: -370,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-wrapper1",
          start: "top 500",
          end: "bottom 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1200px) and (max-width: 1279px)", () => {
      gsap.to(".marquee-mega-wrapper", {
        x: -450,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-wrapper1",
          start: "top 500",
          end: "bottom 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1024px) and (max-width: 1199px)", () => {
      gsap.to(".marquee-mega-wrapper", {
        x: -160,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-wrapper1",
          start: "top 700",
          end: "bottom 400",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 991px) and (max-width: 1023px)", () => {
      gsap.to(".marquee-mega-wrapper", {
        x: -190,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-wrapper1",
          start: "top 700",
          end: "bottom 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 800px) and (max-width: 990px)", () => {
      gsap.to(".marquee-mega-wrapper", {
        x: -370,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-wrapper1",
          start: "top 800",
          end: "bottom 300",
          scrub: 1.7,
        },
      });
    });

    mm.add("(min-width: 767px) and (max-width: 799px)", () => {
      gsap.to(".marquee-mega-wrapper", {
        x: -420,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-wrapper1",
          start: "top 700",
          end: "bottom 300",
          scrub: 1.5,
        },
      });
    });

    mm.add("(min-width: 500px) and (max-width: 766px)", () => {
      gsap.to(".marquee-mega-wrapper", {
        x: -700,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-wrapper1",
          start: "top 900",
          end: "bottom 300",
          scrub: 1.5,
        },
      });
    });

    mm.add("(min-width: 375px) and (max-width: 499px)", () => {
      gsap.to(".marquee-mega-wrapper", {
        x: -820,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-wrapper1",
          start: "top 900",
          end: "bottom 300",
          scrub: 2.5,
        },
      });
    });

    mm.add("(max-width: 374px)", () => {
      gsap.to(".marquee-mega-wrapper", {
        x: -250,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-wrapper1",
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1,
        },
      });
    });

    return () => mm.revert();
  }, []);


  // TRANSPARENT SLIDER STARTS HERE 
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // ===== SMALL MOBILE =====
    mm.add("(max-width: 375px)", () => {
      gsap.to(".transparent .marquee-mega-wrapper1", {
        x: -400,
        ease: "none",
        scrollTrigger: {
          trigger: "why-choose-us",
          start: "top 85%",   // % based start for small screens
          end: "top 45%",     // % based end
          scrub: 1,
          // markers: true,
        },
      });
    });

    // ===== MOBILE =====
    mm.add("(max-width: 376px) and (max-width: 500px)", () => {
      gsap.to(".transparent .marquee-mega-wrapper1", {
        x: -760,
        ease: "none",
        scrollTrigger: {
          trigger: ".why-choose-us",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });
    });

    mm.add("(max-width: 501px) and (max-width: 767px)", () => {
      gsap.to(".transparent .marquee-mega-wrapper1", {
        x: -820,
        ease: "none",
        scrollTrigger: {
          trigger: ".why-choose-us",
          start: "top 75%",
          end: "top 35%",
          scrub: 2,
        },
      });
    });

    // ===== TABLET =====
    mm.add("(max-width: 768px) and (max-width: 991px)", () => {
      gsap.to(".transparent .marquee-mega-wrapper1", {
        x: -600,
        ease: "none",
        scrollTrigger: {
          trigger: ".why-choose-us",
          start: "top 300px", // pixel based for larger screens
          end: "top 100px",
          scrub: 1,
        },
      });
    });

    mm.add("(max-width: 992px) and (max-width: 1024px)", () => {
      gsap.to(".transparent .marquee-mega-wrapper1", {
        x: -560,
        ease: "none",
        scrollTrigger: {
          trigger: ".why-choose-us",
          start: "top 300px",
          end: "top 100px",
          scrub: 1,
        },
      });
    });

    // ===== DESKTOP =====
    mm.add("(max-width: 1025px) and (max-width: 1200px)", () => {
      gsap.to(".transparent .marquee-mega-wrapper1", {
        x: -880,
        ease: "none",
        scrollTrigger: {
          trigger: ".why-choose-us",
          start: "top 400px",
          end: "top 200px",
          scrub: 2,
        },
      });
    });

    mm.add("(max-width: 1201px) and (max-width: 1280px)", () => {
      gsap.to(".transparent .marquee-mega-wrapper1", {
        x: -775,
        ease: "none",
        scrollTrigger: {
          trigger: ".why-choose-us",
          start: "top 400px",
          end: "top 200px",
          scrub: 1,
        },
      });
    });

    mm.add("(min-width: 1281px) and (max-width: 1366px)", () => {
      gsap.to(".transparent .marquee-mega-wrapper1", {
        x: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".text-slider",
          start: "top 800px",
          end: "top 700px",
          scrub: 1,
          // markers: true,
        },
      });
    });

    mm.add("(min-width: 1367px) and (max-width: 1440px)", () => {
      gsap.to(".transparent .marquee-mega-wrapper1", {
        x: -200,
        ease: "none",
        scrollTrigger: {
          trigger: ".text-slider",
          start: "top 600px",
          end: "top 800px",
          scrub: 1,
          // markers: true,
        },
      });
    });

    mm.add("(min-width: 1441px) and (max-width: 1500px)", () => {
      gsap.to(".transparent .marquee-mega-wrapper1", {
        x: -170,
        ease: "none",
        scrollTrigger: {
          trigger: ".text-slider",
          start: "top 350px",
          end: "top 0px",
          scrub: 2,
          // markers: true,
        },
      });
    });

    mm.add("(max-width: 1600px)", () => {
      gsap.to(".transparent .marquee-mega-wrapper1", {
        x: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".text-slider",
          start: "top 550px",
          end: "top 350px",
          scrub: 1,
          // markers: true,
        },
      });
    });

    ScrollTrigger.refresh();
    return () => mm.revert();
  }, []);


  // TRANSPARENT SLIDER STARTS HERE 
  // TEXT SLIDER ANIMATION END HERE


  // ABOUT US IMAGE ANIMATION STARTS HERE
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // ===== MOBILE =====
    mm.add("(min-width: 320px) and (max-width: 375px)", () => {
      gsap.to(".img2", {
        width: "300px",
        height: "300px",
        left: "0%",
        right: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });
    });

    mm.add("(min-width: 375px) and (max-width: 399px)", () => {
      gsap.to(".img2", {
        width: "100%",
        height: "350px",
        left: "0%",
        right: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });
    });

    mm.add("(min-width: 400px) and (max-width: 499px)", () => {
      gsap.to(".img2", {
        width: "100%",
        height: "400px",
        left: "0%",
        right: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });
    });

    mm.add("(min-width: 500px) and (max-width: 990px)", () => {
      gsap.to(".img2", {
        width: "100%",
        height: "400px",
        left: "0%",
        right: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });
    });

    // ===== TABLET =====
    mm.add("(min-width: 991px) and (max-width: 1023px)", () => {
      gsap.to(".img2", {
        width: "100%",
        height: "400px",
        left: "0%",
        right: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 2,
        },
      });
    });

    // ===== DESKTOP =====
    mm.add("(min-width: 1024px) and (max-width: 1199px)", () => {
      gsap.to(".img2", {
        width: "160px",
        height: "450px",
        left: "48%",
        right: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1200px) and (max-width: 1279px)", () => {
      gsap.to(".img2", {
        width: "160px",
        height: "450px",
        left: "48%",
        right: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1280px) and (max-width: 1365px)", () => {
      gsap.to(".img2", {
        width: "160px",
        height: "450px",
        left: "48%",
        right: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1366px) and (max-width: 1439px)", () => {
      gsap.to(".img2", {
        width: "180px",
        height: "530px",
        left: "59%",
        right: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1440px) and (max-width: 1499px)", () => {
      gsap.to(".img2", {
        width: "200px",
        height: "500px",
        left: "52%",
        right: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1500px) and (max-width: 1599px)", () => {
      gsap.to(".img2", {
        width: "200px",
        height: "530px",
        left: "52%",
        right: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1600px) and (max-width: 1899px)", () => {
      gsap.to(".img2", {
        width: "200px",
        height: "540px",
        left: "52%",
        right: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1900px)", () => {
      gsap.to(".img2", {
        width: "200px",
        height: "622px",
        left: "52%",
        right: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 1.5,
        },
      });
    });

    return () => mm.revert();
  }, []);


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // ===== MOBILE =====
    mm.add("(min-width: 320px) and (max-width: 375px)", () => {
      gsap.to(".img1", {
        width: "300px",
        height: "300px",
        top: "0%",
        left: "-5%",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });
    });

    mm.add("(min-width: 375px) and (max-width: 499px)", () => {
      gsap.to(".img1", {
        width: "100%",
        height: "100%",
        top: "0%",
        left: "-5%",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });
    });

    mm.add("(min-width: 500px) and (max-width: 990px)", () => {
      gsap.to(".img1", {
        width: "400px",
        height: "400px",
        top: "0%",
        left: "5%",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 75%",
          end: "top 35%",
          scrub: 1.2,
        },
      });
    });

    // ===== TABLET =====
    mm.add("(min-width: 991px) and (max-width: 1023px)", () => {
      gsap.to(".img1", {
        width: "400px",
        height: "400px",
        top: "0%",
        left: "18%",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 2,
        },
      });
    });

    // ===== DESKTOP =====
    mm.add("(min-width: 1024px) and (max-width: 1279px)", () => {
      gsap.to(".img1", {
        width: "400px",
        height: "432px",
        top: "4%",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1280px) and (max-width: 1439px)", () => {
      gsap.to(".img1", {
        width: "430px",
        height: "430px",
        top: "5%",
        left: "15px",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1366px)", () => {
      gsap.to(".img1", {
        width: "430px",
        height: "430px",
        top: "19%",
        left: "15px",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1440px) and (max-width: 1599px)", () => {
      gsap.to(".img1", {
        width: "430px",
        height: "435px",
        top: "13%",
        left: "45px",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 2,
        },
      });
    });
    mm.add("(min-width: 1500px)", () => {
      gsap.to(".img1", {
        width: "430px",
        height: "455px",
        top: "15%",
        left: "45px",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1600px) and (max-width: 1899px)", () => {
      gsap.to(".img1", {
        width: "430px",
        height: "470px",
        top: "13%",
        left: "45px",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 1.5,
        },
      });
    });

    mm.add("(min-width: 1900px)", () => {
      gsap.to(".img1", {
        width: "500px",
        height: "520px",
        top: "16.5%",
        left: "15px",
        force3D: true,
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 400",
          end: "top 300",
          scrub: 1.5,
        },
      });
    });

    return () => mm.revert();
  }, []);

  // ABOUT US IMAGE ANIMATION ENDS HERE

  // SERVICES CARDS ANIMATION STARTS HERE
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    // ===== MOBILE =====
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        ".service1",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "100%",
          left: "0%",
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // ===== 1200-1280 =====
    mm.add("(min-width: 1200px) and (max-width: 1280px)", () => {
      gsap.fromTo(
        ".service1",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "500px",
          left: "3.3%",
          scale: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // ===== 1281-1366 =====
    mm.add("(min-width: 1281px) and (max-width: 1366px)", () => {
      gsap.fromTo(
        ".service1",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "550px",
          left: "3.3%",
          scale: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // ===== 1367-1400 =====
    mm.add("(min-width: 1367px) and (max-width: 1400px)", () => {
      gsap.fromTo(
        ".service1",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "600px",
          left: "3.5%",
          scale: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // ===== 1401-1440 =====
    mm.add("(min-width: 1401px) and (max-width: 1440px)", () => {
      gsap.fromTo(
        ".service1",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "650px",
          left: "3.2%",
          scale: 0.82,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // ===== 1441-1500 =====
    mm.add("(min-width: 1441px) and (max-width: 1500px)", () => {
      gsap.fromTo(
        ".service1",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "650px",
          left: "3.1%",
          scale: 0.82,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // ===== 1501-1600 =====
    mm.add("(min-width: 1501px) and (max-width: 1600px)", () => {
      gsap.fromTo(
        ".service1",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "650px",
          left: "3.1%",
          scale: 0.82,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // ===== 1601+ =====
    mm.add("(min-width: 1601px)", () => {
      gsap.fromTo(
        ".service1",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "700px",
          left: "2.7%",
          scale: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => mm.revert();
  }, []);


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    // ===== MOBILE =====
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        ".service3",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "100%",
          right: "0%",
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // ===== 1200-1280 =====
    mm.add("(min-width: 1200px) and (max-width: 1280px)", () => {
      gsap.fromTo(
        ".service3",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "500px",
          right: "3.3%",
          scale: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // ===== 1281-1366 =====
    mm.add("(min-width: 1281px) and (max-width: 1366px)", () => {
      gsap.fromTo(
        ".service3",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "550px",
          right: "3.3%",
          scale: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // ===== 1367-1400 =====
    mm.add("(min-width: 1367px) and (max-width: 1400px)", () => {
      gsap.fromTo(
        ".service3",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "600px",
          right: "3.5%",
          scale: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // ===== 1401-1440 =====
    mm.add("(min-width: 1401px) and (max-width: 1440px)", () => {
      gsap.fromTo(
        ".service3",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "600px",
          right: "3.2%",
          scale: 0.82,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // ===== 1441-1500 =====
    mm.add("(min-width: 1441px) and (max-width: 1500px)", () => {
      gsap.fromTo(
        ".service3",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "650px",
          right: "3.2%",
          scale: 0.82,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // ===== 1501-1600 =====
    mm.add("(min-width: 1501px) and (max-width: 1600px)", () => {
      gsap.fromTo(
        ".service3",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "650px",
          right: "3.3%",
          scale: 0.82,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // ===== 1601+ =====
    mm.add("(min-width: 1601px)", () => {
      gsap.fromTo(
        ".service3",
        { position: "relative", width: "800px", scale: 0.9, y: 20 },
        {
          width: "700px",
          right: "2.8%",
          scale: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-sec",
            start: "top 600px",
            end: "top 0px",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  // SERVICES CARDS ANIMATION STARTS HERE


  // HOVER ANIMATION ON CARDS
  useEffect(() => {
    const serviceCards = document.querySelectorAll(".service-card-wrapper");

    // Store listeners so we can remove them later
    const mouseEnterHandler = (card) => () => card.classList.add("active");
    const mouseLeaveHandler = (card) => () => card.classList.remove("active");

    serviceCards.forEach((card) => {
      const enter = mouseEnterHandler(card);
      const leave = mouseLeaveHandler(card);
      card.__enterHandler = enter; // store reference
      card.__leaveHandler = leave;
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
    });

    ScrollTrigger.refresh(); // Refresh ScrollTrigger after DOM changes

    return () => {
      serviceCards.forEach((card) => {
        card.removeEventListener("mouseenter", card.__enterHandler);
        card.removeEventListener("mouseleave", card.__leaveHandler);
        delete card.__enterHandler;
        delete card.__leaveHandler;
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
          <h1 className='banner-hd hd'>High-Availability by Design. Scalable by Default. Revenue-Protected</h1>
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
            <div className="col-lg-8 spc-col">
              <p className='banner-para para-up'>Your systems can't afford to go down. We architect, deploy, and monitor infrastructure that stays operational when competitors are scrambling to recover. HAaaS and DRaaS services are designed for organizations that demand reliability, not excuses.</p>
              <div className="btn-wrapper" onClick={()=> router.push("/contact-us")}>
                <div className="btn-fill"></div>
                <div className="btn-content">
                  <div className="left-icon">
                    <Image src={rightArrow} className='img-fluid' alt="" />
                  </div>
                  <div className="btn-text">GET STARTED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MarqueeSlider />
        <div className="row justify-content-center para-row">
          <div className="col-lg-6">
            <h3 className='banner-hd-mini hd'>Our Name Comes from “Five Nines”</h3>
            <p className='banner-para'>Which means 99.999% Uptime is Our Standard. Five 9 is your enterprise technology partner, delivering senior expertise and execution power on demand without hiring additional full-time staff.</p>
            <div className="btn-wrapper" onClick={()=> router.push("/our-services")}>
              <div className="btn-fill"></div>
              <div className="btn-content">
                <div className="left-icon">
                  <Image src={rightArrow} className='img-fluid' alt="" />
                </div>
                <div className="btn-text">GET STARTED</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h3 className='banner-hd-mini'>About Us</h3>
              <h1 className='banner-hd'>More Than 35 Markets Protected Across the Globe</h1>
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
              <div className="btn-wrapper" onClick={() => router.push("/our-capabilities")}>
                <div className="btn-fill"></div>
                <div className="btn-content">
                  <div className="left-icon">
                    <Image src={rightArrow} className='img-fluid' alt="" />
                  </div>
                  <div className="btn-text">GET STARTED</div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row justify-content-between choose-row1">
                <div className="col-lg-6 text-center">
                  <div className="choose-wrapper">
                    <Image src={chooseImage1} className='img-fluid' alt="" />
                    <h3 className='banner-hd-mini'>35+</h3>
                    <p className="banner-para">Global Markets</p>
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
                    <p className="banner-para">Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="capabilities-sec">
        {/* <section className='transparent'>
          <div className="marquee-mega-wrapper1">
            <p className='marquee-wrapper1 text-slider m-0'>
              EMPOWERING RESILIENCE,
            </p>
            <p className='marquee-wrapper1 text-slider m-0'>
              ANYTIME,
            </p>
            <p className='marquee-wrapper1 text-slider m-0'>
              ANYWHERE
            </p>
          </div>
        </section> */}

        <RailSec />
        <div className="container text-center">
          <h3 className='banner-hd-mini'>Five Specialized Domains. One Reliable Partner.</h3>
          <p className='banner-para'>Five 9 delivers technology capability as a service across five specialized areas. Each domain has dedicated experts focusing entirely on their field. You get deep knowledge from specialists, and advices from generalists.</p>
          <div className="capabilities-card-mega-wrapper home-capablities-wrapper">
            <Link href={"/our-capabilities/security"} className="capabilities-card-wrapper">
              <div>
                <Image src={capableImage1} className='img-fluid' alt="" />
                <h4 className='cap-para'>Security</h4>
                <p className='banner-para'>Protect your data with testing, compliance, and incident response services.</p>
              </div>
            </Link>
            <Link href={"/our-capabilities/Transformation"} className="capabilities-card-wrapper">
              <div>
                <Image src={capableImage2} className='img-fluid' alt="" />
                <h4 className='cap-para'>Transformation</h4>
                <p className='banner-para'>Modernize systems safely, migrate data, train staff, and improve operations.</p>
              </div>
            </Link>
            <Link href={"/our-capabilities/Infrastructure"} className="capabilities-card-wrapper">
              <div>
                <Image src={capableImage3} className='img-fluid' alt="" />
                <h4 className='cap-para'>Infrastructure</h4>
                <p className='banner-para'>Build scalable, redundant infrastructure with monitoring to prevent failures.</p>
              </div>
            </Link>
            <Link href={"/our-capabilities/Artificial-intelligence"} className="capabilities-card-wrapper">
              <div>
                <Image src={capableImage4} className='img-fluid' alt="" />
                <h4 className='cap-para'>AI</h4>
                <p className='banner-para'>Implement AI for analytics, automation, and measurable business results.</p>
              </div>
            </Link>
            <Link href={"/our-capabilities/Applications"} className="capabilities-card-wrapper">
              <div>
                <Image src={capableImage5} className='img-fluid' alt="" />
                <h4 className='cap-para'>Applications</h4>
                <p className='banner-para'>Develop, integrate, and optimize applications to boost team productivity.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <InsightSlider />
      <Testimonials />
    </>
  )
}

export default page
