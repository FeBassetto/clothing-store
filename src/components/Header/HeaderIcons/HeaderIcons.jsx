import React from "react";
import style from './HeaderIcons.module.css'
import { GrCart } from 'react-icons/gr'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { Link } from "react-router-dom";

const HeaderIcons = () => {
    return (
        <div className={style.icons} >
            <Link to='cart' ><GrCart /></Link>
            <Link to='favorites' ><AiOutlineHeart /></Link>
            <Link to='user' ><AiOutlineUser /></Link>
        </div>
    )
}

export default HeaderIcons