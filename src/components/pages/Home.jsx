import React, { useState, useEffect } from 'react';

import Card from "../Card";
import Header from "../Header";


import Selected from "../Selected";
import NotSelected from "../NotSelected";
import info from '/home/hira/zomato-api/src/info.js';


function cardEntry(item){
  if(item.restaurant.thumb !== ""){
    return <Card
    key = {item.restaurant.id}
    name ={item.restaurant.name}
    address = {item.restaurant.location.locality}
    thumb = {item.restaurant.thumb}
    rating = {item.restaurant.user_rating.rating_text}
    restId = {item.restaurant.R.res_id}
    />
  }
}

function Home(){

  const [location, setLocation] = useState(null);
  const [rest, setRest] = useState(null);
  const [cityId, setCityId] = useState(null);
  const [cityName, setCityName] = useState(null);


  function onSelect(i){
    setCityId(location.location_suggestions[i].id)
  }

  useEffect(() => {
    const getLocation = () => {
      info
      .get("/cities?city_ids=1%2C11290%2C7")
      .then(result => setLocation(result.data))
      
    }
    getLocation();
},[]);


useEffect(() => {
  const getRest = () => {
    info
    .get(`/search?entity_id=${cityId}&entity_type=city`)
    .then(result => setRest(result.data))
  }
  getRest();
},[cityId]);


useEffect(() => {
  const getCityName = () => {
    info
    .get(`/location_details?entity_id=${cityId}&entity_type=city`)
    .then(result => setCityName(result.data))
  }
  getCityName();
  
},[cityId]);




return(
  <div>
    
    <Header onSelection={onSelect}/>
    {cityName === null? <NotSelected /> : <Selected name={cityName.city} />}
    {cityId === null ? "": 
    <div class="row row-cols-1 row-cols-md-3">
    {rest === null ? "loading..." : rest.restaurants.map(cardEntry)}
    </div>
    }
    
    
  </div>
);
}

export default Home;