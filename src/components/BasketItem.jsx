import React,{useEffect} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useGlobalState } from '../utils/stateContext';

export default function BasketItem() {  
  const {store, dispatch } = useGlobalState();
  const { basket } = store;
  let updatedItems = null;

  function deleteHandler(id) {
    updatedItems = basket.filter((el) => el.id != id )
    dispatch({
						type: 'setBasket',
						data: updatedItems,
    });
  }

  useEffect(() => {
  }, [basket])
  return (
    <div>
      {basket.length > 0 && basket.map((el, index) => (
        <div className='d-flex border my-2 justify-content-between p-2 text-center' key={index}>
          <div className='col-2'>X {el.quantity}</div>
          <div className='col-2'>{el.title}</div>
          <DeleteIcon onClick={()=>deleteHandler(el.id)}/>
          <div className='col-2'>$ {el.price * el.quantity}</div>
          
        </div>
       
     ))}
    </div>
  )
}
