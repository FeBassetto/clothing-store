import React from "react";
import ContactFooter from "./ContactFooter/ContactFooter";
import style from './Footer.module.css'
import Principal from "./Principal/Principal";
import ProductsFooter from "./ProductsFooter/ProductsFooter";
import RoomsFooter from "./RoomsFooter/RoomsFooter";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Principal />
            <div className={style.footer__infos}>
                <ProductsFooter />
                <RoomsFooter />
                <ContactFooter />
            </div>
            <h3 className={style.footer__creator}>Criado por <a href="https://github.com/FeBassetto">Felipe Bassetto</a></h3>
        </footer>
    )
}

export default Footer