import React from "react";
import { Link } from "react-router-dom";
import style from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={style.navigation} >
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/spaces'>Espaços</Link>
                </li>

                <li>
                    <Link to='/products'>Produtos</Link>
                </li>

                <li>
                    <Link to='/rooms'>Salas</Link>
                </li>

                <li>
                    <Link to='/companies'>Companhia</Link>
                </li>

                <li>
                    <Link to='/media'>Midia</Link>
                </li>

                <li>
                    <Link to='/contact'>Contato</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation