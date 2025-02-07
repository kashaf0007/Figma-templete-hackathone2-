// schemas/orderItem.ts

export default {
    name: "orderItem",
    title: "Order Item",
    type: "object",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Item Name",
      },
      {
        name: "image",
        type: "string",
        title: "Image URL",
      },
      {
        name: "quantity",
        type: "number",
        title: "Quantity",
      },
      {
        name: "unitPrice",
        type: "number",
        title: "Unit Price",
      },
      {
        name: "finalPrice",
        type: "number",
        title: "Final Price",
      },
      {
        name: "totalPrice",
        type: "number",
        title: "Total Price",
      },
      {
        name: "category",
        type: "string",
        title: "Category",
      },
      {
        name: "rating",
        type: "number",
        title: "Rating",
      },
      {
        name: "discountPercent",
        type: "number",
        title: "Discount Percent",
      },
      {
        name: "sizes",
        type: "array",
        of: [{ type: "string" }],
        title: "Sizes",
      },
      {
        name: "colors",
        type: "array",
        of: [{ type: "string" }],
        title: "Colors",
      },
    ],
  };
  