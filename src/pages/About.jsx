import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function About() {
    return (
        <div>
            <Header />
            <Nav ejlow="About" ejhight="ABOUT" />
            <Footer />
        </div>
    )
}
