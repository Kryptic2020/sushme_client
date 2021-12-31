import React, { useEffect,useState } from 'react'
import { Button } from './Styled';
import { Link, useParams } from 'react-router-dom';
import { paymentReceipt } from '../services/paymentServices';

export default function Receipt() {
  const [orderData, setOrderData]=useState()
  const { order } = useParams();

  

  useEffect(() => {
    paymentReceipt(order).then((data) => { setOrderData(data)})
  }, [])
  return (
    <div>
      <h3 className='m-5 text-capitalize'>Hi {orderData && orderData.customer.username} !</h3>
      <h6 className='m-5'> Thanks for shopping at Sushme</h6>
      
      <div className='my-5' >
        <a className='m-5 text-decoration-none text-black border p-3 rounded bg-light' href={orderData && orderData.payment} target={"_blank"} rel={"noopener noreferrer"} >Click here to see your receipt
      </a></div>

      <h6 className='m-5'>The purchase receipt has been sent to <strong>{orderData && orderData.customer.email}</strong></h6>

      <Link to={'/'}><Button className=' m-5 bg-dark text-white'>Home</Button></Link>
    </div>
  )
}
