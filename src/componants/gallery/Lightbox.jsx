import React, { useState, useEffect } from 'react';
import './gallery.scss';

const Lightbox = ({ images, isOpen, closeLightbox, currentIndex, setCurrentIndex, isChecked }) => { 
  
  const [isVisible, setIsVisible] = useState(false);  

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // التعامل مع أحداث الكيبورد
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' || e.code === 'Space') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('lightbox')) {
      closeLightbox();  
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      window.addEventListener('keydown', handleKeyDown); 
    } else {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);  

  return (
    isOpen && (
      <div className={`lightbox ${isVisible ? 'lightbox_visible' : 'lightbox_unvisible'}`} onClick={handleClickOutside}>
        <div className="lightbox_content">
          <button className="close" onClick={closeLightbox}><i class="fa-solid fa-xmark"></i></button>
          <img className="lightbox-image" 
            src={images[currentIndex].src} alt={`Image ${currentIndex + 1}`} />
            <h4> {`Image ${currentIndex + 1}`} </h4>

          
          <button className={`prev ${isChecked ? 'btn_rtl ' : 'btn_ltr '}`} onClick={handlePrevious}>
            {isChecked ? <i class="fa-solid fa-chevron-right"></i> : <i class="fa-solid fa-chevron-left"></i>}
          </button>
          
          <button className={`next ${isChecked ? 'btn_ltr' : 'btn_rtl'}`} onClick={handleNext}>
            {isChecked ? <i class="fa-solid fa-chevron-left"></i>  : <i class="fa-solid fa-chevron-right"></i>}
          </button>
          
        </div>
      </div>
    )
  );
};

export default Lightbox;
