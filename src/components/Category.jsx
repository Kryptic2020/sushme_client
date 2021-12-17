import React, { useEffect, useState } from 'react'
import { categoryIndex, categoryCreate, categoryDelete } from '../services/categoryServices'
//import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import BuildIcon from '@mui/icons-material/Build';
import {	
	Button,
	Modal,
} from 'react-bootstrap';

export default function Category() {
  const [categoriesState, setCategoriesState] = useState()
  const [nameState, setNameState] = useState('')
  const [show, setShow] = useState(false)
  const [idState, setIdState] = useState()
  

  	//display modal -  edit user details
	function handleModal() {
		setShow(true);
  }
  
  function handleChange(event) {
    event.preventDefault();
    setNameState(event.target.value)

  }
  function handleSubmit() {
    categoryCreate({ name: nameState }).then(()=>{setNameState('');});
    
  }
  function handleDelete(id) {
    categoryDelete(id).then(()=>{setIdState(id)})
    
  }



  useEffect(() => {
   categoryIndex().then((data)=> setCategoriesState(data))
  }, [show, nameState, idState])

  return (
    <div><h5 className='m-5 bg-light rounded p-3 col-md-4' onClick={handleModal}><BuildIcon /> Manage Category</h5>
      <Modal
			fullscreen={true}
			show={show}
			onHide={() => {
				setShow(false);
			}}
			animation={false}
		>
			<Modal.Header
				className='bg-light'
				closeButton
			>Category Management</Modal.Header>
			<Modal.Body>
          <div className='bg-light col-sm-6 col-12 m-auto '>
            <input placeholder='Enter new category' className='col-9 btn' onChange={handleChange} value={nameState} /><Button className='col-3' disabled={nameState.length < 2} onClick={handleSubmit}>Create</Button>
          </div>
        <ul className='bg-light col-sm-6 col-12 m-auto '>
      {categoriesState && categoriesState.map((el, index) =>
      <li className='d-flex justify-content-between my-3' key={index}><span>{el.name}</span><span><DeleteIcon onClick={()=>handleDelete(el.id)}/></span></li>
    )}</ul>
			</Modal.Body>
		</Modal>
      
    </div>
  )
}
