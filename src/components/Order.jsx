import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { orders, orderDelete } from '../services/orderServices';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';


export default function Order() {
  const [allOrders, setAllOrders] = useState([])
  const [orderId,setOrderId] = useState()
  
  	function handleDelete(id) {
		orderDelete(id).then(() => {
			setOrderId(id);
		});
	}

  function handleUpdate(id) {
    console.log('not implemented yet')
		
	}

  useEffect(() => {
    orders().then((data) => {
      setAllOrders(data)
    })
  }, [orderId])
  return (
    <div>
      <Link className='m-5' to={'/dashboard'}> back to Dashboard</Link>
      <div className='d-flex flex-wrap justify-content-around'>
      {allOrders && allOrders.map((el, index) => (
        <div className='my-4 d-flex flex-column bg-dark rounded text-capitalize p-3 text-white col-12 col-md-5 col-lg-3 mx-lg-1' key={index}>
          <span>created_at: {el.created_at}</span>
          <span>Customer_id:  {el.customer_id}</span>
          <span>delivery_time: {el.delivery_time}</span>
          <span>id: {el.id}</span>
          <span>isTakeAway: {el.isTakeAway ? 'Yes':'No'}</span>
          <span>payment_id: {el.payment_id}</span>
          <span>status_id: {el.status_id}</span>
          <span>table_id: {el.table_id}</span>
          <span>total_amount: {el.total_amount}</span>
          <span>user_id: {el.user_id}</span>
          <span>updated_at: {el.updated_at}</span>
          <div className='d-flex my-2 justify-content-around'>
          <span onClick={() => {
									handleUpdate(el.id);
								}} className='col-5 p-1 border rounded text-primary'>
							<CreateIcon
								
							/>{' Update '}
						</span>
						<span onClick={() => {
									handleDelete(el.id);
								}} className='col-5 p-1 border rounded text-danger '>
							<DeleteIcon
								
							/>{' Delete'}
            </span>
            </div>
        </div>
      ))}
        </div>
    </div>
  )
}
