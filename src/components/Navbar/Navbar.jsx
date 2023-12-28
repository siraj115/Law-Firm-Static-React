import React from "react";
import Styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";

const Navbar = () =>{
    return <>
        <nav className={Styles.navbar}>
            <a href="/">
                <Logo/>
            </a>
            <Menu />
            <Button>Contact Now</Button>
        </nav>
    </>
}

export default Navbar;