import React from "react";
import style from './ProductsSection.module.css'
import TitleSection from './../TitleSection/TitleSection';
import ProductsContent from "./ProductsContent/ProductsContent";


const ProductsSection = () => {
    return (
        <section>
            <TitleSection
                title='Produtos'
                sub='Os produtos da Modern Home sao os melhores do mercado a dez anos.
                Venha conhecer os melhores produtos do mercado na parte de mobilia'
            />
            <ProductsContent/>
        </section>
    )
}

export default ProductsSection