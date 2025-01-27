
'use client';

import React, { useState } from 'react';
import { client } from '@/sanity/lib/client';

interface Product {
  _id: number;
  imageUrl: string;
  name: string;
  category: string;
  discountPercent: string;
  price: string;
  priceWas?: string;
  rating: number;
}

const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setQuery(value);

    if (value !== '') {
      fetchProductsByName(value);
    } else {
      setProducts([]);
    }
  };

  const fetchProductsByName = async (productName: string) => {
    setIsLoading(true);
    try {
      const results = await client.fetch(
        `*[_type == 'product' && name match $name]{
          "imageUrl": image.asset->url,
          name,
        }`,
        { name: `${productName}*` }
      );
      setProducts(results);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Input Field */}
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for products by name..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Loading Indicator */}
      {isLoading && <p className="mt-2 text-sm text-gray-500">Loading...</p>}

      {/* Dropdown Results */}
      {products.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex items-center p-3 border-b hover:bg-gray-100"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-12 h-12 mr-4 rounded-md object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-xs text-gray-500">{product.category}</p>
                <p className="text-sm text-blue-500">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
