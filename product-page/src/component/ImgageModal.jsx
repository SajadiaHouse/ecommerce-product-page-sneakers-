
// Summary Comment: This is a React component that displays a modal with a slider of images passed as props.

import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgageModal = ({ images, showModal, setshowModal, settings }) => {


    // function to handle closing modal
    const handleClick = () => {
        setshowModal(false);
    };

    // if showModal is false, return null
    if (!showModal) return null;

    // return modal with Slider component
    return (
        <>
            <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex justify-center items-center">
                <div className='w-[400px]'>
                    <img ssrc="./images/icon-close.svg"
                        style={{ fill: 'orange', width: '16px', height: '16px' }}
                        className='h-4 w-4 ml-auto mb-2 -mr-2 cursor-pointer'
                        alt=""
                        onClick={handleClick} />
                    <Slider {...settings}>
                        {images.map((e, index) => (
                            <img src={e} alt="" key={index} className='rounded-xl cursor-pointer' />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default ImgageModal;