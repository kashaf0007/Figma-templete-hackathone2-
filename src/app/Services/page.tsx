import React from 'react'
import { BsCashCoin } from 'react-icons/bs'
import { FaExchangeAlt } from 'react-icons/fa'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { GiSettingsKnobs } from 'react-icons/gi'
import Link from 'next/link'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <div className=' justify-center items-center flex mt-20 mb-7 gap-80'>
       <Link href={'/Services'}> <p className='font-semibold text-black '>SERVICES</p></Link>
       <Link href={'/Reviews'}> <p className='font-semibold text-black '>Rating & Reviews</p></Link>
                                <Link href='/FAQ' >
                                <p className='font-semibold text-black '>
                                FAQs
                                </p>
                               </Link> 
                               
                              </div>
                              <hr className="text-black"></hr>

                              <div className='flex justify-between items-center px-8 py-4 mt-4 mb-3' >
            {/* logo */}
            <h1 className='text-2xl font-medium  text-black px-24'>
               All Reviews(451)
            </h1>
    
            {/* <div className='flex items-center space-x-6'>

            <GiSettingsKnobs className='font-semibold text-2xl' />
            <Image src={"/latest.png"} alt={"product-img"} height={50} width={50}></Image>
            <Image className='text-black' src={"/Write a Review.png"} alt={"product-img"} height={100} width={120}></Image>
                    </div> */}
                    </div>   
                     
<hr></hr>
        <div>
         <section className="body-font mb-[100px] mt-[100px]">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-10">
          <h1 className="scroll-m-10 text-3xl font-extrabold lg:text-4xl text-[#477468]">
            Services
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#477468] inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {/* Delivery */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-full p-6 mb-5 flex flex-col justify-between items-center rounded-lg">
              <div className="w-24 h-24 inline-flex items-center justify-center mb-4  border-4 border-[#82a9bf] rounded-full group-hover:animate-bounce duration-100">
                <MdOutlineDeliveryDining  className="text-[#477468] text-4xl" />
              </div>
              <h2 className="text-[#477468] text-lg font-bold tracking-tight lg:text-xl mb-3">
            DAY AND NIGHT DELIEVERY
              </h2>
              <p className="text-[#82a9bf] text-lg font-light tracking-tight transition-colors">
                We have a fast delivery in your town.Delievery you can trust.Order your favorite item ,or essentials with just a click! .You stay at home ,We deliever!.
              </p>
            </div>
          </div>

  {/* Delivery */}
  <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-full p-6 mb-5 flex flex-col justify-between items-center rounded-lg">
              <div className="w-24 h-24 inline-flex items-center justify-center mb-4  border-4 border-[#82a9bf] rounded-full group-hover:animate-bounce  transition-all duration-100">
                <BsCashCoin  className="text-[#477468] text-4xl" />
              </div>
              <h2 className="text-[#477468] text-lg font-bold tracking-tight lg:text-xl mb-3">
           CASH PAYMENT ,ATM,OR CARDS
              </h2>
              <p className="text-[#82a9bf] text-lg font-light tracking-tight  flex-shrink-0 transition-colors">
                The act of transferring money, goods,or services from one another .you can pay with card or ATM or Cash .
              </p>
            </div>
          </div>
          {/* Exchange */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-full p-6 mb-5 flex flex-col justify-between items-center rounded-lg">
              <div className="w-24 h-24 inline-flex items-center justify-center mb-4  border-4 border-[#82a9bf] rounded-full group-hover:animate-bounce transition-all duration-100">
                <FaExchangeAlt className="text-[#477468] text-4xl" />
              </div>
              <h2 className="text-[#477468] text-lg font-bold tracking-tight lg:text-xl mb-3">
                 Exchange ITEM
              </h2>
              <p className="text-[#82a9bf] text-lg font-light tracking-tight transition-colors">
                A greate return policy can help you retain custumers and increase brand loyality.Custumers are likely to make a purchase when  they know that they can easily exchange a product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    <Footer/>
    </div>
  )
}

export default Services
