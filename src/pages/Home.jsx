import React from 'react'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import TitleSection from '../components/TitleSection/TitleSection'

const Home = () => {
    return (
        <>
            <HomeBanner />
            <TitleSection
                title='Produtos'
                sub='Os produtos da Modern Home sao os melhores do mercado a dez anos.
                Venha conhecer os melhores produtos do mercado na parte de mobilia'
            />
        </>
    )
}

export default Home