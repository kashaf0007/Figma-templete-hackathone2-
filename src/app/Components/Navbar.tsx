
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonCircleOutline, IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

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
                <Link href={"/"}>
                    <h1 className='text-4xl font-extrabold bg-white text-black px-24'>
                        SHOP.CO
                    </h1>
                </Link>
                <nav className='hidden md:flex space-x-8 py-3  items-center'>
                    <Link href="/Sidebar" className='text-gray-900 text-xl hover:text-black float-start underline'>Shop</Link>
                    <div className='text-black text-xl '>
                        <IoIosArrowDown />
                    </div>
                    <Link href="/Sidebar" className='text-gray-900 text-xl hover:text-black float-start'>On Sale </Link>
                    <Link href="#arrival" className='text-gray-900 text-xl hover:text-black float-start'>New Arrivals</Link>
                    <Link href='#brand' className='text-gray-900 text-xl hover:text-black float-start'>Brands</Link>

                </nav>
                <div className='flex items-center space-x-6'>
                      <div className='hidden lg:flex items-center bg-slate-200 rounder-md px-3 py-2'>
                        <input
                            type="text" placeholder="What are you looking for?" className='bg-white outline-none text-sm' />
                        <IoSearch />
                    </div>  
             
        
                    <Link href='/Cart'>
                        <LuShoppingCart className='text-3xl ' />
                    </Link>
                </div>
                <Link href='/Login'>
                <IoPersonCircleOutline className='text-3xl' />
                </Link>
            </div>
        </header>
    )
}

export default Navbar