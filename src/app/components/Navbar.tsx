'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="sticky-header"
      className={`lovebird_nav_manu${isSticky ? ' sticky-active' : ''}`}
    >
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-lg-2">
            <div className="logo cursor-scale">
              <Link className="logo_img" href="/" title="lovebird">
                <img src="/assets/images/logo.png" alt="logo" />
              </Link>
              <Link className="main_sticky" href="/" title="lovebird">
                <img src="/assets/images/logo.png" alt="astute" />
              </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <nav className="lovebird_menu">
              <ul className="nav_scroll">
                <li>
                  <Link className="cursor-scale" href="/home">Home</Link>

                </li>
                <li>
                  <Link className="cursor-scale" href="/about">About</Link>
                </li>
                <li>
                  <Link className="cursor-scale" href="/service">Service</Link>
                 
                </li>
                <li>
                  <Link className="cursor-scale" href="/shop">Shop</Link>
                 
                </li>
                {/* <li>
                  <Link className="cursor-scale" href="/blog">Blog</Link>
                  
                </li>
                <li>
                  <Link className="cursor-scale" href="/contact">Contact</Link>
                </li> */}
              </ul>
            </nav>
          </div>
          <div className="col-lg-2">
            <div className="header-btn">
              <Link href="/contact">wedding</Link>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}
