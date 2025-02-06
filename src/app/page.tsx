import React from 'react'
import Navbar from '../app/Components/Navbar'
import Hero from './Components/Hero'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Seller from "./Seller/Seller";
import Style from "../app/Style/Style"
import Arrival from './Components/Arrival'
import Caeousal from './Components/Caeousal'
// import Checkout from "@/app/Components/CheckoutPage"
// import convertToSubcurrency from "@/sanity/lib/convertToSubcurrency"
// import {Elements} from "@stripe/react-stripe-js"
// import { loadStripe } from '@stripe/stripe-js'
// import CheckoutPage from '@/app/Components/CheckoutPage'
// const stripePromise =loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)
// const amount = 5000;
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
       <Footer/>
     
       {/* <Elements>
      stripe={'stripePromise'}
      options={{
        mode:"payments",
        amount : convertToSubcurrency{amount},
        currency:"usd",
      }
      }
   
     </Elements> */}

    </div>
    
    
  )
}

export default Home
