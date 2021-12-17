import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import {
	productCreate,
	productShow,
	productUpdate,
} from '../services/productServices';
import { categoryIndex } from '../services/categoryServices';

export default function ProductForm({ closeModal, id }) {
	//State management
	const initialFormState = {
		title: '',
		description: '',
		category: '',
		category_id: 31,
		status: '',
		price: 0,
		msg: '',
	};
	const [formState, setFormState] = useState(
		initialFormState
	);
	const [categories, setCategories] = useState([]);

	//handle user input
	function handleChange(e) {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	}

	//handle user details update submission
	function handleSubmit() {
		if (id) {
			productUpdate({
				id,
				title: formState.title,
				description: formState.description,
				price: formState.price,
				status: formState.status,
				category_id: formState.category_id,
			})
				.then((data) => {
					console.log(data);
					closeModal();
				})
				.catch((error) => console.log(error));
		} else {
			productCreate({
				title: formState.title,
				description: formState.description,
				price: formState.price,
				status: formState.status,
				category_id: 31,
			})
				.then((data) => {
					console.log(data);
					closeModal();
				})
				.catch((error) => console.log(error));
		}
	}

	const options = ['Available', 'Sold out'];
	useEffect(() => {
		categoryIndex().then((data) => {
			setCategories(data);
		});
		if (id) {
			productShow(id).then((data) => {
				setFormState(data); console.log(data);
			});
		}
	}, [id]);

	return (
		<>
			<h3 className='text-center rounded pb-5 m-0'>
				{id ? 'Update' : 'Add'} Product
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
						{formState.msg
							? formState.msg
							: null}
					</Form.Text>
					<input
						type='text'
						name='title'
						className='bg-light border height'
						placeholder='Title'
						value={formState.title}
						onChange={handleChange}
					/>
				</div>
				<div className='row col-10 p-0 my-2 mx-auto'>
					<input
						type='text'
						name='description'
						className='bg-light border height'
						placeholder='Description'
						value={formState.description}
						onChange={handleChange}
					/>
				</div>
				<div className='row col-10 p-0 my-2 mx-auto'>
					<select
						className='btn border'
						value={categories}
						onChange={(e) =>
							setFormState({
								...formState,
								category_id: e.target.value,
							})
						}
					><option>{categories.length > 0 && categories.find(x => x.id == formState.category_id).name}</option>
						{categories &&
							categories.map((o) => (
								<option
									key={o.value}
									value={o.id}
								>
									{o.name}
								</option>
							))}
					</select>					
				</div>
				<div className='row col-10 p-0 my-2 mx-auto'>
					<select
						className='btn border'
						value={formState.status}
						onChange={(e) =>
							setFormState({
								...formState,
								status: e.target.value,
							})
						}
					><option></option>
						{options.map((o) => (
							<option
								key={o}
								value={o}
							>
								{o}
							</option>
						))}
					</select>					
				</div>
				<div className='row col-10 p-0 my-2 mx-auto'>
					<input
						type='number'
						name='price'
						className='bg-light border height'
						placeholder='Price'
						value={formState.price}
						onChange={handleChange}
					/>
				</div>
				<Form.Text className='text-muted mt-0 p-0'></Form.Text>
				<Button
					className='btn btn-lg col-10 my-5 my-lg-2 mx-auto b-height row'
					disabled={
						!formState.price ||
						!formState.title ||
						!formState.description
					}
					onClick={handleSubmit}
				>
					Submit
				</Button>
			</div>
		</>
	);
}
