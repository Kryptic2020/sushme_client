import React, {useEffect, useState} from 'react';
import { Accordion } from 'react-bootstrap';
import MenuItem from './MenuItem';
import {categoryIndex} from '../services/categoryServices'

export default function MenuItems({ items }) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryIndex().then((data)=> setCategories(data))
  }, [])
	return (
    <div className='col-12 col-md-6 col-lg-7'>
      <Accordion defaultActiveKey='0' flush>
        {categories && categories.map((cat, index) => (
          <Accordion.Item id={index} eventKey={index} key={index}>
					<Accordion.Header>
						{cat.name}
					</Accordion.Header>
          <Accordion.Body>
            {items && items.map((el)=>(el.category === cat.name ? <MenuItem key={el.title} item={el}/>: null))}
          </Accordion.Body>
				</Accordion.Item>
        ))}
				
			</Accordion>
		</div>
	);
}
