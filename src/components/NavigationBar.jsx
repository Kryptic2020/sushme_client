import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
	Navbar,
	Container,
	Nav,
	Button,
	Modal,
} from 'react-bootstrap';
import CreateIcon from '@mui/icons-material/Create';
import { useGlobalState } from '../utils/stateContext';
import { signOut } from '../services/authServices';
import UserForm from './UserForm';

const NavigationBar = ({ history }) => {
	//State management
	const { store, dispatch } = useGlobalState();
	const { loggedInUser } = store;
	const [show, setShow] = useState(false);

	//handle log out
	function handleSignOut(event) {
		event.preventDefault();
		signOut().then(() => {
			dispatch({
				type: 'setLoggedInUser',
				data: null,
			});
			dispatch({ type: 'setToken', data: null });
			history.push('/');
		});
	}

	//display modal -  edit user details
	function handleModal() {
		setShow(true);
	}

	// Modal user details form
	const ModalUserForm = (
		<Modal
			fullscreen={true}
			show={show}
			onHide={() => {
				setShow(false);
			}}
			animation={false}
		>
			<Modal.Header
				className='bg-light'
				closeButton
			></Modal.Header>
			<Modal.Body>
				<UserForm />
			</Modal.Body>
		</Modal>
	);
	return (
		<>
			<Navbar
				collapseOnSelect
				expand='lg'
				bg='dark'
				variant='dark'
			>
				<Container>
					<Navbar.Brand href='#home'>
						{loggedInUser}{' '}
						{loggedInUser ? (
							<CreateIcon
								className='mx-3'
								onClick={handleModal}
							/>
						) : null}
					</Navbar.Brand>
					<Nav className='justify-content-end'>
						{loggedInUser ? (
							<Link to='/'>
								<Button
									className='btn btn-sm bg-dark'
									variant='secondary'
									onClick={handleSignOut}
								>
									Logout
								</Button>
							</Link>
						) : (
							<Link to='/sign-in'>
								<Button
									className='btn btn-sm bg-dark'
									variant='secondary'
								>
									Login/Signup
								</Button>
							</Link>
						)}
					</Nav>
				</Container>
			</Navbar>
			{ModalUserForm}
		</>
	);
};
export default withRouter(NavigationBar);
