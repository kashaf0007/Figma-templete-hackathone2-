
import React from 'react'
import Navbar from '../app/Components/Navbar'
import Hero from './Components/Hero'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Seller from "./Seller/Seller";
import Style from "../app/Style/Style"
import Arrival from './Components/Arrival'
import Caeousal from './Components/Caeousal'
// import AddressForm from './Components/AddressForm'
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe, Stripe } from "@stripe/stripe-js";
// import CheckoutForm from "@/app/Components/CheckoutForm";


// const stripePromise: Promise<Stripe | null> = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
// );
// const res = await fetch("http://localhost:3000/api/shipengine")
// const message = await res.json()

// console.log(message);

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
       {/* <Elements stripe={stripePromise}> */}
      {/* <CheckoutForm /> */}
    {/* </Elements> */}
       <Footer/>
    </div>
  )
}

export default Home
