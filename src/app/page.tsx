import React from 'react'
import Navbar from '../app/Components/Navbar'
import Arrival from './Components/Arrival'
import Hero from './Components/Hero'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Seller from "./Seller/Seller";
import Slidebar from "./Category/Category";
import Cart from "../app/Cart/Cart"
import Style from "../app/Style/Style"
import Detail from './Components/Detail'


const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Banner/>
      <Arrival/>
     
       <Seller/>
       <Style/>
       <Detail/>
      <Slidebar/>
  
      <Cart/>
      <Footer/>
 
    </div>
  )
}

export default page
