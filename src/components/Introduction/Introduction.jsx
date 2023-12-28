import React from "react";
import Styles from "./Introduction.module.css";

const Introduction = ()=>{
    return <>
        <div className={Styles.wrapper}>
            <div className={Styles.leftWrapper}>
                <div>Let’s Introduce Ourself</div>
            </div>
            <div className={Styles.rightWrapper}>
                <div className={Styles.rightheading}>Criminal Lawyer</div>
                <div className={Styles.rightcontent}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.</div>
            </div>
        </div>
    </>
}

export default Introduction;