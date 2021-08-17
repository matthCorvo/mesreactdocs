import {useState} from 'react'


function Form() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) =>{
        // empeche le loading
        evt.preventDefault();
        console.log(`Envoyer username au serveur: ${username}`);
        // ON vas utiliser des fonctions pour envoyer ces data vers un serveur
    }



    return (
        <div >
            <h1>Login</h1>      
             
            <form onSubmit={handleSubmit }>
                <input type="text" 
                value={username}
                onChange={(evt) => setUsername(evt.target.value)}
                placeholder="Pseudo" />
                <br></br>
                <br></br>
                <input type="email" 
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                placeholder="email" />
                <br></br>
                <br></br>
                <input type="password" 
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                placeholder="password" />
                <br></br>
                <br></br>
            <button>Se connecter</button>
            </form>
        </div>
    )
}

export default Form;