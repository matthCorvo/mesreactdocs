import {useState } from "react";
import TachesForm from './TachesForm'
import ListedTaches from './ListedTaches'

function Taches() {
    const [taches, setTaches]  = useState([]);
// Declarer var d'etat dans le parent - ok
// passer cette variable a ListedTaches - ok
// Mettre a jour notre "taches"
const ajouterTache = (tache) => {
    setTaches((taches) => [...taches, tache])
}

    return (
        <div>
            <TachesForm ajouterTache={ajouterTache} />      
            <ListedTaches taches={taches}/>
              </div>
    )
}

export default Taches;
