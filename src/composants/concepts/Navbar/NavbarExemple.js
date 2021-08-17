import React, {useState, useEffect} from 'react'


function NavbarExemple() {

    const [toggleMenu, setToggleMenu] = useState(true);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

useEffect(() => {

const changeWidth = () => {
    setLargeur(window.innerWidth);

    if(window.innerWidth > 500 ){
    setToggleMenu(false);
}
}

window.addEventListener('resize', changeWidth);

    return() => {
        window.removeEventListner('resize', changeWidth);

    }
}, [])

    return (
        <nav id="nav"> 
        {(toggleMenu || largeur > 500) && ( 

            <ul id="liste">
                <li id="items">Accueil</li>
                <li id="items">Services</li>
                <li id="items">Contact</li>
            </ul>
            )}
            <button onClick={toggleNavSmallScreen} className="btn"><i class="fas fa-bars"></i></button>
        </nav>
    )
}

export default NavbarExemple
