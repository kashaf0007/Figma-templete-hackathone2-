"use client"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaStar } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image"; 
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Sidebar() { 
  return (
<div >
  <Navbar/>

    <div className='mb-[100px] mt-[100px]'>
        
      <div className="text-center mb-10 font-bold">
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
        className={`h-full w-full md:w-64 bg-gray-100 p-5 shadow-lg md:rounded-lg border border-gray-300 md:ml-10 mt-10  md:block`}
      >
        <div className="filter-section">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Filter</h2>
            <IoIosArrowDown  />
          </div>
          <hr className="my-4 border-t border-gray-600" />
          
          {/* Clothes Category */}
          <div className="clothes-category">
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-xl  text-black">T-Shirts <IoIosArrowForward /></li>
              <li className="flex justify-between items-center text-xl  text-black">Shorts <IoIosArrowForward /></li>
              <li className="flex justify-between items-center text-xl  text-black">Shirts <IoIosArrowForward /></li>
              <li className="flex justify-between items-center text-xl  text-black">Hoodie <IoIosArrowForward /></li>
              <li className="flex justify-between items-center text-xl  text-black">Jeans <IoIosArrowForward /></li>
            </ul>
          </div>
          
          <hr className="my-3 border-t border-gray-600" />
          
          {/* Colors */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Colors</h2>
            <IoIosArrowDown />
          </div>
          <div className="mt-5 grid grid-cols-5 gap-4">
            <div className="h-10 w-10 rounded-full bg-black"></div>
            <div className="h-10 w-10 rounded-full  bg-pink-400"></div>
            <div className="h-10 w-10 rounded-full bg-red-500"></div>
            <div className="h-10 w-10 rounded-full bg-blue-500"></div>
            <div className="h-10 w-10 rounded-full bg-yellow-500"></div>
            <div className="h-10 w-10 rounded-full bg-green-500"></div>
            <div className="h-10 w-10 rounded-full bg-purple-500"></div>
            <div className="h-10 w-10  rounded-full bg-indigo-500"></div>
            <div className="h-10 w-10 rounded-full bg-teal-500"></div>
            <div className="h-10 w-10 rounded-full bg-gray-500"></div>
          </div>

          <hr className="my-4 border-t border-gray-600" />
          
          {/* Size */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Size</h2>
            <IoIosArrowDown className="text-2xl" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="h-10 flex justify-center items-center border rounded-full border-gray-600 text-black hover:bg-black hover:text-white cursor-pointer">
              XX-Small
            </div>
            <div className="h-10 flex justify-center items-center border rounded-full border-gray-600 text-black hover:bg-black hover:text-white cursor-pointer">
              X-Small
            </div>
            <div className="h-10 flex justify-center items-center border rounded-full border-gray-600 text-black hover:bg-black hover:text-white cursor-pointer">
              Small
            </div>
            <div className="h-10 flex justify-center items-center border rounded-full border-gray-600 text-black hover:bg-black hover:text-white cursor-pointer">
              Medium
            </div>
            <div className="h-10 flex justify-center items-center border rounded-full border-gray-600 text-black hover:bg-black hover:text-white cursor-pointer">
              Large
            </div>
            <div className="h-10 flex justify-center items-center border rounded-full border-gray-600 text-black hover:bg-black hover:text-white cursor-pointer">
              X-Large
            </div>
            <div className="h-10 flex justify-center items-center border rounded-full border-gray-600 text-black hover:bg-black hover:text-white cursor-pointer">
              XX-Large
            </div>
            <div className="h-10 flex justify-center items-center border rounded-full border-gray-600 text-black hover:bg-black hover:text-white cursor-pointer">
              3X-Large
            </div>
            <div className="h-10 flex justify-center items-center border rounded-full border-gray-600 text-black hover:bg-black hover:text-white cursor-pointer">
              4X-Large
            </div>
          </div>

          <hr className="my-4 border-t border-gray-600" />
          
          {/* Dress Style */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Dress Style</h2>
            <IoIosArrowDown className="text-2xl" />
          </div>
          <ul className="space-y-3 mt-3">
            <li className="flex justify-between items-center text-base text-black">Casual<IoIosArrowForward /></li>
            <li className="flex justify-between items-center text-base text-black">Formal<IoIosArrowForward /></li>
            <li className="flex justify-between items-center text-base text-black">Party<IoIosArrowForward /></li>
            <li className="flex justify-between items-center text-base text-black">Gym<IoIosArrowForward /></li>
          </ul>

          <div className="mt-8 flex justify-center">
            <button className="w-full h-12 bg-black text-white rounded-full hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              Apply Filter
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-5 md:ml-10 mt-10">
        <h1 className="font-extrabold text-3xl mb-5 flex justify-between items-center">
          Casual
          <span className="text-2xl font-normal text-gray-800">
            Show 1-10 of 100 Products Short By : <span className="text-black font-semibold">Most Popular</span>
          </span>
          <FaChevronDown />
        </h1>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Category */}
          {[...Array(9)].map((_, index) => (
            <div key={index} className="bg-slate-50 p-4 rounded-lg shadow-md">
             
              <Link href="#arrival">
                <Image 
                 
                 src={`/arrival${index + 1}.png`} 
                  alt={`arrival${index + 1}`} 
                  width={400} 
                  height={650} 
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

          <button className="px-4 py-2 text-3xl bg-[#F2F0F1] text-black rounded-lg hover:bg-gray-300 hover:text-black   flex ">
          <IoArrowBack className="mt-1 text-3xl"/>
            Previous

          </button>

          <div className="flex space-x-2">
            <button className="px-6 py-1 bg-gray-300 text-black rounded-full hover:bg-black hover:text-white transition duration-300">
              1
            </button>
            <button className="px-6 py-1 bg-gray-300 text-black rounded-full hover:bg-black hover:text-white transition duration-300">
              2
            </button>
            <button className="px-6 py-1 bg-gray-300 text-black rounded-full hover:bg-black hover:text-white transition duration-300">
              3
            </button>
          </div>


          <button className="px-4 py-2 text-3xl bg-[#F2F0F1] text-black rounded-lg hover:bg-gray-300 hover:text-black transition duration-300 flex mt-4">
            Next
            <IoMdArrowRoundForward className="mt-1 gap-3 text-3xl"/>
          </button>
          </div>
        </div>
        
  </div>
  </div>
  <Footer/>
</div>
   
   
  );
}





