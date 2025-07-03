"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setData } from '@/store/AuthReducers'

const Verify = () => {
  const dispatch = useDispatch()
  const [url, setUrl] = useState('')
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await fetch('/api/data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url }),
            });
            const data = await response.json();
            
            console.log(data)
            if (response.ok) {
              dispatch(setData(data))
                router.push('/home'); 
            } else {
                console.error(data.message);
                setError(data.message)
            }
        } catch (err: unknown) {
            console.error('Error:', err);
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <>
      <style jsx>{`
        .gradient-bg {
          background-image: url('/assets/images/verify.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          overflow: hidden;
        }
      
        
        .gradient-bg > * {
          position: relative;
          z-index: 2;
        }
        
      
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        
        .form-container {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 3rem;
          transition: all 0.3s ease;
        }
        
        .form-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }
        
        .input-enhanced {
          transition: all 0.3s ease;
          border: 2px solid #dee2e6;
          background: rgba(255, 255, 255, 0.95);
        }
        
        .input-enhanced:focus {
          border-color: #333333;
          box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.15);
          background: rgba(255, 255, 255, 1);
          transform: translateY(-2px);
        }
        
        .input-icon {
          background: linear-gradient(135deg, #000000 0%, #333333 100%);
          color: white;
          border: none;
          transition: all 0.3s ease;
        }
        
        .btn-enhanced {
          background: linear-gradient(135deg, #000000 0%, #333333 100%);
          border: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .btn-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn-enhanced:hover::before {
          left: 100%;
        }
        
        .btn-enhanced:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          background: linear-gradient(135deg, #333333 0%, #000000 100%);
        }
        
        .btn-enhanced:active {
          transform: translateY(0);
        }
        
        .error-message {
          background: linear-gradient(135deg, #333333, #000000);
          color: white;
          padding: 12px 20px;
          border-radius: 15px;
          margin-bottom: 20px;
          border: 1px solid #666666;
          animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .contact-btn {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(15px);
          transition: all 0.3s ease;
          z-index: 3;
        }
        
        .contact-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.6);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }
        
        .title-enhanced {
          color: #ffffff;
          text-shadow: 0 2px 15px rgba(0, 0, 0, 0.8), 0 4px 25px rgba(0, 0, 0, 0.5);
          z-index: 3;
        }
        
        .subtitle-enhanced {
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7);
          z-index: 3;
        }
    
        @media (max-width: 768px) {
          .form-container {
            padding: 2rem 1.5rem;
            margin: 1rem;
            border-radius: 15px;
          }
        }
      `}</style>
      
      <div
        className="container-fluid d-md-flex p-0"
        style={{ height: "100vh" }}
      >
        <div
          className="d-none d-md-flex flex-column justify-content-center align-items-center col-md-6 p-0 text-white position-relative gradient-bg"
        >
          <h1 className="title-enhanced fw-bold display-4 mb-3 text-center">Event Planner</h1>
          <p className="subtitle-enhanced fs-5 mb-4 text-center px-4">Turning Moments Into Unforgettable Memories</p>
          <a
            href="https://axixtechnologies.com/contact/"
            className="contact-btn btn text-white mt-3 fw-semibold px-5 py-3 rounded-pill text-decoration-none"
          >
            Contact Us
          </a>
          <div className="circle1 position-absolute"></div>
          <div className="circle2 position-absolute"></div>
          <div className="circle3 position-absolute"></div>
          <div className="circle4 position-absolute"></div>
        </div>
        
        <div className="d-flex justify-content-center align-items-center col-md-6 bg-white position-relative">
          <div className="form-container w-75">
            <div className="text-center mb-4">
              <h5 className="text-dark fw-bold mb-2 fs-4">Hello Again!</h5>
              <p className="text-muted mb-4">Welcome back, let's verify your website</p>
            </div>
            
            {error && (
              <div className="error-message text-center">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-4">
                <span className="input-group-text input-icon rounded-start-pill px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </span>
                <input
                  type="url"
                  className="form-control input-enhanced rounded-end-pill py-3 px-4"
                  id="url"
                  placeholder="Enter your website URL"
                  name="url"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-enhanced w-100 text-white py-3 rounded-pill fw-semibold fs-6"
                disabled={isLoading || !url.trim()}
              >
                {isLoading ? (
                  <>
                    <span className="spinner me-2"></span>
                    Verifying...
                  </>
                ) : (
                  'Verify Website'
                )}
              </button>
            </form>
            
            <div className="text-center mt-4">
              <small className="text-muted">
                We'll verify your website's authenticity and redirect you to the dashboard
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Verify