import React from 'react';
import Styles from "./TeamCard.module.css";

const TeamCard =({img_icon, active, name, cases})=>{
    const setClass = (!active)?Styles.cardWrapper:Styles.cardWrapperActive;
    return <>
                <div className={setClass}>
                    <div>
                        <img src={img_icon} width={68} alt="team" />
                    </div>
                    <div className={Styles.rightwrapper}>
                        <div className={Styles.teamname}>{name}</div>
                        <div className={Styles.teamcase}>{cases} Cases</div>
                    </div>
                </div>
            </>
}

export default TeamCard;