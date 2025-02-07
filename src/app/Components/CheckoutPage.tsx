'use client'
import { Billing, cartAtom, customerFormDetails } from "@/store";
import { loadStripe } from "@stripe/stripe-js";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { useState } from "react";

export default function CheckoutButton({ disabled }: { disabled: boolean }) {
  const [cart] = useAtom(cartAtom);
  const [billingDetails] = useAtom<Billing>(customerFormDetails);
  const [loading, setLoading] = useState(false); // Loading state

  const handleCheckout = async () => {
    if (loading) return; // Prevent multiple clicks
    setLoading(true); // Start loading

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, billingDetails }),
      });

      if (!response.ok) {
        const errorText = await response.text(); 
        console.error("API Error:", errorText);
        throw new Error("Checkout failed, API returned error.");
      }

      const { id } = await response.json();
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

      if (!stripe) {
        console.error("Stripe.js failed to load");
        return;
      }

      const { error } = await stripe.redirectToCheckout({ sessionId: id });
      if (error) console.error("Stripe checkout error:", error.message);
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setLoading(false); // Stop loading (in case of error)
    }
  };

  return (
    <motion.button
      onClick={handleCheckout}
      disabled={disabled || loading}
      className={`px-6 py-3 w-full rounded-md mt-10 text-white font-semibold transition-all duration-300 flex justify-center items-center gap-2 ${
        disabled || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
      }`}
      whileHover={{ scale: disabled || loading ? 1 : 1.05 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
    >
      {loading ? (
        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        "Checkout"
      )}
    </motion.button>
  );
}
