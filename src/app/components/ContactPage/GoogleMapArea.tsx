import React from 'react';

const GoogleMapArea = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27202.66335579812!2d74.3571456!3d31.5424768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1751008541260!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapArea;