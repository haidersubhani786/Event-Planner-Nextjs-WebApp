'use client'
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    desc: `You have always been someone I can count on, and I
    hope you know that I'll always be here for you.
    I can't wait to see what the future holds for you and
    your partner Christin.`,
    author: 'Fariska mandon',
    role: 'Bridesmanid',
    img: '/assets/images/home-1/testi-autor.png',
  },
  {
    desc: `Your friendship means the world to me. Wishing you
    and Christin a lifetime of happiness together!`,
    author: 'Alex Johnson',
    role: 'Best Man',
    img: '/assets/images/home-1/testi-autor.png',
  },
];

const TestimonialArea = () => {
  return (
    <div className="testimonial-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.testi-next',
                prevEl: '.testi-prev',
              }}
              loop={true}
              className="testi-active cursor-scale"
            //   data-aos="zoom-in-left"
              spaceBetween={30}
              slidesPerView={1}
            >
              {testimonials.map((t, idx) => (
                <SwiperSlide key={idx}>
                  <div className="testi-box">
                    <div className="testi-single-box">
                      <div className="autor-rating">
                        <ul className="testi-rating">
                          {[...Array(5)].map((_, i) => (
                            <li key={i}>
                              <i className="bi bi-star-fill"></i>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="testi-content">
                        <p className="testi-desc">{t.desc}</p>
                        <div className="testi-author">
                          <Image
                            src={t.img}
                            alt="img"
                            width={60}
                            height={60}
                          />
                        </div>
                        <h3 className="testi-user-name">
                          {t.author}
                          <span>{t.role}</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="lovebird-testi-arrow-box">
                <button
                  className="testi-prev"
                  tabIndex={0}
                  aria-label="Previous slide"
                  type="button"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <button
                  className="testi-next"
                  tabIndex={0}
                  aria-label="Next slide"
                  type="button"
                >
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialArea;