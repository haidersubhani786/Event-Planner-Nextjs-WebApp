'use client'
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show instantly on mount
    const showTimeout = setTimeout(() => {
      setVisible(true);
    }, 10); // Delay needed to trigger CSS transition

    // Start fade out after 3 seconds
    const fadeTimeout = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(fadeTimeout);
    };
  }, []);

  return (
    <div
      id="loading"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#6b7e62cc",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(2px)",
        opacity: fadeOut ? 0 : (visible ? 1 : 0),
        transform: fadeOut ? "scale(0.95)" : (visible ? "scale(1)" : "scale(1.05)"),
        transition: fadeOut 
          ? "opacity 2s cubic-bezier(0.4, 0, 0.2, 1), transform 2s cubic-bezier(0.4, 0, 0.2, 1)"
          : "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div className="object" id="object_four"></div>
          <div className="object" id="object_three"></div>
          <div className="object" id="object_two"></div>
          <div className="object" id="object_one"></div>
        </div>
      </div>
      <style jsx>{`
        #loading-center-absolute {
          position: relative;
          width: 100px;
          height: 100px;
        }
        .object {
          position: absolute;
          border: 3px solid #e6ede3;
          border-radius: 50%;
          opacity: 0.8;
          box-sizing: border-box;
          box-shadow: 0 0 20px 3px rgba(183, 200, 178, 0.4);
          animation: smoothSpin 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform-origin: center center;
          will-change: transform, opacity;
        }
        #object_one {
          width: 100px;
          height: 100px;
          border-top: 3px solid transparent;
          border-right: 3px solid rgba(230, 237, 227, 0.3);
          left: 0;
          top: 0;
          animation-delay: 0s;
        }
        #object_two {
          width: 80px;
          height: 80px;
          border-bottom: 3px solid transparent;
          border-left: 3px solid rgba(230, 237, 227, 0.4);
          left: 10px;
          top: 10px;
          animation-delay: 0.4s;
        }
        #object_three {
          width: 60px;
          height: 60px;
          border-right: 3px solid transparent;
          border-top: 3px solid rgba(230, 237, 227, 0.5);
          left: 20px;
          top: 20px;
          animation-delay: 0.8s;
        }
        #object_four {
          width: 40px;
          height: 40px;
          border-left: 3px solid transparent;
          border-bottom: 3px solid rgba(230, 237, 227, 0.6);
          left: 30px;
          top: 30px;
          animation-delay: 1.2s;
        }
        @keyframes smoothSpin {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 0.8;
          }
          25% {
            transform: rotate(90deg) scale(1.02);
            opacity: 0.85;
          }
          50% {
            transform: rotate(180deg) scale(1);
            opacity: 0.8;
          }
          75% {
            transform: rotate(270deg) scale(0.98);
            opacity: 0.75;
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;