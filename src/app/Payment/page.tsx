

"use client";
import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";

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

interface StripePaymentProps {
  clientSecret: string;
  onSuccessfulCheckout: () => void;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const StripePayment: React.FC<StripePaymentProps> = ({ clientSecret, onSuccessfulCheckout }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!, // Non-null assertion here
          billing_details: {},
        },
      });

      if (result.error) {
        setError(result.error.message || "Payment failed.");
      } else if (result.paymentIntent?.status === "succeeded") {
        onSuccessfulCheckout();
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424242",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#fa755a",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe || !elements || processing}>
        {processing ? "Processing..." : "Pay"}
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </form>
  );
};

const PaymentPage: React.FC = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Example: Initialize cartItems
  const [checkoutSuccessful, setCheckoutSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    async function fetchClientSecret() {
      setIsLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cartItems }),
        });
        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
        // Handle error, e.g., display an error message to the user
      } finally {
        setIsLoading(false); // Set loading to false after fetch, regardless of success/failure
      }
    }

    fetchClientSecret();
  }, [cartItems]);

  const handleSuccessfulCheckout = () => {
    setCheckoutSuccessful(true);
    // ... other actions after successful checkout
  };

  if (isLoading) {
    return <div>Loading Payment...</div>; // Display loading message
  }

  if (!clientSecret) {
    return <div>Error loading payment information.</div>; // Display error message
  }

  return (
    <Elements stripe={stripePromise}>
      <StripePayment clientSecret={clientSecret} onSuccessfulCheckout={handleSuccessfulCheckout} />
      {checkoutSuccessful && <div>Checkout Successful!</div>}
    </Elements>
  );
};

export default PaymentPage;
