import axios from "axios";

const API_KEY = '';
export default axios.create({
  method:'get',
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: { 
    'Accept': 'application/json', 
    'user-key': API_KEY
  }
});
