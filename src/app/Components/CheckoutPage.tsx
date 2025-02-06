 'use client'
import { loadStripe } from "@stripe/stripe-js";


export default function CheckoutButton() {
  const handleCheckout = async () => {
    try {
      const cartData = localStorage.getItem("cart");
      const cart = cartData ? JSON.parse(cartData) : [];

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      });

      const { id } = await response.json();
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

      if (!stripe) {
        console.error("Stripe.js failed to load");
        return;
      }

      const { error  } = await stripe.redirectToCheckout({ sessionId: id });
      if (error) console.error("Stripe checkout error:", error.message);
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return <button onClick={handleCheckout}>Checkout</button>;
}
 