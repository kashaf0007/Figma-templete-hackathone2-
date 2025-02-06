import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

type ArrData = {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  priceWas: string;
  rating: number;
};

async function Arrival (){
  const card:ArrData[]=await client.fetch('*[_type == "products"]{_id,name,description,price,"imageUrl":image.asset->url,category,discountPercent, isNew,sizes}')
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
    <div id="arrival">
      
      {/* NEW ARRIVALS Heading */}
      <div className="text-center mt-12 mb-6">
        <h1 
          className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] text-center" >
          Arrival
        </h1>
      </div>

      {/* Card Section */}
      <div>
      <div className="w-[90%] border-b-2 border-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-auto">
        {card.map((item,i) => (
          <Link key={i} href={'/Sidebar'}>
          <div
            
            className="bg-white rounded-lg p-2 hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div className="relative w-full h-[300px] rounded-[20px] overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-sm font-semibold mt-2">{item.name}</h2>
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
              <span className="text-sm">{item.rating}3.5/5</span>
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
          <button className="text-lg  font-medium  hover:bg-black hover:text-white text-black px-16 py-2 border-2 border-gray-200 rounded-full">
            View All
          </button>
          </Link>
        </div>  
      </div>
    </div>
    </div>
);
};

export default Arrival;
