import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    image: '/assets/images/home-1/blog-thumb.png',
    alt: 'blog',
    width: 415,
    height: 498,
    date: 'June 8, 2024',
    title: 'Flower Design',
    link: '/blog-details',
    desc: 'When it comes to planning the perfect wedding, flowers make all the difference. When it comes to,',
    metaTitle: 'We Love Passion',
  },
  {
    image: '/assets/images/home-1/blog-thumb2.png',
    alt: 'blog2',
    width: 415,
    height: 498,
    date: 'June 8, 2024',
    title: 'Flower Design',
    link: '/blog-details',
    desc: 'When it comes to planning the perfect wedding, flowers make all the difference. When it comes to,',
    metaTitle: 'Flower Design',
  },
  {
    image: '/assets/images/home-1/blog-thumb3.png',
    alt: 'blog3',
    width: 415,
    height: 498,
    date: 'June 8, 2024',
    title: 'Flower Design',
    link: '/blog-details',
    desc: 'When it comes to planning the perfect wedding, flowers make all the difference. When it comes to,',
    metaTitle: 'Special Events',
  },
];

const BlogArea = () => {
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
          {blogPosts.map((post, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="blog-singele-box">
                <div className="blog-thumb">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={post.width}
                    height={post.height}
                  />
                  <div className="blog-content">
                    <div className="blog-date">
                      <span>{post.date}</span>
                    </div>
                    <h3 className="blog-title">
                      <Link href={post.link}>{post.title}</Link>
                    </h3>
                    <p className="blog-desc">{post.desc}</p>
                    <div className="blog-btn">
                      <Link href={post.link}>CLICK HERE</Link>
                    </div>
                  </div>
                </div>
                <div className="blog-meta-title">
                  <h2>
                    <Link href={post.link}>{post.metaTitle}</Link>
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

export default BlogArea;