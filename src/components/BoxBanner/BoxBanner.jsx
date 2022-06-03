import React from "react";
import style from './BoxBanner.module.css'
import { Link } from "react-router-dom";



const BoxBanner = (props) => {
    return (
        <div className={`${style.banner__box} ${props.type === 'black' ? style.banner__box___black : style.banner__box___white}`}>
            <h1>{props.title}</h1>
            <h2>
                {props.description}
            </h2>
            <Link to='/'>
                <button>
                    Veja mais
                </button>
            </Link>
        </div>
    )
}

export default BoxBanner