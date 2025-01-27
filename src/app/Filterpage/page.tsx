'use client'
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const FilterPage = () => {
  const [filters, setFilters] = useState({
    category: "",
    color: "",
    size: "",
    style: "",
  });

  const products = [
    { id: 1, name: "T-Shirt", color: "black", size: "Medium", style: "Casual" },
    { id: 2, name: "Shorts", color: "red", size: "Large", style: "Gym" },
    { id: 3, name: "Shirt", color: "blue", size: "Small", style: "Formal" },
    { id: 4, name: "Hoodie", color: "green", size: "X-Large", style: "Casual" },
    { id: 5, name: "Jeans", color: "gray", size: "Medium", style: "Party" },
  ];

  const handleFilterApply = () => {
    console.log("Filters applied: ", filters);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (!filters.category || product.name === filters.category) &&
      (!filters.color || product.color === filters.color) &&
      (!filters.size || product.size === filters.size) &&
      (!filters.style || product.style === filters.style)
    );
  });

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar Section */}
      <div
        className={`h-full w-full md:w-64 bg-gray-50 p-4 shadow-lg md:rounded-lg border border-gray-300 md:ml-10 mt-28 md:block`}
      >
        <div className="filter">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Filter</h2>
            <IoIosArrowDown />
          </div>
          <hr className="my-5 border-t border-gray-600" />

          {/* Clothes Category */}
          <div className="clothes-category">
            <ul className="space-y-3">
              {["T-Shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((category) => (
                <li
                  key={category}
                  className="flex justify-between items-center text-xl text-black cursor-pointer"
                  onClick={() => setFilters({ ...filters, category })}
                >
                  {category} <IoIosArrowForward />
                </li>
              ))}
            </ul>
          </div>

          <hr className="my-3 border-t border-gray-600" />

          {/* Colors */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Colors</h2>
            <IoIosArrowDown />
          </div>
          <div className="mt-5 grid grid-cols-5 gap-4">
            {["black", "pink-400", "red-500", "yellow-500", "blue-500", "green-500", "purple-500", "gray-500", "teal-500", "orange-500"].map(
              (color) => (
                <div
                  key={color}
                  className={`h-10 w-10 rounded-full bg-${color} cursor-pointer`}
                  onClick={() => setFilters({ ...filters, color })}
                ></div>
              )
            )}
          </div>

          <hr className="my-4 border-t border-gray-600" />

          {/* Size */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Size</h2>
            <IoIosArrowDown className="text-2xl" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"].map(
              (size) => (
                <div
                  key={size}
                  className="h-10 flex justify-center items-center border rounded-full border-gray-600 text-black hover:bg-black hover:text-white cursor-pointer"
                  onClick={() => setFilters({ ...filters, size })}
                >
                  {size}
                </div>
              )
            )}
          </div>

          <hr className="my-4 border-t border-gray-600" />

          {/* Dress Style */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Dress Style</h2>
            <IoIosArrowDown className="text-2xl" />
          </div>
          <ul className="space-y-3 mt-3">
            {["Casual", "Formal", "Party", "Gym"].map((style) => (
              <li
                key={style}
                className="flex justify-between items-center text-base text-black cursor-pointer"
                onClick={() => setFilters({ ...filters, style })}
              >
                {style} <IoIosArrowForward />
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <button
              className="w-full h-12 bg-black text-white rounded-full hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              onClick={handleFilterApply}
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>

      {/* Product Display Section */}
      <div className="flex-1 p-4 mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>Color: {product.color}</p>
            <p>Size: {product.size}</p>
            <p>Style: {product.style}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPage;
