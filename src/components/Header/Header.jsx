import React from "react";
import style from './Header.module.css'
import SearchHeader from "./SearchHeader/SearchHeader";


const Header = () => {
    return (
        <header className={style.header} >
            <div className={style.header__top}>
                Modern Home
            </div>
            <div className={style.header__bottom} >
                <SearchHeader/>
                <dir>Home Espacos Produtos </dir>
                <dir>oi</dir>
            </div>
        </header>
    )
}

export default Header