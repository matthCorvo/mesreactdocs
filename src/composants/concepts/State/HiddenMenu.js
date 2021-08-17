	
import { useState } from "react";


  const styles1 = {
    listStyle: "none",
  };

 
function HiddenMenu() {
    const [show, setShow] = useState(false);
    return (
        
        <div className="bord">
            <h1>menu secret</h1>
            <button onClick={() => setShow((prevShow) => !prevShow)}>
                {show ? "Cacher" : "Afficher"}
            </button>
            {show && (
                <>
                    <ul >
                    <li style={styles1}>Nourir le Chien</li>
                    <li style={styles1}>Faire mes devoirs</li>
                    <li style={styles1}>Essayer des trucs en React</li>
                    <li style={styles1}>Devenir le nouveau CEO d'amazon</li>

                    </ul>
                    </>
            )}
                </div>
    );
}
 
export default HiddenMenu;