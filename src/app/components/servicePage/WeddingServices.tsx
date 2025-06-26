import Image from 'next/image';
import React from 'react'

const WeddingServices = () => {
    // Example: Place this at the top of your WeddingServices component file
const services = [
  {
    icon: "/assets/images/inner/ser-icon.png",
    title: "Photographer",
    desc: "Looking and feeling your best on your wedding day is essential. Our recommended hair and makeup artists have"
  },
  {
    icon: "/assets/images/inner/ser-icon2.png",
    title: "Makeup Artist",
    desc: "Looking and feeling your best on your wedding day is essential. Our recommended hair and makeup artists have"
  },
  {
    icon: "/assets/images/inner/ser-icon3.png",
    title: "Wedding Officiant",
    desc: "Looking and feeling your best on your wedding day is essential. Our recommended hair and makeup artists have"
  },
  {
    icon: "/assets/images/inner/ser-icon4.png",
    title: "Florist",
    desc: "Looking and feeling your best on your wedding day is essential. Our recommended hair and makeup artists have"
  },
  {
    icon: "/assets/images/inner/ser-icon5.png",
    title: "Caterer",
    desc: "Looking and feeling your best on your wedding day is essential. Our recommended hair and makeup artists have"
  },
  {
    icon: "/assets/images/inner/ser-icon6.png",
    title: "DJ or Band",
    desc: "Looking and feeling your best on your wedding day is essential. Our recommended hair and makeup artists have"
  }
];
  return (
    <div className="service-area style-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center cursor-scale" data-aos="">
                      <div className="section-sub-title">
                        <h5>Our Best Supply</h5>
                      </div>
                      <div className="section-main-title cursor-scale">
                        <h3>Wedding Services</h3>
                      </div>
                  </div> 
                </div>
            </div>
            <div className="row">
              {
                services.map((service,index)=>{
                    return(
                        <div className="col-lg-4 col-md-6" key={index}>
                  <div className="single-service-box" data-aos="">
                      <div className="service-icon">
                          <Image width={60} height={54} src={service.icon} alt="icon"  />
                      </div>
                      <div className="service-content">
                          <h1 className="service-title">{service.title}</h1>
                          <p className="service-desc">{service.desc}</p>
                      </div>
                  </div>
              </div>
                    )
                })
              }

            </div>
        </div>
    </div>
  )
}

export default WeddingServices