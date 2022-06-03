import React from "react";
import BoxBanner from "../BoxBanner/BoxBanner";
import style from './HomeBanner.module.css'

const HomeBanner = () => {


    return (
        <section className={style.banner}>
            <BoxBanner
                title='Ceramica de nova linhagem'
                description='Venha conhecer nossa nova tecnologia em ceramicas.
                    Mais resistentes que as ceramicas comuns, esta ceramica vai garantir uma maior
                    durabilidade e maior resistencia, durando cerca de 8 anos mais que as ceramicas comuns.
                    Alem de ter uma otima aparencia.'
                    type='black'

            />
        </section>
    )
}

export default HomeBanner