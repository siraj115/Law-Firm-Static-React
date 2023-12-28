import React from "react";
import Styles from "./Menu.module.css";

const Menu = ()=>{
    return <> 
        <div className={Styles.wrapper}>
            <div>Home</div>
            <div>Attorneys</div>
            <div>Practice Areas</div>
            <div>About Us</div>
        </div>
    </>
}

export default Menu;