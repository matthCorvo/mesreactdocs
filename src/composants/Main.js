import React from 'react'
import Navbarh from './Navbarh.js'
import Footer from "./Footer";
import ConceptCard from './ConceptCard.js';

function Main() {
    return (
        <div className="main">
        <Navbarh title="Recapitulatif des concepts appris en REACTjs "/>
        <div className="container">
              <ConceptCard />
        </div>
        <Footer />

        </div>
    )
}

export default Main
