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
import Login from './Login';
import Signup from './Signup';
import ForgotPass from './ForgotPass';
import ResetPass from './ResetPass';
import Home from './Home';
import Dashboard from './Dashboard';
import Header from './Header';
import Footer from './Footer';
import { Div } from './Styled';
import Menu from './Menu';
import Checkout from './Checkout';
import Receipt from './Receipt';
import Product from './Product';
import Order from './Order';
import TableOrdering from './TableOrdering';

function App() {
	//State management
	const initialState = {
		basket: [],
		pickupTime: null,
		table_number: null,
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

	const { userEmail, loggedInUser } = store;

	return (
		<>
			<StateContext.Provider
					value={{ store, dispatch, userEmail }}
				>
			<Div>
				
					<BrowserRouter>
						<Header />
						<Switch>
							<Route path='/adm'>
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
								path='/'
								component={Home}
							></Route>
							<Route
								exact
								path='/table/:table'
								component={TableOrdering}
							></Route>
							<Route
								exact
								path='/menu'
								component={Menu}
							></Route>
							<Route
								exact
								path='/checkout'
								component={Checkout}
							></Route>
							<Route
								exact
								path='/receipt/:order'
								component={Receipt}
							></Route>
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
							{loggedInUser ? (
								<Route
									exact
									path='/dashboard'
									component={Dashboard}
								></Route>
							) : null}
							{loggedInUser ? (
								<Route
									exact
									path='/dashboard/products'
									component={Product}
								></Route>
							) : null}
							{loggedInUser ? (
								<Route
									exact
									path='/dashboard/orders'
									component={Order}
								></Route>
							) : null}
						</Switch>
						
					</BrowserRouter>
				
			</Div>
			<Footer />
			</StateContext.Provider>
		</>
	);
}

export default App;
