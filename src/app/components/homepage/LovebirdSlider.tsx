"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

const LovebirdSlider = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="lovebird-slider-area">
      <div className="lovebird-slider-wrapper">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="lovebird-slider-active"
          loop
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="lovebird-slider-height">
                <div className="lovebird-slider-bg"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="lovebird-slider-content text-center">
                        <div className="lovebird-slider-title-box cursor-scale">
                          <span className="lovebird-slider-sub-title">
                            Save the date for the wedding of June 10,2024
                          </span>
                          <h1 className="lovebird-slider-title cursor-scale">
                            Muskan & Mursalin
                          </h1>
                        </div>
                        <div className="lovebird-slider-btn">
                          <div className="slider-btn">
                            <a href="about-us.html">wedding</a>
                          </div>
                          <div className="slider-video-btn">
                            <a
                              className="video-vemo-icon venobox vbox-item"
                              data-vbtype="youtube"
                              data-autoplay="true"
                              href="https://www.youtube.com/watch?v=Wx48y_fOfiY"
                            >
                              <i className="fa-solid fa-play"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="lovebird-slider-height">
                <div className="lovebird-slider-bg2"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="lovebird-slider-content text-center">
                        <div className="lovebird-slider-title-box cursor-scale">
                          <span className="lovebird-slider-sub-title">
                            Save the date for the wedding of June 10, 2024
                          </span>
                          <h1 className="lovebird-slider-title cursor-scale">
                            Muskan & Mursalin
                          </h1>
                        </div>
                        <div className="lovebird-slider-btn">
                          <div className="slider-btn">
                            <a href="about-us.html">wedding</a>
                          </div>
                          <div className="slider-video-btn">
                            <a
                              className="video-vemo-icon venobox vbox-item"
                              data-vbtype="youtube"
                              data-autoplay="true"
                              href="https://www.youtube.com/watch?v=Wx48y_fOfiY"
                            >
                              <i className="fa-solid fa-play"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="lovebird-slider-arrow-box">
          <button
            ref={prevRef}
            className="slider-prev"
            tabIndex={0}
            aria-label="Previous slide"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            ref={nextRef}
            className="slider-next"
            tabIndex={0}
            aria-label="Next slide"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LovebirdSlider;
