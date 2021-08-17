import "../Concepts.css";
import { Link } from "react-router-dom";
import Gist from "react-gist";
import UseCatCall from "./UseCatCall"
function SetIntervalIndex() {
  const gistData = {
    id: "2b6539678ddbcf6bee45580f56208634",
    file: "CatCall",
  };
  function refreshPage(){ 
    window.location.reload(); 
}

  return (
    <div className="container center">
        <h1 className="Titre">🐾votre dose quotidienne de chats 🐾 </h1>
<br></br>
<button type="button" onClick={ refreshPage }> <span>Nouveau Chat 💕 </span> </button> 

 <img src={UseCatCall()} />
      <Gist id={gistData.id} />


 <br></br>
      <br></br>
      <br></br>
      <Link to="/8">
        <button>Précédent</button>
      </Link>
      <Link to="/">
        <button>Accueil</button>
      </Link>
      <Link to="/">
        <button>Suivant</button>
      </Link>
    </div>
  );
}
export default SetIntervalIndex;
