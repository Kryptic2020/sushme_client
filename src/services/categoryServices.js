import sushmeAPI from '../config/sushme_api'

export async function categoryIndex() {
	const response = await sushmeAPI.get('/api/categories/index')	
	return response.data
}

export async function categoryShow(data) {
	const response = await sushmeAPI.get(`/api/categories/${data}`)	
	return response.data
}

export async function categoryDelete(data) {
	const response = await sushmeAPI.delete(`/api/categories/${data}`)	
	return response.data
}

export async function categoryUpdate(data) {
	const response = await sushmeAPI.put('/api/categories/update',data)	
	return response.data
}

export async function categoryCreate(data) {
	const response = await sushmeAPI.post('/api/categories/create',data)	
	return response.data
}