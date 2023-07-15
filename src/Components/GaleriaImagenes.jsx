import React, { useState } from 'react';
import {images} from './Images'

const GaleriaImagenes = ({ images }) => {
    
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images?.map((image) => (
        <img
          key ={image.key}
          src={image.src}
          alt={image.alt}
          onClick={() => handleImageClick(image)}
        />
      ))}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img src={selectedImage.src} alt={selectedImage.alt} />
        </div>
      )}
    </div>
  );
};

export default GaleriaImagenes;
