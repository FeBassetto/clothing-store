import React from "react";
import style from './ProductsSection.module.css'
import TitleSection from './../TitleSection/TitleSection';


const ProductsSection = () => {
    return (
        <section>
            <TitleSection
                title='Produtos'
                sub='Os produtos da Modern Home sao os melhores do mercado a dez anos.
                Venha conhecer os melhores produtos do mercado na parte de mobilia'
            />
        </section>
    )
}

export default ProductsSection