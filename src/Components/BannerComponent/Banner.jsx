import React, { Component } from "react";
import './Banner.scss';
import banner from '../../Assets/banner.png';

class Banner extends React.Component{
    render(){
        return(
            <section className="wrapper">
                <div className="banner-section">
                    <div className="banner-heading">
                        <h1>Women's Outerwear</h1>
                        <hr class="underline"></hr>
                    </div>
                    <div className="banner-image">
                        <img src={banner} className="Banner-image" alt="Banner" />
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;