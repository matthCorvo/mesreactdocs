import React from "react";
import { useState } from "react";

function Box() {
  const [toggleState, setToggleState] = useState(false);
  const toggleFonction = () => {
    setToggleState(!toggleState);
  };

  return (
    <div>
      {
        toggleState ? (
          <button onClick={toggleFonction} className="box">
            CLIQUE MOI !
          </button>
        ) : (
          <button
            onClick={toggleFonction}
            className="box"
            style={{ backgroundColor: "green" }}
          >
            CLIQUE MOI !
          </button>
        )
        //null
      }
      {toggleState && <p>Seulment pour les membres inscrits</p>}

      {(function () {
        if (toggleState) {
          return <button>Déconnecter</button>;
        } else {
          return <button>Connexion</button>;
        }
      })()}
    </div>
  );
}

export default Box;
