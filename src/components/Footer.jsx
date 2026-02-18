"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import footerLogo from "@/app/(web)/assets/images/footer-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="newsletter-sec">
          <div className="container">
            <div className="row align-items-start justify-content-between">
              <div className="col-lg-6">
                <h2>
                  SPOT TECHNOLOGY VULNERABILITIES FAST? FIND OUT IN 30 MINUTES.
                </h2>
              </div>
              <div className="col-lg-5">
                <form className="newsletter-form">
                  <div className="row justify-content-between">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="row justify-content-between mt-4">
                    <div className="col-lg-12">
                      <div className="message-area">
                        <input type="text" placeholder="Message" />
                        <button className="message-btn">
                          <i className="fa-solid fa-arrow-right"></i>
                        </button>
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
              <Link href="/">
                <Image src={footerLogo} className="img-fluid" alt="Five9 Logo" />
              </Link>

              <p className="footer-para para-width">
                Delivering 99.999% uptime for businesses since 2014. Expert IT
                solutions that keep your systems reliable, scalable, and secure.
              </p>

              <div className="reach-mega-wrapper">
                <div className="reach-wrapper">
                  <h4>Reach Us</h4>
                  <a href="tel:+18778534839" className="footer-para">
                    +1 877 853 4839
                  </a>
                  <a href="mailto:info@five9.co" className="footer-para">
                    info@five9.co
                  </a>
                </div>

                <div className="reach-wrapper">
                  <h4>Contact Us</h4>
                  <p className="footer-para">
                    8310 S. Valley Highway <br /> Suite 300
                  </p>
                </div>
              </div>

              <div className="footer-social-links">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/five9-availability"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/five9co"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/five9co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <ul className="footer-links">
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/about-us">ABOUT US</Link></li>
                <li><Link href="/our-services">SERVICES</Link></li>
                <li><Link href="/our-capabilities">CAPABILITIES</Link></li>
                <li><Link href="/faqs">FAQ</Link></li>
                <li><Link href="/privacy-policy">PRIVACY POLICY</Link></li>
                <li><Link href="/terms-condition">TERMS & CONDITION</Link></li>
              </ul>

              {/* DMCA Badge */}
              <div className="mt-3">
                <a
                  href="https://www.dmca.com/Protection/Status.aspx?ID=0edc1e19-a94a-498d-96e0-b8c181784f90"
                  title="DMCA.com Protection Status"
                  className="dmca-badge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://images.dmca.com/Badges/_dmca_premi_badge_1.png?ID=0edc1e19-a94a-498d-96e0-b8c181784f90"
                    alt="DMCA.com Protection Status"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="bottom-bar">
            <p className="footer-para">
              © 2026 <span>Five9</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* UserWay Accessibility Script */}
      <Script
        src="https://cdn.userway.org/widget.js"
        data-account="V3ZIeZd4to"
        strategy="afterInteractive"
      />

      {/* DMCA Helper Script */}
      <Script
        src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default Footer;
