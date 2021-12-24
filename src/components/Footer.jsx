import React from 'react'
import { FooterBox } from './Styled'
import mastercard from '../img/mastercard.png'
import visa from '../img/visa.png'

export default function Footer() {
  return (
    <FooterBox>
      <div className='row d-lg-flex'>
      <div className='d-flex flex-column flex-sm-row text-center col-lg-8 justify-content-around my-4 my-md-0'>
        <span>Home</span>
        <span>Menu</span>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        </div>
      {window.innerWidth < 767 ? <hr/> : null}
      <div className='text-center  col-lg-4'>
        <span>POWERED BY CODER TEAM</span>
        </div>
      </div>
      <hr/>
      <div className='d-sm-flex'>
      <div className='text-center my-auto col-sm-8 h-100'>
        <span>&copy; 2021 Sushme</span>
      </div>
      <hr/>
      <div className='col-8 h-100 col-sm-4 col-lg-2 mx-auto d-flex justify-content-around'>
        <img width='70px' height='50px' src={mastercard} alt='mastercard' />
        <img width='70px' height='50px' src={visa} alt='visa'/>
        </div>
      </div>
      
    </FooterBox>
  )
}
