import axios from "axios";

export default axios.create({
  method:'get',
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: { 
    'Accept': 'application/json', 
    'user-key': '3c72e73dbc57072e925dd603c1480fb7'
  }
});
