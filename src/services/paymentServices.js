import sushmeAPI from '../config/sushme_api'

export async function order(data) {
	const response = await sushmeAPI.post('/api/payment/order',data)
	return response.data
}

export async function paymentReceipt(data) {
	const response = await sushmeAPI.get(`/api/payment/receipt/${data}`)
	return response.data
}
