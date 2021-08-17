function ListedTaches({taches}) {
    return (
        <div>
            <ul>
            {taches.map((tache,  idx) => (
                <li key={idx} >{tache}</li>
                )) }
            </ul>
        </div>
    );
}

export default ListedTaches
