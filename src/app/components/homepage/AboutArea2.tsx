import React from 'react';
import Image from 'next/image';

const AboutArea2 = () => {
  return (
    <div className="about-area style-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="about-content">
              <div className="section-title text-left cursor-scale">
                <div className="section-sub-title">
                  <h5>13:30 pm In The Garden</h5>
                </div>
                <div className="section-main-title cursor-scale">
                  <h2>Lunch at the Ulipur</h2>
                </div>
                <div className="section-title-desc">
                  <p>
                    The villa&apos;s garden is truly a work of art, with carefully
                    cultivated flower beds and winding paths that invite us to
                    explore the natural beauty around us. The gentle breeze that
                    brushes against our skin and the chirping of the birds add
                    to the enchanting ambiance that surrounds us. It&apos;s the
                    perfect setting for a wedding reception, as it allows us to
                    enjoy delicious food and drinks while basking in the
                    splendor of the best flowery nature.
                  </p>
                </div>
              </div>
              <div className="about-btn">
                <a href="about-us.html">CLICK HERE</a>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 pr-0">
            <div className="about-thumb">
              <Image
                src="/assets/images/home-1/about-thumb4.jpg"
                alt="thumb"
                width={875}
                height={700}
                style={{  }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea2;