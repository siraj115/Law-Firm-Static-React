import React from "react";
import Styles from "./HeroDiv.module.css";
import Button from "../../Button/Button";
import Heroimg from "../../../assets/hero_img.png";
const HeroDiv = ()=>{
    return<div className={Styles.wrapper}>
        <div className={Styles.rightWrapper}>
            <div className={Styles.header}>
                You don’t have to Fight them Alone.
            </div>
            <div className={Styles.herocontent}>
                <small>
                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.
                </small>
            </div>
            <div>
                <input type="text" className={Styles.inputbox} placeholder="Enter your email address"/>
                <Button classnm="curve">Let's Talk</Button>
            </div>
        </div>
        <div className={Styles.leftWrapper}>
            <img src={Heroimg} alt="Logo" width={468} />
        </div>
    </div>
}

export default HeroDiv;