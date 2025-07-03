"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const FooterArea = () => {
  const userData=useSelector((state:any) => state.auth.userData);
  console.log(userData,"data from the redux")
  const getImageSrc = (
    base64: string | undefined | null
  ): string | undefined => {
    if (!base64) return undefined;
    if (base64.startsWith("data:image/")) return base64;
    let mimeType = "image/png";
    if (base64.startsWith("/9j/")) mimeType = "image/jpeg";
    else if (base64.startsWith("iVBORw0KGgo")) mimeType = "image/png";
    else if (base64.startsWith("R0lGODlh")) mimeType = "image/gif";
    else if (base64.startsWith("UklGR")) mimeType = "image/webp";
    else if (base64.startsWith("Qk")) mimeType = "image/bmp";
    else if (base64.startsWith("PD94bWwg") || base64.startsWith("PHN2Zy"))
      mimeType = "image/svg+xml";
    return `data:${mimeType};base64,${base64}`;
  };
  const imageSrc = getImageSrc(userData?.company_logo_base64);
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="footer-single-item">
              <div className="footer-content">
                <div className="footer-title">
                  <h1>{userData?.company_name}</h1>
                </div>
                <div className="footer-info text-left text-md-center">
                  <p>
                    <i className="fa-solid fa-phone-flip"></i>+880 123 (4567) 890
                  </p>
                  <span>
                    <i className="fa-regular fa-envelope"></i>{`info@${userData?.company_name}.com` || "example@gmail.com"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2">
            <div className="footer-logo">
              <Link href="/home"><Image src={imageSrc || "/assets/images/home-1/logo-b.png"} alt="logo" width={100} height={60} /></Link>


            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="footer-single-item2">
              <div className="footer-content">
                <div className="footer-title">
                  <h1>Axix Technologies</h1>
                </div>
                <div className="footer-info">
                  <p>
                    <i className="fa-solid fa-phone-flip"></i>+880 123 (4567) 890
                  </p>
                  <span>
                    <i className="fa-regular fa-envelope"></i> Info@axixtechnologies.com
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