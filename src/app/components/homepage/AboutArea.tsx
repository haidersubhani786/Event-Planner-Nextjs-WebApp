import React from 'react';
import Image from 'next/image';

const AboutArea = () => {
  return (
    <div className="about-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-7 col-lg-6 pl-0">
            <div className="about-thumb">
              <Image
                src="/assets/images/home-1/about-thumb1.png"
                alt="thumb"
                width={875}
                height={700}
                style={{ }}
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="about-content">
              <div className="section-title text-left cursor-scale">
                <div className="section-sub-title">
                  <h5>11:30 am In The Square</h5>
                </div>
                <div className="section-main-title cursor-scale">
                  <h2>Official Ceremony</h2>
                </div>
                <div className="section-title-desc">
                  <p>
                    Welcome to this beautiful park, where we gather celebrate
                    our wedding. to me As we look around us, we can't help but
                    be struck by the natural beauty love a that surrounds us.
                    From the vibrant flowers and trees the gently flowing nice
                    to streams, this park provides the perfect backdrop for this
                    joyou occasion. and is As we stand here today, surrounded by
                    the beauty of this park, we are worklnk reminded of the
                    enduring power of love.
                  </p>
                </div>
              </div>
              <div className="about-btn">
                <a href="about-us.html">CLICK HERE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;