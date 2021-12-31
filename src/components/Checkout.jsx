import React from 'react'
import Contact from './Contact';
import OrderSummary from './OrderSummary';


export default function Checkout() {
  return (
    <div>
      	<h3 className='bg-light text-center rounded p-3 my-3'>
				Checkout
      </h3>
      <div className='d-md-flex'>
        <OrderSummary />
        <Contact />
      </div>
    </div>
  )
}

