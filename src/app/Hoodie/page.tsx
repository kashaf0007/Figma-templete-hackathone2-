import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


type SellerData = {
  id: number;
  image: string;
  title: string;
  price: string;
  priceWas: string;
  rating: number;
};

const Hoodie = () => {
  const card: SellerData[] = [
    {
      id: 1,
      image: "/hoodie.jpeg",
      title: "Classic Black Pullover Hoodie",
      price: "$128",
      priceWas: "$160",
      rating: 4.7,
    },
    {
      id: 2,
      image: "/hoodie2.jpeg",
      title: "Classic White Pullover Hoodie",
      price: "$150",
      priceWas: "$169",
      rating: 4.0,
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
      <Navbar/>
      {/* NEW ARRIVALS Heading */}
      <div className="text-center mt-12 mb-6">
        <h1
          className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] text-center"
          
        >
          HOODIE
        </h1>
      </div>

  
       <div className="w-[90%] border-b-2 border-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-auto">
        {card.map((item) => (
          <Link key={item.id} href={'/Sidebar'}>
          <div
            
            className="bg-white rounded-lg p-2 hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div className="relative w-full h-[300px] rounded-[20px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.image}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-sm font-semibold mt-2">{item.title}</h2>
            <div className="flex items-center gap-2 mt-1">
             
               <div className="flex items-center mb-3">
                          <h2 className="text-gray-900 text-lg title-font font-medium flex">
                              <FaStar className="text-yellow-500 mb-4 " />
                              <FaStar className="text-yellow-500 mb-4" />
                               <FaStar className="text-yellow-500 mb-4" />
                               <FaStar className="text-yellow-500 mb-4" />
                               <FaStar className="text-yellow-500 mb-4" />
                          </h2>
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
        {/* Centered View All Button Inside Card Section */}
        <div className="col-span-full flex justify-center mt-8 mb-12">
          <Link href={'/Sidebar'}>
          <button className="text-lg font-Satoshi font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-full">
            View All
          </button>
          </Link>
        </div>  
       
      </div>
      <Footer/>
        </div>
   
  );
};

export default Hoodie;
