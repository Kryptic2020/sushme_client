import React from 'react';
import BasketItem from './BasketItem';
import { useGlobalState } from '../utils/stateContext';

export default function OrderSummary() {
	const {store } = useGlobalState();
  const { basket,pickupTime } = store;
  
	function total() {
		let sum = 0;
   basket.forEach((el)=> sum += el.price * el.quantity)
		return sum
	}
  

	return (
		<div className='my-5 col-12 col-md-6'>
			<h3 className='m-4'>ORDER SUMMARY</h3>
			<h6 className='text-center'>
				Preorder for {pickupTime ? pickupTime.toLocaleString() : '11:00 AM'}.
			</h6>
			<h6 className='text-center text-danger fw-bold my-5'>
				PICKUP ONLY
			</h6>
			<h6 className='mx-4 my-3'>Pickup Time</h6>
			<div className='mx-4'>
			
				<BasketItem deleteIcon={false}/>
				<div className='my-3'>
					Order Total $ {Number(total()).toFixed(2)}
				</div>
				
			</div>
		</div>
	);
}
