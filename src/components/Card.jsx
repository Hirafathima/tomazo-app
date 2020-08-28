import React from "react";
import Rating from "./Rating";
import {Link} from "react-router-dom";


function Card(props){

return (
<div className="col mb-4">
    <div className="card">
      <img src={props.thumb} className="card-img-top" alt="thumbnail"/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.address}</p>
        <Link to={`/${props.restId}`}className="btn btn-outline-dark">View</Link>
        <Rating rate = {props.rating}/>
      </div>
    </div>
  </div>
    
    

    
        
    );
}

export default Card;

