import React from 'react'
import Image from 'next/image'
import footerLogo from '@/app/(web)/assets/images/footer-logo.png'
import dmcaImage from '../../public/images/dmca-img.jpg'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <section className="newsletter-sec">
                    <div className="container">
                        <div className="row align-items-start justify-content-between">
                            <div className="col-lg-6">
                                <h2>SPOT TECHNOLOGY VULNERABILITIES FAST? FIND OUT IN 30 MINUTES.</h2>
                            </div>
                            <div className="col-lg-5">
                                <form action="" className='newsletter-form'>
                                    <div className="row justify-content-between">
                                        <div className="col-lg-6">
                                            <input type="text" name="" id="" placeholder='Name' />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="email" name="" id="" placeholder='Email' />
                                        </div>
                                    </div>
                                    <div className="row justify-content-between mt-4">
                                        <div className="col-lg-12">
                                            <div className='message-area'>
                                                <input type="text" name="" id="" placeholder='Message' />
                                                <button className='message-btn'><i className='fa-solid fa-arrow-right'></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <Link href={"/"}>
                                <Image src={footerLogo} className='img-fluid' alt="" />
                            </Link>
                            <p className='footer-para para-width'>Delivering 99.999% uptime for businesses since 2014. Expert IT solutions that keep your systems reliable, scalable, and secure.</p>
                            <div className="reach-mega-wrapper">
                                <div className="reach-wrapper">
                                    <h4>Reach Us</h4>
                                    <a href="tel:+18778534839" className='footer-para'>+1 877 853 4839</a>
                                    <a href="mailto:info@five9.co" className='footer-para'>info@five9.co</a>
                                </div>
                                <div className="reach-wrapper">
                                    <h4>Contact Us</h4>
                                    <p className="footer-para">8310 S. Valley Highway <br /> Suite 300</p>
                                </div>
                            </div>
                            <div className="footer-social-links">
                                <ul>
                                    <li>
                                        <Link href={"https://www.linkedin.com/company/five9-availability"}><i className='fa-brands fa-linkedin-in'></i></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><i className='fa-brands fa-facebook-f'></i></Link>
                                    </li>
                                    <li>
                                        <Link href={"https://x.com/five9co"}><i className='fa-brands fa-x-twitter'></i></Link>
                                    </li>
                                    <li>
                                        <Link href={"https://www.instagram.com/five9co/"}><i className='fa-brands fa-instagram'></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className='footer-links'>
                                <li>
                                    <Link href={"/"}>HOME</Link>
                                </li>
                                <li>
                                    <Link href={"/about-us"}>ABOUT US</Link>
                                </li>
                                <li>
                                    <Link href={"/our-services"}>SERVICES</Link>
                                </li>
                                <li>
                                    <Link href={"/our-capabilities"}>CAPABILITIES</Link>
                                </li>
                                <li>
                                    <Link href={"/faqs"}>FAQ</Link>
                                </li>
                                <li>
                                    <Link href={"/privacy-policy"}>PRIVACY POLICY</Link>
                                </li>
                                <li>
                                    <Link href={"/terms-condition"}>TERMS & CONDITION</Link>
                                </li>
                            </ul>
                            <Image src={dmcaImage} className='img-fluid dmca-img' alt="" />
                        </div>
                    </div>
                    <div className='bottom-bar'>
                        <p className='footer-para'>© 2026 <span>Five9</span>. All rights reserved.</p>
                    </div>
                </div>
            </footer>
            <script src="https://cdn.userway.org/widget.js" data-account="V3ZIeZd4to"></script>
        </>
    )
}

export default Footer
