"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const WeddingStory = () => {
  const userData = useSelector((state: any) => state.auth.userData);
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
                style={{}}
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
                    {Array.isArray(userData?.paragraphs) &&
                    userData?.paragraphs.length > 0
                      ? userData?.paragraphs[
                          Math.floor(Math.random() * userData?.paragraphs.length)
                        ]
                      : "We believe in delivering tailored solutions that are designed to address unique requirements. We take the time to understand your goals and deliver accordingly."}
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
                  Services are professional offerings provided. Services are
                  professional offerings provided. professional w offerings
                  provided.
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
                  Services are professional offerings provided. Services are
                  professional offerings provided. professional w offerings
                  provided.
                </p>
              </div>
              <div className="about-us-btn">
                <a href="#">Discover more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingStory;
