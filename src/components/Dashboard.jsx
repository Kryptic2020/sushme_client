import React, { useEffect } from 'react';

import Category from './Category';
import Product from './Product';
//import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Dashboard() {
	useEffect(() => {
	
	}, []);

	return (
		<div className='bg-secondary py-5'>
			<h3 className='m-5 text-white'>Dashboard</h3>
			<Category />
			<Product/>
		</div>
	);
}
