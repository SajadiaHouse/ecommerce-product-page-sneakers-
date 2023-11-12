
import React, { useState } from 'react';

import ImgageModal from './ImgageModal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageBox = () => {
  const images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
  ];
  const [showModal, setshowModal] = useState(false)
 
  const handleOpenModal = () => {
    setshowModal(true);
  }
  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    customPaging: function (i) {
        // custom dots with thumbnail images
        return (
                <img src={images[i]} alt={`images-${i}`} className="thumbnail hover:opacity-50 hover:border-1 focus:border-primary-900" />
        );
    },
    responsive: [
      {
        breakpoint: 775, // Adjust this breakpoint based on your design
        settings: {
          dots: false, // Show dots on small devices
        },
      },
    ],
};

  return (
    <>
      <div className='px-0 w-full md:p-14 md:w-[500px] md:h-auto'>
        <div>
          <Slider {...settings}>
            {images.map((e, index) => (
              <img src={e} alt="" key={index} className='md:rounded-xl cursor-pointer' onClick={handleOpenModal} />
            ))}
          </Slider>
        </div>
      </div>
      <ImgageModal images={images} showModal={showModal} setshowModal={setshowModal} settings={settings} />

    </>
  );
};

export default ImageBox;