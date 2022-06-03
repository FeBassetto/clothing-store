import React from "react";
import style from './Footer.module.css'
import Principal from "./Principal/Principal";

const Footer = () => {
    return(
        <footer className={style.footer}>
            <Principal/>
        </footer>
    )
}

export default Footer