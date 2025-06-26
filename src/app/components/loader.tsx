import React from "react";

const Loader = () => (
  <div
    id="loading"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "#6b7e62cc", // semi-transparent for a softer look
      zIndex: 99999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(2px)",
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
        animation: smoothSpin 2.5s ease-in-out infinite;
        transform-origin: center center;
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
        animation-delay: 0.3s;
      }
      #object_three {
        width: 60px;
        height: 60px;
        border-right: 3px solid transparent;
        border-top: 3px solid rgba(230, 237, 227, 0.5);
        left: 20px;
        top: 20px;
        animation-delay: 0.6s;
      }
      #object_four {
        width: 40px;
        height: 40px;
        border-left: 3px solid transparent;
        border-bottom: 3px solid rgba(230, 237, 227, 0.6);
        left: 30px;
        top: 30px;
        animation-delay: 0.9s;
      }
      @keyframes smoothSpin {
        0% { 
          transform: rotate(0deg) scale(1);
          opacity: 0.8;
        }
        25% {
          transform: rotate(90deg) scale(1.05);
          opacity: 0.9;
        }
        50% { 
          transform: rotate(180deg) scale(1);
          opacity: 0.8;
        }
        75% {
          transform: rotate(270deg) scale(0.95);
          opacity: 0.7;
        }
        100% { 
          transform: rotate(360deg) scale(1);
          opacity: 0.8;
        }
      }
    `}</style>
  </div>
);

export default Loader;