import React from "react";
import style from './Principal.module.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom';


const Principal = () => {
    return (
        <div className={style.principal}>
            <h1><Link to='/'>Modern Home</Link></h1>
            <div className={style.principal__icons}>
                <Link to='/'><FaFacebookF /></Link>
                <Link to='/'><FaTwitter /></Link>
                <Link to='/'><AiFillInstagram /></Link>
            </div>
            <h3>Copyright  2022 | Todos direitos reservados</h3>
        </div>
    )
}

export default Principal