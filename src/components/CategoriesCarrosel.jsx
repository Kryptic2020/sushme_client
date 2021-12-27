import React,{useState,useEffect} from 'react'
import { MenuCategories } from './Styled'
import { categoryIndex } from '../services/categoryServices';

export default function CategoriesCarrosel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryIndex().then(
      (data) => { setCategories(data); });
  }, [])
  
  return (
    <MenuCategories>
      {categories && categories.map((el, index) => (<span key={index}><a href={`#${index}`} className='mx-3 text-decoration-none text-capitalize text-dark'>{el.name}</a>{window.innerWidth < 400 ? '|' : null}</span>))}
      
    </MenuCategories>
  )
}
