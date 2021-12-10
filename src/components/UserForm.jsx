import React, { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, Form } from 'react-bootstrap';
import { useGlobalState } from '../utils/stateContext';
import { updateUser } from '../services/authServices';
import { pattern } from '../utils/authValidation';

export default function UserForm() {
	//State management
	const { store, dispatch } = useGlobalState();
	const { user_id,loggedInUser, userEmail } = store;
	const initialFormState = {
		username: loggedInUser,
		email: userEmail,
		password: '',
		user_id: user_id,
		email_error: '',
		msg: '',
	};
	const [formState, setFormState] = useState(
		initialFormState
	);
	const [visible, setVisible] = useState(false);

	//handle user input
	function handleChange(e) {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
			email_error: '',
		});
	}

	//handle user details update submission
	function handleSubmit() {
		const isValid = pattern.test(formState.email);
		if (isValid) {
			updateUser(formState)
				.then((data) => {
					setFormState({
						...formState,
						msg: data.msg,
					});sessionStorage.setItem(
							'user',
							formState.username
						);	sessionStorage.setItem(
							'email',
							formState.email
						);
						dispatch({
							type: 'setLoggedInUser',
							data: formState.username,
						});
						dispatch({
							type: 'setUserEmail',
							data: formState.email,
						});
				})
				.catch((error) => console.log(error));
		} else {
			setFormState({
				...formState,
				email_error: 'Invalid email address',
			});
		}
	}

	// Loads user details

	return (
		<>
			<h3 className='text-center rounded pb-5 m-0'>
				Change Details
			</h3>
			<div className='rounded mb-5 mx-auto py-5  d-flex flex-wrap col-12 col-lg-6 bg-light text-center row'>
				<div className='row col-10 p-0 my-2 mx-auto'>
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
						className='bg-light border height'
						placeholder='Username'
						value={formState.username}
						onChange={handleChange}
					/>
				</div>
				<div className='row col-10 p-0 my-2 mx-auto'>
					<input
						type='email'
						name='email'
						className='bg-light border height'
						placeholder='Email'
						value={formState.email}
						onChange={handleChange}
					/>
				</div>
				<div className='row col-10 p-0 my-2 mx-auto'>
					<input
						type={visible ? 'text' : 'password'}
						name='password'
						className='bg-light border height'
						placeholder='Password'
						value={formState.password}
						onChange={handleChange}
					/>
					<span className='p-viewer'>
						{visible ? (
							<VisibilityIcon
								className=' w-100'
								onClick={() =>
									setVisible(false)
								}
							/>
						) : (
							<VisibilityOffIcon
								className='w-100 '
								onClick={() =>
									setVisible(true)
								}
							/>
						)}
					</span>
				</div>
				<Form.Text className='text-muted mt-0 p-0'>
					(6 characters minimum)
				</Form.Text>
				<Button
					className='btn btn-lg col-10 my-5 my-lg-2 mx-auto b-height row'
					disabled={
						formState.password.length < 6 ||
						!formState.username ||
						!formState.email
					}
					onClick={handleSubmit}
				>
					Submit
				</Button>
			</div>
		</>
	);
}
