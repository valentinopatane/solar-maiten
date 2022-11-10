import React from "react";
import Banner from "../../components/Banner/Banner";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import bannerImg from "../../imgs/solar-invierno.jpg";
const Contact = () => {
    return (
        <main>
            <Banner title="Contacto" banner={bannerImg} />
            <ContactInfo />
        </main>
    );
};

export default Contact;
