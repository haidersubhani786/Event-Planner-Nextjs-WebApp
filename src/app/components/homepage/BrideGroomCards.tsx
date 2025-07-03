"use client";

import Image from "next/image";


export default function BrideGroomCards() {
 

  return (
    <>
     <div className="service-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single-service-box" data-aos="">
              <div className="service-thumb">
                <img src="assets/images/home-1/service-thumb.png" alt="thumb" />
              </div>
              <div className="service-content">
                <h5 className="service-sub-title" >THE BRIDE</h5>
                <h1 className="service-title" >
                  <a href="service-details.html">Juliet Romeo</a>
                </h1>
                <p className="service-desc">
                  There are many variations of passages of Loremos Ipsum their a
                  available, but the majority have manum suffered is Ipsum Ipsum
                  their a available, but the majority have manum suffered is
                  alteration in of as some injecteven design
                </p>
              </div>
              <div className="service-social-icon">
                <ul>
                  <li>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                  </li>
                </ul>
              </div>
              <div className="service-box-shape">
                <img src="assets/images/home-1/flower.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single-service-box box-2" >
              <div className="service-thumb">
                <img
                  src="assets/images/home-1/service-thumb2.png"
                  alt="thumb"
                />
              </div>
              <div className="service-content">
                <h5 className="service-sub-title">THE GROOM</h5>
                <h1 className="service-title">
                  <a > Romeo Juliet</a>
                </h1>
                <p className="service-desc">
                  There are many variations of passages of Loremos Ipsum their a
                  available, but the majority have manum suffered is Ipsum Ipsum
                  their a available, but the majority have manum suffered is
                  alteration in of as some injecteven design
                </p>
              </div>
              <div className="service-social-icon">
                <ul>
                  <li>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                  </li>
                </ul>
              </div>
              <div className="service-box-shape2">
                <img src="assets/images/home-1/flower2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="service-shape"data-aos="zoom-in">
          <img src="assets/images/home-1/ser-shape.png" alt="shape" />
        </div>
        <div className="service-shape2" data-aos="zoom-in">
          <img src="assets/images/home-1/ser-shape2.png" alt="shape" />
        </div>
      </div>
    </div>
    </>
  )
    
}