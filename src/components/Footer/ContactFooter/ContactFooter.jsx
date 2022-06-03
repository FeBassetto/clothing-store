import React from "react";
import ListFooter from "../ListFooter/ListFooter";


const ContactFooter = () => {

    const contactList = [
        {
            text: 'Rua Paulinia de Oliveira, 1231, Botucatu, Brasil',
            link: '/contact'
        },
    ]

    return (
        <ListFooter title='Contato' contents={contactList} />
    )
}

export default ContactFooter