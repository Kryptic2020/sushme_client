import React, { useEffect, useState } from 'react';
import MenuItems from './MenuItems';
import { products } from '../services/productServices';
import menuHero from '../img/menuHero.png';
import order_icon from '../img/orderIcon.png';
import {
	ImgOrderIcon,
	OrderIcon,
	QuantityOrderIcon,
	ImgMenuHero,
	MenuHeroBox,
} from './Styled';
import OrderBasket from './OrderBasket';
import { useGlobalState } from '../utils/stateContext';
import { Modal } from 'react-bootstrap';
import CategoriesCarrosel from './CategoriesCarrosel';
import logo from '../img/logo.png';
import StarIcon from '@mui/icons-material/Star';

export default function Menu() {
	const { store } = useGlobalState();
	const { basket } = store;
	const [items, setItems] = useState([]);
	const [show, setShow] = useState(false);

	function total() {
		let sum = 0;
		basket.forEach((el) => (sum += el.quantity));
		return sum;
	}

	const ModalBasket = (
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
				<OrderBasket
					closeModal={() => setShow(false)}
				/>
			</Modal.Body>
		</Modal>
	);

	useEffect(() => {
		products().then((data) => setItems(data));
	}, []);
	return (
		<>
			<div className='position-relative d-sm-flex'>
				<MenuHeroBox className='d-flex flex-column fw-bold'>
					<img
						className='mx-auto mx-md-4 mt-2 mb-0 mt-md-4'
						width='150px'
						height='150px'
						src={logo}
						alt='logo'
					/>
					<div className='d-flex flex-column mt-0 pt-0'>
						<span className='d-block p-1 p-md-0 mx-md-4 mt-md-3 mt-lg-4 mb-lg-2'>
							Sushi - Japanese
						</span>
						{/* <WhiteBar></WhiteBar> */}
						<span className='p-1 p-md-0  mx-md-4 my-lg-2'>
							<StarIcon
								style={{ fill: 'orange' }}
							/>
							5.0
						</span>
						<span className='p-1 p-md-0  mx-md-4 my-lg-2'>
							191 Adelaide St, Brisbane Qld
							4000
						</span>
					</div>
				</MenuHeroBox>
				<ImgMenuHero
					src={menuHero}
					alt='Menuhero'
				></ImgMenuHero>
			</div>

			<CategoriesCarrosel />
			<div className='d-flex col-12'>
				<MenuItems items={items.products} />
				<div className='d-none d-md-block col-12 col-md-6 col-lg-5'>
					<OrderBasket />
				</div>
			</div>
			{ModalBasket}
			<OrderIcon
				className='d-md-none'
				onClick={setShow}
			>
				<QuantityOrderIcon>
					{total()}
				</QuantityOrderIcon>
				<ImgOrderIcon
					src={order_icon}
					alt='order icon'
				/>
			</OrderIcon>
		</>
	);
}
