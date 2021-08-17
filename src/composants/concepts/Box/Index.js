import React from "react";
import "../Concepts.css";
import { Link } from "react-router-dom";
import Gist from "react-gist";
import Box from "./Box";

function Index() {
  const gistData = {
    id: "b99a98aa38fbbf62d4f73a4ee77c192c",
    file: null,
  };
  return (
    <div className="container center">
      <h1 className="Titre">affichage conditionnel(Login - Logout) </h1>
      <br></br>
      <Box />
      <Gist id={gistData.id} />

      <br></br>
      <br></br>
      <br></br>
      <Link to="/3">
        <button>Précédent</button>
      </Link>
      <Link to="/">
        <button>Accueil</button>
      </Link>
      <Link to="/5">
        <button>Suivant</button>
      </Link>
    </div>
  );
}

export default Index;
