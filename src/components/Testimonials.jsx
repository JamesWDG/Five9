"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const data = [
    {
        title: "They Actually Did What They Promised",
        text: "\" We worked with three consultants before Five 9. The others gave us reports and disappeared. Five 9 stayed through implementation and made sure everything worked. That's the difference between wasted money and actual results. \" ",
        name: "Sarah Chen",
        role: "COO, RetailTech Solutions",
    },
    {
        title: "Like Having a CTO Without the Cost",
        text: "\" Our fractional CTO saved us from making a $500,000 mistake on a vendor contract. That one conversation paid for a year of services. Now he's part of every major technology decision we make. \" ",
        name: "Michael Rodriguez",
        role: "CEO, HealthFirst Medical",
    },
    {
        title: "Finally, Someone Who Speaks English",
        text: "\" Every other consultant talked in acronyms and jargon. Five 9 explains things in plain language. If I don't understand something, they explain it differently until I do. That's respect for the client. \" ",
        name: "Jennifer Williams",
        role: "CFO, Manufacturing Plus",
    },
];

// Controlled duplication for smooth loop
const slides = [...data, ...data, ...data];

export default function Testimonials() {
    return (
        <section className="testimonials-sec">
            <div className="container">
                <h3 className='banner-hd-mini text-center'>CLIENT TESTIMONIALS</h3>

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    loopAdditionalSlides={data.length}
                    centeredSlides={true}
                    spaceBetween={30}
                    speed={2000}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="testimonial-swiper"
                >
                    {slides.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="testimonial-card">
                                <h3>{item.title}</h3>
                                <p className="testimonial-text">{item.text}</p>

                                <div className="testimonial-user">
                                    <div>
                                        <h4>{item.name}</h4>
                                        <small>{item.role}</small>
                                    </div>
                                    <span className="quote">“</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
