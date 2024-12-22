import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { LuShoppingCart } from "react-icons/lu";
import { IoPersonCircleOutline } from "react-icons/io5";


const Cart = () => {
  return (
<div id='cart'>
     <header className='bg-white shadow-sm border-b mx-auto flex flex-col w-1440px'>
      <div className='bg-black text-white py-2  text-sm flex justify-between items-center px-8 w-full'>
          <div className='text-center flex-1 '>
      Sign up and get 20% off to your first order.
  <a href='#' className='underline hover-text-slate-300' > Sign Up Now </a>
      </div>
      
  
          <div className='text-white text-xl '>
          <RxCross2 />
          </div>
          
          </div>
          <div className='flex justify-between items-center px-8 py-4' >
              {/* logo */}
              <h1 className='text-2xl font-extrabold bg-white text-black px-24'>
                 SHOP.CO
              </h1>
              <nav className='hidden md:flex space-x-8 py-3  items-center'>
                  <a href="#category" className='text-gray-900 hover:text-black float-start underline'>Shop</a>
                  <div className='text-black text-xl '>
                  <IoIosArrowDown />
                  </div>
                  <a href="#cart"className='text-gray-900 hover:text-black float-start'>On Sale </a>
                  <a href="#arrival"  className='text-gray-900 hover:text-black float-start'>New Arrivals</a>
                  <a href='#brand' className='text-gray-900 hover:text-black float-start'>Brands</a>
  
              </nav>
              <div className='flex items-center space-x-6'>
                  <div className='hidden lg:flex items-center bg-slate-200 rounder-md px-3 py-2'>
                      <input 
                      type="text" placeholder="What are you looking for?" className='bg-white outline-none text-sm'/>
                      <IoSearch />
                      </div>
                      <LuShoppingCart className='text-3xl '/>
                      <IoPersonCircleOutline className='text-3xl' />
                      </div>
                      </div>

    <div>
      <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
  <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
    <div className="grid grid-cols-12">
      <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
        <div className="flex items-center justify-between pb-8 border-b border-gray-300">
          <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
            Shopping Cart
          </h2>
          <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
            3 Items
          </h2>
        </div>
        <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
          <div className="col-span-12 md:col-span-7">
            <p className=" text-4xl  font-extrabold  leading-8 text-black">
        YOUR CART
            </p>
          </div>

        </div>
        <div className='w-358 h-389 mt-203 ml-16 r-20px border-1 p-14px gap-16 '>
        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
          <div className="w-full md:max-w-[126px]">
            <img
              src="/Frame 33 (2).png"
              alt="T-shirt"
              className="mx-auto rounded-xl object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full">
            <div className="md:col-span-2">
              <div className="flex flex-col max-[500px]:items-center gap-3">
                <h6 className="font-bold text-base leading-7 text-black">
                Gradient Graphic T-shirt
                </h6>
                <h2 className="font-normal text-base leading-7 text-gray-500">
                  <div>Size:Large</div>
                  <div>Color:White</div>
                </h2>
                <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                  $145
                </h6>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
              <div className="flex items-center h-full">
                <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                  placeholder={"1"}
                />
                <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
              <div className="font-bold text-lg leading-8 text-red-600 text-center transition-all duration-300 group-hover:text-red-600">
              $145.00
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
          <div className="w-full md:max-w-[126px]">
            <img
              src="/Checkered-shirt.jpg"
              alt="Checkered-shirt"
              className="mx-auto rounded-xl object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full">
            <div className="md:col-span-2">
              <div className="flex flex-col max-[500px]:items-center gap-3">
                <h6 className="font-bold text-base leading-7 text-black">
                Checkered Shirt
                </h6>
                <h2 className="font-normal text-base leading-7 text-gray-500">
                 <div>Size:Medium</div>
                 <div>Color:Red</div>
                </h2>
                <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                  $180
                </h6>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
              <div className="flex items-center h-full">
                <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                  placeholder={"2"}
                />
                <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
              <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
                $180
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
          <div className="w-full md:max-w-[126px]">
            <img
              src="/Category4.png"
              alt="SKINNY FIT JEANS"
              className="mx-auto rounded-xl object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full">
            <div className="md:col-span-2">
              <div className="flex flex-col max-[500px]:items-center gap-3">
                <h6 className="text-base leading-7 text-black font-bold">
                SKINNY FIT JEANS
                </h6>
                <h2 className="font-normal text-base leading-7 text-gray-500">
           <div>Size:Large</div>
           <div>Color:Blue</div>
                </h2>
                <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                  $120.00
                </h6>
              </div>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
              <div className="flex items-center h-full">
                <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                  placeholder={"1"}
                />
                <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
              <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
                $120.00
              </p>
            </div>
          </div>
          </div>
      {/* </div> */}
      <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-2l mx-auto lg:pl-8 py-24">
        <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
          Order Summary
        </h2>
        <div className="mt-8">
          <div className="flex items-center justify-between pb-6">
            <p className="font-normal text-lg leading-8 text-black">Subtotal</p>
            <p className="font-medium text-lg leading-8 text-black">$565</p>
          </div>
        
          <div className="flex items-center justify-between pb-6">
            <p className="font-normal text-lg leading-8 text-black">Discount(-20)</p>
            <p className="font-medium text-lg leading-8 text-black">-$113</p>
          </div>
     
          <div className="flex items-center justify-between pb-6">
            <p className="font-normal text-lg leading-8 text-black">Delivery Fee</p>
            <p className="font-medium text-lg leading-8 text-black">$15</p>
          </div>
        <hr></hr>
        <div className="flex items-center justify-between pb-6">
            <p className="font-normal text-lg leading-8 text-black">Total</p>
            <p className="font-medium text-lg leading-8 text-black">$467</p>
       </div>

    


            <div className="flex items-center border-b border-gray-200">
             <img src='Frame 3.png'></img>
             
             <img src='Frame 100.png' className='ml-72'></img>
            </div>
         <div className='"w-full text-center bg-white rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700"'>
            <img src='Frame 14.png'></img>
         </div>
          </div>
          </div>
          </div>
        </div>
        </div>
        
       
</section>

    </div>
    </header>
    </div>
  )
}

export default Cart
