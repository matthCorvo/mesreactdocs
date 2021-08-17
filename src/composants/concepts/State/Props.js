	
const arr = [
    { id: 34, nom: "Abadi", prenom: "Alex" },
    { id: 86, nom: "Harris", prenom: "Tyler" },
    { id: 76, nom: "Falcone", prenom: "Hailee" },
    { id: 73, nom: "Evans", prenom: "Amelia" },
    { id: 39, nom: "Fabbiano", prenom: "Jacob" },
];

// Afficher Des <li> prenom nom </li>
let affichage = arr.map((personne) => (
    <li key={personne.id}>
        {personne.prenom} {personne.nom}
    </li>
));
 
function Props() {
    return (
        <div>
        <h3>Liste</h3>
        <ul >{affichage}</ul>
        </div>
        );
}
 
export default Props;