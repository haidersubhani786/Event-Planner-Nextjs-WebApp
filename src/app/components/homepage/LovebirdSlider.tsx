"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LovebirdSlider = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const userData=useSelector((state:any)=>state.auth.userData);

  

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      // @ts-ignore
      swiperInstance.params.navigation
    ) {
      // @ts-ignore
      swiperInstance.params.navigation.prevEl = prevRef.current;
      // @ts-ignore
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance, prevRef, nextRef]);

  return (
    <section className="lovebird-slider-area">
      <div className="lovebird-slider-wrapper">
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          className="lovebird-slider-active"
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
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
                            {(userData?.hero_section ||"Save the date for the wedding of June 10,2025")}
                          </span>
                          <h1 className="lovebird-slider-title cursor-scale">
                             {userData?.company_name || "Romeo & Juliet"}
                          </h1>
                        </div>
                        <div className="lovebird-slider-btn">
                          <div className="slider-btn">
                            <a href="/contact">wedding</a>
                          </div>
                          <div className="slider-video-btn">
                            <a
                              className="video-vemo-icon venobox vbox-item"
                              data-vbtype="youtube"
                              data-autoplay="true"
                              href="/"
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
                            {userData?.hero_section || "Save the date for the wedding of June 10, 2025"}
                          </span>
                          <h1 className="lovebird-slider-title cursor-scale">
                            {userData?.company_name || "Romeo & Juliet"}
                          </h1>
                        </div>
                        <div className="lovebird-slider-btn">
                          <div className="slider-btn">
                            <a href="/contact">wedding</a>
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
