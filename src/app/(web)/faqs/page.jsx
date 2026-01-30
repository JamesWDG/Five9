"use client";

import React, { useEffect } from "react";
import Header2 from "@/components/Header2";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import rightArrow from "@/app/(web)/assets/images/right-arrow.png";

const Page = () => {

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
            heading: "GENERAL QUESTIONS",
            items: [
                {
                    q: "1. What does Five 9 do?",
                    a: "We provide technology consulting, advisory, and implementation services. We help businesses build reliable systems, make sound technology decisions, and solve complex technical challenges. Our services range from strategic advisory to hands-on implementation across security, cloud, infrastructure, applications, AI, and data engineering."
                },
                {
                    q: "2. Why the name \"Five 9?\"",
                    a: "The name comes from \"five nines,\" which means 99.999% uptime. That percentage represents only 5 minutes of potential downtime per year. It's the gold standard for system availability that enterprise companies aim for. We built our business around delivering that level of reliability."
                },
                {
                    q: "3. Who are your typical clients?",
                    a: "We work with companies ranging from startups to established enterprises across industries including healthcare, finance, retail, manufacturing, and professional services. Our clients share a common need: reliable technology that supports business growth without constant problems."
                },
                {
                    q: "4. What makes Five 9 different from other consultants?",
                    a: "Most consultants deliver recommendations and leave. We stay involved through implementation. We don't just tell you what to do. We help you do it and make sure it works. Our business model depends on your success, not on maximizing billable hours."
                },
                {
                    q: "5. Do you work with companies outside the United States?",
                    a: "Currently, we focus on clients within the US where we can provide effective 24/7 support. Our primary office is in Colorado, but we work with clients across all 50 states."
                }
            ]
        },
        {
            heading: "SERVICE QUESTIONS",
            items: [
                {
                    q: "1. How do I know which service I need?",
                    a: "Start with a free consultation. Tell us about your situation and goals. We'll discuss which services make sense for your needs. Sometimes clients need multiple services. Other times one service addresses everything. We recommend what actually helps, not what's most profitable for us."
                },
                {
                    q: "2. Can I use multiple services?",
                    a: "Absolutely. Many clients combine services. For example, strategy services to create a roadmap, then consulting services to implement specific projects. Or fractional CTO services for ongoing leadership plus advisory for major decisions. We structure engagements around your needs."
                },
                {
                    q: "3. What if my needs change during an engagement?",
                    a: "We stay flexible. If scope needs adjustment, we discuss options and agree on changes in writing. If your priorities shift, we adapt. The goal is helping you succeed, not rigidly following an outdated plan."
                },
                {
                    q: "4. Do you work on-site or remotely?",
                    a: "Both. Many clients prefer remote work for cost efficiency. For some projects, on-site presence makes sense. We discuss what works best for each engagement. Virtual meetings work fine for most advisory and consulting work."
                },
                {
                    q: "5. How long do typical engagements last?",
                    a: (
                        <>
                            <p>It varies widely:</p>
                            <ul className="mt-2">
                                <li><b>Strategy projects:</b> 4–12 weeks</li>
                                <li><b>Fractional CTO:</b> 6–24 months</li>
                                <li><b>Consulting projects:</b> 6 weeks to 6 months</li>
                                <li><b>Advisory relationships:</b> Ongoing, often multiple years</li>
                                <li><b>Implementation projects:</b> 3-18 months depending on complexity</li>
                            </ul>
                            <p>We provide specific timelines during planning.</p>
                        </>
                    )
                }
            ]
        },
        {
            heading: "PRICING QUESTIONS",
            items: [
                {
                    q: "1. How much do your services cost?",
                    a: (
                        <>
                            <p>Pricing depends on service type, scope, and duration. We provide detailed pricing after understanding your needs. General ranges:</p>
                            <ul className="mt-2">
                                <li><b>Strategy engagements:</b> $15,000-$75,000</li>
                                <li><b>Fractional CTO:</b> $8,000-$20,000 per month</li>
                                <li><b>Consulting projects:</b> $150-$250 per hour or fixed-price</li>
                                <li><b>Advisory retainers:</b>  $5,000-$15,000 per month</li>
                            </ul>
                            <p>Specific pricing is provided in proposals.</p>
                        </>
                    )
                },
                {
                    q: "2. Do you require long-term contracts?",
                    a: "No. Some services work best with ongoing relationships (fractional CTO, advisory). Others are project-based. We structure agreements based on what makes sense for the service. You're never locked into long-term commitments unnecessarily."
                },
                {
                    q: "3. What payment terms do you offer?",
                    a: (
                        <>
                            <p>Typical terms:</p>
                            <ul className="mt-2">
                                <li><b>Project-based:</b> 50% upfront, 50% on completion</li>
                                <li><b>Monthly retainers:</b> Payment in advance each month</li>
                                <li><b>Hourly work:</b> Monthly invoicing for hours worked</li>
                            </ul>
                            <p>Specific terms are defined in service agreements. We're flexible for the right engagements.</p>
                        </>
                    )
                },
                {
                    q: "4. Are there any hidden fees?",
                    a: "No. We're transparent about costs upfront. Service agreements specify what's included and what costs extra (like travel or software licenses). You know what you're paying before work starts."
                },
                {
                    q: "5. Do you offer discounts?",
                    a: (
                        <>
                            <p>We occasionally offer discounts for:</p>
                            <ul className="mt-2">
                                <li>Long-term commitments (12+ months)</li>
                                <li>Multiple services used together</li>
                                <li>Non-profit organizations</li>
                                <li>Startups in early stages</li>
                            </ul>
                            <p>Ask about current offers during consultation.</p>
                        </>
                    )
                },
            ]
        },
        {
            heading: "PROCESS QUESTIONS",
            items: [
                {
                    q: "1. How do I get started?",
                    a: "Schedule a free 30-minute consultation. Tell us about your challenges and goals. We'll discuss whether our services make sense and outline how we'd approach helping you. No sales pressure. Just honest conversation."
                },
                {
                    q: "2. What happens during the initial consultation?",
                    a: (
                        <>
                            <p>We ask questions to understand your situation:</p>
                            <ul className="mt-2">
                                <li>What challenges are you facing?</li>
                                <li>What are you trying to achieve?</li>
                                <li>What have you tried already?</li>
                                <li>What constraints exist (budget, timeline, resources)?</li>
                                <li>What does success look like?</li>
                            </ul>
                            <p>Then we discuss whether we can help and what that would involve.</p>
                        </>
                    )
                },
                {
                    q: "3. How long until we can start?",
                    a: (
                        <>
                            <p>It depends on service availability and your readiness:</p>
                            <ul className="mt-2">
                                <li><b>Advisory/Consulting:</b> Usually 1-2 weeks</li>
                                <li><b>Fractional CTO:</b> 2-4 weeks</li>
                                <li><b>Major projects:</b> 4-8 weeks for proper planning</li>
                            </ul>
                            <p>We move as quickly as makes sense without rushing important planning.</p>
                        </>
                    )
                },
                {
                    q: "4. How do you communicate during projects?",
                    a: (
                        <>
                            <p>We use whatever communication methods work for you:</p>
                            <ul className="mt-2">
                                <li><b>Email:</b> General updates and documentation</li>
                                <li><b>Video calls:</b> Weekly check-ins and reviews</li>
                                <li><b>Slack/Teams:</b> Quick questions and collaboration</li>
                                <li><b>Phone:</b> Urgent issues or complex discussions</li>
                            </ul>
                            <p>Communication frequency is defined in service agreements.</p>
                        </>
                    )
                },
                {
                    q: "5. How do I know if the project is on track?",
                    a: (
                        <>
                            <p>We provide regular status updates showing:</p>
                            <ul className="mt-2">
                                <li>What was accomplished</li>
                                <li>What's coming next</li>
                                <li>Any issues or risks</li>
                                <li>Changes to timeline or scope</li>
                            </ul>
                            <p>You're never left wondering what's happening.</p>
                        </>
                    )
                },
            ]
        },
        {
            heading: "TECHNICAL QUESTIONS",
            items: [
                {
                    q: "1. What technologies do you work with?",
                    a: (
                        <>
                            <p>We work with most major technologies:</p>
                            <ul className="mt-2">
                                <li><b>Cloud: </b>AWS, Azure, Google Cloud</li>
                                <li><b>Databases: </b>PostgreSQL, MySQL, MongoDB, SQL Server</li>
                                <li><b>Languages: </b>Python, Java, JavaScript, .NET, Go</li>
                                <li><b>Frameworks: </b>React, Angular, Vue, Node.js, Django</li>
                                <li><b>Infrastructure: </b>Kubernetes, Docker, Terraform</li>
                                <li><b>Security: </b>Most security tools and frameworks</li>
                            </ul>
                            <p>If we don't have expertise in a specific technology, we tell you honestly.</p>
                        </>
                    )
                },
                {
                    q: "2. Can you work with our existing team?",
                    a: "Yes. We often work alongside internal teams. We complement your staff with specialized expertise. We transfer knowledge so your team learns while we work together."
                },
                {
                    q: "3. Do you require access to our systems?",
                    a: "It depends on the service. Advisory work may not require system access. Implementation work usually does. We discuss access requirements during planning and follow your security protocols."
                },
                {
                    q: "4. How do you handle security and confidentiality?",
                    a: (
                        <>
                            <p>We take security seriously:</p>
                            <ul className="mt-2">
                                <li>Sign NDAs before discussing confidential information</li>
                                <li>Protect your data with encryption and access controls</li>
                                <li>Limit information sharing to those with legitimate need</li>
                                <li>Follow your security policies and procedures</li>
                            </ul>
                            <p>Our team has experience handling sensitive information across industries.</p>
                        </>
                    )
                },
                {
                    q: "5. What if something goes wrong?",
                    a: "We take responsibility for fixing problems we cause. If implementation creates issues, we resolve them promptly. If recommendations don't work as expected, we make it right. Our reputation depends on client success."
                },
            ]
        },
        {
            heading: "INDUSTRY-SPECIFIC QUESTIONS",
            items: [
                {
                    q: "1. Do you have experience in my industry?",
                    a: (
                        <>
                            <p>We've worked across many industries:</p>
                            <ul className="mt-2">
                                <li>Healthcare (HIPAA compliance)</li>
                                <li>Finance (PCI-DSS, SOC 2)</li>
                                <li>Retail (e-commerce, POS systems)</li>
                                <li>Manufacturing (IoT, supply chain)</li>
                                <li>Professional services (SaaS platforms)</li>
                            </ul>
                            <p>Ask about specific industry experience during consultation.</p>
                        </>
                    )
                },
                {
                    q: "2. Can you help with regulatory compliance?",
                    a: (
                        <>
                            <p>Yes. We've helped clients achieve:</p>
                            <ul className="mt-2">
                                <li>HIPAA compliance for healthcare</li>
                                <li>PCI-DSS for payment processing</li>
                                <li>SOC 2 for SaaS companies</li>
                                <li>GDPR for European customer data</li>
                                <li>FedRAMP for government contractors</li>
                            </ul>
                            <p>We understand technical requirements and implementation.</p>
                        </>
                    )
                },
                {
                    q: "3. Do you work with government contractors?",
                    a: "Yes. We've worked with companies requiring CMMC compliance and other government contractor standards. We understand the unique requirements of this sector."
                },
            ]
        },
        {
            heading: "SUPPORT QUESTIONS",
            items: [
                {
                    q: "1. Do you offer 24/7 support?",
                    a: "Yes, for active engagements. Critical issues get immediate response regardless of time. Non-urgent questions are handled during business hours. Support level is defined in service agreements."
                },
                {
                    q: "2. What happens after the project ends?",
                    a: (
                        <>
                            <p>We don't abandon clients after project completion. We provide:</p>
                            <ul className="mt-2">
                                <li><b>Transition period:</b>Support during stabilization</li>
                                <li><b>Documentation:</b>Everything needed to maintain solutions</li>
                                <li><b>Follow-up:</b>Check-ins to ensure success</li>
                                <li><b>Ongoing availability:</b>Option to continue relationship</li>
                            </ul>
                            <p>Many clients continue working with us after initial projects.</p>
                        </>
                    )
                },
                {
                    q: "3. Can we hire you again for future projects?",
                    a: "Absolutely. Most clients return for additional projects. Once we understand your business and systems, future engagements are even more efficient."
                },
            ]
        },
    ];

    return (
        <>
            <Header2 />

            <section className="video-banner capable-video">
                <SocialLinks />
                <div className="container">
                    <div className="video-area">
                        <div className="heading-wrapper">
                            {/* <h1 className="banner-hd-mini">FAQs</h1> */}
                            <h1 className="banner-hd hd text-white">FAQs</h1>
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
            <section className="faq-sec">
                <div className="container">
                    <p className="term-hd text-center mt-5 mb-5 text-white">Find answers to common questions about <br /> our services, pricing, and how we work.</p>

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
            <section className="cta-sec">
                <div className="container">
                    <h2 className="cta-hd">STILL HAVE QUESTIONS?</h2>
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>If your question isn't answered here, contact us directly:</h4>
                            <div className="contact-content-wrapper">
                                <i className='fa-solid fa-envelope'></i>
                                <Link className='banner-para' href={"mailto:hello@five9.com"}>hello@five9.com</Link>
                            </div>
                            <div className="contact-content-wrapper">
                                <i className='fa-solid fa-phone'></i>
                                <Link className='banner-para' href={"tel:18778534839"}>+1 877 853 4839</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="text-start">Or schedule a free consultation to discuss your specific situation.</h4>
                            <div className="btn-wrapper">
                                <div className="btn-fill"></div>
                                <div className="btn-content">
                                    <div className="left-icon">
                                        <Image src={rightArrow} className='img-fluid' alt="" />
                                    </div>
                                    <div className="btn-text">SCHEDULE CONSULTATION</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
