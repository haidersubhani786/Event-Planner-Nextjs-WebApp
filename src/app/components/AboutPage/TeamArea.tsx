import Link from "next/link";
import Image from "next/image";
import React from "react";

const TeamArea = () => {
  const TeamData = [
    {
      img: "/assets/images/home-2/team-thumb.jpg",
      heading1: "Albert Floew",
      heading2: "Chif Guest",
    },
    {
      img: "/assets/images/home-2/team-thumb2.jpg",
      heading1: "William John",
      heading2: "Spacial Guest",
    },
    {
      img: "/assets/images/home-2/team-thumb3.jpg",
      heading1: "David Robert",
      heading2: "Chif Guest",
    },
  ];
  return (
    <div className="team-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center cursor-scale"
              data-aos="flip-up"
            >
              <div className="section-sub-title">
                <h5>SPACIAL GUEST</h5>
              </div>
              <div className="section-main-title cursor-scale">
                <h3>Our Wedding Professionals</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {TeamData.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-team-box">
                  <div className="team-thumb">
                    <Image
                      src={item.img}
                      alt="team"
                      width={400}
                      height={400}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className="team-icon">
                      <i className="fa-solid fa-plus"></i>
                      <div className="team-social-icon">
                        <ul>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-x-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h1 className="team-title">
                      <Link href="/service">{item.heading1}</Link>
                    </h1>
                    <p className="team-role">{item.heading2}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamArea;
