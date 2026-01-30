"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import rightArrow from "@/app/(web)/assets/images/right-arrow.png";
const ServicesSection = ({ montserrat }) => {
  const router = useRouter();
  return (
    <section className="services-sec service-sec-mobile">
      <h3 className="banner-hd-mini">Our Services</h3>
      <h1 className="banner-hd">Comprehensive Solutions</h1>
      <div className="container">
        <div className="service-card-mega-wrapper">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}>
            <SwiperSlide>
              <div className="service-card-wrapper service-box-gsap service-mob1">
                <h3>Consulting</h3>
                <p className="banner-para">
                  With our IT Advisory Services in Englewood, we empower you to make
                  informed decisions, optimize resources, and ensure that your IT
                  architecture can withstand demands while remaining agile in a
                  changing technological landscape.
                </p>
                <div className="btn-wrapper" onClick={() => router.push("/our-services/consulting")}>
                  <div className="btn-fill"></div>
                  <div className="btn-content">
                    <div className="left-icon">
                      <Image src={rightArrow} className="img-fluid" alt="" />
                    </div>
                    <div className="btn-text">GET STARTED</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-card-wrapper service-mob2">
                <h3>Advisory</h3>
                <p className="banner-para">
                  With our IT Advisory Services in Englewood, we empower you to make
                  informed decisions, optimize resources, and ensure that your IT
                  architecture can withstand demands while remaining agile in a
                  changing technological landscape.
                </p>
                <div className="btn-wrapper" onClick={() => router.push("/our-services/advisory")}>
                  <div className="btn-fill"></div>
                  <div className="btn-content">
                    <div className="left-icon">
                      <Image src={rightArrow} className="img-fluid" alt="" />
                    </div>
                    <div className="btn-text">GET STARTED</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-card-wrapper service-box-gsap2 service-mob3">
                <h3>Strategy</h3>
                <p className="banner-para">
                  With our IT Advisory Services in Englewood, we empower you to make
                  informed decisions, optimize resources, and ensure that your IT
                  architecture can withstand demands while remaining agile in a
                  changing technological landscape.
                </p>
                <div className="btn-wrapper" onClick={() => router.push("/our-services/strategy")}>
                  <div className="btn-fill"></div>
                  <div className="btn-content">
                    <div className="left-icon">
                      <Image src={rightArrow} className="img-fluid" alt="" />
                    </div>
                    <div className="btn-text">GET STARTED</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section >
  );
};

export default ServicesSection;
