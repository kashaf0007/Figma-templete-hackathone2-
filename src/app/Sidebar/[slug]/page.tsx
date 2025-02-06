
"use client";

import Footer from '@/app/Components/Footer';
import Navbar from '@/app/Components/Navbar';
import Product from '@/app/ProductDetail/page';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { FaCheck, FaStar } from 'react-icons/fa';

interface Product {
    _id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    category: string;
    discountPercent?: number;
    isNew?: boolean;
    sizes?: string[];
}

const Slug = () => {
    const { slug } = useParams();

    const [product, setProduct] = React.useState<Product | null>(null);
    const [loading, setLoading] = React.useState(true);

    const query = `*[_type == "products"]{_id, name, description, price, "imageUrl": image.asset->url, category, discountPercent, isNew, sizes,colors}`

    React.useEffect(() => {
        if (slug) {
            const fetchProduct = async () => {
                const productData = await client.fetch(query);
                const index = productData.findIndex((item: { _id: string }) => item._id == slug);

                if (productData.length > 0) {
                    setProduct(productData[index]);
                } else {
                    setProduct(null);
                }
                setLoading(false);
            };

            fetchProduct();
        }
    },[slug]);

    if (loading) return <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>;

    const handleAddToCart = () => {
        console.log("Add to cart runs");

        if (!product) return;
        const existingItem = JSON.parse(localStorage.getItem("cart") || "[]");
        console.log('Existing Item', existingItem);

        const isProduct = existingItem.find((item: { _id: string }) => item._id == product._id);
        console.log("Is Product", isProduct);

        let updatedCart;
        if (isProduct) {
            updatedCart = existingItem.map((item: { _id: string }) => item._id == product._id ? { ...item } : item);

        } else {
            updatedCart = [...existingItem, product];
        }
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    return (
        <div>
            <Navbar />
            <div>
                {product && <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                                alt="ecommerce"
                                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                src={product.imageUrl}
                                
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                                   <div className="flex items-center mb-3">
                                                          <h2 className="text-gray-900 text-lg title-font font-medium flex">
                                                              <FaStar className="text-yellow-500 mb-4 " />
                                                              <FaStar className="text-yellow-500 mb-4" />
                                                               <FaStar className="text-yellow-500 mb-4" />
                                                               <FaStar className="text-yellow-500 mb-4" />
                                                               <FaStar className="text-yellow-500 mb-4" />
                                                          </h2>
                                                         
                                                        </div>
                                <p className="leading-relaxed">{product.description}</p>
                                <hr className='ml-28px text-black'></hr>
                                   <div className=' mt-5 mb-3 '>
                                                            <h2 className='text-gray-500'>Select Colors</h2>
                                                            <div className='flex space-x-4 mt-2'>
                                                            <div className='w-[35px] h-[35px] bg-[#4f4631] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity-5 hover:opacity-100 cursor-pointer '/></div>
                                                            <div className='w-[35px] h-[35px] bg-[#314f4a] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity-5 hover:opacity-100 cursor-pointer '/></div>
                                                            <div className='w-[35px] h-[35px] bg-[#31344f] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity-5 hover:opacity-100 cursor-pointer '/></div>
                                                        </div>
                                                        </div>
                              <hr></hr>
                              <div className='mt-4'>
                            <p className='text-gray-500'>Choose Size</p>
                            <div className='flex space-x-3 text-gray-500 mt-2'>
                            <div className='w-[70px] h-[40px] flex justify-center items-center bg-gray-200 rounded-[62px] text-black'>Small</div>
                            <div className='w-[70px] h-[40px] flex justify-center items-center bg-gray-200 rounded-[62px] text-black'>Medium</div>
                            <div className='w-[70px] h-[40px] flex justify-center items-center bg-gray-200 rounded-[62px] text-black'>Large</div>
                            <div className='w-[70px] h-[40px] flex justify-center items-center bg-gray-200 rounded-[62px] text-black'>X-Large</div>
                            </div>
                          </div>
                                <div className="flex mt-6 items-center pb-5 border-b-2 justify-between border-gray-100 mb-5">
                                    <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                                    <Link href={'/Cart'}>
                                        <button className="flex ml-auto w-60 text-white bg-black border-2 py-2 px-6 focus:outline-none hover:bg-black rounded active:scale-95" onClick={handleAddToCart}>
                                            Add to Cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
<Product/>

                    </div>
                </section>}
            </div>
            <Footer/>
        </div>
    );
};

export default Slug;
