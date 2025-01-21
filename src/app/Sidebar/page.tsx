
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaStar } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

type ArrData = {
  _id: string; 
  imageUrl: string;
  name: string;
  category: string;
  discountPercent: string;
  price: string;
  priceWas?: string; 
  rating: number;
};

async function Sidebar() {


  const card: ArrData[] = await client.fetch('*[_type == "products"]{_id,name,description,price,"imageUrl":image.asset->url,category,discountPercent, isNew,sizes}')

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
    <div >
      <Navbar />
      {/* NEW ARRIVALS Heading */}

      <div className="text-center mb-10 font-bold">
        <h1 className=" mt-9 text-5xl font-extrabold tracking-tight lg:text-3xl text-black">
          ENJOY WITH THE SHOPPING
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-black inline-flex" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Section */}
        <div
          className={` h-full w-full md:w-64 bg-gray-50 p-4 shadow-lg md:rounded-lg border border-gray-300 md:ml-10 mt-28  md:block`}
        >
          <div className="filter">
            {/* Sidebar Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Filter</h2>
              <IoIosArrowDown />
            </div>
            <hr className="my-5 border-t border-gray-600" />

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
              <div className="h-10 w-10 rounded-full  bg-yellow-500 "></div>
              <div className="h-10 w-10 rounded-full bg-blue-500"></div>
              <div className="h-10 w-10 rounded-full bg-green-500"></div>
              <div className="h-10 w-10 rounded-full bg-purple-500"></div>
              <div className="h-10 w-10  rounded-full bg-gray-500"></div>
              <div className="h-10 w-10 rounded-full bg-teal-500"></div>
              <div className="h-10 w-10 rounded-full bg-orange-500"></div>
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
          {/* </div> */}

          {/* Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {card.map((item) => (
              <Link key={item._id} href={`/Sidebar/${item._id}`}>
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
              <button className="text-lg font-Satoshi font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-full">
                View All
              </button>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sidebar;