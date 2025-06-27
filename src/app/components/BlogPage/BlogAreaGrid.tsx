import React from "react";

const blogPosts = [
  {
    img: "assets/images/home-1/blog-thumb.png",
    alt: "blog",
    date: "June 8, 2024",
    title: "Flower Design",
    desc: "When it comes to planning the perfect wedding, flowers make all the difference. When it comes to,",
    btnText: "CLICK HERE",
    btnLink: "blog-details.html",
    metaTitle: "We Love Passion",
    metaLink: "blog-details.html",
  },
  {
    img: "assets/images/home-1/blog-thumb2.png",
    alt: "blog2",
    date: "June 8, 2024",
    title: "Flower Design",
    desc: "When it comes to planning the perfect wedding, flowers make all the difference. When it comes to,",
    btnText: "CLICK HERE",
    btnLink: "blog-details.html",
    metaTitle: "Flower Design",
    metaLink: "blog-details.html",
  },
  {
    img: "assets/images/home-1/blog-thumb3.png",
    alt: "blog3",
    date: "June 8, 2024",
    title: "Flower Design",
    desc: "When it comes to planning the perfect wedding, flowers make all the difference. When it comes to,",
    btnText: "CLICK HERE",
    btnLink: "blog-details.html",
    metaTitle: "Special Events",
    metaLink: "blog-details.html",
  },
  {
    img: "assets/images/home-1/blog-thumb4.png",
    alt: "blog",
    date: "June 8, 2024",
    title: "Flower Design",
    desc: "When it comes to planning the perfect wedding, flowers make all the difference. When it comes to,",
    btnText: "CLICK HERE",
    btnLink: "blog-details.html",
    metaTitle: "We Love Passion",
    metaLink: "blog-details.html",
  },
  {
    img: "assets/images/home-1/blog-thumb5.png",
    alt: "blog2",
    date: "June 8, 2024",
    title: "Flower Design",
    desc: "When it comes to planning the perfect wedding, flowers make all the difference. When it comes to,",
    btnText: "CLICK HERE",
    btnLink: "blog-details.html",
    metaTitle: "Flower Design",
    metaLink: "blog-details.html",
  },
  {
    img: "assets/images/home-1/blog-thumb6.png",
    alt: "blog3",
    date: "June 8, 2024",
    title: "Flower Design",
    desc: "When it comes to planning the perfect wedding, flowers make all the difference. When it comes to,",
    btnText: "CLICK HERE",
    btnLink: "blog-details.html",
    metaTitle: "Special Events",
    metaLink: "blog-details.html",
  },
];

const BlogAreaGrid = () => {
  return (
    <div className="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center cursor-scale">
              <div className="section-sub-title">
                <h5>WEDDING NEWS</h5>
              </div>
              <div className="section-main-title cursor-scale">
                <h1>Romantic Revelations</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="blog-singele-box">
                <div className="blog-thumb">
                  <img src={post.img} alt={post.alt} />
                  <div className="blog-content">
                    <div className="blog-date">
                      <span>{post.date}</span>
                    </div>
                    <h3 className="blog-title">
                      <a href={post.btnLink}>{post.title}</a>
                    </h3>
                    <p className="blog-desc">{post.desc}</p>
                    <div className="blog-btn">
                      <a href={post.btnLink}>{post.btnText}</a>
                    </div>
                  </div>
                </div>
                <div className="blog-meta-title">
                  <h2>
                    <a href={post.metaLink}>{post.metaTitle}</a>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogAreaGrid;
