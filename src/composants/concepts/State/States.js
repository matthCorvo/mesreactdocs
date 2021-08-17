import "../Concepts.css";
import { Link } from "react-router-dom";
import Gist from "react-gist";
import React from "react";
import Main from "./Counter";
import HiddenMenu from "./HiddenMenu";
import Props from "./Props";

function State() {
  const gistData = {
    id: "33e6d94e663a82face3a9b4e5b478b15",
    file: null,
  };

  const gistData2 = {
    id: "51e42167c0af56e07dc6b1da2d481ff8",
    file: null,
  };
  
  const gistData3 = {
    id: "b09e2a701a920a711a56965cfdd55ab9",
    file: null,
  };

  return (
    <div className="container center">
      <h1 class="Titre">State </h1>
      <p className="desc">
        <b>State</b> est un objet qui va contenir des données qui va rendre nos
        composants dynamique</p>

      <Main />
      <Gist id={gistData.id} />
      <hr></hr>
      <HiddenMenu />
      <Gist id={gistData2.id} />
      <hr></hr>
      <h2>State et Props</h2>
      <p>React utilise les identfiants (key) pour savoir quel élément a disparu, apparu, ou a été changé.</p>
      <Props/>
      <Gist id={gistData3.id} />

      <br></br>
      <br></br>
      <br></br>
      <Link to="/" > <button>Précédent</button> </Link> 
      <Link to="/"> <button>Accueil</button> </Link>
      <Link to="/2"> <button>Suivant</button> </Link>
    </div>
  );
}

export default State;
