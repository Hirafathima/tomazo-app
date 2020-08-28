import React from "react";



function Header(props){
return (
 
<div className="header">
  <h1 className="ask">Craving food?</h1>
  <p className="lead">Let us help you discover great restaurants in your city!</p>
  <div className="dropdown">
  <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select your city
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className="dropdown-item" type="button" onClick={()=> props.onSelection(0)}>Delhi</button>
    <button className="dropdown-item" type="button" onClick={()=> props.onSelection(1)}>Trivandrum</button>
    <button className="dropdown-item" type="button" onClick={()=> props.onSelection(2)}>Chennai</button>
  
</div>
</div>
</div>

    
    );
}

export default Header;