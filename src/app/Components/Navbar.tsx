
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoPersonCircleOutline } from "react-icons/io5";
import Link from 'next/link';

const Navbar = () => {
  return (
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
            <Link href='/'>
            <h1 className='text-2xl font-extrabold bg-white text-black px-24'>
               SHOP.CO
            </h1>
            </Link>
            <nav className='hidden md:flex space-x-8 py-3  items-center'>
                <Link href="/Sidebar" className='text-gray-900 hover:text-black float-start underline'>Shop</Link>
                <div className='text-black text-xl '>
                <IoIosArrowDown />
                </div>
                <Link href="#ProductPage"className='text-gray-900 hover:text-black float-start'>On Sale </Link>
                <a href="#arrival"  className='text-gray-900 hover:text-black float-start'>New Arrivals</a>
                <a href='#brand' className='text-gray-900 hover:text-black float-start'>Brands</a>

            </nav>
            <div className='flex items-center space-x-6'>
                <div className='hidden lg:flex items-center bg-slate-200 rounder-md px-3 py-2'>
                    <input 
                    type="text" placeholder="What are you looking for?" className='bg-white outline-none text-sm'/>
                    <IoSearch />
                    </div>
                
                    <Link href='/Cart'>
                    <LuShoppingCart className='text-3xl '/>
                    </Link>
                    </div>
                    <IoPersonCircleOutline className='text-3xl' />
                    </div>
</header>     
 )
 }

export default Navbar