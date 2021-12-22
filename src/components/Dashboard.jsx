import React, { useEffect } from 'react';

import Category from './Category';
import Product from './Product';
import Nav from './NavigationBar';

export default function Dashboard() {
	useEffect(() => {
	
	}, []);

	return (
		<>
		<Nav/>
		<div className='bg-secondary py-5'>
			<h3 className='m-5 text-white'>Dashboard</h3>
			<Category />
			<Product/>
			</div>
		</>
	);
}
