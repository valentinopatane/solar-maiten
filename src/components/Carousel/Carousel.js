import React, { useEffect, useState } from "react";
const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const TTN_TIME = 10000;
    useEffect(() => {
        setTimeout(() => {
            if (currentIndex === slides.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }, TTN_TIME);
    }, [currentIndex]);

    return (
        <div className="carouselContainer">
            {slides.map((slide) => {
                const index = slides.indexOf(slide);

                return index === currentIndex ? (
                    <div className="slide activeSlide" key={currentIndex}>
                        <div className="slideImgContainer">
                            <img src={slide.img}></img>
                        </div>
                        <div className="slideInfoContainer">
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ) : null;
            })}
        </div>
    );
};

export default Carousel;
