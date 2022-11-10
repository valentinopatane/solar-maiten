import React from "react";
import Banner from "../../components/Banner/Banner";
import RoomsInfo from "../../components/RoomsInfo/RoomsInfo";
import bannerImg from "../../imgs/banner.jpg";
const Rooms = () => {
    return (
        <main>
            <Banner title="Habitaciones" banner={bannerImg} />
            <RoomsInfo />
        </main>
    );
};

export default Rooms;
