'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const brands = [
  { src: '/assets/images/home-1/brand-img.png', alt: 'brand img' },
  { src: '/assets/images/home-1/brand-img2.png', alt: 'brand img' },
  { src: '/assets/images/home-1/brand-img3.png', alt: 'brand img' },
  { src: '/assets/images/home-1/brand-img4.png', alt: 'brand img' },
  { src: '/assets/images/home-1/brand-img5.png', alt: 'brand img' },
  { src: '/assets/images/home-1/brand-img.png', alt: 'brand img' },
  { src: '/assets/images/home-1/brand-img2.png', alt: 'brand img' },
  { src: '/assets/images/home-1/brand-img3.png', alt: 'brand img' },
  { src: '/assets/images/home-1/brand-img4.png', alt: 'brand img' },
  { src: '/assets/images/home-1/brand-img5.png', alt: 'brand img' },
];

const BrandArea = () => {
  return (
    <div className="brand-area">
      <div className="container">
        <div className="row">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={130}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="band-active cursor-scale"
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            grabCursor={true} // Enables grab cursor and mouse drag
            speed={800} // Smooth transition speed in ms
          >
            {brands.map((brand, idx) => (
              <SwiperSlide key={idx}>
                <div className="brand-box">
                  <div className="brand-thumb">
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={125}
                      height={66}
                      style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;