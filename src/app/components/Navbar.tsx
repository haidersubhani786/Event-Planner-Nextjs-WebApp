"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      id="sticky-header"
      className={`${isSticky ? " sticky-active" : ""}`}
    >
      <div className="container-fluid">
        <div className="row d-flex align-items-center bg-gray" style={{backgroundColor:"#0b0b1e"}}>
          {/* Logo */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="logo cursor-scale">
              <Link className="logo_img" href="/" title="lovebird">
                <img src="/assets/images/logo.png" alt="logo" />
              </Link>
              <Link className="main_sticky" href="/" title="lovebird">
                <img src="/assets/images/logo.png" alt="astute" />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="col-lg-8 d-none d-lg-block">
            <nav className="lovebird_menu">
              <ul className="nav_scroll">
                <li>
                  <Link className="cursor-scale" href="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="cursor-scale" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="cursor-scale" href="/service">
                    Service
                  </Link>
                </li>
                <li>
                  <Link className="cursor-scale" href="/shop">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link className="cursor-scale" href="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="cursor-scale" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Desktop CTA Button */}
          <div className="col-lg-2 d-none d-lg-block">
            <div className="header-btn">
              <Link href="/contact">wedding</Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="col-md-6 col-6 d-lg-none">
            <div className="mobile-menu-toggle">
              <button
                className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <nav className="mobile-nav">
            <ul>
              <li>
                <Link href="/home" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/service" onClick={closeMobileMenu}>
                  Service
                </Link>
              </li>
              <li>
                <Link href="/shop" onClick={closeMobileMenu}>
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={closeMobileMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
              {/* <li className="mobile-cta">
                <Link href="/contact" onClick={closeMobileMenu}>
                  Wedding
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}
      </div>

      <style jsx>{`
 /* Mobile Menu Toggle Button */
.mobile-menu-toggle {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 10001;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 10001;
  transition: transform 0.3s ease;
}

.hamburger span {
  display: block;
  height: 3px;
  background: #1a8d23;
  border-radius: 6px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100vh;
  background: #fff;
  z-index: 9999;
  transition: right 0.4s ease;
  box-shadow: -8px 0 20px rgba(0, 0, 0, 0.1);
  padding: 90px 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.mobile-menu.active {
  right: 0;
}

.mobile-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav li {
  border-bottom: 1px solid #f0f0f0;
}

.mobile-nav a {
  display: block;
  padding: 14px 20px;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
}

.mobile-nav a:hover {
  background-color: #f3f4f6;
  color: #0d6efd;
}

.mobile-nav .mobile-cta a {
  display: block;
  margin: 25px auto 0;
  background: #0d6efd;
  color: #fff;
  padding: 12px 24px;
  border-radius: 25px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  width: 80%;
  text-transform: capitalize;
  transition: background 0.3s ease;
}

.mobile-nav .mobile-cta a:hover {
  background: #0056b3;
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.mobile-menu-overlay.active {
  opacity: 1;
  pointer-events: all;
}

/* Responsive adjustments */
@media (max-width: 991px) {
  .lovebird_nav_manu {
    position: relative;
  }
}

@media (max-width: 767px) {
  .logo img {
    max-width: 110px;
  }
  .mobile-menu {
    width: 260px;
  }
}

@media (max-width: 480px) {
  .mobile-menu {
    width: 100%;
  }
}

/* Prevent body scroll when mobile menu is open */
body.mobile-menu-open {
  overflow: hidden;
}

#sticky-header.sticky-active {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  background: #fff; /* Change to your desired color */
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  transition: background 0.3s, box-shadow 0.3s;
}

      `}</style>
    </div>
  );
}