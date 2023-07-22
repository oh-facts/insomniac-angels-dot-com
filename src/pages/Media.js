import React, { useState } from 'react';
import image1 from '../assets/balloon.png';
import image2 from '../assets/earth1.jpg';
import image3 from '../assets/earth2.jpg';

import '../styles/pages/Media.css'

const images = [image1, image2, image3, image1, image2, image1, image2, image3];

const Media = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const showNextImage = (event) => {
    event.stopPropagation();
    const nextIndex = (currentImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const showPreviousImage = (event) => {
    event.stopPropagation();
    const previousIndex = (currentImageIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex]);
    setCurrentImageIndex(previousIndex);
  };

  return (

    <>
      <h1> Under construction </h1>
      <div className="media-grid">

        {images.map((image, index) => (
          <div className="media-item" key={index} onClick={() => openLightbox(image, index)}>
            <img src={image} alt={`${index + 1}`} />
          </div>
        ))}
        {lightboxOpen && (
          <div className="lightbox-container" onClick={closeLightbox}>
            <div className="lightbox-content">
              <img className="lightbox-image" src={selectedImage} alt="Selected" />
              <button className="previous-button" onClick={(event) => showPreviousImage(event)} />
              <button className="next-button" onClick={(event) => showNextImage(event)} />
            </div>
          </div>
        )}
      </div>
    </>

  );
};

export default Media;
