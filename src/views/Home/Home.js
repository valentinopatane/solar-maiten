import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import HomeInfo from "../../components/HomeInfo/HomeInfo";
import image1 from "../../imgs/foto11.jpg";
import image2 from "../../imgs/foto7.jpg";
import image3 from "../../imgs/foto12.jpg";
const Home = () => {
    const slides = [
        {
            img: image1,
            title: "Ambientes cálidos y equipados",
            description: "Privacidad y silencio para momentos unicos",
        },
        {
            img: image2,
            title: "Tus vacaciones merecen algo más",
            description: "Relajáte y disfrutá solo o en pareja.",
        },
        {
            img: image3,
            title: "Espacios verdes, piscina, spa",
            description:
                "Poder pasar todo el día en el complejo es una forma de descansar",
        },
    ];
    return (
        <main>
            <Carousel slides={slides} />
            <HomeInfo />
        </main>
    );
};

export default Home;
