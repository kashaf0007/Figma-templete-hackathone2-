import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { FaCheck, FaStar } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import Link from "next/link";


type ProductData = {
  id: number;
  image: string;
  title: string;
  price: string;
  priceWas: string;
  rating: number;
};

const Product = () => {
  const card: ProductData[] = [
    {
      id: 1,
      image: "/Product-detail.png",
      title: "Polo with Contrast Trims",
      price: "$212",
      priceWas: "$242",
      rating: 4.0,
    },
    {
      id: 2,
      image: "/Category1.png",
      title: "Gradient Graphic T-shirt",
      price: "$145",
      priceWas: "",
      rating: 3.5,
    },
    {
      id: 3,
      image: "/Category2.png",
      title: "Polo with Tipping Details",
      price: "$180",
      priceWas: "",
      rating: 4.5,
    },
    {
      id: 4,
      image: "/T-shirt05.png",
      title: "Black Striped T-shirt",
      price: "$120",
      priceWas: "150",
      rating: 5.0,
    },
  ];

  // Function to calculate the discount percentage
  const calculateDiscount = (price: string, priceWas: string) => {
    if (priceWas) {
      const discount =
        ((parseFloat(priceWas.replace("$", "")) -
          parseFloat(price.replace("$", ""))) /
          parseFloat(priceWas.replace("$", ""))) *
        100;
      return Math.round(discount);
    }
    return 0;
  };

  return (
    <div>
     
       <div className=' justify-center items-center flex mt-20 mb-7 gap-80'>
       <Link href={'/Services'}> <p className='font-semibold text-black  '>SERVICES</p></Link>
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
    
            <div className='flex items-center space-x-6'>

            <GiSettingsKnobs className='font-semibold text-2xl' />
            <Image src={"/latest.png"} alt={"product-img"} height={50} width={50}></Image>
            <Image className='text-black' src={"/Write a Review.png"} alt={"product-img"} height={100} width={120}></Image>
                    </div>
                    </div>     
<hr></hr>
 <section className="text-gray-600 body-font">
    <div className="flex flex-wrap -m-4 ml-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full border-black border bg-white p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-gray-900 text-lg title-font font-medium flex">
                <FaStar className="text-yellow-500 mb-4 " />
                <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
            </h2>
          </div>
         <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold flex">
                   Sarah M.
                      <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
                    </h2>
                     <div className="flex-grow">
            <p className="leading-relaxed text-base">
            I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-white  border-black border p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-gray-900 text-lg title-font font-medium flex">
                <FaStar className="text-yellow-500 mb-4 " />
                <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
            </h2>
          </div>
         <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold flex">
                      Alex K.
                      <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
                    </h2>
                     <div className="flex-grow">
            <p className="leading-relaxed text-base">
            I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.
            </p>
          </div>
        </div>
      </div>
 <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-white  border-black border p-8 flex-col mr-4">
          <div className="flex items-center mb-3">
          <h2 className="text-gray-900 text-lg title-font font-medium flex">
                <FaStar className="text-yellow-500 mb-4 " />
                <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
            </h2>
          </div>
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold flex">
                      Alex M.
                      <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
                    </h2>
                     <div className="flex-grow">
            <p className="leading-relaxed text-base">
          As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.
            </p>
          </div>
          </div>
       </div>
       </div>
  
</section>

 <section className="text-gray-600 body-font">
    <div className="flex flex-wrap -m-4 ml-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full border-black border bg-white p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-gray-900 text-lg title-font font-medium flex">
                <FaStar className="text-yellow-500 mb-4 " />
                <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
            </h2>
          </div>
         <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold flex">
                   Sarah M.
                      <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
                    </h2>
                     <div className="flex-grow">
            <p className="leading-relaxed text-base">
            I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-white  border-black border p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-gray-900 text-lg title-font font-medium flex">
                <FaStar className="text-yellow-500 mb-4 " />
                <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
            </h2>
          </div>
         <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold flex">
                      Alex K.
                      <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
                    </h2>
                     <div className="flex-grow">
            <p className="leading-relaxed text-base">
            I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.
            </p>
          </div>
        </div>
      </div>
 <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-white  border-black border p-8 flex-col mr-4">
          <div className="flex items-center mb-3">
          <h2 className="text-gray-900 text-lg title-font font-medium flex">
                <FaStar className="text-yellow-500 mb-4 " />
                <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
            </h2>
          </div>
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold flex">
                      Alex M.
                      <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
                    </h2>
                     <div className="flex-grow">
            <p className="leading-relaxed text-base">
          As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.
            </p>
          </div>
          </div>
       </div>
       </div>
  
</section>
 <section className="text-gray-600 body-font">
    <div className="flex flex-wrap -m-4 ml-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full border-black border bg-white p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-gray-900 text-lg title-font font-medium flex">
                <FaStar className="text-yellow-500 mb-4 " />
                <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
            </h2>
          </div>
         <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold flex">
                   Sarah M.
                      <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
                    </h2>
                     <div className="flex-grow">
            <p className="leading-relaxed text-base">
            I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-white  border-black border p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-gray-900 text-lg title-font font-medium flex">
                <FaStar className="text-yellow-500 mb-4 " />
                <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
            </h2>
          </div>
         <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold flex">
                      Alex K.
                      <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
                    </h2>
                     <div className="flex-grow">
            <p className="leading-relaxed text-base">
            I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.
            </p>
          </div>
        </div>
      </div>
 <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-white  border-black border p-8 flex-col mr-4">
          <div className="flex items-center mb-3">
          <h2 className="text-gray-900 text-lg title-font font-medium flex">
                <FaStar className="text-yellow-500 mb-4 " />
                <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
            </h2>
          </div>
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold flex">
                      Alex M.
                      <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
                    </h2>
                     <div className="flex-grow">
            <p className="leading-relaxed text-base">
          As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.
            </p>
          </div>
          </div>
       </div>
       </div>
  
</section>

      <div className="text-center mt-12 mb-6">
        <h1
          className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] text-center"
          style={{ textUnderlinePosition: "from-font" }}
        >
          YOU MIGHT ALSO LIKE
        </h1>
      </div>

      {/* Card Section */}
      <div className="w-[90%] border-b-2 border-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-auto">
        {card.map((item) => (
           <Link key={item.id} href={'/Sidebar'}>
          <div
          
            className="bg-white rounded-lg p-2 hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div className="relative w-full h-[300px] rounded-[20px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-sm font-semibold mt-2">{item.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IoMdStar
                    key={index}
                    className={`${
                      index < Math.round(item.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    } text-lg`}
                  />
                ))}
              </div>
              <span className="text-sm">{item.rating}/5</span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-lg font-bold text-gray-800">{item.price}</span>
              {item.priceWas && (
                <>
                  <span className="text-sm line-through text-gray-500">
                    {item.priceWas}
                  </span>
                  <button className="bg-pink-100 text-red-600 text-xs py-1 px-2 rounded-full">
                    {calculateDiscount(item.price, item.priceWas)}% OFF
                  </button>
                </>
              )}
            </div>
          </div>
          </Link>
        ))}

       
        <div className="col-span-full flex justify-center mt-8 mb-12">
          <button className="text-lg font-Satoshi font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-full">
            View All
          </button>


        </div>

    
     </div>
        </div>
   
  );
};

export default Product;