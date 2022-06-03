import React from "react";
import ListFooter from "../ListFooter/ListFooter";

const ProductsFooter = () => {

    const productsList = [
        { text: 'Sand Stone', link: '/products/12' },
        { text: 'Stone', link: '/products/12' },
        { text: 'Cement', link: '/products/12' },
        { text: 'Soft Stone', link: '/products/12' }
    ]

    return (
        <ListFooter title='Produtos' contents={productsList} />
    )
}

export default ProductsFooter