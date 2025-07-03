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
    </div>
  );
};

export default Loader;