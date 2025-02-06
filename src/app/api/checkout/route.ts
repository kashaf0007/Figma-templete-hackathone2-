




// export const dynamic = "force-dynamic";
// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";
// const stripe = require('stripe')("process.env.STRIPE_SECRET_KEY!");
// // process.env.STRIPE_SECRET_KEY!
// export  async function POST(req: NextRequest ) {
//   // if (req.method !== "POST") {
//   //   return res.status(405).json({ error: "Method Not Allowed" });
//   // }
//   try {
//     const { cart } = await req.json();
//     console.log(cart)
//    const line_items = cart.map((item: any) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.name,
//           images: [item.image],
//         },
//         unit_amount: item.price * 100,
//       },
//       quantity: item.quantity,
//     }))
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items:  line_items,
//       mode: "payment",
//       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/PaymentSuccess`,
//       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
//     });
//   return NextResponse.json({ id: session.id });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to create session" });
//   }
// } fiza







export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { cart } = await req.json();

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const line_items = cart.map((item:any) => ({
      price_data: {
        currency: "usd", // Ensure currency is consistent
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100), // Convert price to cents
      },
      quantity: item.quantity || 1, // Ensure quantity exists
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items, // Use mapped `line_items`
      mode: "payment",
      success_url: `http://localhost:3000/Success`,
      cancel_url: `http://localhost:3000/Cancel/CancelPage`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error:any) {
    console.error("Stripe API Error:", error);
    return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
  }
}











// import { NextResponse } from 'next/server';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export async function POST(req: Request) {
//   try {
//     const { cart } = await req.json();

//     const lineItems = cart.map((product: any) => ({
//       price_data: {
//         currency: 'usd',
//         product_data: {
//           name: product.title,
//           images: [product.image],
//         },
//         unit_amount: Math.round(product.price * 100),
//       },
//       quantity: product.quantity,
//     }));

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       mode: 'payment',
//       success_url: `http://localhost:3000/Success`,
//       cancel_url: `http://localhost:3000/Cancel/CancelPage`,
//       line_items: lineItems,
//     });

//     return NextResponse.json({ id: session.id });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: 'Error creating Stripe session' }, { status: 500 });
//   }
// }



// export const dynamic = "force-dynamic";
// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
// export async function POST(req: NextRequest) {
//   try {
//     const { cart } = await req.json();
//     const line_items = cart.map((item: any) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.name,
//           images: item.image ? [item.image] : [],
//         },
//         unit_amount: Math.round(item.price * 100), // Ensure amount is in cents
//       },
//       quantity: item.quantity,
//     }));
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items:[
//         {
//           price_data:{
//             currency: 'pkr',
//             product_data:{
//               name : 'productName',
//             },
//           },
//         },
//       ],
//       mode: "payment",
//       success_url: `http://localhost:3000/Success/PaymentSuccess`,
//       cancel_url: `http://localhost:3000/Cancel/CancelPage`,
//     });

//     return NextResponse.json({ id: session.id });
//   } catch (error) {
//     console.error("Stripe API Error:", error);
//     return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
//   }
// }


