import Header2 from '@/components/Header2'
import React from 'react'
import rightArrow from "@/app/(web)/assets/images/right-arrow.png"
import Image from 'next/image'
import Link from "next/link";
import SocialLinks from '@/components/SocialLinks';
const page = () => {
  return (
    <>
      <Header2 />
      <section className="video-banner capable-video">
        <SocialLinks/>
        <div className="container">
          <div className="video-area">
            <div className="heading-wrapper">
              {/* <h1 className="banner-hd-mini">Privacy Policy</h1> */}
              <h1 className="banner-hd hd text-white">Terms & Conditions</h1>
            </div>
            <div className="video-area-sec">
              <video
                src="/images/Transformation-video.mp4"
                autoPlay
                playsInline
                muted
                loop
              />
            </div>
          </div>
        </div>
      </section>

      <section className='term-sec'>
        <div className="container">
          <h2 className='term-hd'>ACCEPTANCE OF TERMS</h2>
          <p className='banner-para'>By accessing or using <span>Five 9</span> services, you agree to these Terms and Conditions. If you don't agree, don't use our services. These terms govern all interactions with <span>Five 9</span>, including our website, consultations, and service delivery.</p>

          <h2 className='term-hd'>SERVICES OVERVIEW</h2>
          <p className='banner-para'><span>Five 9</span> provides technology consulting, advisory, and implementation services. Specific services are defined in individual statements of work or service agreements. These terms provide the general framework for all engagements.</p>

          <h2 className='term-hd'>SERVICE AGREEMENTS</h2>
          <h5 className='term-hd-mini'>Statements of Work</h5>
          <p className='banner-para'>Specific projects are governed by statements of work that define:</p>
          <ul className='term-list'>
            <li className='banner-para'><span>Scope: </span> What work will be performed</li>
            <li className='banner-para'><span>Deliverables: </span> What you'll receive</li>
            <li className='banner-para'><span>Timeline: </span> When work will be completed</li>
            <li className='banner-para'><span>Pricing: </span> What services cost</li>
            <li className='banner-para'><span>Payment Terms: </span> When payment is due</li>
          </ul>
          <p className='banner-para'>Statements of work supplement but don't replace these general terms.</p>
          <h5 className='term-hd-mini'>Changes to Scope</h5>
          <p className='banner-para'>Changes to project scope require written agreement from both parties. Additional work beyond original scope may incur additional fees.</p>
          <h5 className='term-hd-mini'>Service Standards</h5>
          <p className='banner-para'>We provide services with reasonable skill and care consistent with industry standards. We don't guarantee specific results unless explicitly stated in writing.</p>


          <h2 className='term-hd'>PAYMENT TERMS</h2>
          <h5 className='term-hd-mini'>Fees</h5>
          <p className='banner-para'>Service fees are specified in statements of work or service agreements. All fees are in US dollars unless otherwise stated.</p>
          <h5 className='term-hd-mini'>Payment Schedule</h5>
          <p className='banner-para'>Payment terms vary by engagement type:</p>
          <ul className='term-list'>
            <li className='banner-para'><span>Project-Based: </span> Typically 50% upfront, 50% on completion</li>
            <li className='banner-para'><span>Retainer-Based: </span> Monthly payment in advance</li>
            <li className='banner-para'><span>Hourly: </span> Billed monthly for hours worked</li>
          </ul>
          <p className='banner-para'>Specific payment schedules are defined in service agreements.</p>
          <h5 className='term-hd-mini'>Late Payment</h5>
          <p className='banner-para'>Invoices are due within 30 days unless otherwise specified. Late payments incur interest at 1.5% per month or the maximum legal rate, whichever is lower.</p>
          <h5 className='term-hd-mini'>Expenses</h5>
          <p className='banner-para'>Reasonable expenses related to service delivery (travel, software licenses, etc.) are billed separately unless included in fixed-price agreements.</p>


          <h2 className='term-hd'>INTELLECTUAL PROPERTY</h2>
          <h5 className='term-hd-mini'>Client-Owned IP</h5>
          <p className='banner-para'>You retain ownership of your existing intellectual property, data, and materials provided to us.</p>
          <h5 className='term-hd-mini'>Work Product</h5>
          <p className='banner-para'>Ownership of work product created during engagements depends on service type:</p>
          <ul className='term-list'>
            <li className='banner-para'><span>Custom Development: </span> You own code and applications we create specifically for you</li>
            <li className='banner-para'><span>Consulting Deliverables: </span> You own reports, documentation, and recommendations</li>
            <li className='banner-para'><span>Generic Tools: </span> We retain ownership of generic tools, frameworks, and methodologies</li>
          </ul>
          <p className='banner-para'>Specific ownership terms are defined in service agreements.</p>
          <h5 className='term-hd-mini'>Five 9 IP</h5>
          <p className='banner-para'>We retain ownership of our pre-existing intellectual property, including methodologies, tools, and frameworks used to deliver services.</p>
          <h5 className='term-hd-mini'>Third-Party IP</h5>
          <p className='banner-para'>Some services may involve third-party software or tools. You're responsible for obtaining appropriate licenses for such tools.</p>


          <h2 className='term-hd'>CONFIDENTIALITY</h2>
          <h5 className='term-hd-mini'>Confidential Information</h5>
          <p className='banner-para'>Both parties will protect confidential information shared during engagements. Confidential information includes:</p>
          <ul className='term-list'>
            <li className='banner-para'><span>Technical Information: </span> Architecture, code, systems, and processes</li>
            <li className='banner-para'><span>Business Information: </span> Strategy, financials, customer data, and plans</li>
            <li className='banner-para'><span>Project Information: </span> Discussions, proposals, and work product</li>
          </ul>
          <h5 className='term-hd-mini'>Exceptions</h5>
          <p className='banner-para'>Confidential information doesn't include:</p>
          <ul className='term-list'>
            <li className='banner-para'>Information already public</li>
            <li className='banner-para'>Information you independently developed</li>
            <li className='banner-para'>Information received from third parties without confidentiality obligations</li>
            <li className='banner-para'>Information required to be disclosed by law</li>
          </ul>
          <h5 className='term-hd-mini'>Protection Obligations</h5>
          <p className='banner-para'>We protect your confidential information with the same care we protect our own. We limit access to employees with legitimate need to know.</p>


          <h2 className='term-hd'>DATA PROTECTION</h2>
          <h5 className='term-hd-mini'>Data Processing</h5>
          <p className='banner-para'>When we process your data during service delivery, we act as a data processor. You remain the data controller responsible for data privacy compliance.</p>
          <h5 className='term-hd-mini'>Security Measures</h5>
          <p className='banner-para'>We implement reasonable security measures to protect data we process on your behalf. Specific security requirements can be addressed in service agreements.</p>
          <h5 className='term-hd-mini'>Data Breaches</h5>
          <p className='banner-para'>If we discover a security breach affecting your data, we'll notify you promptly and cooperate in remediation efforts.</p>
          <h5 className='term-hd-mini'>Compliance</h5>
          <p className='banner-para'>You're responsible for ensuring your use of our services complies with applicable data protection laws (GDPR, CCPA, HIPAA, etc.).</p>


          <h2 className='term-hd'>WARRANTIES AND DISCLAIMERS</h2>
          <h5 className='term-hd-mini'>Our Warranties</h5>
          <p className='banner-para'>We warrant that:</p>
          <ul className='term-list'>
            <li className='banner-para'>Services will be performed with reasonable skill and care</li>
            <li className='banner-para'>We have the right to provide the services</li>
            <li className='banner-para'>Services won't infringe third-party intellectual property rights</li>
          </ul>
          <h5 className='term-hd-mini'>Disclaimer</h5>
          <p className='banner-para text-uppercase'>EXCEPT AS EXPLICITLY STATED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM WARRANTIES OF MERCHANTABILITY, FITNESS FOR PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
          <p className='banner-para'>We don't guarantee specific outcomes, results, or business benefits. Technology consulting involves inherent uncertainties.</p>


          <h2 className='term-hd'>LIMITATION OF LIABILITY</h2>
          <h5 className='term-hd-mini'>Liability Cap</h5>
          <p className='banner-para text-uppercase'>OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM SERVICES IS LIMITED TO THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.</p>
          <h5 className='term-hd-mini'>Excluded Damages</h5>
          <p className='banner-para text-uppercase'>WE'RE NOT LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES. THIS INCLUDES LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION.</p>
          <h5 className='term-hd-mini'>Exceptions</h5>
          <p className='banner-para'>Liability limitations don't apply to:</p>
          <ul className='term-list'>
            <li className='banner-para'>Intentional misconduct or gross negligence</li>
            <li className='banner-para'>Death or personal injury caused by our negligence</li>
            <li className='banner-para'>Violations of intellectual property rights</li>
            <li className='banner-para'>Matters that cannot be limited by law</li>
          </ul>


          <h2 className='term-hd'>INDEMNIFICATION</h2>
          <h5 className='term-hd-mini'>Your Indemnification</h5>
          <p className='banner-para'>You'll indemnify <span>Five 9</span> against claims arising from:</p>
          <ul className='term-list'>
            <li className='banner-para'>Your use of our services</li>
            <li className='banner-para'>Your violation of these terms</li>
            <li className='banner-para'>Your violation of third-party rights</li>
            <li className='banner-para'>Content or data you provide</li>
          </ul>
          <h5 className='term-hd-mini'>Our Indemnification</h5>
          <p className='banner-para'>We'll indemnify you against claims that our services infringe third-party intellectual property rights, provided you notify us promptly and let us control the defense.</p>


          <h2 className='term-hd'>TERM AND TERMINATION</h2>
          <h5 className='term-hd-mini'>Service Term</h5>
          <p className='banner-para'>Service agreements continue for their specified term unless terminated earlier.</p>
          <h5 className='term-hd-mini'>Termination for Convenience</h5>
          <p className='banner-para'>Either party can terminate with 30 days written notice, unless otherwise specified in service agreements.</p>
          <h5 className='term-hd-mini'>Termination for Cause</h5>
          <p className='banner-para'>Either party can terminate immediately if the other party:</p>
          <ul className='term-list'>
            <li className='banner-para'>Materially breaches terms and doesn't cure within 30 days</li>
            <li className='banner-para'>Becomes insolvent or files bankruptcy</li>
            <li className='banner-para'>Ceases business operations</li>
          </ul>
          <h5 className='term-hd-mini'>Effect of Termination</h5>
          <p className='banner-para'>Upon termination:</p>
          <ul className='term-list'>
            <li className='banner-para'>You pay for services performed through termination date</li>
            <li className='banner-para'>We return your confidential information</li>
            <li className='banner-para'>Both parties return or destroy confidential information</li>
            <li className='banner-para'>Provisions that should survive (confidentiality, IP, limitations) continue</li>
          </ul>


          <h2 className='term-hd'>DISPUTE RESOLUTION</h2>
          <h5 className='term-hd-mini'>Negotiation</h5>
          <p className='banner-para'>If disputes arise, we'll first attempt to resolve through good-faith negotiation between senior representatives.</p>
          <h5 className='term-hd-mini'>Mediation</h5>
          <p className='banner-para'>If negotiation fails, disputes will be submitted to mediation before formal legal action.</p>
          <h5 className='term-hd-mini'>Arbitration</h5>
          <p className='banner-para'>If mediation fails, disputes will be resolved through binding arbitration in accordance with American Arbitration Association rules.</p>
          <h5 className='term-hd-mini'>Exceptions</h5>
          <p className='banner-para'>Either party can seek injunctive relief in court for intellectual property violations or confidentiality breaches.</p>
          <h5 className='term-hd-mini'>Governing Law</h5>
          <p className='banner-para'>These terms are governed by Colorado law, without regard to conflict of law principles.</p>


          <h2 className='term-hd'>GENERAL PROVISIONS</h2>
          <h5 className='term-hd-mini'>Entire Agreement</h5>
          <p className='banner-para'>Service agreements, including these terms and statements of work, constitute the entire agreement between parties.</p>
          <h5 className='term-hd-mini'>Modifications</h5>
          <p className='banner-para'>We may update these terms periodically. Continued use after changes indicates acceptance. Material changes affecting active engagements require your consent.</p>
          <h5 className='term-hd-mini'>Assignment</h5>
          <p className='banner-para'>You can't assign service agreements without our written consent. We can assign to affiliates or in connection with mergers or acquisitions.</p>
          <h5 className='term-hd-mini'>Force Majeure</h5>
          <p className='banner-para'>Neither party is liable for delays caused by events beyond reasonable control (natural disasters, acts of war, pandemics, etc.).</p>
          <h5 className='term-hd-mini'>Severability</h5>
          <p className='banner-para'>If any provision is found invalid or unenforceable, the rest of the terms remain in effect.</p>
          <h5 className='term-hd-mini'>Waiver</h5>
          <p className='banner-para'>Failure to enforce any provision doesn't waive our right to enforce it later.</p>
          <h5 className='term-hd-mini'>Independent Contractors</h5>
          <p className='banner-para'>We're independent contractors, not employees, agents, or partners.</p>
        </div>
      </section>
      <section className="cta-sec">
        <div className="container">
          <h2 className="cta-hd">CONTACT US</h2>
          <div className="row">
            <div className="col-lg-12">
              <h4>Questions about these terms?</h4>
              <div className="contact-content-wrapper justify-content-center">
                <i className='fa-solid fa-envelope'></i>
                <Link className='banner-para' href={"mailto:hello@five9.com"}>hello@five9.com</Link>
              </div>
              <div className="contact-content-wrapper justify-content-center">
                <i className='fa-solid fa-phone'></i>
                <Link className='banner-para' href={"tel:18778534839"}>+1 877 853 4839</Link>
              </div>
              <div className="contact-content-wrapper justify-content-center">
                <i className="fa-solid fa-location-dot"></i>
                <p className='banner-para' href="#">Five 9, 8310 S. Valley Highway, Suite 300, Englewood, CO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
