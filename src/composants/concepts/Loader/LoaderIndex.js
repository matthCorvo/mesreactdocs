import React, {useState, useEffect} from "react";
import "../Concepts.css";
import { Link } from "react-router-dom";
import Gist from "react-gist";
import Loader from "./Loader";

function LoaderIndex() {
  const gistData = {
    id: "4fc656c59173e1e4b68c70bba815393b",
    file: "App",
  };

const[loader,setLoader] = useState(true);

useEffect(() => {
    setTimeout(() => {
    setLoader(false);
}, 3000)

}, [])

function refreshPage(){ 
    window.location.reload(); 
}
  return loader ? ( 
    <Loader />
  ) : (
    <div className="container center">
<h1 className="Titre">Loader</h1>
<button type="button" onClick={ refreshPage }> <span>Actualiser la page </span> </button> 
      <Gist id={gistData.id} />

      <br></br>
      <br></br>
      <br></br>
      <Link to="/6">
        <button>Précédent</button>
      </Link>
      <Link to="/">
        <button>Accueil</button>
      </Link>
      <Link to="/8">
        <button>Suivant</button>
      </Link>
    </div>
  );
}

export default LoaderIndex;
