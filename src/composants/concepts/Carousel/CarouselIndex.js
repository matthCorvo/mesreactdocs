import React from "react";
import "../Concepts.css";
import { Link } from "react-router-dom";
import Gist from "react-gist";
import Coarousel from "./Coarousel";

function CarouselIndex() {
  const gistData = {
    id: "3a43cb64c482acae67d4fdc3eff82bcd",
    file: "Carousel",
  };
  return (
    <div className="container center">
<h1 className="Titre">Carousel</h1>
      <p>Voir plus sur <a href="https://react-slideshow.herokuapp.com/">react-slideshow</a></p>  
<Coarousel />
      <Gist id={gistData.id} />

      <br></br>
      <br></br>
      <br></br>
      <Link to="/5">
        <button>Précédent</button>
      </Link>
      <Link to="/">
        <button>Accueil</button>
      </Link>
      <Link to="/7">
        <button>Suivant</button>
      </Link>
    </div>
  );
}

export default CarouselIndex;
