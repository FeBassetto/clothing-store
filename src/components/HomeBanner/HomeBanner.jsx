import React from "react";
import { Link } from "react-router-dom";
import style from './HomeBanner.module.css'

const HomeBanner = () => {


    return (
        <div className={style.banner}>
            <div className={style.banner__box}>
                <h1>Ceramica de nova linhagem</h1>
                <h2>Venha conhecer nossa nova tecnologia em ceramicas.
                    Mais resistentes que as ceramicas comuns, esta ceramica vai garantir uma maior
                    durabilidade e maior resistencia, durando cerca de 8 anos mais que as ceramicas comuns.
                    Alem de ter uma otima aparencia.
                    </h2>
                <Link to='/'>
                    <button>
                        Veja mais
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HomeBanner