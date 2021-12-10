import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { resetPass } from '../services/authServices';
import { Button, Form } from 'react-bootstrap';

export default function ResetPass() {
	//State management
	const initialFormState = {
		password: '',
		password_confirmation: '',
		token: '',
		msg: '',
	};
	const [formState, setFormState] = useState(
		initialFormState
	);
	const { token } = useParams();

	//handle user input
	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value,
			msg: '',
		});
	}

	//handle submission
	function handleResetPass(event) {
		console.log(token);
		event.preventDefault();
		setFormState({
			...formState,
			token: token,
		});
		if (
			formState.password ===
			formState.password_confirmation
		) {
			resetPass(formState).then((data) => {
				console.log(data);
			});
		} else {
			setFormState({
				...formState,
				msg: 'Password does not match',
			});
		}
	}
	return (
		<>
			<h3 className='text-center rounded my-5'>
				Reset Password
			</h3>
			<Form className='container col-11 col-md-9 col-lg-4 bg-light my-5 p-5 rounded'>
				<Form.Text className='text-danger'>
					{formState.msg ? formState.msg : null}
				</Form.Text>
				<Form.Group
					className='mb-3'
					controlId='password'
				>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						name='password'
						value={formState.password}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group
					className='mb-3'
					controlId='passwordConfirmation'
				>
					<Form.Label>
						Password Confirmation
					</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password Confirmation'
						name='password_confirmation'
						value={
							formState.password_confirmation
						}
						onChange={handleChange}
					/>
					<Form.Text className='text-muted'>
						(6 characters minimum)
					</Form.Text>
				</Form.Group>

				<div className='d-flex justify-content-between mt-5'>
					<Button
						disabled={
							formState.password.length < 6 ||
							formState.password_confirmation
								.length < 6
						}
						variant='dark'
						onClick={handleResetPass}
					>
						Reset Password
					</Button>
				</div>
			</Form>
		</>
	);
}
