import React, { useState } from 'react';
import BasketItem from './BasketItem';
import { Button } from './Styled';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileTimePicker from '@mui/lab/MobileTimePicker';
import { useGlobalState } from '../utils/stateContext';
//import { el } from 'date-fns/locale';

export default function OrderBasket() {
	const {store, dispatch } = useGlobalState();
  const { basket,pickupTime, table_number } = store;
	const [time, setTime] = useState(null);
  
	function total() {
		let sum = 0;
   basket.forEach((el)=> sum += el.price * el.quantity)
		return sum
	}

	function handlePickupTime(data) {
		setTime(data);
		dispatch({
			type: 'setPickupTime',
			data:time
		})
	}


	return (
		<div className='my-5'>
			<h3 className='m-4'>ORDER BASKET</h3>
			<h6 className='text-center'>
				Preorder for {time ? time.toLocaleString() : ''}
			</h6>
			<h6 className='text-center text-danger fw-bold my-5'>
				{table_number ? `TABLE ${table_number}`:'PICKUP ONLY'}
			</h6>
			<h6 className='mx-4 my-3'>{table_number ? null :'Pickup Time'}</h6>
			<div className='mx-4'>
				{table_number ? null :<LocalizationProvider
					dateAdapter={AdapterDateFns}
				>
					<Stack spacing={3}>
						<MobileTimePicker
							label='Pickup time'
							value={time}
							//minTime={new Date(0, 0, 0, 8)}
							//maxTime={new Date(0, 0, 0, 18, 45)}
							//disableIgnoringDatePartForTimeValidation={true}
							onChange={(data) => {
								handlePickupTime(data);
							}}
							renderInput={(params) => (
								<TextField {...params} />
							)}
						/>
					</Stack>
				</LocalizationProvider>}

				<BasketItem deleteIcon={true}/>
				<div className='my-3'>
					Order Total $ {Number(total()).toFixed(2)}
				</div>
				<Link
					className='d-block mx-auto my-4 text-center'
					to={pickupTime || (!pickupTime && table_number) ? '/checkout':'/Menu'}
				>
					<Button className='btn btn-lg text-white' disabled={!table_number &&!pickupTime}>{table_number ?'ORDER NOW!':'ORDER FOR PICKUP NOW!'}</Button>
				</Link>
			</div>
		</div>
	);
}
