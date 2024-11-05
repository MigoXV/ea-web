import React from "react";
import Slider from "react-slick";
import "./Carousel.css"; // 自定义的 CSS 文件

const MySlider = () => {
  // 配置 Slider 的选项
  const settings = {
    dots: true,            // 显示底部导航点
    infinite: true,        // 无限循环
    speed: 500,            // 动画过渡时间
    slidesToShow: 1,       // 每次显示一张幻灯片
    slidesToScroll: 1,     // 每次滚动一张幻灯片
    autoplay: true,        // 自动播放
    autoplaySpeed: 3000    // 自动播放时间间隔
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide pink-slide">电赛</div>
        <div className="slide blue-slide">蓝桥杯</div>
        <div className="slide purple-slide">学生科普</div>
      </Slider>
    </div>
  );
};

export default MySlider;
