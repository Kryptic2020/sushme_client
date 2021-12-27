import React from 'react';
import { MenuItemCard, ImgMenuItem,NumberTag } from './Styled';
import { useGlobalState } from '../utils/stateContext';

export default function MenuItem({ item }) {
	const { dispatch, store } = useGlobalState();
  const { basket } = store;
  
	const handleAddItem = () => {
		let data = basket;
		if (data && data.length > 0) {
			if (data.find((f) => f.id === item.id)) {
				data.forEach((e) => {
					if (e.id === item.id) e.quantity += 1;
				});
				dispatch({
					type: 'setBasket',
					data: data,
				});
			} else {
				item.quantity = 1;
				data.push(item);
				dispatch({
					type: 'setBasket',
					data: data,
				});
			}
		} else {
			item.quantity = 1;
			data.push(item);
			dispatch({
				type: 'setBasket',
				data: data,
			});
		}
	};
	return (
		<MenuItemCard color={basket.find((el)=>el.id == item.id) ? 'red':'lightgrey'}
			onClick={handleAddItem}
			className='d-flex justify-content-between my-3'
		>
			<div className='p-3'>
				
				<div>{item.title}</div>
				<div>{item.description}</div>
				<div className='fw-bold py-3'>
					Price: ${item.price}
				</div>
			</div>
			<div className=' position-relative'>
				<ImgMenuItem
				src={item.picture}
				alt={item.title}
			/>
			<NumberTag className={basket.find((el)=>el.id == item.id) ? '':'d-none'}>{basket.map((z) => { if (z.id == item.id) {return z.quantity} })}</NumberTag>
			</div>
			
		</MenuItemCard>
	);
}
