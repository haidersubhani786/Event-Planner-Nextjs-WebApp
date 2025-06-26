import React from 'react'

const ContactArea = () => {
  return (
    <div className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center cursor-scale">
              <div className="section-sub-title">
                <h5>GET IN TOUCH</h5>
              </div>
              <div className="section-main-title cursor-scale">
                <h1>Confirmation at Marriage</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <form action="https://formspree.io/f/myyleorq" method="POST">
            <div className="row form">
              <div className="col-lg-6">
                <div className="form-box">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-box">
                  <input
                    type="Email"
                    name="Email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-box">
                  <input
                    type="text"
                    name="Address"
                    placeholder="Address"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-box">
                  <input
                    type="text"
                    name="Phone"
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-box">
                  <label>message</label>
                  <textarea
                    name="massage"
                    id="massage"
                    cols={10}
                    rows={10}
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="submit-button">
                  <button type="submit">sumit now</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactArea