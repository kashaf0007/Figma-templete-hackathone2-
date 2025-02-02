'use client';

import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  _id: string;
  imageUrl: string;
  name: string;
  category: string;
  discountPercent: string;
  price: string;
  priceWas?: string;
  rating: number;
}

const Searchbar: React.FC = () => { 
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setIsLoading(true); 
      try {
        const results: Product[] = await client.fetch(
          `*[_type == 'products'] {
            _id,
            name,
            category,
            discountPercent,
            price,
            priceWas,
            rating,
            "imageUrl": image.asset->url
          }`
        );
        setAllProducts(results);
      } catch (error) {
        console.error('Failed to fetch all products:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchAllProducts();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setQuery(value);

    if (value !== '') {
      const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setProducts([]);
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for products by name..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {isLoading && <p className="mt-2 text-sm text-gray-500">Loading...</p>} {/* Show loading indicator */}

      {products.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {products.map((product) => (
            <Link key={product._id} href={`/Sidebar/${product._id}`}>
              <div className="flex items-center p-3 border-b hover:bg-gray-100 cursor-pointer">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={48}
                  height={48}
                  className="rounded-md object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-sm font-semibold">{product.name}</h3>
                  <p className="text-sm text-blue-500">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;



