import React from "react";
import ListFooter from "../ListFooter/ListFooter";

const ProductsFooter = () => {

    const productsList = [
        { text: 'Sand Stone', link: '/rooms/12' },
        { text: 'Stone', link: '/rooms/12' },
        { text: 'Cement', link: '/rooms/12' },
        { text: 'Soft Stone', link: '/rooms/12' }
    ]

    return (
        <ListFooter title='Produtos' contents={productsList} />
    )
}

export default ProductsFooter