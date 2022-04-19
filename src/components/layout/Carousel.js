import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css'
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
                <div className="allitem">
                    <img src={image1} alt="" style={{ width: '100%', height: '85vh',  position: 'relative' }} />
                    <div className="contents">
                        <h1  style={{fontSize: '5rem'}}>CARRINHO ELETRONICO</h1>
                        <p style={{fontSize: '2rem'}}>Encontre os melhores produtos disponiveis no mercado.</p>
                        <a href="#"><button class="btn">Detalhes</button></a>
                    </div>
                </div>
                <div className="allitem">
                    <img src={image2} alt="" style={{ width: '100%', height: '85vh' }} />
                    <div className="contents">
                        <h1 style={{fontSize: '5rem'}}>Produtos com Qualidade</h1>
                        <p style={{fontSize: '2rem'}}>Os produtos disponiveis na plataforma são os melhores do mercado.</p>
                        <a href="#"><button class="btn">Ver mais</button></a>
                    </div>
                </div>
                <div className="allitem">
                    <img src={image3} alt="" style={{ width: '100%', height: '85vh' }} />
                    <div className="contents">
                        <h1 style={{fontSize: '5rem'}}>Serviços</h1>
                        <p style={{fontSize: '2rem'}}>Busque e encontre os melhores serviços.</p>
                        <a href="#"><button class="btn">Ver mais</button></a>
                    </div>
                </div>
            </Slider>
        </div>
    )
};

export default Carousel;
