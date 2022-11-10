import React, { useEffect, useRef } from "react";

const CardSlider = ({ cards }) => {
    const cardsRef = useRef();

    useEffect(() => {
        const slider = cardsRef.current;
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener("mousedown", (e) => {
            isDown = true;
            slider.classList.add("activeCards");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener("mouseleave", () => {
            isDown = false;
            slider.classList.remove("activeCards");
        });

        slider.addEventListener("mouseup", () => {
            isDown = false;
            slider.classList.remove("activeCards");
        });

        slider.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX;
            console.log(x);
            slider.scrollLeft = scrollLeft - walk;
        });
    }, []);
    return (
        <div className="cardsContainer" ref={cardsRef}>
            {cards.map((card) => (
                <div className="cardContainer" key={card.title}>
                    <div>
                        <img src={card.img} alt="slide" loading="lazy"></img>
                    </div>
                    <h6>{card.title}</h6>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CardSlider;
