import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";


const Productpage = () => {
  return (
  <div>
   <header className='bg-white shadow-sm border-b mx-auto flex flex-col w-1440px'>
    <div className='bg-black text-white py-2  text-sm flex justify-between items-center px-8 w-full'>
        <div className='text-center flex-1 '>
<p>Sign up and get 20% off to your first order.</p>
<a href='#' className='underline hover-text-slate-300' > Sign Up Now </a>
    </div>
    
        <div className='text-white text-xl '>
        <RxCross2 />
        </div>
        
        </div>
        <div className='flex justify-between items-center px-8 py-4 mt-4 mb-3' >
            {/* logo */}
            <h1 className='text-2xl font-extrabold bg-white text-black px-24'>
               SHOP.CO
            </h1>
            <nav className='hidden md:flex space-x-8 py-3  items-center'>
                <a href='#category' className='text-gray-900 hover:text-black float-start underline'>Shop</a>
                <div className='text-black text-xl '>
                <IoIosArrowDown />
                </div>
                <a href='#cart' className='text-gray-900 hover:text-black float-start'>On Sale </a>
                <a href='#arrival' className='text-gray-900 hover:text-black float-start'>New Arrivals</a>
                <a href='#brand' className='text-gray-900 hover:text-black float-start'>Brands</a>

            </nav>
            <div className='flex items-center space-x-6'>
                <div className='hidden lg:flex items-center bg-slate-200 rounder-md px-3 py-2'>
                    <input 
                    type="text" placeholder="What are you looking for?" className='bg-white outline-none text-sm'/>
                    <IoSearch />
                    </div>
                    <LuShoppingCart className='text-3xl'/>
                    <IoPersonCircleOutline className='text-3xl' />
                    </div>
                    </div>
<hr></hr>
                    <div className='flex justify-start mt-5 mb-9 bg-white p-4 ml-44 '>
                        <h1 className='bg-white text-gray-600'>Home</h1>
                        <MdArrowForwardIos className=' text-gray-600 mt-1'/>
                        <h1 className='bg-white  text-gray-600'>Shop</h1>
                        <MdArrowForwardIos  className=' text-gray-600 mt-1'/>
                        <h1 className='bg-white  text-gray-600'>Mens</h1>
                        <MdArrowForwardIos className=' text-gray-600 mt-1'/>
                        <h1 className='bg-white  text-gray-600'>T-shirts</h1>

                    </div>
                    <div className='flex justify-evenly mt-10 ml-8'>
                    
                    {/* left */}
                    <div className='w-[152px] ' >
                    <Image src={"/product-shirt2.png"} alt={"product-img"} height={100} width={100} className='sm:w-full w-[100px] h-[100px] sm:h-[150px] ml-44 '/>
                    <Image src={"/product-shirt3.png"} alt={"product-img"} height={100} width={100} className='sm:w-full h-[150px] sm:mt-3 ml-44'/>
                    <Image src={"/product-shirt4.png"} alt={"product-img"} height={100} width={100} className='sm:w-full h-[150px] sm:mt-3 ml-44'/>
                    </div>
                    <div className='w-[444px] h-[500px] ml-60'>
                    <Image src={"/product-shirt.png"} alt={"product-img"} height={100} width={500} className='w-full h-[95%] ' />
                    </div>
                    {/* </div> */}
                    {/* right */}
                    <div>
                        <h2 className='text-3xl md:text-4xl font-extrabold mt-3 ml-28'>ONE LIFE GRAPHIC T-SHIRT </h2>
                        <div className="flex items-center space-x-1 mt-2 ml-28">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>


                        <p className='mt-1 font-bold ml-28'>$260 $300</p>
                        <Image src={"/off.png"} alt={"product-img"} height={100} width={100} className='ml-32  '/>
                        <p className='ml-28'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                        <hr className='ml-28'></hr>
                        <div className=' mt-5 mb-3 ml-28'>
                            <h2 className='text-gray-500'>Select Colors</h2>
                            <div className='flex space-x-4 mt-2'>
                            <div className='w-[35px] h-[35px] bg-[#4f4631] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity-5 hover:opacity-100 cursor-pointer '/></div>
                            <div className='w-[35px] h-[35px] bg-[#314f4a] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity-5 hover:opacity-100 cursor-pointer '/></div>
                            <div className='w-[35px] h-[35px] bg-[#31344f] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity-5 hover:opacity-100 cursor-pointer '/></div>
                        </div>
                        </div>
                        <hr className='ml-28px'></hr>
                        <div className='mt-4 ml-28'>
                            <p className='text-gray-500'>Choose Size</p>
                            <div className='flex space-x-3 text-gray-500 mt-2'>
                            <div className='w-[70px] h-[40px] flex justify-center items-center bg-[#f0f0f0] rounded-[62px] text-gray-500'>Small</div>
                            <div className='w-[70px] h-[40px] flex justify-center items-center bg-[#f0f0f0] rounded-[62px] text-gray-500'>Medium</div>
                            <div className='w-[70px] h-[40px] flex justify-center items-center bg-[#f0f0f0] rounded-[62px] text-gray-500'>Large</div>
                            <div className='w-[70px] h-[40px] flex justify-center items-center bg-[#f0f0f0] rounded-[62px] text-gray-500'>X-Large</div>
                 
                          </div>

                            </div>
                            {/* buttons */}
                            <div className='flex justify-start items-center ml-28'>
                            <div className='w-[120px] h-[40px] flex justify-between p-3  items-center rounded-[62px] bg-[#f0f0f0]  text-black'>
                                <FaMinus />
                                1
                                <FaPlus />
                            </div>
                            <div className='"w-full text-center bg-white rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700"'>
                             <Image src='/Frame 14.png' alt='check' height={100} width={100}></Image>
                           </div>
                        </div>
         </div>

      
</div>

</header>     

                  <div className='justify-center items-center flex mt-20 mb-7 gap-80'>
                                <p className='font-semibold '> Product Details</p>
                                <p className='font-semibold '>Rating & Reviews</p>
                                <p className='font-semibold '>FAQs</p>
                              </div>
                              <hr></hr>

                              <div className='flex justify-between items-center px-8 py-4 mt-4 mb-3' >
            {/* logo */}
            <h1 className='text-2xl font-medium  text-black px-24'>
               All Reviews(451)
            </h1>
    
            <div className='flex items-center space-x-6'>

            <GiSettingsKnobs className='font-semibold text-2xl' />
            <Image src={"/latest.png"} alt={"product-img"} height={50} width={50}></Image>
            <Image className='text-black' src={"/Write a Review.png"} alt={"product-img"} height={100} width={120}></Image>
                    </div>
                    </div>     
<hr></hr>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-2">
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
         <div>
          </div>
          <div className="flex items-center">
                  <FaStar className="text-yellow-500 mb-4 " />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                </div>

          <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-1 font-bold flex">
              Samantha D.
              <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
            </h2>
            <p className="leading-relaxed text-base">
            I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to shirt.
            </p>
            <a className="mt-3 inline-flex items-center">
              Posted on August 1,2023
            </a>
          </div>
        </div>
     </div>
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
        <div className="flex items-center">
                  <FaStar className="text-yellow-500 mb-4 " />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold flex">
              Alex M.
              <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
            </h2>
            <p className="leading-relaxed text-base">
            The T-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I am quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.
            </p>
            <a className="mt-3 inline-flex items-center">
              Posted on August 15,2023
           
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
         <div>
          </div>
          <div className="flex items-center">
                  <FaStar className="text-yellow-500 mb-4 " />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold flex">
              Ethan R.
              <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
            </h2>
            <p className="leading-relaxed text-base">
            This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designers touch in every aspect of this shirt.
            </p>
            <a className="mt-3 inline-flex items-center">
              Posted on August 16,2023
            </a>
          </div>
        </div>
     </div>
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
        <div className="flex items-center">
                  <FaStar className="text-yellow-500 mb-4 " />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-bold  mb-3 flex">
              Olivia P.

              <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
            </h2>
            <p className="leading-relaxed text-base">
            As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It is evident that the designer poured their creativity into making this t-shirt stand out.
            </p>
            <a className="mt-3 inline-flex items-center">
              Posted on August 17,2023
           
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
         <div>
          </div>
          <div className="flex items-center">
                  <FaStar className="text-yellow-500 mb-4 " />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                  <FaStar className="text-yellow-500 mb-4" />
                </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font  mb-2 font-bold flex">
              Liam K.
              <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
            </h2>
            <p className="leading-relaxed text-base">
            This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designers skill. It is like wearing a piece of art that reflects my passion for both design and fashion.
            </p>
            <a className="mt-3 inline-flex items-center">
              Posted on August 18,2023
            </a>
          </div>
        </div>
     </div>
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
        <div className="flex items-center">
                  <FaStar className="text-yellow-500 sm:mb-4 " />
                  <FaStar className="text-yellow-500 sm:mb-4 " />
                  <FaStar className="text-yellow-500 sm:mb-4" />
                  <FaStar className="text-yellow-500 sm:mb-4" />
                  <FaStar className="text-yellow-500 sm;mb-4" />
                </div>
          <div className="flex-grow">
            <h2 className="text-gray-900  font-bold text-lg title-font  mb-3 flex">
             Ava H.
              <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
            </h2>
            <p className="leading-relaxed text-base">
            I am not just wearing a t-shirt; I am wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.
            </p>
            <a className="mt-3 inline-flex items-center">
              Posted on August 19,2023
           
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Image src="/frame.png" alt="reviews" height={1100} width={900} className='justify-center items-center  ml-30' />

</div>

   
  )
}

export default Productpage