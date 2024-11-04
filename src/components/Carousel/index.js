import React from 'react';
import Slider from 'react-slick';

const SliderComponent = () => {
    const settings = {
        dots: true,                   // 显示下方小圆点
        infinite: true,               // 无限循环
        speed: 500,                   // 轮播速度
        slidesToShow: 1,              // 每次显示的幻灯片数
        slidesToScroll: 1,            // 每次滚动的幻灯片数
        autoplay: true,               // 自动播放
        autoplaySpeed: 5000,          // 自动播放的间隔，5秒
        arrows: false                 // 隐藏左右箭头
    };

    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <Slider {...settings}>
                <div>
                    <h3>Slide 1</h3>
                </div>
                <div>
                    <h3>Slide 2</h3>
                </div>
                <div>
                    <h3>Slide 3</h3>
                </div>
            </Slider>
        </div>
    );
};

export default SliderComponent;
