// "use client";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import StripePayment from "../Payment/page";



// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// export default function PaymentPage() {
//   const clientSecret = "your-client-secret"; // Fetch from backend
//   const onSuccessfulCheckout = () => {
//     console.log("Payment successful!");
//   };

//   if (!clientSecret) return <p>Loading...</p>;

//   return (
//     <Elements stripe={stripePromise} options={{ clientSecret }}>
//       <StripePayment clientSecret={clientSecret} onSuccessfulCheckout={onSuccessfulCheckout} />
//     </Elements>
//   );
// }

// "use client";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import StripePayment from "../Payment/page";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// export default function PaymentPage() {
//   const clientSecret = "your-client-secret"; // Fetch from backend
//   const cartItems = []; // You need to replace this with actual cart data

//   const onSuccessfulCheckout = () => {
//     console.log("Payment successful!");
//   };

//   if (!clientSecret) return <p>Loading...</p>;

//   return (
//     <Elements stripe={stripePromise} options={{ clientSecret }}>
//       <StripePayment clientSecret={clientSecret} cartItems={cartItems} onSuccessfulCheckout={onSuccessfulCheckout} />
//     </Elements>
//   );
// }



// "use client";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import StripePayment from "../Payment/page";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// // Define the type for cart items
// interface CartItem {
//   _id: string;
//   imageUrl: string;
//   name: string;
//   category: string;
//   discountPercent: string;
//   price: number;
//   priceWas?: string;
//   rating: number;
//   quantity: number;
//   sizes: string[];
//   colors: string[];
// }

// export default function PaymentPage() {
//   const clientSecret = "your-client-secret"; // Fetch from backend
//   const cartItems: CartItem[] = []; // Explicitly define cartItems type

//   const onSuccessfulCheckout = () => {
//     console.log("Payment successful!");
//   };

//   if (!clientSecret) return <p>Loading...</p>;

//   return (
//     <Elements stripe={stripePromise} options={{ clientSecret }}>
//       <StripePayment clientSecret={clientSecret} cartItems={cartItems} onSuccessfulCheckout={onSuccessfulCheckout} />
//     </Elements>
//   );
// }
