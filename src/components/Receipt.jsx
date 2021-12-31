import React, { useEffect,useState } from 'react'
import { Button } from './Styled';
import { Link, useParams } from 'react-router-dom';
import { paymentReceipt } from '../services/paymentServices';

export default function Receipt() {
  const [orderData, setOrderData]=useState()
  const { order } = useParams();

  

  useEffect(() => {
    paymentReceipt(order).then((data) => { setOrderData(data);console.log(data.table)})
  }, [])
  return (
    <div className='py-5'>
      <h3 className='m-5 text-capitalize'>Hi {orderData && orderData.customer.username} !</h3>
      <h6 className='m-5'> Thanks for shopping at Sushme</h6>
      <h6 className='m-5'>{orderData && orderData.table === "Online-Takeaway" ? null:`Your order is beeing prepared and will be delivered to Table n.${orderData && orderData.table} , please wait.`}</h6>
      
      <div className='my-5' >
        <a className='m-5 text-decoration-none text-black border p-3 rounded bg-light' href={orderData && orderData.payment} target={"_blank"} rel={"noopener noreferrer"} >Click here to see your receipt
      </a></div>

      <h6 className='m-5'>The purchase receipt for the order n.{orderData && orderData.id} has been sent to <strong>{orderData && orderData.customer.email}</strong></h6>
      

      {orderData && orderData.table === "Online-Takeaway" ? <Link to={'/'}><Button className=' m-5 bg-dark text-white'>Home</Button></Link> :null}
    </div>
  )
}
