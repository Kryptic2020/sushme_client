import axios from 'axios';

const sushmeAPI = axios.create({
  baseURL: 'http://localhost:3001'
  //baseURL:'https://sushme-api.herokuapp.com'
})

export default sushmeAPI;
