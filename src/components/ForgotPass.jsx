import React, { useState } from 'react';
import { forgotPass } from '../services/authServices';
import { Button, Form } from 'react-bootstrap';

export default function ForgotPass() {
	//State management
	const initialFormState = {
		email: '',
		msg: '',
	};
	const [formState, setFormState] = useState(
		initialFormState
	);

	//handle user input
	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value,
		});
	}

	//handle submission
	function handleSubmit(event) {
		event.preventDefault();
		forgotPass(formState)
			.then((data) => {
				if (data.success) {
					setFormState({
						...formState,
						msg: data.success,
					});
				}
				if (data.errors) {
					setFormState({
						...formState,
						msg: data.errors,
					});
				}
			})
			.catch((error) => console.log(error));
	}
	return (
		<>
			<h3 className='text-center rounded my-5'>
				Forgot Password
			</h3>
			<Form className='container col-11 col-md-9 col-lg-4 bg-light my-5 p-5 rounded'>
				<Form.Text className='text-primary'>
					{formState.msg ? formState.msg : null}
				</Form.Text>
				<Form.Group
					className='mb-5'
					controlId='email'
				>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						name='email'
						value={formState.email}
						onChange={handleChange}
					/>
				</Form.Group>

				<Button
					variant='dark'
					onClick={handleSubmit}
				>
					Submit
				</Button>
			</Form>
		</>
	);
}
