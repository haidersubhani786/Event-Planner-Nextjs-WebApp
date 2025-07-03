"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const userData = useSelector((state: any) => state.auth.userData);

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
    <div id="sticky-header" className={`${isSticky ? " sticky-active" : ""}`}>
      <div className="container-fluid">
        <div
          className="row d-flex align-items-center bg-gray"
          style={{ backgroundColor: "#0b0b1e" }}
        >
          {/* Logo */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="logo cursor-scale">
              <Link
                className="logo_img"
                href="/home"
                title="lovebird"
                style={{
                  filter:
                    "drop-shadow(0 0 10px white) drop-shadow(0 0 10px black)",
                }}
              >
                <Image
                  width={149}
                  height={65}
                  src={imageSrc || "/assets/images/logo.png"}
                  alt="logo"
                />
              </Link>
              <Link
                className="main_sticky"
                href="/home"
                title="lovebird"
                style={{
                  filter:
                    "drop-shadow(0 0 10px white) drop-shadow(0 0 10px black)",
                }}
              >
                <Image
                  width={149}
                  height={65}
                  src={imageSrc || "/assets/images/logo.png"}
                  alt="logo"
                />
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
                className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
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
        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
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
    </div>
  );
}
