import React, { useState } from "react";
import style from './SearchHeader.module.css'
import { BiSearch } from 'react-icons/bi'
import NavigationOptions from './NavigationOptions/NavigationOptions';


const SearchHeader = () => {

    const [openSearch, setOpenSearch] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const optionsNavigation = [
        { title: 'Produtos/tapete', shortDescription: 'Tapete de pelos avox com aroma', link: '/products/12' },
        { title: 'Produtos/tapete', shortDescription: 'Tapete de pelos avox', link: '/products/12' },
        { title: 'Produtos/tapete', shortDescription: 'Tapete de pelos avox', link: '/products/12' },
        { title: 'Produtos/tapete', shortDescription: 'Tapete de pelos avox', link: '/products/12' },
        { title: 'Produtos/tapete', shortDescription: 'Tapete de pelos avox', link: '/products/12' },
        { title: 'Produtos/tapete', shortDescription: 'Tapete de pelos avox', link: '/products/12' }
    ]

    return (
        <div className={style.search} >
            <input
                type="text"
                className={openSearch ? style.search__input : style.search__input___closed}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onBlur={() => setOpenSearch(lastOpen => !lastOpen)}
            />
            <BiSearch
                className={style.search__icon}
                onClick={() => {
                    if (openSearch) {
                        setSearchValue('')
                    }
                    setOpenSearch(lastOpen => !lastOpen)
                }}
            />
            {openSearch && (
                <NavigationOptions options={optionsNavigation} setOpenSearch={setOpenSearch} />
            )}
        </div>
    )
}

export default SearchHeader