import sushmeAPI from '../config/sushme_api'

export async function signUp(data) {
	const response = await sushmeAPI.post('/api/auth/sign-up', data)	
	return response.data
}
export async function signIn(data) {
	const response = await sushmeAPI.post('/api/auth/sign-in', data)
	console.log(data)
	return response.data
}
export async function signOut() {
	sessionStorage.clear();
	return "Logged out"
}
export async function forgotPass(data) {
	const response = await sushmeAPI.post('/api/auth/forgot-pass', data)
	return response.data
}
export async function resetPass(data) {
	const response = await sushmeAPI.post('/api/auth/reset-pass', data)	
	return response.data
}

export async function updateUser(data) {
	const response = await sushmeAPI.put('/api/auth/update', data)
	return response.data
}