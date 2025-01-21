import React from 'react'
import Navbar from '../app/Components/Navbar'
import Hero from './Components/Hero'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Seller from "./Seller/Seller";


import Style from "../app/Style/Style"
// import Detail from './Components/Detail'
// import Product from './ProductDetail/Detail'
import Arrival from './Components/Arrival'
import Caeousal from './Components/Caeousal'
// import Productpage from './Product/Product'
// import Product from './ProductDetail/Detail'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Banner/>
      <Arrival/>
       <Seller/>
       <Style/>
       <Caeousal/>
      
       {/* <Productpage/>
       <Product/> */}
       <Footer/>
    </div>
  )
}

export default Home
