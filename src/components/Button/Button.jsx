import React, { Children } from "react";
import Styles from "./Button.module.css"

const Button =({children, classnm=''})=>{
    if(classnm=='curve')
        return <button className={Styles.buttoncurve}>{children}</button>
    else
        return <button className={Styles.button}>{children}</button>
}

export default Button;