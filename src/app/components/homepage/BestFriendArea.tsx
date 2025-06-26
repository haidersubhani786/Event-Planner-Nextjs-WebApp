'use client';
import React from 'react';
import Image from 'next/image';

const BestFriendArea = () => {
  return (
    <div className="best-friends-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center cursor-scale">
              <div className="section-sub-title">
                <h5>THANKS FOR BEING THERE</h5>
              </div>
              <div className="section-main-title cursor-scale">
                <h1>Our Best Friends</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single-best-friends">
              <div className="friends-thumb">
                <Image
                  src="/assets/images/home-1/friends-thumb.png"
                  alt="thumb"
                  width={400}
                  height={400}
                  layout="responsive"
                />
              </div>
              <div className="friends-content">
                <div className="friends-name">
                  <ul>
                    <li><a href="#">Hazel</a></li>
                    <li><a href="#">Piper</a></li>
                    <li><a href="#">Breigh</a></li>
                    <li><a href="#">Jenny</a></li>
                    <li><a href="#">Farah</a></li>
                  </ul>
                </div>
                <div className="friends-desc cursor-scale">
                  <p>
                    Hi, I’m Breigh, your bridesmaid and your best friend. Loremo
                    their a available, but the majority have manum suffered is
                    Ipsum Ipsum their a available, but the majority have manum
                    suffered is alteration in of as some injecteven design
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single-best-friends">
              <div className="friends-thumb">
                <Image
                  src="/assets/images/home-1/friends-thumb2.png"
                  alt="thumb"
                  width={400}
                  height={400}
                  layout="responsive"
                />
              </div>
              <div className="friends-content">
                <div className="friends-name">
                  <ul>
                    <li><a href="#">William</a></li>
                    <li><a href="#">Henry</a></li>
                    <li><a href="#">Levi</a></li>
                    <li><a href="#">Jack</a></li>
                    <li><a href="#">Asher</a></li>
                  </ul>
                </div>
                <div className="friends-desc cursor-scale">
                  <p>
                    Hey man, it’s me, Levi. I just wanted to take a moment to
                    let you know how happy I am to be here with you on your
                    wedding day have manum suffered is Ipsum Ipsum their a
                    available, but the majority have manum suffered is
                    alteration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="friend-shape" data-aos="zoom-in">
          <Image
            src="/assets/images/home-1/friends-shape.png"
            alt="shape"
            width={200}
            height={100}
          />
        </div>
        <div className="friend-shape2" data-aos="zoom-in">
          <Image
            src="/assets/images/home-1/friend-shape2.png"
            alt="shape"
            width={200}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default BestFriendArea;