import React from 'react'
import SEO from '../components/Seo'
import Header from '../components/externalPages/header'
import { Footer } from '../components/externalPages/Footer'
import Hero from '../components/externalPages/home/hero'
import ChooseMe from '../components/externalPages/home/chooseme'

export const Home = () => {
    return (
        <div className="Home-page__comp">
            <SEO title={"Home"} />
            <Header />
            <div className="wrapper">
                <Hero />
                <ChooseMe />
            </div>
            <Footer />
        </div>
    )
}
