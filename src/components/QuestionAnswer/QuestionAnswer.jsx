import React from 'react';
import Styles from "./QuestionAnswer.module.css";
import AddIcon from "../../assets/add_icon.png";

const QuestionAnswer = ({question, answer})=>{
    const showIcon = (!answer)?<img src={AddIcon} alt='Add Icon' width={28} />:'';
    return<div className={Styles.questionwrapper}>
            <div className={Styles.question}>{question} {showIcon} </div>
            <div className={Styles.answer}>{answer}</div>
        </div>
}

export default QuestionAnswer;