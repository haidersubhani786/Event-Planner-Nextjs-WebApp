"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const WeddingEventArea = () => {
  return (
    <div className="wedding-event-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center cursor-scale">
              <div className="section-sub-title">
                <h5>Wedding Menu</h5>
              </div>
              <div className="section-main-title cursor-scale">
                <h1>Organization Wedding</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row wedding-box align-items-center">
          <div className="col-lg-4">
            <div className="single-wedding-box cursor-scale">
              <div className="wedding-number">
                <span>01</span>
              </div>
              <div className="wedding-title">
                <h1>Catering & Cuisine</h1>
              </div>
              <div className="wedding-desc">
                <p>
                  From plated dinners to live stations and buffets, we craft custom menus to suit all tastes, served by expert chefs for a truly memorable experience.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="single-wedding-box last-child cursor-scale">
                  <div className="wedding-number">
                    <span>02</span>
                  </div>
                  <div className="wedding-title">
                    <h1>Décor & Styling</h1>
                  </div>
                  <div className="wedding-desc">
                    <p>
                      From rustic charm to modern luxury, our décor team brings your theme to life with elegant setups, lighting, florals, and custom backdrops.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <Swiper
              modules={[Navigation]}
              className="wedding-active"
              loop
            >
              <SwiperSlide>
                <div style={{ position: "relative" }}>
                  <Image
                    src="/assets/images/home-1/wedding-thumb.jpg"
                    alt="thumb"
                    width={400}
                    height={400}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ position: "relative" }}>
                  <Image
                    src="/assets/images/home-1/wedding-thumb2.jpg"
                    alt="thumb"
                    width={400}
                    height={400}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ position: "relative" }}>
                  <Image
                    src="/assets/images/home-1/cup-dessert.jpg"
                    alt="thumb"
                    width={400}
                    height={547}
                    style={{ width: '100%' }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ position: "relative" }}>
                  <Image
                    src="/assets/images/home-1/just-married-car-with-cans.jpg"
                    alt="thumb"
                    width={400}
                    height={547}
                    style={{ width: '100%' }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ position: "relative" }}>
                  <Image
                    src="/assets/images/home-1/beautiful-wedding-table-arrangement-outside.jpg"
                    alt="thumb"
                    width={400}
                    height={547}
                    style={{ width: '100%'}}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-lg-4 pl-0">
            <div className="single-wedding-box box-2 cursor-scale">
              <div className="wedding-number">
                <span>03</span>
              </div>
              <div className="wedding-title">
                <h1>Full-Service Event Planning</h1>
              </div>
              <div className="wedding-desc">
                <p>
                  We handle planning, vendors, logistics, and on-site coordination, ensuring your event runs smoothly while you enjoy every moment stress-free.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="single-wedding-box box-2 last-child cursor-scale">
                  <div className="wedding-number">
                    <span>04</span>
                  </div>
                  <div className="wedding-title">
                    <h1>Moments & Memories</h1>
                  </div>
                  <div className="wedding-desc">
                    <p>
                      From live music to interactive stations, we create memorable experiences that delight guests and add a personal touch to every moment of your event.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wedding-shape">
          <Image
            src="/assets/images/home-1/wedding-shape.png"
            alt="shape"
            width={200}
            height={100}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="wedding-shape2">
          <Image
            src="/assets/images/home-1/wedding-shape2.png"
            alt="shape"
            width={200}
            height={100}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default WeddingEventArea;