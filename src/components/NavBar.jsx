import React from 'react';
import { NavBarBox, WhiteBar, Button } from './Styled';
import logo from '../img/logo.png';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<NavBarBox>
			<div className='h-100 d-flex align-items-center'>
				<img
					className='mx-3'
					width='120px'
					height='120px'
					src={logo}
					alt='logo'
				/>
				<div className='d-sm-none d-flex flex-column text-end mx-5 col'>
					<span className='text-end'>
						Sushi - Japanese
					</span>
					<WhiteBar></WhiteBar>
					<span>
						<StarIcon
							style={{ fill: 'orange' }}
						/>
						5.0
					</span>
					<span>191 Adelaide St,</span>
					<span>Brisbane Qld 4000</span>
        </div>
        <div className='d-none d-md-flex col justify-content-around'>
          <span className='my-auto'>HOME</span>
          <span className='my-auto'>MENU</span>
					<Link to="/menu">
						<Button>PRE ORDER ONLINE</Button>
					</Link>
        </div>
			</div>
		</NavBarBox>
	);
}
