import React from "react";
import Styles from "./Newsletter.module.css";
import Button from "../Button/Button";

const Newsletter =()=>{
    return<>
        <div className={Styles.fullwrap}>
            <div className={Styles.NewsletterWrap}>
                <div className={Styles.content}>
                        Subscribe Our Newsletter
                </div>
                <div>
                    <input type="text" className={`${Styles.textbox} ${Styles.borderleft}`} placeholder="Name" />
                    <input type="text" className={`${Styles.textbox}`} placeholder="Enter your Email" />
                    <Button classnm="news">Send</Button>
                </div>
            </div>
        </div>
    </>
}

export default Newsletter;