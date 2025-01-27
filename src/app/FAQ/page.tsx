import React from 'react'
import Navbar from '../Components/Navbar'
import Head from 'next/head'
import Link from 'next/link'

const FAQ = () => {
  return (
    <div>
        <Navbar/>
        <div className=' justify-center items-center flex mt-20 mb-7 gap-80'>
       <Link href={'/Services'}> <p className='font-semibold text-black hover:line-clamp-3'>SERVICES</p></Link>
                                <p className='font-semibold text-black hover:line-clamp-3'>Rating & Reviews</p>
                                <Link href='/FAQ' >
                                <p className='font-semibold text-black hover:line-clamp-3 '>
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
        <div className="text-center mt-12 mb-6">
        <h1 
          className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] text-center" >
          FAQ'S
        </h1>
      </div>
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <Head>
        <title>FAQ</title>
        <meta name="description" content="Frequently asked questions" />
      </Head>

      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>

      <div className="flex flex-col space-y-4">
        <details className="bg-gray-100 p-4 rounded">
          <summary className="text-lg font-bold">What is your return policy?</summary>
          <p className="text-gray-600">
            You can return or exchange an item within 30 days of delivery.
          </p>
        </details>

        <details className="bg-gray-100 p-4 rounded">
          <summary className="text-lg font-bold">How do I track my order?</summary>
          <p className="text-gray-600">
            You can track your order by logging into your account and viewing your order history.
          </p>
        </details>

        <details className="bg-gray-100 p-4 rounded">
          <summary className="text-lg font-bold">What forms of payment do you accept?</summary>
          <p className="text-gray-600">
            We accept all major credit cards, including Visa, Mastercard.
          </p>
        </details>

        <details className="bg-gray-100 p-4 rounded">
          <summary className="text-lg font-bold">How do I reset my password?</summary>
          <p className="text-gray-600">
            You can reset your password by clicking on the "Forgot Password" link on the login page.
          </p>
        </details>
        <details className="bg-gray-100 p-4 rounded">
          <summary className="text-lg font-bold">Can I Cancel my Order?</summary>
          <p className="text-gray-600">
          Yes, within 24 hours of placement.
          </p>
        </details>
      
      </div>
    </div>
  


    </div>
  )
}

export default FAQ
