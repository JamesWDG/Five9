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
              <h1 className="banner-hd hd text-white">Privacy & Policy</h1>
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
          <h2 className='term-hd'>OUR COMMITMENT TO PRIVACY</h2>
          <p className='banner-para'>At <span>Five 9</span>, we take your privacy seriously. This policy explains what information we collect, how we use it, and what rights you have regarding your data. We believe in transparency and give you control over your information.</p>

          <h2 className='term-hd'>INFORMATION WE COLLECT</h2>
          <h5 className='term-hd-mini'>Information You Provide</h5>
          <p className='banner-para'>When you contact us, request services, or use our website, you may provide:</p>
          <ul className='term-list'>
            <li className='banner-para'><span>Contact Information: </span> Name, email address, phone number, company name, and job title</li>
            <li className='banner-para'><span>Business Information: </span> Company size, industry, technology needs, and project details</li>
            <li className='banner-para'><span>Communication Records: </span> Messages you send us, support requests, and consultation notes</li>
            <li className='banner-para'><span>Account Information: </span> Login credentials if you create an account on our systems</li>
          </ul>
          <h5 className='term-hd-mini'>Information We Collect Automatically</h5>
          <p className='banner-para'>When you visit our website, we automatically collect:</p>
          <ul className='term-list'>
            <li className='banner-para'><span>Usage Data: </span> Pages visited, time spent, links clicked, and navigation patterns</li>
            <li className='banner-para'><span>Device Information: </span> Browser type, operating system, IP address, and device identifiers</li>
            <li className='banner-para'><span>Technical Data: </span> Cookies, log files, and similar tracking technologies</li>
          </ul>
          <h5 className='term-hd-mini'>Information From Third Parties</h5>
          <p className='banner-para'>We may receive information from:</p>
          <ul className='term-list'>
            <li className='banner-para'><span>Business Partners: </span> Referral sources and joint project collaborators</li>
            <li className='banner-para'><span>Service Providers: </span> Analytics tools, email services, and CRM platforms</li>
            <li className='banner-para'><span>Public Sources: </span> Company websites, LinkedIn profiles, and business directories</li>
          </ul>

          <h2 className='term-hd'>HOW WE USE YOUR INFORMATION</h2>
          <h5 className='term-hd-mini'>To Provide Services</h5>
          <p className='banner-para'>We use your information to deliver the services you request. This includes responding to inquiries, scheduling consultations, managing projects, and providing technical support.</p>
          <h5 className='term-hd-mini'>To Improve Our Services</h5>
          <p className='banner-para'>We analyze usage patterns to improve our website, services, and customer experience. This helps us understand what works and what needs improvement.</p>
          <h5 className='term-hd-mini'>To Communicate With You</h5>
          <p className='banner-para'>We send service-related communications, project updates, security alerts, and responses to your inquiries. We may also send relevant content about technology topics you've expressed interest in.</p>
          <h5 className='term-hd-mini'>To Comply With Legal Obligations</h5>
          <p className='banner-para'>We maintain records and process data as required by law. This includes tax reporting, contract compliance, and regulatory requirements.</p>
          <h5 className='term-hd-mini'>To Protect Our Rights</h5>
          <p className='banner-para'>We use information to protect against fraud, enforce our terms, and defend our legal rights when necessary.</p>


          <h2 className='term-hd'>HOW WE SHARE YOUR INFORMATION</h2>
          <h5 className='term-hd-mini'>With Your Consent</h5>
          <p className='banner-para'>We share information when you explicitly authorize us to do so. For example, sharing project details with partners you've approved.</p>
          <h5 className='term-hd-mini'>With Service Providers</h5>
          <p className='banner-para'>We work with vendors who help us operate our business. These include:</p>
          <ul className='term-list'>
            <li className='banner-para'><span>Cloud Hosting: </span> AWS, Azure, Google Cloud for infrastructure</li>
            <li className='banner-para'><span>Email Services: </span> For communication and marketing</li>
            <li className='banner-para'><span>Analytics Tools: </span> For understanding website usage</li>
            <li className='banner-para'><span>CRM Systems: </span> For managing customer relationships</li>
          </ul>
          <p className='banner-para'>All service providers are contractually required to protect your data and use it only for intended purposes.</p>
          <h5 className='term-hd-mini'>For Business Transfers</h5>
          <p className='banner-para'>If <span>Five 9</span> is acquired or merges with another company, your information may transfer to the new entity. You'll be notified of any such change.</p>
          <h5 className='term-hd-mini'>For Legal Requirements</h5>
          <p className='banner-para'>We disclose information when legally required by court order, subpoena, or regulatory authority. We may also share information to protect rights, property, or safety.</p>
          <h5 className='term-hd-mini'>Aggregated Data</h5>
          <p className='banner-para'>We may share anonymized, aggregated data that doesn't identify specific individuals. For example, industry trends or usage statistics.</p>


          <h2 className='term-hd'>DATA SECURITY</h2>
          <p className='banner-para'>We implement security measures to protect your information:</p>
          <ul className='term-list'>
            <li className='banner-para'><span>Encryption: </span> Data transmitted over networks is encrypted using TLS/SSL</li>
            <li className='banner-para'><span>Access Controls: </span> Only authorized personnel can access sensitive information</li>
            <li className='banner-para'><span>Security Monitoring: </span> We monitor systems for unauthorized access attempts</li>
            <li className='banner-para'><span>Regular Audits: </span> Security practices are reviewed and updated regularly</li>
            <li className='banner-para'><span>Vendor Standards: </span> Service providers must meet our security requirements</li>
          </ul>
          <p className='banner-para'>No system is completely secure. While we work hard to protect your data, we cannot guarantee absolute security.</p>


          <h2 className='term-hd'>YOUR PRIVACY RIGHTS</h2>
          <h5 className='term-hd-mini'>Access Your Information</h5>
          <p className='banner-para'>You can request copies of personal information we hold about you. We'll provide this within 30 days of your request.</p>
          <h5 className='term-hd-mini'>Correct Your Information</h5>
          <p className='banner-para'>If information we hold is inaccurate or incomplete, you can request corrections. We'll update our records promptly.</p>
          <h5 className='term-hd-mini'>Delete Your Information</h5>
          <p className='banner-para'>You can request deletion of your personal information. We'll comply unless we have legal obligations to retain certain data.</p>
          <h5 className='term-hd-mini'>Opt-Out of Marketing</h5>
          <p className='banner-para'>You can unsubscribe from marketing communications at any time. Service-related communications will continue as necessary.</p>
          <h5 className='term-hd-mini'>Data Portability</h5>
          <p className='banner-para'>You can request your data in a portable format to transfer to another service provider.</p>
          <h5 className='term-hd-mini'>Withdraw Consent</h5>
          <p className='banner-para'>Where we process data based on consent, you can withdraw that consent at any time.</p>
          <p className='banner-para'>To exercise these rights, contact us at <Link className='banner-para' href={"mailto:privacy@five9.co"}>privacy@five9.co</Link> or call <Link className='banner-para' href={"tel:+18778534839"}>+1 877 853 4839.</Link></p>


          <h2 className='term-hd'>COOKIES AND TRACKING</h2>
          <h5 className='term-hd-mini'>What Are Cookies</h5>
          <p className='banner-para'>Cookies are small text files stored on your device. They help websites remember your preferences and understand how you use the site.</p>
          <h5 className='term-hd-mini'>How We Use Cookies</h5>
          <ul className='term-list'>
            <li className='banner-para'><span>Essential Cookies: </span> Required for basic website functionality</li>
            <li className='banner-para'><span>Analytics Cookies: </span> Help us understand website usage and improve experience</li>
            <li className='banner-para'><span>Preference Cookies: </span> Remember your settings and choices</li>
            <li className='banner-para'><span>Marketing Cookies: </span> Track effectiveness of campaigns and personalize content</li>
          </ul>
          <h5 className='term-hd-mini'>Cookie Choices</h5>
          <p className='banner-para'>Most browsers let you control cookies through settings. You can block or delete cookies, though this may affect website functionality.</p>


          <h2 className='term-hd'>DATA RETENTION</h2>
          <p className='banner-para'>We retain information as long as necessary for business purposes or legal requirements:</p>
          <ul className='term-list'>
            <li className='banner-para'><span>Client Data: </span> Duration of relationship plus 7 years for legal compliance</li>
            <li className='banner-para'><span>Project Records: </span> Duration of project plus 7 years</li>
            <li className='banner-para'><span>Marketing Data: </span> Until you opt-out or request deletion</li>
            <li className='banner-para'><span>Website Analytics: </span> 26 months from collection</li>
          </ul>


          <h2 className='term-hd'>CHILDREN'S PRIVACY</h2>
          <p className='banner-para'>Our services are not directed to children under 13. We don't knowingly collect information from children. If you believe we've collected such information, contact us immediately for deletion.</p>


          <h2 className='term-hd'>INTERNATIONAL DATA TRANSFERS</h2>
          <p className='banner-para'><span>Five 9 </span> operates primarily in the United States. If you're located elsewhere, your information may be transferred to and processed in the US. We ensure appropriate safeguards for such transfers.</p>


          <h2 className='term-hd'>CALIFORNIA PRIVACY RIGHTS</h2>
          <p className='banner-para'>California residents have specific rights under CCPA:</p>
          <ul className='term-list'>
            <li className='banner-para'><span>Right to Know: </span> What information we collect and how we use it</li>
            <li className='banner-para'><span>Right to Delete: </span> Request deletion of personal information</li>
            <li className='banner-para'><span>Right to Opt-Out: </span> Opt-out of sale of personal information (note: we don't sell data)</li>
            <li className='banner-para'><span>Right to Non-Discrimination: </span> We won't discriminate for exercising privacy rights</li>
          </ul>
          <p className='banner-para'>California residents can exercise these rights by contacting <Link className='banner-para' href={"mailto:privacy@five9.co"}>privacy@five9.co.</Link></p>


          
          <h2 className='term-hd'>CHANGES TO THIS POLICY</h2>
          <p className='banner-para'>We may update this privacy policy periodically. Changes are posted on this page with an updated "Last Updated" date. Significant changes will be communicated via email or website notice.</p>
          <p className='banner-para'>Continued use of our services after changes indicates acceptance of the updated policy.</p>
          



        </div>
      </section>
      <section className="cta-sec">
        <div className="container">
          <h2 className="cta-hd">CONTACT US ABOUT PRIVACY</h2>
          <div className="row">
            <div className="col-lg-12">
              <h4>Questions about this privacy policy or our data practices?</h4>
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
