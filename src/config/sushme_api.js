import axios from 'axios';

const sushmeAPI = axios.create({
  baseURL: `${process.env.REACT_APP_URL}`
})

export default sushmeAPI;
