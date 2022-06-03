import React from "react";
import style from './Header.module.css'
import Navigation from "./Navigation/Navigation";
import SearchHeader from "./SearchHeader/SearchHeader";
import HeaderIcons from './HeaderIcons/HeaderIcons';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className={style.header} >
            <div className={style.header__top}>
                <Link to='/'>Modern Home</Link>
            </div>
            <div className={style.header__bottom} >
                <SearchHeader />
                <Navigation />
                <HeaderIcons />
            </div>
        </header>
    )
}

export default Header