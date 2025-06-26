"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  "gallery-thu.png",
  "gallery-thu2.png",
  "gallery-thu3.png",
  "gallery-thu4.png",
  "gallery-thu5.png",
  "gallery-thu6.png",
  "gallery-thu7.png",
  "gallery-thu8.png",
];

const GalleryArea = () => {
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const handleIconClick = (img: string) => {
    setPreviewImg(img);
  };

  const handleClose = () => {
    setPreviewImg(null);
  };

  return (
    <div className="gallery-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center cursor-scale">
              <div className="section-sub-title">
                <h5>Gallery of Love</h5>
              </div>
              <div className="section-main-title cursor-scale">
                <h1>Picture Perfect Moments</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery__wrapper">
        <div className="container-fluid">
          <div className="row">
            {galleryImages.map((img, idx) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={img}>
                <div className="gallery__thumb-box">
                  <div className="gallery__thumb">
                    <a
                      className="popup-image"
                      href={`/assets/images/home-1/${img}`}
                    >
                      <Image
                        className="w-100"
                        src={`/assets/images/home-1/${img}`}
                        alt=""
                        width={400}
                        height={400}
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <div
                        className="gallery__thumb-icon"
                        style={{ cursor: 'pointer' }}
                        onClick={e => {
                          e.preventDefault();
                          handleIconClick(img);
                        }}
                      >
                        <Image
                          src="/assets/images/home-1/gallery-icon.png"
                          alt="icon"
                          width={30}
                          height={20}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {previewImg && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <button
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 32,
                height: 32,
                fontSize: 20,
                cursor: 'pointer',
                zIndex: 10000,
              }}
              aria-label="Close preview"
            >
              &times;
            </button>
            <Image
              src={`/assets/images/home-1/${previewImg}`}
              alt="Preview"
              width={800}
              height={800}
              style={{ maxWidth: '80vw', maxHeight: '80vh', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryArea;