import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Intro() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,


    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src="./images/intro/adidas.jpg" alt="" />
                </div>
                <div>
                    <img src="./images/intro/nike-intro.jpg" alt="" />
                </div>
                <div>
                    <img src="./images/intro/western.jpg" alt="" />
                </div>
                <div>
                    <img src="./images/intro/winter.jpg" alt="" />
                </div>
                <div>
                    <img src="./images/intro/top.jpg" alt="" />
                </div>
                <div>
                    <img src="./images/intro/bag.jpg" alt="" />
                </div>


            </Slider>
        </div>
    )
}

export default Intro