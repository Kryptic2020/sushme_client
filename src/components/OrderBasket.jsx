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
	const {store } = useGlobalState();
  const { basket } = store;
	const [time, setTime] = useState(null);
  
	function total() {
		let sum = 0;
   basket.forEach((el)=> sum += el.price * el.quantity)
		return sum
	}


	return (
		<div className='my-5'>
			<h3 className='m-4'>ORDER BASKET</h3>
			<h6 className='text-center'>
				Preorder for {time ? time.toLocaleString() : '11:00 AM'}.
			</h6>
			<h6 className='text-center text-danger fw-bold'>
				PICKUP ONLY
			</h6>
			<h6 className='mx-4 my-3'>Pickup Time</h6>
			<div className='mx-4'>
				<LocalizationProvider
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
								setTime(data);
							}}
							renderInput={(params) => (
								<TextField {...params} />
							)}
						/>
					</Stack>
				</LocalizationProvider>

				<BasketItem />
				<div className='my-3'>
					Order Total $ {Number(total()).toFixed(2)}
				</div>
				<Link
					className='d-block mx-auto my-4 text-center'
					to='/menu'
				>
					<Button>ORDER FOR PICKUP NOW</Button>
				</Link>
			</div>
		</div>
	);
}
