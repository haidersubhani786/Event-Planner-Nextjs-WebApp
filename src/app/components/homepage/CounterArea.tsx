"use client";
import React, { useEffect, useState } from 'react';

// Set your start date here
const startDate = new Date("2024-06-10T00:00:00");

function getTimePassed() {
  const now = new Date();
  const diff = now.getTime() - startDate.getTime();

  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((diff / 1000) % 60));

  return { days, hours, minutes, seconds };
}

const CounterArea = () => {
  const [timePassed, setTimePassed] = useState(getTimePassed());
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Trigger fade-in
    const timer = setInterval(() => {
      setTimePassed(getTimePassed());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="coutner-area">
      <div className="container">
        <div className="row counter align-items-center">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className={`single-counter-misson cursor-scale fade ${show ? 'show' : ''}`} >
              <div className="counter-content">
                <h6 className="counter-sub-title">DAYS SINCE</h6>
                <h2 className="counter-title">Our Wedding</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className={`counter-single-box text-left text-md-left cursor-scale fade ${show ? 'show' : ''}`} >
              <div className="odometer-wrapper counter-box-title">
                <h1 className="odometer">{timePassed.days}</h1>
              </div>
              <div className="counter-desc">
                <p>DAYS</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className={`counter-single-box text-md-left cursor-scale fade ${show ? 'show' : ''}`} >
              <div className="odometer-wrapper counter-box-title">
                <h1 className="odometer">{timePassed.hours}</h1>
              </div>
              <div className="counter-desc">
                <p>HOURS</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className={`counter-single-box text-left text-md-left text-sm-left cursor-scale fade ${show ? 'show' : ''}`} >
              <div className="odometer-wrapper counter-box-title">
                <h1 className="odometer">{timePassed.minutes}</h1>
              </div>
              <div className="counter-desc">
                <p>MINUTES</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className={`counter-single-box text-left text-md-left text-sm-left cursor-scale fade ${show ? 'show' : ''}`} >
              <div className="odometer-wrapper counter-box-title">
                <h1 className="odometer">{timePassed.seconds}</h1>
              </div>
              <div className="counter-desc">
                <p>SECONDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterArea;