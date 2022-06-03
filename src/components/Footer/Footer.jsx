import React from "react";
import style from './Footer.module.css'
import Principal from "./Principal/Principal";
import ProductsFooter from "./ProductsFooter/ProductsFooter";
import RoomsFooter from "./RoomsFooter/RoomsFooter";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Principal />
            <div className={style.footer__infos}>
                <ProductsFooter />
                <RoomsFooter />
            </div>
        </footer>
    )
}

export default Footer