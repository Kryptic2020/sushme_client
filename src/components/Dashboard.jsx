import React, { useEffect } from 'react';

import Category from './Category';
import Nav from './NavigationBar';
import Order from './Order';
import BuildIcon from '@mui/icons-material/Build';
import { Link } from 'react-router-dom';

export default function Dashboard() {
	useEffect(() => {}, []);

	return (
		<>
			<Nav />
			<div className='bg-light py-5'>
				<h3 className='mx-5 my-4 text-black'>
					Dashboard
				</h3>
				<div className='d-flex flex-wrap'>
						<div className='col-md-6 col-12 text-decoration-none text-black'><Category /></div>

				<Link
					className='col-md-6 col-12 text-decoration-none text-black'
					to={'/dashboard/products'}
				>
					{' '}
					<h5 className='mx-5 my-3 bg-white rounded p-3'>
						<BuildIcon /> Manage Products
					</h5>
				</Link>
				<Link
					className='col-md-6 text-decoration-none text-black'
					to={'/dashboard/orders'}
				>
					{' '}
					<h5 className='mx-5 my-3 bg-white rounded p-3'>
						<BuildIcon /> Manage Orders (under
						construction)
					</h5>
				</Link>
				<Link
					className='col-md-6 text-decoration-none text-black'
					to={'/dashboard/staff'}
				>
					{' '}
					<h5 className='mx-5 my-3 bg-white rounded p-3'>
						<BuildIcon /> Manage Staff (to be defined)
					</h5>
				</Link>
				</div>
			
			</div>
		</>
	);
}
