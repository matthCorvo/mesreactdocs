import React from "react";
import "../Concepts.css";
import { Link } from "react-router-dom";
import Gist from "react-gist";
import NavbarExemple from "./NavbarExemple";

function NavbarIndex() {
  const gistData = {
    id: "46902999ae155fcc56af67717a1993dd",
    file: "css",
  };
  return (
    <div className="container center">
      <h1 className="Titre">Navbar résponsive </h1>
      <br></br>
      <NavbarExemple />
      <Gist id={gistData.id} />

      <br></br>
      <br></br>
      <br></br>
      <Link to="/4">
        <button>Précédent</button>
      </Link>
      <Link to="/">
        <button>Accueil</button>
      </Link>
      <Link to="/6">
        <button>Suivant</button>
      </Link>
    </div>
  );
}

export default NavbarIndex;
