import React from "react";
import {Link } from "react-router-dom";

function ConceptCard() {
  return (
    <div className="item_container">
        <Link className=" btn-default btn-lg btn3d item" to="/1">
          <p>useState</p>
        </Link>

        <Link className=" btn-default btn-lg btn3d item" to="/2">
          <p>Forms</p>
        </Link>

        <Link className=" btn-default btn-lg btn3d item" to="/3">
          <p>useEffect</p>
        </Link>

      <Link className=" btn-default btn-lg btn3d item"to="/4">
          <p>affichage conditionnel</p>
      </Link>

      <Link className=" btn-default btn-lg btn3d item" to="/5">
          <p>Navbar</p>
        </Link>

        <Link className=" btn-default btn-lg btn3d item" to="/6">
          <p>Carousel</p>
        </Link>


        <Link className=" btn-default btn-lg btn3d item"  to="/7">
        <p>Loader</p>
        </Link>

        <Link className=" btn-default btn-lg btn3d item" to="/8">
          <p>SetInterval</p>
        </Link>

        <Link  className=" btn-default btn-lg btn3d item" to="/9">
          <p>Custom Hook</p>
        </Link>

     
      <div className=" btn-default btn-lg btn3d disabled">
        <p>Redux</p>
      </div>
     
      

    </div>
  );
}

export default ConceptCard;