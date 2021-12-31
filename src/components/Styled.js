
import styled from 'styled-components';

export const ImgMenuHero = styled.img`
position:relative;
height:160px;
width:100%;
@media (min-width: 768px) {
  position:relative;
  display:block;
  margin:0;
  height:336px;
}
@media (min-width: 1024px) {
  height:464px;
}
`
export const MenuHeroBox = styled.div`

position:relative;
width:100%;
height:292.69px;
z-index:30;
background-color:rgb(255,255,255,0.8);
@media (min-width: 768px) {
  position:absolute; 
  top:8%; 
  height:272px;
  width:384px;
}
@media (min-width: 1024px) {
  height:336px;
  width:492.5px;
}
@media (max-width: 767px) {
text-align:center;
}
`


export const MenuCategories = styled.div`
background-color:#ECF0F1;
height:45px;
width:100%;
overflow: auto;
line-height:45px;
white-space: nowrap;
@media (min-width: 768px) {
  height:72px;
  font-size:18px;
  line-height:72px;
}
`

export const ImgMenuItem = styled.img`
width:140px;
height:100%;
z-index:1
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
  width:201px;
}
`
export const QuantityOrderIcon = styled.div`
position:absolute;
display: flex;
justify-content: center;
background-color:#000000;
color:#ffffff;
margin-left:30px;
margin-top:-7px;
border-radius:50%;
width:20px;
height:20px;
text-align:center;
line-height:20px;
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
  
}
`

export const OrderIcon = styled.div`
position:fixed;
display:flex;
background-color:red;
justify-content: center;
bottom:15%;
right:15%;
border-radius:50%;
width:60px;
height:60px;
z-index:20;
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
  
}
`
export const ImgOrderIcon = styled.img`
display:block;
width:30px;
height:30px;
margin:auto;
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
  
}
`
export const NumberTag = styled.div`
position:absolute;
background-color:red;
width:25px;
height:25px;
text-align:center;
top:0;
right:0;
color:#ffffff;
z-index:3;
@media (min-width: 768px) {
  display:none;
}
`
export const MenuItemCard = styled.div`
background-color:#ffffff;
border: 1px solid ${props => props.color || "grey"};;
height:143.2px;
width:100%;
@media (min-width: 1024px) {
  height:205.63px;
}
`
export const BgVanilla = styled.div`
background-color:#F8F8EE;
`

export const ImgTopSeller = styled.img`
width:118px;
height:118px;
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
`

export const Hero = styled.img`
display:block;
width:100%;
padding:15px;
height:345px;
margin:auto;
@media (min-width: 768px) {
  padding:32px 47px 32px 47px;
  width:50%;
  height:354px;
}
@media (min-width: 1024px) {
  padding:64px 94px 64px 94px;
  width:50%;
  height:40%;
}
`

export const Div = styled.div`
min-height:calc(100vh - 455.8px);
@media (min-width: 768px) {
 min-height:calc(100vh - 186.07px);
    
  }
`

export const Button = styled.button`
background-color:red;
color:#ffffff;
border:none;
border-radius:30px;
padding: 10px 15px 10px 15px;
@media (min-width: 768px) {
    
  }
`

export const HeaderBox = styled.div`
display:flex;
justify-content:space-around;
background-color:red;
color:white;
height:46px;
line-height:46px;
font-size:16px;
@media (min-width: 768px) {
    background-color:#000000;
  }
`
export const FooterBox = styled.div`
position:relative;
height: 455.8px;
line-height:40px;
background-color:#333333;
color:white;
font-size:16px;
z-index:-1;
@media (min-width: 768px) {
  height: 186.07px;
  line-height:44px;
    
  }
  @media (min-width: 1064px) {
  line-height:73px;
    
  }
`
export const WhiteBar = styled.div`
background-color:#ffffff;
width:165px;
height:15px;
`


export const NavBarBox = styled.div`
height: 146px;
line-height:26px;
background-color:#ECF0F1;
color:#000000;
font-size:16px;
@media (min-width: 768px) {
 
  
    
  }
  @media (min-width: 1064px) {
  
    
  }
`