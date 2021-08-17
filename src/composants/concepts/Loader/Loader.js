import React from 'react'
import LoaderGif from './Pong.gif'
import "../Concepts.css";

function Loader() {
    return (
        <div className="loader">
            <img src={LoaderGif} alt="Loading" />
        </div>
    )
}

export default Loader
