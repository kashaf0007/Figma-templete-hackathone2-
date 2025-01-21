
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import Link from "next/link";
import { MdDelete } from "react-icons/md";

interface Cart {
  _id: string;
  imageUrl: string;
  name: string;
  category: string;
  discountPercent: string;
  price: number;
  priceWas?: string;
  rating: number;
  quantity: number;
  sizes: string[];
  colors: string[];
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

  // Load cart data from localStorage
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const storedCart = JSON.parse(cart) || [];
      setCartItems(storedCart);
    }
  }, []);

  // Delete item from cart
  const deleteCartItem = (itemId: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * 1, 0);
    const discount = 20; // Example fixed discount
    const deliveryFee = 15; // Example delivery fee
    const total = subtotal - discount + deliveryFee;

    return { subtotal, discount, deliveryFee, total };
  };

  const { subtotal, discount, deliveryFee, total } = calculateTotal();

  const handleCheckout = () => {
    // Simulate checkout process
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checking out.");
      return;
    }

    // Clear cart and complete checkout
    localStorage.removeItem("cart");
    setCartItems([]);
    setIsCheckoutComplete(true);
  };

  return (
    <div>
      <Navbar />
      <div>
        <section className="relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
            <div className="grid grid-cols-12">
              {/* Cart Items Section */}
              <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                  <Link href={"/"}>
                    <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                      Shopping Cart
                    </h2>
                  </Link>
                  <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                    {cartItems.length} Items
                  </h2>
                </div>
                {cartItems.length === 0 && (
                  <div className="text-center mt-10">
                    <p className="font-medium text-gray-600">Your cart is empty.</p>
                    <Link href="/">
                      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Continue Shopping
                      </button>
                    </Link>
                  </div>
                )}
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group"
                  >
                    <div className="w-full md:max-w-[126px]">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        height={800}
                        width={600}
                        className="mx-auto rounded-xl object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                      <div className="md:col-span-2">
                        <div className="flex flex-col max-[500px]:items-center gap-3">
                          <h6 className="font-bold text-base leading-7 text-black">{item.name}</h6>
                          <h2 className="font-normal text-base leading-7 text-gray-500">
                            <div>Size: {item.sizes.join(", ")}</div>
                            <div>Color: {item.colors.join(", ")}</div>
                          </h2>
                          <h6 className="font-medium text-base leading-7 text-gray-600">
                            ${item.price.toFixed(2)}
                          </h6>
                        </div>
                      </div>
                      <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                        <button
                          onClick={() => deleteCartItem(item._id)}
                          className="text-red-600 hover:underline text-3xl"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary Section */}
              <div className="col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-2l mx-auto lg:pl-8 py-24">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                  Order Summary
                </h2>
                <div className="mt-8">
                  <div className="flex items-center justify-between pb-6">
                    <p className="font-normal text-lg leading-8 text-black">Subtotal</p>
                    <p className="font-medium text-lg leading-8 text-black">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className="font-normal text-lg leading-8 text-black">Discount(-20)</p>
                    <p className="font-medium text-lg leading-8 text-black">-${discount.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className="font-normal text-lg leading-8 text-black">Delivery Fee</p>
                    <p className="font-medium text-lg leading-8 text-black">${deliveryFee.toFixed(2)}</p>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between pb-6">
                    <p className="font-normal text-lg leading-8 text-black">Total</p>
                    <p className="font-medium text-lg leading-8 text-black">${total.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0 w-full"
                >
                  CHECK OUT
                </button>
                {isCheckoutComplete && (
                  <div className="mt-4 text-center text-green-600 font-bold">
                    Checkout complete! Thank you for your purchase.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
