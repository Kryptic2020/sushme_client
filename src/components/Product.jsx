import React, { useEffect, useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import {
	productDelete,
	products,
} from '../services/productServices';
import CreateIcon from '@mui/icons-material/Create';
import ProductForm from './ProductForm';
import { Modal } from 'react-bootstrap';
import { categoryIndex } from '../services/categoryServices';

export default function Product() {
	const [show, setShow] = useState(false);
	const [modalUpdateProduct, setModalUpdateProduct] =
		useState(false);
	const [idState, setIdState] = useState('');
	const [productsState, setProductsState] = useState([]);
	const [categories, setCategories] = useState([]);

	//display modal -
	function handleModal() {
		setShow(true);
	}

	function handleDelete(id) {
		productDelete(id).then(() => {
			setIdState(id);
		});
	}

	function handleUpdate(id) {
		setIdState(id);
		setModalUpdateProduct(true);
	}

	const ModalCreateProduct = (
		<Modal
			fullscreen={true}
			show={show}
			onHide={() => {
				setShow(false);
			}}
			animation={false}
		>
			<Modal.Header className='bg-light' closeButton>
				Create Product
			</Modal.Header>
			<Modal.Body>
				<ProductForm
					closeModal={() => setShow(false)}
				/>
			</Modal.Body>
		</Modal>
	);

	const ModalUpdateProduct = (
		<Modal
			fullscreen={true}
			show={modalUpdateProduct}
			onHide={() => {
				setModalUpdateProduct(false);
			}}
			animation={false}
		>
			<Modal.Header className='bg-light' closeButton>
				Update Product
			</Modal.Header>
			<Modal.Body>
				<ProductForm
					id={idState}
					closeModal={() =>
						setModalUpdateProduct(false)
					}
				/>
			</Modal.Body>
		</Modal>
	);

	useEffect(() => {
		products().then((data) => setProductsState(data));
		categoryIndex().then((data) => {
			setCategories(data);
		});
	}, [show, idState, modalUpdateProduct]);

	return (
		<div>
			<h5
				className='m-5 bg-light rounded p-3 col-md-4'
				onClick={handleModal}
			>
				<AddCircleOutlineIcon /> Add Product
			</h5>

			{ModalCreateProduct}
			{ModalUpdateProduct}

			<h5
				className='mx-5 bg-light rounded p-3 col-md-4'
				onClick={handleModal}
			>
				{' '}
				Product List
			</h5>
			{productsState.length > 0 &&
				productsState.map((el, index) => (
					<div
						key={index}
						className='bg-light m-5 p-4 rounded'
					>
						<p>Title: {el.title}</p>
						<p>Description: {el.description}</p>
						<p>Price: ${el.price}</p>
						<p>
							Category:{' '}
							{categories.length > 0 &&
								categories.find(
									(x) =>
										x.id ===
										el.category_id
								).name}
						</p>
						<p>Status: {el.status}</p>
						<p>Pic:</p>
						<span className='p-3 border rounded'>
							<CreateIcon
								onClick={() => {
									handleUpdate(el.id);
								}}
							/>{' '}
						</span>
						<span className='mx-3 p-3 border rounded'>
							<DeleteIcon
								onClick={() => {
									handleDelete(el.id);
								}}
							/>{' '}
						</span>
					</div>
				))}
		</div>
	);
}
