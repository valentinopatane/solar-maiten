import React from "react";
import Banner from "../../components/Banner/Banner";
import ServicesInfo from "../../components/ServicesInfo/ServicesInfo";
import Spa from "../../components/Spa/Spa";
import bannerImg from "../../imgs/spa.jpg";

const Services = () => {
    return (
        <main>
            <Banner title="Servicios" banner={bannerImg} />
            <Spa />
            <ServicesInfo />
        </main>
    );
};

export default Services;
