import React from "react";
import style from './BoxDescription.module.css'


const BoxDescription = ({title, descritpion}) => {
    return(
        <div className={style.box}>
            <h1>{title}</h1>
            <h2>{descritpion}</h2>
        </div>
    )
}

export default BoxDescription