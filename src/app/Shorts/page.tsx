import React from "react";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowForward, IoMdStar } from "react-icons/io";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Link from "next/link";

type ArrData = {
  id: number;
  image: string;
  title: string;
  price: string;
  priceWas: string;
  rating: number;
};

const Shorts = () => {

  const card:ArrData[] = [
    {
      id: 1,
      image: "/Category9.png",
      title: "LOOSE FIT BERMUDA SHORTS",
      price: "$120",
      priceWas: "",
      rating: 4.5,
    },
    {
      id: 2,
      image: "/jeans.jpg",
      title: "SKINNY FIT JEANS",
      price: "$240",
      priceWas: "$260",
      rating: 4.5,
    },
    {
      id: 3,
      image: "/jeans2.jpg",
      title: "Classic Black Straight-Leg Jeans",
      price: "$180",
      priceWas: "",
      rating: 4.5,
    },
    {
      id: 4,
      image: "/jeans3.jpeg",
      title: "Black Athletic Jogger Pants with Side Stripes",
      price: "$130",
      priceWas: "$160",
      rating: 4.7,
    },
    {
        id: 5,
        image: "/jeans4.jpeg",
        title: "Gray Slim-Fit Jogger Pants",
        price: "$212",
        priceWas: "$232",
        rating: 4.7,
      },
      {
        id: 6,
        image: "/jeans5.jpeg",
        title: "Beige Slim-Fit Jogger Pants",
        price: "$269",
        priceWas: "$145",
        rating: 4.0,
      },
      {
        id: 7,
        image: "/jeans.jpeg",
        title: "Classic Black Straight-Leg Jeans",
        price: "$580",
        priceWas: "120",
        rating: 3.5,
      },
   
  ];

  return (
    <div id="arrival">
        <Navbar/>
     
      
      {/* NEW ARRIVALS Heading  */}
      <div className="text-center mt-12 mb-6">
        <h1
          className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] text-center">
          JEANS
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
                  
                </>
              
              )}      
             </div>
             </div>
             </Link>
            
           
        
   
          
        ))}
        {/* Centered View All Button Inside Card Section */}
        <div className="col-span-full flex justify-center mt-8 mb-12">
          <button className="text-lg font-Satoshi font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-full">
            View All
          </button>
          </div>
        </div>  
        
      
      <Footer/>
      
    </div>
   
    

  )
};

export default Shorts;