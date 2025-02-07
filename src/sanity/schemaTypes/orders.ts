// schemas/order.ts

export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      {
        name: "orderId",
        type: "string",
        title: "Order ID",
      },
      {
        name: "customer",
        type: "reference",
        to: [{ type: "customer" }],
        title: "Customer",
      },
      {
        name: "items",
        type: "array",
        of: [{ type: "orderItem" }],
        title: "Order Items",
      },
      {
        name: "totalAmount",
        type: "number",
        title: "Total Amount",
      },
      {
        name: "orderDate",
        type: "datetime",
        title: "Order Date",
      },
      {
        name: "shippingAddress",
        type: "string",
        title: "Shipping Address",
      },
      {
        name: "status",
        type: "string",
        title: "Status",
      },
    ],
  };
  