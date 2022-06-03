import React from "react";
import style from './Header.module.css'
import Navigation from "./Navigation/Navigation";
import SearchHeader from "./SearchHeader/SearchHeader";


const Header = () => {
    return (
        <header className={style.header} >
            <div className={style.header__top}>
                Modern Home
            </div>
            <div className={style.header__bottom} >
                <SearchHeader />
                <Navigation />
                <div className={style.qualquer}>oi</div>
            </div>
        </header>
    )
}

export default Header