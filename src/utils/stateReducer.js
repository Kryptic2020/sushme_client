export default function reducer (state, action) {
	switch(action.type) {
		case 'setLoggedInUser': {
			return {
				...state,
				loggedInUser: action.data
			}
		}
			case 'setUserId': {
			return {
				...state,
				user_id: action.data
			}
		}
		case 'setUserEmail': {
			return {
				...state,
				userEmail: action.data
			}
	  }
		case 'setToken': {
			return {
				...state,
				auth: {
					...state.auth,
					token: action.data
				}
			}
		}

		default: return state
	}
}