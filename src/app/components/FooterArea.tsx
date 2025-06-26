import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FooterArea = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="footer-single-item">
              <div className="footer-content">
                <div className="footer-title">
                  <h1>Mariya Muskan</h1>
                </div>
                <div className="footer-info text-left text-md-center">
                  <p>
                    <i className="fa-solid fa-phone-flip"></i>+880 123 (4567) 890
                  </p>
                  <span>
                    <i className="fa-regular fa-envelope"></i>example@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2">
            <div className="footer-logo">
              <Link href="/"><Image src="/assets/images/home-1/logo-b.png" alt="logo" width={100} height={60} /></Link>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="footer-single-item2">
              <div className="footer-content">
                <div className="footer-title">
                  <h1>Munim Mursalin</h1>
                </div>
                <div className="footer-info">
                  <p>
                    <i className="fa-solid fa-phone-flip"></i>+880 123 (4567) 890
                  </p>
                  <span>
                    <i className="fa-regular fa-envelope"></i>example@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-shape">
          <Image src="/assets/images/home-1/footer-shape.png" alt="shape" width={93} height={54} />
        </div>
        <div className="footer-shape2">
          <Image src="/assets/images/home-1/footer-shape2.png" alt="shape2" width={134} height={97} />
        </div>
      </div>
    </div>
  );
};

export default FooterArea;