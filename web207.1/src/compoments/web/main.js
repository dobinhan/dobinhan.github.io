import YouTube from 'react-youtube';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {Pagination,Navigation} from 'swiper/core';


SwiperCore.use([Pagination,Navigation]);

const Main = () => {
  const ytb = {
    height: `500`,
    width: `1000`,
    autoplay:1,
  }
  const slide={
    "type": "progressbar",
    width:`300`,
    height:`300`
  }
  return (
    <>
      <div className="main">
        <h1>Sale Tháng 1</h1>
        <div className="left2">
          <ul>
            <li>
              <img src="/anhgiay/anh1.jpg" width="400px" height="400px" />
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <br />
            <h1>Adidas Superstar</h1>
            Đôi giày Superstar cũng là đôi giày adidas đầu tiên được cộng đồng trượt
            ván đón nhận. Phiên bản này vẫn đúng với phong cách ngón chân vỏ biểu
            tượng đã mạnh mẽ trong năm thập kỷ và đếm. Một lớp da cao cấp phía trên,
            cupole chunky và bling vàng lá cho phép bạn trượt như một ngôi sao.
            <br />
            <h3>
              <strike>Giá : 1.500.000</strike>
            </h3>
            <h2>
              <span style={{ color: "red" }}> Giá : 1.100.000</span>
            </h2>
            <h2>
              <a href="dangnhap.html" style={{ color: "black" }}>
                Nhận code giảm giá
              </a>
            </h2>
          </ul>
        </div>
        <h1>Sản phẩm mới</h1>
        {/* <video width={1000} height="auto" controls autoPlay>
      <source src="video/video1.mp4" type="video/mp4" />
    </video> */}
        <YouTube
          videoId="pzVG8RTYDHg"
          className="Video"
          opts={ytb}
        />
      </div>
      <h1>Sản phẩm bán chạy</h1>
      <div className="xemgiay">
        <h1>Album hot tháng 1</h1>
        Rất nhiều mẫu mới ra áp dụng chương trình đăng nhập nhận gift code!!!
        <br />
        {/* <h1><a href="giay.html"> xem ngay</a></h1>  */}
      </div>
      <Swiper pagination={slide} navigation={true} className="mySwiper">
        <SwiperSlide><img src="/anhgiay/anh1.jpg"/></SwiperSlide>
        <SwiperSlide><img src="/anhgiay/anh2.jpg"/></SwiperSlide>
        <SwiperSlide><img src="/anhgiay/anh3.jpg"/></SwiperSlide>
        <SwiperSlide><img src="/anhgiay/anh4.jpg"/></SwiperSlide>
        <SwiperSlide><img src="/anhgiay/anh5.jpg"/></SwiperSlide>
        <SwiperSlide><img src="/anhgiay/anh6.jpg"/></SwiperSlide>
        <SwiperSlide><img src="/anhgiay/anh7.jpg"/></SwiperSlide>
        <SwiperSlide><img src="/anhgiay/anh8.jpg"/></SwiperSlide>
        <SwiperSlide><img src="/anhgiay/anh9.jpg"/></SwiperSlide>

      </Swiper>
      {/* <div className="slide">
    <div className style={{ maxWidth: 300 }}>
      <img className="mySlides" src="ảnh/anhgiay1" style={{ width: 1000 }} />
      <img className="mySlides" src="ảnh/anhgiay6" style={{ width: 1000 }} />
      <img className="mySlides" src="ảnh/anhgiay7" style={{ width: 1000 }} />
      <img className="mySlides" src="ảnh/anhgiay8" style={{ width: 1000 }} />
      <img className="mySlides" src="ảnh/anhgiay9" style={{ width: 1000 }} />
      <img className="mySlides" src="ảnh/anhgiay4" style={{ width: 1000 }} />
    </div>
  </div> */}

    </>
  )

}
export default Main;