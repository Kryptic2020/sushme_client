import sushmeAPI from '../config/sushme_api'

export async function orders() {
  const response = await sushmeAPI.get('/api/orders/index');
  return response.data;
}

export async function getBasket() {
    let data = sessionStorage.getItem('basket')
    return JSON.parse(data)
  }

export async function addItemOrder(data) {
  const response = await sushmeAPI.post('/api/orders/add',data);
  return response.data;
}