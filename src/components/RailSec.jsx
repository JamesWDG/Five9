"use client";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const RailSec = () => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();

        // RESET
        gsap.set(".rail", { x: 0 });

        mm.add("(min-width: 1900px)", () => {
            gsap.to(".rail", {
                x: -720,
                ease: "none",
                scrollTrigger: {
                    trigger: ".scrolling-text",
                    start: "top 600px",
                    end: "bottom 300px",
                    scrub: 1.5,
                    // markers: true,
                },
            });
        });

        mm.add("(min-width: 1600px) and (max-width: 1899px)", () => {
            gsap.to(".rail", {
                x: -60,
                ease: "none",
                scrollTrigger: {
                    trigger: ".scrolling-text",
                    start: "top 800px",
                    end: "bottom 300px",
                    scrub: 1.5,
                    // markers: true,
                },
            });
        });

        mm.add("(min-width: 1500px) and (max-width: 1599px)", () => {
            gsap.to(".rail", {
                x: -90,
                ease: "none",
                scrollTrigger: {
                    trigger: ".scrolling-text",
                    start: "top 800px",
                    end: "bottom 300px",
                    scrub: 1.8,
                    // markers: true,
                },
            });
        });

        mm.add("(min-width: 1400px) and (max-width: 1499px)", () => {
            gsap.to(".rail", {
                x: -120,
                ease: "none",
                scrollTrigger: {
                    trigger: ".scrolling-text",
                    start: "top 800px",
                    end: "bottom 300px",
                    scrub: 0.5,
                },
            });
        });

        mm.add("(min-width: 1300px) and (max-width: 1399px)", () => {
            gsap.to(".rail", {
                x: -150,
                ease: "none",
                scrollTrigger: {
                    trigger: ".scrolling-text",
                    start: "top 800px",
                    end: "bottom 300px",
                    scrub: 2,
                },
            });
        });
        mm.add("(min-width: 1280px)", () => {
            gsap.to(".rail", {
                x: -200,
                ease: "none",
                scrollTrigger: {
                    trigger: ".scrolling-text",
                    start: "top 800px",
                    end: "bottom 300px",
                    scrub: 1,
                },
            });
        });
        mm.add("(min-width: 1200px)", () => {
            gsap.to(".rail", {
                x: -250,
                ease: "none",
                scrollTrigger: {
                    trigger: ".scrolling-text",
                    start: "top 800px",
                    end: "bottom 400px",
                    scrub: 1,
                },
            });
        });

        mm.add("(min-width: 1024px) and (max-width: 1199px)", () => {
            gsap.to(".rail", {
                x: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: ".scrolling-text",
                    start: "top 800px",
                    end: "bottom 500px",
                    scrub: 2,
                },
            });
        });

        mm.add("(min-width: 991px) and (max-width: 1023px)", () => {
            gsap.to(".rail", {
                x: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: ".scrolling-text",
                    start: "top 800px",
                    end: "bottom 600px",
                    scrub: 2,
                },
            });
        });

        mm.add("(max-width: 767px)", () => {
            gsap.to(".rail", {
                x: -230,
                ease: "none",
                scrollTrigger: {
                    trigger: ".scrolling-text",
                    start: "top 800px",
                    end: "bottom 600px",
                    scrub: 2,
                },
            });
        });

        mm.add("(max-width: 500px)", () => {
            gsap.to(".rail", {
                x: -350,
                ease: "none",
                scrollTrigger: {
                    trigger: ".scrolling-text",
                    start: "top 850px",
                    end: "bottom 200px",
                    scrub: 2,
                },
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <div className="row">
            <div className="col-12 position-relative">
                <div className="scrolling-text">
                    <div className="rail">
                        <h4 className="primary-font slide-font">
                            EMPOWERING RESILIENCE, ANYTIME, ANYWHERE
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RailSec;
