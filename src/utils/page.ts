import { Billing } from "@/store";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

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
  finalPrice: number; // Assuming you want to store the final price after any discounts
}

export const saveOrderToSanity = async (
  billingDetails: Billing,
  cartItems: CartItem[],
  totalAmount: number
): Promise<void> => {
  try {
    // Check if customer already exists
    const existingCustomer = await client.fetch(
      `*[_type == "customer" && email == $email && fullName == $fullName][0]`,
      { email: billingDetails.email, fullName: billingDetails.fullName }
    );

    let customer;

    if (existingCustomer) {
      customer = existingCustomer;
      console.log("Customer already exists with the same email and name.");
    } else {
      customer = await client.create({
        _type: "customer",
        fullName: billingDetails.fullName,
        email: billingDetails.email,
        phoneNumber: billingDetails.phoneNumber,
        address: billingDetails.addressLine1,
        city: billingDetails.city,
      });
      console.log("Customer created:", customer);
    }

    // Get last order ID
    const lastOrder = await client.fetch(
      `*[_type == "order"] | order(_createdAt desc)[0]{orderId}`
    );

    let lastOrderNumber = 0;

    if (lastOrder?.orderId && lastOrder.orderId.includes("-Id")) {
      const parts = lastOrder.orderId.split("-Id");
      if (parts.length === 2) {
        const parsedNumber = parseInt(parts[1], 10);
        if (!isNaN(parsedNumber)) {
          lastOrderNumber = parsedNumber;
        }
      }
    }

    // Generate new order ID
    const newOrderId = `ShopCo-Id${(lastOrderNumber + 1).toString().padStart(2, "0")}`;

    console.log("Generated Order ID:", newOrderId);

    // Create order in Sanity
    const order = await client.create({
      _type: "order",
      orderId: newOrderId,
      customer: { _type: "reference", _ref: customer._id },
      items: cartItems.map((item) => ({
        _type: "orderItem",
        _key: Math.random().toString(36).substring(2, 11),
        name: item.name,
        image: item.imageUrl,
        quantity: item.quantity,
        unitPrice: item.price,
        discountPercent: item.discountPercent,
        finalPrice: item.finalPrice,
        totalPrice: item.finalPrice * item.quantity,
        category: item.category,
        rating: item.rating,
        sizes: item.sizes,
        colors: item.colors,
      })),
      totalAmount,
      orderDate: new Date().toISOString(),
      shippingAddress: `${billingDetails.addressLine1} ${
        billingDetails.addressLine2 ? billingDetails.addressLine2 : ""
      }`,
      status: "pending",
    });

    console.log("Order saved successfully:", order);
  } catch (error) {
    console.error("Error saving order to Sanity:", error);
    throw new Error("Failed to save order to Sanity");
  }
};
