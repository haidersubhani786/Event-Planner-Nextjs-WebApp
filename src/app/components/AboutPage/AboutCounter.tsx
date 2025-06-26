"use client"
import React, { useEffect, useState } from 'react'

const Counter = ({ end, suffix }: { end: number, suffix?: string }) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const duration = 1000
    const increment = end / (duration / 16)
    const animate = () => {
      start += increment
      if (start < end) {
        setCount(Math.floor(start))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    animate()
  }, [end])
  return (
    <h1>
      {count}
      {suffix}
    </h1>
  )
}

const AboutCounter = () => {
  return (
    <div className="coutner-area style-2">
          <div className="container">
              <div className="row counter">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="counter-single-box cursor-scale">
                          <div className="odometer-wrapper counter-box-title">
                            <Counter end={200} suffix="+" />
                          </div>
                          <div className="counter-desc">
                            <p>Team Member</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="counter-single-box cursor-scale">
                      <div className="odometer-wrapper counter-box-title">
                        <Counter end={25} suffix="+" />
                      </div>
                      <div className="counter-desc">
                        <p>Winning award</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="counter-single-box cursor-scale">
                      <div className="odometer-wrapper counter-box-title">
                        <Counter end={15} suffix="k" />
                      </div>
                      <div className="counter-desc">
                        <p>Complete projects</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="counter-single-box cursor-scale">
                      <div className="odometer-wrapper counter-box-title">
                        <Counter end={12} suffix="k" />
                      </div>
                      <div className="counter-desc">
                        <p>Client review</p>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
  )
}

export default AboutCounter