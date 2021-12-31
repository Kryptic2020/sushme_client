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
import { Link } from 'react-router-dom';

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
		products().then((data) => setProductsState(data.products));
		categoryIndex().then((data) => {
			setCategories(data);
		});
	}, [show, idState, modalUpdateProduct]);

	return (
		<div className='bg-light'>
			<Link className='m-5' to={'/dashboard'}> back to Dashboard</Link>
			<h5
				className='m-5 bg-white rounded p-3 col-md-4'
				onClick={handleModal}
			>
				<AddCircleOutlineIcon /> Add Product
			</h5>

			{ModalCreateProduct}
			{ModalUpdateProduct}

			<h3 className='m-5 text-dark'>Product List</h3>
			{productsState.length > 0 &&
				productsState.map((el, index) => (
					<div
						key={index}
						className='col col-lg-6 bg-white m-5 rounded d-md-flex flex-row-reverse'
					>
						<div className='col-12 col-md-6 m-0 p-0'><img className='w-100 h100 m-0 p-0' src={el.picture} alt={el.title}/></div>
						<div className='col-12 col-md-6 p-4'>
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
							<p className='py-3'>Quantity: {el.quantity}</p>
						
						
						<span className='p-2 border rounded text-primary'>
							<CreateIcon
								onClick={() => {
									handleUpdate(el.id);
								}}
							/>{' Update '}
						</span>
						<span className='mx-3 p-2 border rounded text-danger bg-light'>
							<DeleteIcon
								onClick={() => {
									handleDelete(el.id);
								}}
							/>{' Delete '}
							</span>
								</div>
					</div>
				))}
		</div>
	);
}
