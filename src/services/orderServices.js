import sushmeAPI from '../config/sushme_api'

export async function orders() {
  const response = await sushmeAPI.get('/api/order/index');
  return response.data;
}
export async function orderDelete(data) {
  const response = await sushmeAPI.delete(`/api/order/${data}`);
  console.log(response.data)
  return response.data;
}


