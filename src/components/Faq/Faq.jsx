import React from "react";
import Styles from "./Faq.module.css";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";

const Faq = ()=>{
    return <div className={Styles.fullwrap}>
                <div className={Styles.faq}>
                    <div>Faq</div>
                </div>
                <div className={Styles.cardWrapper}>
                   <div className={Styles.leftwrapper}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                   </div>
                   <div className={Styles.rightWrapper}>
                        <QuestionAnswer question="Do I need a personal injury report?" answer="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."/>
                        <QuestionAnswer question="How much is my case worth?" />
                        <QuestionAnswer question="What should I do right after car accidect" />
                        <QuestionAnswer question="How much is my case worth?" />
                   </div>
                </div>
            </div>
}

export default Faq;