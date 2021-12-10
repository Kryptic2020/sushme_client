import React, { useReducer } from 'react';
import stateReducer from '../utils/stateReducer';
import { StateContext } from '../utils/stateContext';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './NavigationBar';
import Login from './Login';
import Signup from './Signup';
import ForgotPass from './ForgotPass';
import ResetPass from './ResetPass';

function App() {
	//State management
	const initialState = {
		user_id: sessionStorage.getItem('userId') || null,
		userEmail: sessionStorage.getItem('email') || null,
		loggedInUser:
			sessionStorage.getItem('user') || null,
		auth: {
			token: sessionStorage.getItem('token') || null,
		},
	};
	const [store, dispatch] = useReducer(
		stateReducer,
		initialState
	);

	const { loggedInUser, userEmail } = store;

	return (
		<div>
			<StateContext.Provider
				value={{ store, dispatch, userEmail }}
			>
				<BrowserRouter>
					<Nav />
					<h1 className=' my-5 text-center'>
						SushMe
					</h1>
					<Switch>
						<Route exact path='/'>
							<Redirect
								to={
									loggedInUser
										? '/dashboard'
										: '/sign-in'
								}
							/>
						</Route>
						<Route
							exact
							path='/sign-in'
							component={Login}
						></Route>
						<Route
							exact
							path='/sign-up'
							component={Signup}
						></Route>
						<Route
							exact
							path='/forgot-pass'
							component={ForgotPass}
						></Route>
						<Route
							exact
							path='/reset-pass/:token'
							component={ResetPass}
						></Route>						
					</Switch>
				</BrowserRouter>
			</StateContext.Provider>
		</div>
	);
}

export default App;
