import React from "react";
import Styles from "./Hero.module.css";
import Navbar from "../Navbar/Navbar";
import HeroDiv from "./HeroDiv/HeroDiv";

const Hero =()=>{
    return <div className={Styles.wrapper}>
        <Navbar />
        <HeroDiv />
    </div>
}

export default Hero;