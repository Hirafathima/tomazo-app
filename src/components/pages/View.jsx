import React,{useState, useEffect} from "react";
import info from "./info";

export default function View({match}){

    const id = match.params.id;
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const getMenu = () => {
      info
      .get(`/restaurant?res_id=${id}`)
      .then(result => setMenu(result.data))
      
    }
    getMenu();
},[]);
    console.log(menu);
    return (menu === null? "" :
        <div className="view">
            <img className="viewImg" src={menu.thumb}></img>
            <p className="viewName">{menu.name}</p>
            <p className="rating">{menu.location.address}</p>
            <i class="fas fa-clock timeIcon"></i>
            <p className="timeText">{menu.timings}</p>
            <p><a href={menu.url} className="viewMenu">Click this link to view menu</a></p>
        </div>
    )
    
}