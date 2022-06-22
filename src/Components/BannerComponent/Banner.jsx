import React from "react";
import banner from "../../Assets/banner.png";
import "./Banner.scss";


const Banner = () => {
    return (
        //banner Start here

        <div className="grid-wrapper">
            <div className="banner-txt">
                <h1>Women’s Outerwear</h1>
                <hr className="underline"></hr>
            </div>
            <div className="banner-img">
                <img src={banner} alt="Women Clothing" className="bannerimg" />
            </div>
        </div>

        //banner End here

    );
}

export default Banner;