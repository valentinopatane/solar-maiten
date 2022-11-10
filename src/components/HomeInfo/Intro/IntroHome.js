import React from "react";
import BlockIcons from "./Blocks/BlockIcons";
import BlockData from "./Blocks/Block01";

const IntroHome = () => {
    return (
        <section className="homeInfo">
            <BlockData />
            <BlockIcons />
        </section>
    );
};

export default IntroHome;
