import "../Concepts.css";
import { Link } from "react-router-dom";
import Gist from "react-gist";
import React from "react";
import Form from "./Form";
import Select from "./Select";
import Taches from "./Taches";


function Forms() {
  const gistData = {
    id: "76366d1234a277df1354d34c93ebf589",
    file: null,
  };

  const gistData2 = {
    id: "a418586d95f92e845c68baf1c21e000f",
    file: "Liste de Taches"
  };
  
  const gistData3 = {
    id: "74b57a4e56a57d5c1a22042ba16b3f1e",
    file: null,
  };

  return (
    <div className="container center">
      <h1 class="Titre">Formulaires </h1>
      <Form />
      <Gist id={gistData.id} />
      <hr></hr>
      <h1 >Listes de taches </h1>
      <Taches />
      <Gist id={gistData2.id} />
      <hr></hr>
      <h1 >Select </h1>
      <Select />
      <Gist id={gistData3.id} />

      <br></br>
      <br></br>
      <br></br>
      <Link to="/1" > <button>Précédent</button> </Link> 
      <Link to="/"> <button>Accueil</button> </Link>
      <Link to="/3"> <button>Suivant</button> </Link>
    </div>
  );
}

export default Forms;
