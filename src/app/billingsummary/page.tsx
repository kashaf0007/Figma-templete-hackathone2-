"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useAtom } from "jotai";
import { useState } from "react";
import { motion } from "framer-motion";
import { Billing, cartAtom, customerFormDetails } from "@/store";
import CheckoutButton from "../Components/CheckoutPage";

const BillingSummary = () => {
  const [billingDetails, setBillingDetails] = useAtom<Billing>(customerFormDetails);
  const [cartItems, setCartItems] = useAtom(cartAtom);

  const [errors, setErrors] = useState({
    phoneNumber: false,
    email: false,
  });

  const phoneRegex = /^[0-9]{11}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isFormValid = () => {
    const { fullName, phoneNumber, email, addressLine1, city } = billingDetails;
    return (
      fullName.trim() !== "" &&
      phoneRegex.test(phoneNumber) &&
      emailRegex.test(email) &&
      addressLine1.trim() !== "" &&
      city.trim() !== ""
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({ ...prev, [name]: value }));

    if (name === "phoneNumber") {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: !phoneRegex.test(value),
      }));
    }
    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: !emailRegex.test(value),
      }));
    }
  };

  return (
    <div className="bg-[#f7f7f7] min-h-screen overflow-x-hidden max-w-[800px] mx-auto text-black">
      <motion.div
        className="container mx-auto px-2 sm:px-4 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-2">
          <Link href="/carts" className="text-[#333] hover:underline transition-all">
            <FaArrowLeft className="text-lg sm:text-xl" />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#333]">
            Your Cart Summary
          </h1>
        </div>
      </motion.div>

      <motion.div
        className="container mx-auto px-2 sm:px-4 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="bg-white shadow-md rounded-md overflow-x-auto">
          <table className="w-full min-w-[600px] text-left table-auto">
            <thead className="bg-[#1f2937] text-white uppercase text-sm sm:text-base">
              <tr>
                <th className="py-3 px-4">Product</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4 text-center">Quantity</th>
                <th className="py-3 px-4">Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-xl text-gray-500">
                    Your Cart Is Empty
                  </td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <motion.tr
                    key={item._id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <td className="py-3 px-4">{item.name}</td>
                    <td className="py-3 px-4">${item.price}</td>
                    <td className="py-3 px-4 text-center">{item.quantity}</td>
                    <td className="py-3 px-4">${item.price * item.quantity}</td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        className="container mx-auto px-2 sm:px-4 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">Billing Details</h2>
          <form className="space-y-6">
            <input type="text" name="fullName" placeholder="Full Name" value={billingDetails.fullName} onChange={handleInputChange} className="w-full px-4 py-3 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#1f2937] transition" required />
            <input type="tel" name="phoneNumber" placeholder="Phone Number" value={billingDetails.phoneNumber} onChange={handleInputChange} className={`w-full px-4 py-3 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#1f2937] transition ${errors.phoneNumber ? 'border-red-500' : ''}`} required />
            {errors.phoneNumber && <span className="text-red-500 text-sm">Invalid phone number.</span>}
            <input type="email" name="email" placeholder="Email ID" value={billingDetails.email} onChange={handleInputChange} className={`w-full px-4 py-3 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#1f2937] transition ${errors.email ? 'border-red-500' : ''}`} required />
            {errors.email && <span className="text-red-500 text-sm">Invalid email address.</span>}
            <input type="text" name="addressLine1" placeholder="Address Line 1" value={billingDetails.addressLine1} onChange={handleInputChange} className="w-full px-4 py-3 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#1f2937] transition" required />
            <input type="text" name="city" placeholder="City" value={billingDetails.city} onChange={handleInputChange} className="w-full px-4 py-3 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#1f2937] transition" required />
          </form>
          <CheckoutButton disabled={!isFormValid()} />
        </div>
      </motion.div>
    </div>
  );
};

export default BillingSummary;
