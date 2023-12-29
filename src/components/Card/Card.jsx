import React from "react";
import Styles from "./Card.module.css";
import Button from "../Button/Button";
const Card = ({contentprop, img_icon, readmore, active})=>{
    const setClass = (!active)?Styles.wrapper:Styles.wrapperActive;
    return<>
        <div className={setClass}>
            <div className={Styles.imageicon}><img src={img_icon} alt="Gift Icon" width={80}/></div>
            <div className={Styles.content}>{contentprop}</div>
            <div className={Styles.textcontent}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</div>
            {(readmore) ? <div className={Styles.button}><Button classnm="curve">Read More</Button></div>:''}
        </div>
    </>
}

export default Card;