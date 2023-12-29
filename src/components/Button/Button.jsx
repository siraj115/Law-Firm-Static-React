import React, { Children } from "react";
import Styles from "./Button.module.css"

const Button =({children, classnm=''})=>{
    if(classnm==='curve')
        return <button className={Styles.buttoncurve}>{children}</button>
    else if(classnm==='news')
        return <button className={Styles.buttonnews}>{children}</button>
    else
        return <button className={Styles.button}>{children}</button>
}

export default Button;