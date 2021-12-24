import React,{useEffect, useState} from 'react'
import NavBar from './NavBar'
import hero from '../img/hero.png'
import {Hero, Button, ImgTopSeller,BgVanilla} from'./Styled' 
import { productsTopSeller } from '../services/productServices';
import GoogleMaps from './GoogleMaps';

export default function Home() {
//Manage State
  const [topSellers,setTopSellers]= useState([])

useEffect(() => {
  productsTopSeller().then((data) => { setTopSellers(data.products)})
}, [])
  return (
    <div className='w-100'>      
      <NavBar />
      <div className='d-flex flex-wrap col-12'>
        <h6 className='d-sm-none m-4'>Welcome to Sushme</h6>      
        <Hero src={hero}/>     
        <Button className='d-block mx-auto my-4 d-sm-none'>PRE ORDER ONLINE</Button>
        <section className='col-12 col-sm-6'>
          <h3 className='d-none d-sm-block m-4 my-lg-5'>Welcome to Sushme</h3>
          <p className='p-4 py-lg-5'>Order Online from Sushme Japanese Cuisine * 191 Adelaide St, Brisbane QLD 4000 * Online Menu * Takeaway * Secure Online Payments *</p>  
          <section className='d-none d-lg-block mx-4'>
            <h5>Top Sellers</h5>
            {topSellers.length > 0 && topSellers.map((el, index) => (
              <div className='d-flex rounded col-12 my-5' key={index}>
              <ImgTopSeller src={el.picture } alt={ el.title} />
               <div className='col d-flex flex-column justify-content-around'>
                  <span className='mx-3 text-muted'><strong>{el.title}</strong></span>
                  <span className='mx-3'>{el.description}</span>
                  <span className='mx-3'>Price: $ {Number(el.price)}</span>
                </div>
                
              
            </div>
            ))}
            
            </section>
        </section>
        <section className='d-lg-none col-11 mx-auto my-3'>
          <h5 className='m-3'>Top Sellers</h5>
          <div className='d-md-flex'>
            {topSellers.length > 0 && topSellers.map((el, index) => (
              <div className='d-flex col-12 rounded col-md-6 mx-auto my-3' key={index}>
              <ImgTopSeller src={el.picture } alt={ el.title} />
                <div className='col d-flex flex-column justify-content-around'>
                  <span className='mx-3 text-muted'><strong>{el.title}</strong></span>
                  <span className='mx-3'>{el.description}</span>
                  <span className='mx-3 text-bold'>Price: $ {Number(el.price)}</span>
                </div>
                </div>
              
            
            ))}</div>
        </section>
        
      </div>  
      <BgVanilla className='col-12 d-sm-flex'>
        <div className='col-sm-6 col-12 p-3'>
        <h5 className='text-bold text-center mt-5 text-muted'>MENUS</h5>
        <span className='d-block p-3 my-5 text-center'>Small Roll,Hoso Roll,Gunkan,Aburi,Nigiri,Hand Roll,Big Roll,Fusion Roll,Rice Paper,Sashimi,Side Dish,A La Cart,Salad,Dessert,Drink</span>
          <Button className='d-block mx-auto my-4'>PRE ORDER ONLINE</Button>
        </div>
        <div className='col-sm-6 col-12 py-5 px-4 d-flex flex-column text-center'>
          <h5 className='text-bold m-3 text-muted'>ONLINE OPERATING HOURS</h5>
          <h6 className='text-bold text-left text-decoration-underline mt-4 '>PICKUP</h6>
          <span>Thursday..............................11am to 8:30pm</span>
          <span>Friday...................................11am to 8:30pm</span>
          <span>Saturday...............................11am to 8:30pm</span>
          <span>Sunday.................................11am to 8:30pm</span>
          <span>Monday................................11am to 8:30pm</span>
          <span>Tuesday...............................11am to 8:30pm</span>
          <span>Wednesday..........................11am to 8:30pm</span>

        </div>
      </BgVanilla>
      <BgVanilla className='py-5'>
        <h5 className='text-bold text-center p-5 text-muted'>LOCATION</h5>
        <GoogleMaps/>
      </BgVanilla>

    </div>
  )
}
