import {useState} from 'react';
function TachesForm({ajouterTache}) {

    const [tache, setTache]  = useState("");
    
    const handleSubmit  = (evt) => {
        evt.preventDefault();
        ajouterTache(tache);
    };



    return (
        <div>

            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Tache"
            value={tache}
            onChange={(evt) => setTache(evt.target.value)} />
            <button>Ajouter</button>
            </form>
        </div>
    )
}

export default TachesForm
