import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image1 from '../../img/front.jpg';
import image2 from '../../img/home_img2.jpg';
import image3 from '../../img/home_img3.jpg';

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
  
      };
  return (
    <div>
        <Slider {...settings}>
            <div>
                <img src={image1} alt="" style={{width:'100%', height:'85vh'}} />
            </div>
            <div>
                <img src={image2} alt="" style={{width:'100%', height:'85vh'}}/>
            </div>
            <div>
                <img src={image3} alt="" style={{width:'100%', height:'85vh'}}/>
            </div>
        </Slider>
    </div>
  )
};

export default Carousel;
