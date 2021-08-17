import React, {useState, useEffect} from "react";
import "../Concepts.css";
import { Link } from "react-router-dom";
import Gist from "react-gist";

function SetIntervalIndex() {
  const gistData = {
    id: "835756288d995bbe38f5553e780c62bb",
    file: null,
  };

const [timer, setTimer] = useState(1);

useEffect(() =>{
   const intervalID =  setInterval(() =>{
        setTimer(timer => timer + 1);
    }, 1000)

    return () => {
        clearInterval(intervalID);
    }

}, [])
  return (
    <div className="container center">
        <h1 className="Titre">SetInterval </h1>
        <p className="desc">Chrono Timer</p>
<br></br>
        <h1 className="Titre">Chrono : {timer} </h1>

      <Gist id={gistData.id} />
 <br></br>
      <br></br>
      <br></br>
      <Link to="/7">
        <button>Précédent</button>
      </Link>
      <Link to="/">
        <button>Accueil</button>
      </Link>
      <Link to="/9">
        <button>Suivant</button>
      </Link>
    </div>
  );
}
export default SetIntervalIndex;
