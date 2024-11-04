import React from 'react';
import Slider from 'react-slick';
import { useColorMode } from '@docusaurus/theme-common';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';  // 自定义样式

const Carousel = () => {
    const { colorMode } = useColorMode();  // 获取当前模式 (light 或 dark)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <div className={`carousel-container ${colorMode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Slider {...settings}>
                <div style={{ height: '50vh', backgroundColor: 'pink' }}><h3>Slide 1</h3> <br />233</div>
                <div className="carousel-slide yellow"><h3>Slide 2</h3></div>
                <div className="carousel-slide blue"><h3>Slide 3</h3></div>
            </Slider>
        </div>
    );
};

export default Carousel;
