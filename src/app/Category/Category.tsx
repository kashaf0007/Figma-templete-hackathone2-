"use client"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaStar } from 'react-icons/fa';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoPersonCircleOutline } from "react-icons/io5";
import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";


export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  return (

    <header className='bg-white shadow-sm border-b mx-auto flex flex-col w-1440px'>
    <div className='bg-black text-white py-2  text-sm flex justify-between items-center px-8 w-full'>
        <div className='text-center flex-1 '>
Sign up and get 20% off to your first order.
<a href='#' className='underline hover-text-slate-300' > Sign Up Now </a>
    </div>
    
        <div className='flex items-center space-x-6'>
                <div className='hidden lg:flex items-center bg-slate-200 rounder-md px-3 py-2'>
                    <input 
                    type="text" placeholder="What are you looking for?" className='bg-white outline-none text-sm'/>
                    <IoSearch />
                    </div>
                    <LuShoppingCart className='text-3xl'/>
                    <IoPersonCircleOutline className='text-3xl' />
                    </div>
                    <div className='text-white text-xl '>
        <RxCross2 />
        </div>

                   
        
        </div>
        <div className='flex justify-between items-center px-8 py-4' >
            <h1 className='text-2xl font-extrabold bg-white text-black px-24'>
               SHOP.CO
            </h1>
            <nav className='hidden md:flex space-x-8 py-3  items-center'>
                <a href='#' className='text-gray-900 hover:text-black float-start underline'>Shop</a>
                <div className='text-black text-xl '>
                <IoIosArrowDown />
                </div>
                <a href='#' className='text-gray-900 hover:text-black float-start'>On Sale </a>
                <a href='#' className='text-gray-900 hover:text-black float-start'>New Arrivals</a>
                <a href='#' className='text-gray-900 hover:text-black float-start'>Brands</a>

            </nav>
            </div>
    <div className='mb-[100px] mt-[100px]'>
        
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-black">
          ENJOY WITH THE SHOPPING
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-black inline-flex" />
        </div>
      </div>
    <div className="flex flex-col md:flex-row">
      {/* Sidebar Section */}
      <div
        className={`h-full w-full md:w-64 bg-gray-100 p-5 shadow-lg md:rounded-lg border border-gray-300 md:ml-10 mt-10 ${isSidebarOpen ? "block" : "hidden"} md:block`}
      >
        <div className="filter-section">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Filter</h2>
            <IoIosArrowDown className="cursor-pointer" />
          </div>
          <hr className="my-4 border-t border-gray-300" />
          
          {/* Clothes Category */}
          <div className="clothes-category">
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-base text-gray-700">T-Shirts <IoIosArrowForward /></li>
              <li className="flex justify-between items-center text-base text-gray-700">Shorts <IoIosArrowForward /></li>
              <li className="flex justify-between items-center text-base text-gray-700">Shirts <IoIosArrowForward /></li>
              <li className="flex justify-between items-center text-base text-gray-700">Hoodie <IoIosArrowForward /></li>
              <li className="flex justify-between items-center text-base text-gray-700">Jeans <IoIosArrowForward /></li>
            </ul>
          </div>
          
          <hr className="my-4 border-t border-gray-300" />
          
          {/* Colors */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Colors</h2>
            <IoIosArrowDown />
          </div>
          <div className="mt-4 grid grid-cols-5 gap-4">
            <div className="h-8 w-8 rounded-full bg-black"></div>
            <div className="h-8 w-8 rounded-full bg-pink-400"></div>
            <div className="h-8 w-8 rounded-full bg-red-500"></div>
            <div className="h-8 w-8 rounded-full bg-blue-500"></div>
            <div className="h-8 w-8 rounded-full bg-yellow-500"></div>
            <div className="h-8 w-8 rounded-full bg-green-500"></div>
            <div className="h-8 w-8 rounded-full bg-purple-500"></div>
            <div className="h-8 w-8 rounded-full bg-indigo-500"></div>
            <div className="h-8 w-8 rounded-full bg-teal-500"></div>
            <div className="h-8 w-8 rounded-full bg-gray-500"></div>
          </div>

          <hr className="my-4 border-t border-gray-300" />
          
          {/* Size */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Size</h2>
            <IoIosArrowDown />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              XX-Small
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              X-Small
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              Small
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              Medium
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              Large
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              X-Large
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              XX-Large
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              3X-Large
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              4X-Large
            </div>
          </div>

          <hr className="my-4 border-t border-gray-300" />
          
          {/* Dress Style */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Dress Style</h2>
            <IoIosArrowDown />
          </div>
          <ul className="space-y-3 mt-3">
            <li className="flex justify-between items-center text-base text-gray-700">Casual<IoIosArrowForward /></li>
            <li className="flex justify-between items-center text-base text-gray-700">Formal<IoIosArrowForward /></li>
            <li className="flex justify-between items-center text-base text-gray-700">Party<IoIosArrowForward /></li>
            <li className="flex justify-between items-center text-base text-gray-700">Gym<IoIosArrowForward /></li>
          </ul>

          <div className="mt-8 flex justify-center">
            <button className="w-full h-12 bg-black text-white rounded-full hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              Apply Filter
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Sidebar Button on Mobile */}
      <div className="md:hidden flex justify-end p-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-black text-white rounded-full"
        >
          {isSidebarOpen ? "Close" : "Open"} Sidebar
        </button>
      </div>

      <div className="flex-1 p-5 md:ml-10 mt-10">
        <h1 className="font-bold text-2xl mb-5 flex justify-between items-center">
          Casual
          <span className="text-sm font-normal text-gray-400">
            Show 1-10 of 100 Products Short By : <span className="text-black font-semibold">Most Popular</span>
          </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Category */}
          {[...Array(9)].map((_, index) => (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Link href="/Category">
                <Image 
                 
                 src={`/Category${index + 1}.png`} 
                  alt={`Category${index + 1}`} 
                  width={200} 
                  height={250} 
                  className="w-full h-36 object-cover rounded-md" 
                />
               </Link>
                   
            
              <div className="mt-4 text-left">
                <h3 className="text-lg font-semibold">Product {index + 1}</h3>
                <div className="flex items-center space-x-1 mt-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-gray-400" />
                </div>
                <p className="text-base text-gray-700 mt-2">Brand</p>
                <p className="text-xl font-bold text-gray-700 mt-2">$145</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-300 hover:text-black transition duration-300">
            Previous
          </button>

          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-300 text-black rounded-full hover:bg-black hover:text-white transition duration-300">
              1
            </button>
            <button className="px-3 py-1 bg-gray-300 text-black rounded-full hover:bg-black hover:text-white transition duration-300">
              2
            </button>
            <button className="px-3 py-1 bg-gray-300 text-black rounded-full hover:bg-black hover:text-white transition duration-300">
              3
            </button>
          </div>


          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-300 hover:text-black transition duration-300">
            Next
          </button>
          </div>
        </div>
        
  </div>
  </div>

  {/* footer */}
  <div className="bg-black items-center ">
            <img src="footer-bar.png" alt="footerbar"/>
            </div>



      <div className="bg-[#F0F0F0] w-full h-auto pt-16 pb-8 px-4 sm:px-8 lg:px-20">
        <div className="max-w-[1440px] max-h-[499px] mx-auto pt-20 pb-0 flex flex-col lg:flex-row justify-between items-start lg:h-[499px]  lg:space-y-0">
          {/* Company Info Section */}
          <div className="flex flex-col gap-4 justify-start items-start ">
            <h3 className="font-satoshi w-[167px] h-[23px] text-4xl font-bold mb-4">SHOP.CO</h3>
            <p className="font-satoshi w-[248px] h-[66px] text-sm text-[#00000099] mb-8">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
          
            <div className="flex gap-4">
              <div className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center">
                <IoLogoTwitter className="text-xl" />
              </div>
              <div className="h-[35px] w-[35px] rounded-full bg-black text-white flex justify-center items-center">
                <RiFacebookFill className="text-xl" />
              </div>
              <div className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center">
                <FaInstagram className="text-xl" />
              </div>
              <div className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center">
                <IoLogoGithub className="text-xl" />
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex flex-wrap lg:w-2/3 justify-between">
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h5 className="font-satoshi text-lg font-semibold mb-4 tracking-wide">COMPANY</h5>
              <ul className="font-satoshi text-sm text-[#00000099] space-y-4">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h5 className="font-satoshi text-lg font-semibold mb-4 tracking-wide">HELP</h5>
              <ul className="font-satoshi text-sm text-[#00000099] space-y-4">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h5 className="font-satoshi text-lg font-semibold mb-4 tracking-wide">FAQ</h5>
              <ul className="font-satoshi text-sm text-[#00000099] space-y-4">
                <li>Account</li>
                <li>Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h5 className="font-satoshi text-lg font-semibold mb-4 tracking-wide">RESOURCES</h5>
              <ul className="font-satoshi text-sm text-[#00000099] space-y-4">
                <li>Free eBooks</li>
                <li>Developer Tutorials</li>
                <li>How-to Blogs</li>
                <li>YouTube Playlists</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#0000001A] mt-0 mb-4"></div>
{/* footer */}
        <div className="flex justify-between items-center ">
          <div className="font-satoshi text-sm text-[#00000099]">Shop.co © 2000-2023, All Rights Reserved</div>
          <Image src={"/Badge (3).jpg"} alt={"Paypal.jpg"} height={30} width={20} />
          <Image src={"/Mastercard.jpg"} alt={"Paypal.jpg"} height={30} width={20} />
          <Image src={"/paypal.jpg"} alt={"Paypal.jpg"} height={30} width={20} />
          <Image src={"/Badge.jpg"} alt={"Paypal.jpg"} height={30} width={20} />

          <Image src={"/Badge (2).jpg"} alt={"Paypal.jpg"} height={30} width={20} />
        </div>
      </div>
  
  
</header>
   
   
   
  );
}

