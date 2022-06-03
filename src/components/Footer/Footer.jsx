import React from "react";
import style from './Footer.module.css'
import Principal from "./Principal/Principal";
import ProductsFooter from "./ProductsFooter/ProductsFooter";

const Footer = () => {
    return(
        <footer className={style.footer}>
            <Principal/>
            <div className={style.footer__infos}>
                <ProductsFooter/>
            </div>
        </footer>
    )
}

export default Footer