"use client";
import Link from 'next/link'
import React, { use, useEffect } from 'react'
import rightArrow from "@/app/(web)/assets/images/right-arrow.png"
import Image from 'next/image'
import { montserrat } from '@/app/font/font'
import Newsletter from '@/components/Newsletter'
import Header2 from '@/components/Header2'
import AOS from 'aos';
import SocialLinks from '@/components/SocialLinks';
const page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: -1000
        });
    }, []);
    useEffect(() => {
        const handlers = [];

        document.querySelectorAll(".faq-wrapper").forEach((faq) => {
            const handler = () => {
                const parent = faq.parentElement;

                document.querySelectorAll(".faq-item.active").forEach((item) => {
                    if (item !== parent) item.classList.remove("active");
                });

                parent.classList.toggle("active");
            };

            faq.addEventListener("click", handler);
            handlers.push({ faq, handler });
        });

        return () => {
            handlers.forEach(({ faq, handler }) => {
                faq.removeEventListener("click", handler);
            });
        };
    }, []);
    const faqSections = [
        {
            items: [
                {
                    q: "1. Do you work with companies outside the United States?",
                    a: "Currently, we focus on clients within the U.S. where we can provide 24/7 support effectively."
                },
                {
                    q: "2. What industries do you serve?",
                    a: "We work across industries including healthcare, finance, retail, manufacturing, and professional services. Our services adapt to different industry requirements."
                },
                {
                    q: "3. How quickly can you respond to emergencies?",
                    a: "Our emergency line operates 24/7. Response time depends on the situation, but we typically have someone assessing critical issues within 30 minutes."
                },
                {
                    q: "4. Do you require long-term contracts?",
                    a: "No. Some clients work with us on specific projects. Others maintain ongoing relationships. We structure agreements based on what makes sense for your needs."
                },
                {
                    q: "5. What's your pricing structure?",
                    a: "It varies by service. Some offerings are project-based. Others are monthly retainers. We provide specific pricing after understanding your requirements during our initial conversation."
                }
            ]
        }
    ];
    return (
        <>
            <Header2 />
            <section className='video-banner capable-video'>
                <SocialLinks />
                <div className="container">
                    <div className="video-area">
                        <div className='heading-wrapper'>
                            <h3 className='banner-hd-mini hd'>Contact Us</h3>
                            <h1 className='banner-hd hd'>Got any questions? <br /><span>We're here to answer!</span></h1>
                        </div>
                        <div className='video-area-sec'>
                            <video src="/images/contact-banner-video.mp4" autoPlay playsInline muted loop>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-content'>
                <h1 className='contact-hd' data-aos="fade-right" data-aos-delay="10">Get in touch</h1>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-lg-4 col-12" data-aos="fade-right" data-aos-delay="500">
                            <h4 className={`underline ${montserrat.className}`}>Talk to us <br /> We’ve been there</h4>
                            <p className='banner-para'>Available 24/7 for emergencies. For general inquiries, our team responds during business hours (9 AM - 6 PM EST, Monday through Friday).</p>
                            <p className='banner-para'>We typically respond within 4 business hours. For urgent matters, call instead of emailing.</p>
                        </div>
                        <div className="col-lg-4 col-12" data-aos="fade-right" data-aos-delay="800">
                            <h4 className={`${montserrat.className}`}>Contact us</h4>
                            <div className="contact-content-wrapper">
                                <i className='fa-solid fa-phone'></i>
                                <Link className='banner-para' href={"tel:18778534839"}>+1 877 853 4839</Link>
                            </div>

                            <div className="contact-content-wrapper">
                                <i className='fa-solid fa-envelope'></i>
                                <Link className='banner-para' href={"mailto:info@five9.co"}>info@five9.co</Link>
                            </div>
                            <div className="contact-content-wrapper">
                                <i className="fa-solid fa-location-dot"></i>
                                <p className='banner-para' href="#">8310 S. Valley Highway, <br /> Suite 300, Englewood, <br />CO  </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12" data-aos="fade-right" data-aos-delay="1000">
                            <h4 className={`${montserrat.className}`}>Already a client?</h4>
                            <p className='banner-para'>We work with clients across the country, but our main office is in Colorado. In-person meetings are available by appointment.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-work-sec">
                <div className="container">
                    <h2 className="term-hd text-center">What Happens Next?</h2>
                    <h4 className="banner-para"><span className='red'>Step 1:</span> You reach out via phone, email, or the form below.</h4>

                    <h4 className="banner-para"><span className='red'>Step 2:</span> We schedule a 30-minute call to understand your situation. What's working? What's not? What are you trying to achieve?</h4>

                    <h4 className="banner-para"><span className='red'>Step 3:</span> We'll propose a specific approach with clear pricing.</h4>

                    <h4 className="banner-para"><span className='red'>Step 4:</span> You decide if you want to move forward. Just a straightforward decision based on whether our services make sense for your business.</h4>
                </div>
            </section>
            <section className="contact-form-sec">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-4" data-aos="fade-left" data-aos-delay="1000">
                            <h3 className='banner-hd-mini hd'>Let's Talk </h3>
                            <h1 className='banner-hd hd'>About Your Technology</h1>
                            <p className="banner-para">Tell us about your challenges. We'll tell you honestly if we're the right fit. If we're not, we'll point you toward someone who is.</p>
                            <p className="banner-para">Follow us</p>
                            <ul className="contact-social-links">
                                <li>
                                    <Link href={"https://www.linkedin.com/company/five9-availability"}><i className='fa-brands fa-linkedin-in'></i></Link>
                                </li>
                                <li>
                                    <Link href={"https://x.com/five9co"}><i className='fa-brands fa-x-twitter'></i></Link>
                                </li>
                                <li>
                                    <a href="#"><i className='fa-brands fa-facebook-f'></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className='fa-brands fa-google-plus'></i></a>
                                </li>
                                <li>
                                    <Link href={"https://www.instagram.com/five9co/"}><i className='fa-brands fa-instagram'></i></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-7" data-aos="fade-left" data-aos-delay="1000">
                            <form action="" className='contact-form'>
                                <div className="contact-form-wrapper">
                                    <div className="row justify-content-between">
                                        <div className="col-lg-6">
                                            <label className='banner-para' htmlFor="">Your Name</label>
                                            <input type="text" name="" id="" placeholder='Your Name' />
                                        </div>
                                        <div className="col-lg-6">
                                            <label className='banner-para' htmlFor="">Company Name</label>
                                            <input type="text" name="" id="" placeholder='Company Name' />
                                        </div>
                                    </div>
                                    <div className="row justify-content-between mt-5">
                                        <div className="col-lg-6">
                                            <label className='banner-para' htmlFor="">Email</label>
                                            <input type="mail" name="" id="" placeholder='Email' />
                                        </div>
                                        <div className="col-lg-6">
                                            <label className='banner-para' htmlFor="">Phone</label>
                                            <input type="number" name="" id="" placeholder='Phone Number' />
                                        </div>
                                    </div>
                                    <div className="row justify-content-between mt-5">
                                        <div className="col-lg-12">
                                            <label className='banner-para' htmlFor="">What do you need help with?</label>
                                            <textarea name="" id="" placeholder='(Tell us about your technology challenges, goals, or questions. The more specific you are, the better we can help.)'></textarea>
                                        </div>
                                    </div>
                                    <button className='btn-wrapper mt-5' type='submit'>
                                        <div className="btn-fill"></div>

                                        <div className="btn-content">
                                            <div className="left-icon">
                                                <Image src={rightArrow} className='img-fluid' alt="" />
                                            </div>
                                            <div className="btn-text">Send Message</div>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-map'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.744335817!2d-104.8696312880669!3d39.56537197147052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c85964662358b%3A0xa69784a440bdd89e!2s8310%20S%20Valley%20Hwy%20STE%20300%2C%20Englewood%2C%20CO%2080112%2C%20USA!5e0!3m2!1sen!2s!4v1769628815462!5m2!1sen!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading={"lazy"} referrerPolicy="no-referrer-when-downgrade"></iframe>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28943.43350291914!2d67.04455354375752!3d24.934482128454224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f68689fe4f9%3A0xcf5ef741e646eeff!2sFederal%20B%20Area%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1765999354522!5m2!1sen!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading={"lazy"} referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                        </div>
                    </div>
                </div>
            </section>



            <section className="faq-sec">
                <div className="container">
                    <p className="term-hd text-center mt-5 mb-5 text-white">Frequently Asked Questions</p>

                    {faqSections.map((section, sIndex) => (
                        <div key={sIndex}>

                            {/* SECTION HEADING */}
                            <h2 className="faq-section-heading text-center text-white mt-5">
                                {section.heading}
                            </h2>

                            {section.items.map((item, index) => (
                                <div className="row justify-content-center mt-4" key={index}>
                                    <div className="col-lg-12">
                                        <div className="faq-item">
                                            <div className="faq-wrapper">
                                                <h3>{item.q}</h3>
                                                <div className="arrow-rotate">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </div>
                                            <div className="faq-body">{item.a}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    ))}

                </div>
            </section>
            {/* <Newsletter /> */}
        </>
    )
}

export default page
