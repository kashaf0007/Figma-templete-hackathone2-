
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










