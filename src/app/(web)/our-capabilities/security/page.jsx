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
                            <h3 className='banner-hd-mini hd security-hd'>Protect Your Systems, Data,  <br /> And Reputation.</h3>
                            <h1 className='banner-hd hd'>Security</h1>
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
                <h3 className='banner-hd-mini hd'>We help you stay online, secure, and resilient against daily threats.</h3>
                <p className='banner-para text-center mt-3 mb-5'>Your business holds valuable information that criminals want. Customer records. Financial data. Proprietary processes. One breach can cost millions in lost revenue, legal fees, and destroyed reputation. We provide <span className="red">business IT security solutions</span> that prevent attacks before they happen and respond effectively when they do.</p>
            </div>
            <section className="security-sec">
                <div className="container">
                    <div className="security-content-wrapper" data-aos="fade-right" data-aos-delay="1000">
                        <div className="row align-items-center">
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="1500">
                                {/* <h3 className='banner-hd-mini hd'>Bridge Strategy Design</h3> */}
                                <h1 className='banner-hd hd'>SECURITY</h1>
                                <p className="banner-para">Protect your business from threats that evolve every single day. We help you defend customer data, financial records, and proprietary information through penetration testing, vulnerability management, compliance frameworks, and incident response planning.</p>
                                <h4 className='term-hd-mini'>Common challenges we solve:</h4>
                                <p className='banner-para'>Failed compliance audits, security breaches that could have been prevented, lack of incident response plans, outdated security practices that create vulnerabilities.</p>
                            </div>
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="2000">
                                <video src="/images/security-video.mp4" className='img-fluid' data-aos="fade-left" data-aos-delay="2500" playsInline autoPlay muted loop></video>
                                {/* <p className='banner-para'>With Five 9, transformation is not disruption for its own sake—it's a structured evolution toward a stronger, more capable organization. We help you accelerate progress, reduce complexity, and deliver meaningful change that positions your business for the future.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>













            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">WHAT WE DO</h2>
                    <p className='banner-para'>Security isn't about buying expensive tools. It's about understanding your risks and addressing them systematically. Our <span className="red">IT security advisory service</span> starts with identifying what you need to protect, who wants to take it, and how they might try.</p>
                    <p className='banner-para'>We've helped companies across industries strengthen their defenses. Healthcare providers achieving HIPAA compliance. Financial firms meeting SEC requirements. Retailers protecting payment data. Manufacturing companies securing industrial control systems.</p>
                    <p className='banner-para'>Every business faces different threats. We design <span className="red">scalable enterprise security solutions</span> that match your specific risks and budget. You get protection that makes sense for your situation, not generic checklists that waste money.</p>
                </div>
            </section>






            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">OUR SECURITY SERVICES</h2>
                    <h2 className="term-hd-mini">Vulnerability Assessment & Penetration Testing</h2>
                    <p className='banner-para'>We test your systems the same way attackers would. Network scans identify open ports and outdated software. Penetration testing simulates real attacks to find weaknesses. Social engineering tests reveal if your employees can spot phishing attempts. You get a clear picture of where vulnerabilities exist before criminals find them.</p>

                    <h2 className="term-hd-mini">Cyber Risk & Compliance Management</h2>
                    <p className='banner-para'>Different industries face different regulatory requirements. HIPAA for healthcare. PCI-DSS for payment processing. SOC 2 for SaaS companies. GDPR for European customer data. Our <span className="red">cyber risk & compliance management</span> services help you meet the standards that apply to your business. We handle the technical implementation while you focus on running your company.</p>

                    <h2 className="term-hd-mini">Cloud & Infrastructure Security</h2>
                    <p className='banner-para'>Moving to cloud platforms creates new security challenges. Misconfigured access controls expose data. Shared responsibility models confuse who protects what. Multiple cloud providers multiply complexity. We secure <span className="red">cloud & infrastructure</span> across AWS, Azure, Google Cloud, and hybrid environments. Your data stays protected regardless of where it lives.</p>

                    <h2 className="term-hd-mini">Cybersecurity Consulting for Enterprises</h2>
                    <p className='banner-para'>Large organizations face sophisticated threats that require advanced defenses. Nation-state actors. Organized cybercrime. Industrial espionage. Our <span className="red">cybersecurity consulting for enterprises</span> includes threat intelligence, security operations center design, and incident response planning. You get enterprise-grade protection built by people who've defended systems at Fortune 500 companies.</p>

                    <h2 className="term-hd-mini">Security Monitoring & Incident Response</h2>
                    <p className='banner-para'>Attacks happen 24/7. Detection needs to happen just as constantly. We set up monitoring that watches for suspicious activity around the clock. Failed login attempts. Unusual data transfers. Access from unexpected locations. When something looks wrong, our team investigates immediately. You get response measured in minutes, not hours or days.</p>

                </div>
            </section>





            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">WHY SECURITY MATTERS NOW</h2>
                    <p className='banner-para'>Cyberattacks increased 32%% last year. The average cost of a data breach reached $4.45 million. Small and medium businesses are targeted just as often as large enterprises because attackers assume they have weaker defenses.</p>
                    <p className='banner-para'>Ransomware locks your data and demands payment. Phishing tricks employees into giving away credentials. Supply chain attacks compromise vendors to reach you. DDoS attacks knock your services offline. The threats are real and growing.</p>
                    <p className='banner-para'>Prevention costs far less than recovery. A breach that costs millions to fix could have been prevented with thousands in proper security. Insurance doesn't cover reputational damage or lost customers. The best defense is not needing to recover in the first place.</p>
                </div>
            </section>





            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">OUR SECURITY PROCESS</h2>
                    <h2 className="term-hd-mini">Step 1: Security Assessment</h2>
                    <p className='banner-para'>We evaluate your current security posture. What protections exist? Where are the gaps? What regulations apply to your industry? This assessment takes 1-2 weeks and gives you a clear picture of where you stand.</p>

                    <h2 className="term-hd-mini">Step 2: Risk Prioritization</h2>
                    <p className='banner-para'>Not all vulnerabilities matter equally. We prioritize based on likelihood and impact. Critical issues that could cause immediate damage get addressed first. Lower-risk items get scheduled appropriately. You get a roadmap that makes sense.</p>

                    <h2 className="term-hd-mini">Step 3: Implementation</h2>
                    <p className='banner-para'>We implement security controls that address your specific risks. Firewalls get configured correctly. Access controls get tightened. Encryption gets applied where needed. Multi-factor authentication gets rolled out. Monitoring gets set up. Each control serves a specific purpose.</p>

                    <h2 className="term-hd-mini">Step 4: Testing & Validation</h2>
                    <p className='banner-para'>We test that everything works as intended. Penetration testing verifies defenses hold up under attack. Compliance audits confirm you meet regulatory requirements. Incident response drills ensure your team knows what to do. Nothing goes live until we've proven it works.</p>

                    <h2 className="term-hd-mini">Step 5: Ongoing Monitoring</h2>
                    <p className='banner-para'>Security isn't a one-time project. New threats emerge constantly. Systems change. Employees join and leave. We provide continuous monitoring and regular reviews to keep your defenses current. You stay protected as your business evolves.</p>

                </div>
            </section>






            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">CASE STUDY: HEALTHCARE PROVIDER</h2>
                    <h2 className="term-hd-mini">The Challenge:</h2>
                    <p className='banner-para'>A mid-sized healthcare provider failed their HIPAA audit with 37 violations. They faced $50,000 in potential fines and risked losing their ability to process insurance claims. Their systems were built for convenience, not compliance.</p>

                    <h2 className="term-hd-mini">What We Did:</h2>
                    <p className='banner-para'>We conducted a complete security overhaul. Implemented encryption for patient data at rest and in transit. Set up proper access controls so staff only saw information they needed. Created audit logging that tracked every data access. Trained employees on HIPAA requirements. Built incident response procedures.</p>

                    <h2 className="term-hd-mini">The Result:</h2>
                    <p className='banner-para'>Full HIPAA compliance achieved in 90 days. All 37 violations remediated. Passed follow-up audit with zero findings. New systems maintain compliance automatically through policy enforcement. No fines paid. Operations continued without interruption.</p>

                </div>
            </section>



            <section className="service-work-sec border-0">
                <div className="container">
                    <h2 className="term-hd text-center mb-5">SECURITY CERTIFICATIONS & EXPERTISE</h2>
                    <p className='banner-para'>Our security team maintains certifications including CISSP, CEH, CISM, and OSCP. We stay current on emerging threats through continuous training and threat intelligence feeds. More importantly, we've responded to real incidents and know what actually works under pressure.</p>
                    <p className='banner-para'>We've secured systems across industries. Healthcare. Finance. Retail. Manufacturing. Government contractors. Each sector has unique requirements. Our experience spans all of them.</p>
                </div>
            </section>



            <section className="cta-sec service-pg-cta">
                <div className="container">
                    <h2 className="cta-hd">START WITH A FREE SECURITY ASSESSMENT</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Find Out Where You're Vulnerable</h4>
                            <p className="banner-para">We'll review your current security posture and identify gaps that create risk. You get a clear report showing what needs attention and why it matters. </p>
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
