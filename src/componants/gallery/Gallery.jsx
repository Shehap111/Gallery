import React, {useState} from 'react'
import './gallery.scss'
import Lightbox from './Lightbox'; 
import Intro from '../intro_sections/Intro'; 
import LazyLoad from 'react-lazy-load';

  const images = [
  { src: require('../../images/img1.jpg') , alt: 'img1' },
  { src: require('../../images/img2.jpg') , alt: 'img2' },
  { src: require('../../images/img3.jpg') , alt: 'img3' },
  { src: require('../../images/img4.jpg') , alt: 'img4' },
  { src: require('../../images/img5.jpg') , alt: 'img5' },
  { src: require('../../images/img6.jpg') , alt: 'img6' },
  { src: require('../../images/img7.jpg') , alt: 'img7' },
  { src: require('../../images/img8.jpg') , alt: 'img8' },
  { src: require('../../images/img9.jpg') , alt: 'img9' },
  { src: require('../../images/img10.jpg') , alt: 'img10' },
  { src: require('../../images/img11.jpg') , alt: 'img11' },
  { src: require('../../images/img12.jpg') , alt: 'img12' },
]

const Gallery = ({isChecked , setIsChecked }) => {



  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);  
    setIsLightboxOpen(true); 
  };

  // دالة لإغلاق المودال
  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };



  return (

      <>
          <Intro/>    
<section className='Gallery'>
<div className="container">
<div className="row">

    {
        images.map((image, index) => (
            <div className="col-lg-3 col-md-6" key={image.alt}>
                <div className="gallery-item"   onClick={() => openLightbox(index)}> 
    <LazyLoad    >
                <img className='' src={image.src} alt={`Image ${index + 1}`} loading="lazy" />
    </LazyLoad>                
                </div>
            </div>


            
        ))}
                  
                  
    <Lightbox 
        images={images} 
        isOpen={isLightboxOpen} 
        closeLightbox={closeLightbox} 
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex} 
        isChecked={ isChecked }              
    />

                  
</div>          
</div>      
</section>
      </>



  )
}

export default Gallery