import React from "react";
const Banner = ({ title, banner }) => {
    return (
        <header className="bannerContainer">
            <img src={banner} alt="banner" loading="lazy"></img>
            <div>
                <h1>{title}</h1>
            </div>
        </header>
    );
};

export default Banner;
