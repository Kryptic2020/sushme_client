import sushmeAPI from '../config/sushme_api'

export async function products() {
	const response = await sushmeAPI.get('/api/products/index')	
	return response.data
}

export async function productCreate(data) {
	const response = await sushmeAPI.post('/api/products/create',data)	
	return response.data
}

export async function productDelete(data) {
	const response = await sushmeAPI.delete(`/api/products/${data}`)	
	return response.data
}

export async function productShow(data) {
	const response = await sushmeAPI.get(`/api/products/show/${data}`)
	return response.data
}

export async function productUpdate(data) {
	const response = await sushmeAPI.put('/api/products/update',data)	
	return response.data
}