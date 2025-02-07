"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import Navbar from "../Components/Navbar";
import { cartAtom } from "@/store";




interface CartItem {
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

// Create a persistent cart atom using jotai's atomWithStorage.
// The key "cart" is used for localStorage persistence, and the initial value is an empty array.


const Cart = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useAtom<CartItem[]>(cartAtom);
  const [isCheckoutComplete, setIsCheckoutComplete] = React.useState(false);

  // Delete an item from the cart.
  const deleteCartItem = (itemId: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCart);
  };

  // Update the quantity for a given cart item.
  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent quantity from being less than 1
    const updatedCart = cartItems.map((item) =>
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  // Calculate the subtotal, discount, delivery fee, and total.
  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const discount = 20; // Static discount value; adjust if needed.
    const deliveryFee = 15;
    const total = subtotal - discount + deliveryFee;
    return { subtotal, discount, deliveryFee, total };
  };

  const { subtotal, discount, deliveryFee, total } = calculateTotal();

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <section className="relative z-10 after:content-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto relative z-10">
            <div className="grid grid-cols-12">
              {/* Cart Items List */}
              <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24">
                <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                  <Link href="/">
                    <h2 className="font-bold text-3xl leading-10 text-black">
                      Shopping Cart
                    </h2>
                  </Link>
                  <h2 className="font-bold text-xl leading-8 text-gray-600">
                    {cartItems.length} Items
                  </h2>
                </div>
                {cartItems.length === 0 && (
                  <div className="text-center mt-10">
                    <p className="font-medium text-gray-600">
                      Your cart is empty.
                    </p>
                    <Link href="/">
                      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Continue Shopping
                      </button>
                    </Link>
                  </div>
                )}
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between border-b py-4"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p>
                        Size: {item.sizes.join(", ")}
                        <br />
                        Color: {item.colors.join(", ")}
                      </p>
                      <p className="text-gray-600">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="px-2"
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity + 1)
                        }
                        className="px-2"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => deleteCartItem(item._id)}
                      className="text-red-500 text-2xl"
                    >
                      <MdDelete />
                    </button>
                  </div>
                ))}
              </div>
              {/* Order Summary */}
              <div className="col-span-12 xl:col-span-4 bg-gray-50 px-6 py-24">
                <h2 className="font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                  Order Summary
                </h2>
                <div className="mt-8">
                  <div className="flex items-center justify-between pb-6">
                    <p className="text-lg">Subtotal</p>
                    <p className="font-medium">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className="text-lg">Discount</p>
                    <p className="font-medium">-${discount.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className="text-lg">Delivery Fee</p>
                    <p className="font-medium">${deliveryFee.toFixed(2)}</p>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between pb-6 font-bold">
                    <p className="text-lg">Total</p>
                    <p className="font-medium">${total.toFixed(2)}</p>
                  </div>
                </div>
                <Link
                  href="/billingsummary"
                  className="bg-indigo-500 text-white py-2 px-6 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
