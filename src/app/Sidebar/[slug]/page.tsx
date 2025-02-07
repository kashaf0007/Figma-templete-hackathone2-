"use client";

import Footer from '@/app/Components/Footer';
import Navbar from '@/app/Components/Navbar';
import Product from '@/app/ProductDetail/page';
import { client } from '@/sanity/lib/client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartAtom } from '@/store';
import { useAtom } from 'jotai';

// Define product interface
interface ProductType {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  discountPercent?: number;
  isNew?: boolean;
  sizes?: string[];
  colors?: string[];
}

const Slug = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useAtom(cartAtom);

  useEffect(() => {
    if (slug) {
      const fetchProduct = async () => {
        // Fetch product data with image URL from Sanity
        const productData = await client.fetch(`
          *[_type == "products" && _id == "${slug}"] {
            _id,
            name,
            description,
            price,
            "imageUrl": image.asset->url, // Fetch the image URL directly
            category,
            discountPercent,
            isNew,
            sizes,
            colors
          }
        `);
        setProduct(productData[0] || null);
        setLoading(false);
      };
      fetchProduct();
    }
  }, [slug]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );

  const handleAddToCart = () => {
    if (!product) return;

    const existingItem = cartItems.find((item) => item._id === product._id);
    let updatedCart;

    if (!existingItem) {
      const newCartItem: any = {
        ...product,
        quantity: 1, // Default quantity
      };
      updatedCart = [...cartItems, newCartItem];
      setCartItems(updatedCart);
      toast.success("Product added to cart!");
    } else {
      toast.info("Product is already in the cart.");
    }
  };

  return (
    <div>
      <Navbar />
      <ToastContainer position="top-right" autoClose={2000} />
      {product && (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <img
                  alt="ecommerce"
                  className="lg:w-full w-full lg:h-auto h-64 object-cover object-center rounded-md shadow-lg"
                  src={product?.imageUrl || ''}
                />
              </div>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">
                  {product.name}
                </h1>
                <p className="leading-relaxed mb-4">{product.description}</p>
                <div className="flex items-center mb-4">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product.price}
                  </span>
                  {product.discountPercent && (
                    <span className="ml-4 text-sm text-red-500 line-through">
                      ${Math.round(product.price * (1 + product.discountPercent / 100))}
                    </span>
                  )}
                </div>

                {/* Sizes */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-gray-700 font-medium">Available Sizes:</h3>
                    <div className="flex flex-wrap mt-2">
                      {product.sizes.map((size, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-200 text-gray-700 px-4 py-2 m-1 rounded-md cursor-pointer hover:bg-gray-300"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Colors */}
                {product.colors && product.colors.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-gray-700 font-medium">Available Colors:</h3>
                    <div className="flex mt-2">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 m-1 rounded-full"
                          style={{
                            backgroundColor: color,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}

<button
  className="w-full max-w-xs py-3 px-6 bg-black text-white font-semibold text-lg rounded-md transition-transform duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105 hover:shadow-lg focus:outline-none active:scale-95"
  onClick={handleAddToCart}
>
  Add to Cart
</button>

              </div>
            </div>
            <Product />
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default Slug;
