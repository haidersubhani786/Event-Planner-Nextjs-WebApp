import Link from 'next/link'
import React from 'react'

const PageBanner = ({heading}:{heading:string}) => {
  return (
    <div className="breadcumb-area">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="breadcumb-content" >
                        <h4>{heading}</h4>
                        <ul className="breadcumb-list">
                          <li><Link href="/home">Home</Link></li>
                          <li className="list-arrow">&lt;</li>
                          <li>{heading}</li>
                        </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default PageBanner