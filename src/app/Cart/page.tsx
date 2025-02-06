"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import CheckoutButton from "../Components/CheckoutPage";
import { loadStripe } from '@stripe/stripe-js'
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

const Cart = () => {
  const router = useRouter();  // ✅ Moved inside the component
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCartItems(JSON.parse(cart) || []);
    }
  }, []);

  const updateCartStorage = (updatedCart: CartItem[]) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const deleteCartItem = (itemId: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
    updateCartStorage(updatedCart);
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    );
    updateCartStorage(updatedCart);
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = 20;
    const deliveryFee = 15;
    const total = subtotal - discount + deliveryFee;
    return { subtotal, discount, deliveryFee, total };
  };

  const { subtotal, discount, deliveryFee, total } = calculateTotal();

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checking out.");
      return;
    }
    localStorage.removeItem("cart");
    setCartItems([]);
    setIsCheckoutComplete(true);

    router.push("/Components/CheckoutPage"); // ✅ Using router correctly inside component
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <section className="relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
            <div className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24">
                <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                  <Link href={"/"}>
                    <h2 className="font-bold text-3xl leading-10 text-black">Shopping Cart</h2>
                  </Link>
                  <h2 className="font-bold text-xl leading-8 text-gray-600">{cartItems.length} Items</h2>
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
                {cartItems.map((item) => (
                  <div key={item._id} className="flex items-center justify-between border-b py-4">
                    <Image src={item.imageUrl} alt={item.name} width={80} height={80} className="rounded" />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p>Size: {item.sizes.join(", ")} 
                        <br></br>
                         Color: {item.colors.join(", ")}</p>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    <div>
                      <button onClick={() => updateQuantity(item._id, item.quantity - 1)} disabled={item.quantity <= 1} className="px-2">-</button>
                      <span className="px-2">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="px-2">+</button>
                    </div>
                    <button onClick={() => deleteCartItem(item._id)} className="text-red-500 text-2xl">
                      <MdDelete />
                    </button>
                  </div>
                ))}
              </div>
              <div className="col-span-12 xl:col-span-4 bg-gray-50 px-6 py-24">
                <h2 className="font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">Order Summary</h2>
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
                    <p className="font-medium">${deliveryFee.toFixed(1)}</p>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between pb-6 font-bold">
                    <p className="text-lg">Total</p>
                    <p className="font-medium">${total.toFixed(2)}</p>
                  </div>
                </div>
                <button onClick={handleCheckout} className="bg-indigo-500 text-white py-2 px-8 rounded hover:bg-indigo-600 w-full">
                  CHECK OUT
                </button>
                <CheckoutButton/>
               
                {isCheckoutComplete && <p className="mt-4 text-green-600 font-bold text-center">Checkout complete! Thank you for your purchase.</p>}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
