import "../Concepts.css";
import { Link } from "react-router-dom";
import Gist from "react-gist";
import React from "react";
import EffetBord from "./EffetBord.js"

function UseEffect() {
  const gistData = {
    id: "8a1106697641a4ca915c7e5449b227c2",
    file: null,
  };

  

  return (
    <div className="container center">
      <h1 class="Titre">UseEffect </h1>
      <p className="desc">
        <b>Use effect</b> est utilisé quand une variable props change, ou quand une variable d'état change.</p>
        exemple : changer le titre de l'onglet chaque fois qu'un utilisateur clique sur un bouton
      <EffetBord />
      <Gist id={gistData.id} />
     
    

      <br></br>
      <br></br>
      <br></br>
      <Link to="/3" > <button>Précédent</button> </Link> 
      <Link to="/"> <button>Accueil</button> </Link>
      <Link to="/4"> <button>Suivant</button> </Link>
    </div>
  );
}

export default UseEffect;
