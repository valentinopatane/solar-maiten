import React from "react";
const Banner = ({ title, banner }) => {
    return (
        <header className="bannerContainer">
            <img src={banner}></img>
            <div>
                <h1>{title}</h1>
            </div>
        </header>
    );
};

export default Banner;
