import React from 'react'

const ContactArea = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title text-left cursor-scale">
              <div className="section-sub-title">
                <h5>contact Information</h5>
              </div>
              <div className="section-main-title cursor-scale">
                <h3>Write to us for a fast</h3>
                <h3>Feedback</h3>
              </div>
            </div>
            <div className="row contact-address">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="contact-address">
                  <div className="single-contact-box">
                    <div className="contact-icon">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div className="contact-info">
                      <div className="contact-title">
                        <h5>Call Us</h5>
                      </div>
                      <div className="contact-addres">
                        <p>(00) 123 654 789</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="contact-address">
                  <div className="single-contact-box">
                    <div className="contact-icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="contact-info">
                      <div className="contact-title">
                        <h5>Email</h5>
                      </div>
                      <div className="contact-addres">
                        <p>info@yourmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="contact-address line">
                <div className="single-contact-box">
                  <div className="contact-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contact-info">
                    <div className="contact-title">
                      <h5>Location</h5>
                    </div>
                    <div className="contact-addres">
                      <p>255 Sheet, New City. USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row form-bg">
              <form action="https://formspree.io/f/myyleorq" method="POST">
                <div className="row form">
                  <div className="contact-form-title">
                    <h2>Write to us for a quote</h2>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-box">
                      <input type="text" name="Name" placeholder="Name" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-box">
                      <input type="text" name="Address" placeholder="Address" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-box">
                      <input type="email" name="Email" placeholder="E-Mail" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-box">
                      <input type="text" name="Phone" placeholder="Phone Number" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-box">
                      <textarea name="massage" id="massage" cols={30} rows={10} placeholder="Your Message Here"></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="submit-button">
                      <button type="submit">submit now</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactArea