import React from 'react'
import Image from 'next/image'

const WeddingStory = () => {
  return (
    <div className="about-us-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-thumb">
              <Image
                src="/assets/images/inner/about-img1.png"
                alt="thumb"
                width={381}
                height={647}
                style={{ }}
              />
              <div className="about-thu">
                <Image
                  src="/assets/images/inner/about-img2.png"
                  alt="thumb"
                  width={527}
                  height={513}
                  style={{}}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-title text-left cursor-scale">
                <div className="section-main-title cursor-scale">
                  <h3>Our Wedding Story to</h3>
                  <h3>Date</h3>
                </div>
                <div className="section-title-desc">
                  <p>
                    We believe in delivering tailored solutions that are designed to address requirements.
                    unique requirements. We take the time to We take the time
                  </p>
                </div>
              </div>
              <div className="about-item-box cursor-scale">
                <div className="about-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="about-tiltle">
                  <h3>Our Best Partners</h3>
                </div>
              </div>
              <div className="about-desc cursor-scale">
                <p>
                  Services are professional offerings provided. Services are professional offerings
                  provided. professional w offerings provided.
                </p>
              </div>
              <div className="about-item-box cursor-scale">
                <div className="about-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="about-tiltle">
                  <h3>Many Locations</h3>
                </div>
              </div>
              <div className="about-desc cursor-scale">
                <p>
                  Services are professional offerings provided. Services are professional offerings
                  provided. professional w offerings provided.
                </p>
              </div>
              <div className="about-us-btn">
                <a href="about-us.html">Discover more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeddingStory