import React from "react";
import ListFooter from "../ListFooter/ListFooter";


const RoomsFooter = () => {

    const roomsList = [
        { text: 'Sala comum', link: '/rooms/12' },
        { text: 'Sala estilizada preta', link: '/rooms/12' },
        { text: 'Sala personalizada com flores', link: '/rooms/12' },
        { text: 'Sala com tematica especial', link: '/rooms/12' },
    ]

    return (
        <ListFooter title='Salas' contents={roomsList} />
    )
}

export default RoomsFooter