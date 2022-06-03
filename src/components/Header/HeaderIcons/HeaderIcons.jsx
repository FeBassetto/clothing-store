import React from "react";
import style from './HeaderIcons.module.css'
import { GrCart } from 'react-icons/gr'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'

const HeaderIcons = () => {
    return (
        <div className={style.icons} >
            <GrCart />
            <AiOutlineHeart />
            <AiOutlineUser />
        </div>
    )
}

export default HeaderIcons