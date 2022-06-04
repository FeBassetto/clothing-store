import React from "react";
import style from './ProductsContent.module.css'
import BoxDescription from './BoxDescription/BoxDescription';

const ProductsContent = () => {
    return (
        <div className={style.content}>
            <div className={style.content__bathroom}>
                <BoxDescription
                    title='Bathroom Tiles'
                    descritpion='Estilize seu banheiro com o melhor'
                />
            </div>
            <div className={style.content__marble}>
                <BoxDescription
                    title='Maple'
                    descritpion='Conheca nosso novo piso'
                />
            </div>

            <div className={style.content__outdoor}>
                <BoxDescription
                    title='Outdoor Flooring'
                    descritpion='Pisos resistentes para locais abertos'
                />
            </div>

            <div className={style.content__kitchen}>
                <BoxDescription
                    title='Kitchen Interior'
                    descritpion='Pisos extraordinarios para cozinha'
                />
            </div>
        </div>
    )
}

export default ProductsContent