import React from 'react';
import Styles from './Chooseus.module.css';
import Card from '../Card/Card';

import GiftIcon from "../../assets/Gift_icon.png";

const Chooseus =()=>{
    return <div className={Styles.fullwrap}>
        <div className={Styles.chooseus}>
            <div>Why Choose us?</div>
        </div>
        <div className={Styles.cardWrapper}>
            <Card contentprop={"98% Success Rate"} img_icon={GiftIcon} readmore/>
            <Card contentprop={"100% Success Rate"} img_icon={GiftIcon} readmore active/>
            <Card contentprop={"100% Success Rate"} img_icon={GiftIcon} readmore/>
        </div>
    </div>
}

export default Chooseus;