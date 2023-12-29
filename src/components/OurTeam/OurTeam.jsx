import React from "react";
import Styles from "./OurTeam.module.css";
import Team1 from "../../assets/team1.png";
import Team2 from "../../assets/team2.png";
import Team3 from "../../assets/team3.png";
import Team4 from "../../assets/team4.png";
import Team5 from "../../assets/team5.png";
import Team6 from "../../assets/team6.png";
import TeamCard from "../TeamCard/TeamCard";
const OurTeam =()=>{
    return  <div className={Styles.fullwrap}>
                <div className={Styles.ourteam}>
                    <div>Our Team</div>
                </div>
                <div className={Styles.cardWrapper}>
                    <TeamCard img_icon={Team1} name="Daniel Def" cases="301"/>
                    <TeamCard img_icon={Team2} name="Sanole" cases="850" active/>
                    <TeamCard img_icon={Team3} name="Cesforila" cases="470" />
                    <TeamCard img_icon={Team4} name="Collen" cases="180" />
                    <TeamCard img_icon={Team5} name="Haldone" cases="180" />
                    <TeamCard img_icon={Team6} name="Nik Joe" cases="350" />
                </div>
            </div>
}

export default OurTeam;