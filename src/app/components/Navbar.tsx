"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change (optional, for better UX)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) setIsMobileNavOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="sticky-header"
      className={`lovebird_nav_manu${isSticky ? " sticky-active" : ""}`}
    >
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-lg-2 col-6">
            <div className="logo cursor-scale">
              <Link className="logo_img" href="/" title="lovebird">
                <img src="/assets/images/logo.png" alt="logo" />
              </Link>
              <Link className="main_sticky" href="/" title="lovebird">
                <Image
                  width={149}
                  height={65}
                  src="/assets/images/logo.png"
                  alt="astute"
                />
              </Link>
            </div>
          </div>
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
          <div className="col-lg-2 col-6 d-flex justify-content-end align-items-center">
            <div className="header-btn d-none d-lg-block">
              <Link href="/contact">wedding</Link>
            </div>
            {/* Mobile toggler */}
            <button
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setIsMobileNavOpen((prev) => !prev)}
              style={{
                background: "none",
                border: "none",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            >
              <span>
                <span
                  style={{
                    display: "block",
                    width: 28,
                    height: 3,
                    background: "#232323",
                    margin: "5px 0",
                  }}
                ></span>
                <span
                  style={{
                    display: "block",
                    width: 28,
                    height: 3,
                    background: "#232323",
                    margin: "5px 0",
                  }}
                ></span>
                <span
                  style={{
                    display: "block",
                    width: 28,
                    height: 3,
                    background: "#232323",
                    margin: "5px 0",
                  }}
                ></span>
              </span>
            </button>
          </div>
        </div>
        {/* Mobile nav */}
        {isMobileNavOpen && (
          <div className="mobile-nav d-lg-none">
            <ul className="nav_scroll">
              <li>
                <Link
                  className="cursor-scale"
                  href="/home"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-scale"
                  href="/about"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-scale"
                  href="/service"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-scale"
                  href="/shop"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-scale"
                  href="/blog"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-scale"
                  href="/contact"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsMobileNavOpen(false)}>
                  wedding
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* Basic mobile nav styles */}
      <style jsx>{`
        .mobile-nav {
          background: #fff;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          z-index: 999;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          padding: 1rem 0;
        }
        .mobile-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .mobile-nav li {
          padding: 0.5rem 1.5rem;
        }
        .mobile-nav li a {
          display: block;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
