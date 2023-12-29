import React from "react";
import Styles from "./Happyclients.module.css";
import LeftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";
import Card from '../Card/Card';

import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";

const Happyclients =()=>{
    return <>
        <div className={Styles.fullwrap}>
            <div className={Styles.happyclients}>
                <div className={Styles.clientcontent}>What says our happy Clients</div>
                <div>
                    <img src={LeftArrow} alt="Left Arrow" width={90} className={Styles.leftimg} />
                    <img src={RightArrow} alt="Right Arrow" width={90} className={Styles.righimg} />
                </div>
            </div>
            <div className={Styles.cardWrapper}>
                <Card contentprop={"Jane Cooper"} img_icon={client1}/>
                <Card contentprop={"Devon Lane"} img_icon={client2} active/>
                <Card contentprop={"Robert Fox"} img_icon={client3}/>
            </div>
        </div>
    </>
}

export default Happyclients;