import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Form } from 'react-bootstrap';
import { useGlobalState } from '../utils/stateContext';
import { pattern } from '../utils/authValidation';
import { order } from '../services/paymentServices';
import { Button } from './Styled';
import locked from '../img/locked.png';

export default function Contact() {
	//State management
	const { store } = useGlobalState();
	const { basket, pickupTime, table_number } = store;
	const initialFormState = {
		username: '',
		email: '',
		phone: '',
		basket,
		pickupTime,
		table_number
	};

	const [formState, setFormState] = useState(
		initialFormState
	);

	const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
	

	//handle user input
	function handleChange(e) {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	
	}

	async function handleCkeckout() {
		const stripe = await stripePromise;
		order(formState).then((data) => {
			stripe.redirectToCheckout({
				sessionId: data.session,
			});
		});
	}

	// Loads user details

	return (
		<div className='col-12 col-md-6'>
			<div className='rounded mb-5 mx-auto py-5  d-flex flex-wrap row'>
				<h3 className='rounded p-2 mx-3 my-3'>
					CONTACT INFO
				</h3>
				<div className='row col-10 col-md-8 p-0 my-2 mx-auto'>
					<Form.Text
						className={
							formState.msg
								? 'text-success m-0 p-0'
								: 'text-danger m-0 p-0'
						}
					>
						{formState.email_error
							? formState.email_error
							: null}
						{formState.msg
							? formState.msg
							: null}
					</Form.Text>
					<input
						type='text'
						name='username'
						className='bg-light border height py-3'
						placeholder='Customer name'
						value={formState.username}
						onChange={handleChange}
					/>
				</div>
				<div className='row col-10 col-md-8 p-0 my-2 mx-auto'>
					<input
						type='email'
						name='email'
						className='bg-light border height py-3'
						placeholder='Email'
						value={formState.email}
						onChange={handleChange}
					/>
				</div>
				<div className='row col-10 col-md-8 p-0 my-2 mx-auto'>
					<input
						type='number'
						name='phone'
						className='bg-light border height py-3'
						placeholder='Phone'
						value={formState.phone}
						onChange={handleChange}
					/>
				</div>

				<Form.Text className='text-muted mx-auto my-2 p-0 col-10 col-md-8'></Form.Text>
				<span className='my-2 mx-auto col-10 col-md-8 text-muted text-center'>
					{' '}
					Payment Method Credit Card Only
				</span>
				<span className='my-2 mx-auto col-10 col-md-8 text-muted text-center'>
					<img src={locked} /> Powered by Stripe
				</span>
				<Button
					className='btn btn-lg text-white col-10 col-md-6 my-5 mx-auto b-height row'
					disabled={
						!pattern.test(formState.email) ||
						formState.username.length < 3 ||
						formState.phone.length < 9 ||
						!basket ||
						(!pickupTime && !table_number)
					}
					onClick={handleCkeckout}
				>
					ORDER NOW
				</Button>
			</div>
		</div>
	);
}
