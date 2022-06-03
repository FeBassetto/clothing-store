import React, { useState } from "react";
import style from './SearchHeader.module.css'
import { BiSearch } from 'react-icons/bi'


const SearchHeader = () => {

    const [openSearch, setOpenSearch] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className={style.search} >
            <input
                type="text"
                className={openSearch ? style.search__input : style.search__input___closed}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />
            <BiSearch
                className={style.search__icon}
                onClick={() => {
                    if(openSearch){
                        setSearchValue('')
                    }
                    setOpenSearch(lastOpen => !lastOpen)
                }}
            />
        </div>
    )
}

export default SearchHeader