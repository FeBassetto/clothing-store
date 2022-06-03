import React from "react";
import style from './NavigationOptions.module.css'
import { Link } from 'react-router-dom';


const NavigationOptions = ({ options, setOpenSearch }) => {

    const slicedOptions = options.slice(0, 3)

    return (
        <div className={style.navigationOptions}>
            {slicedOptions.map(option => (
                <Link to={option.link} onClick={() => setOpenSearch(false)}>
                    <div className={style.navigationOptions__option}>
                        <h1>{option.title}</h1>
                        <h2>{option.shortDescription}</h2>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default NavigationOptions