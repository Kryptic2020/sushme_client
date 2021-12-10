import axios from 'axios';

const sushmeAPI = axios.create({
  baseURL: 'http://localhost:3001'
  //baseURL:'https://.herokuapp.com'
})

export default sushmeAPI;
