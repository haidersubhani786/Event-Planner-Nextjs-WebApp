"use client"
import React, { useEffect, useState } from 'react';

const SIZE = 70; 
const STROKE = 7;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ScrollupArea = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      setScroll(percent);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hide when scroll is 0%
  if (scroll === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
        cursor: 'pointer',
        boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
        borderRadius: '50%',
        background: 'white',
        width: SIZE,
        height: SIZE,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={handleClick}
      title="Scroll to top"
    >
      <svg width={SIZE} height={SIZE}>
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="#9BAE8C"
          strokeWidth={STROKE}
          fill="none"
          opacity={0.4}
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="#9BAE8C"
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE - (scroll / 100) * CIRCUMFERENCE}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.2s' }}
        />
      </svg>
      <span
        style={{
          position: 'absolute',
          fontWeight: 700,
          color: '#1a2a5a',
          fontSize: 16,
          fontFamily: 'serif',
          userSelect: 'none',
        }}
      >
        {scroll}%
      </span>
    </div>
  );
};

export default ScrollupArea;