// schemas/customer.ts

export default {
    name: "customer",
    title: "Customer",
    type: "document",
    fields: [
      {
        name: "fullName",
        type: "string",
        title: "Full Name",
      },
      {
        name: "email",
        type: "string",
        title: "Email",
      },
      {
        name: "phoneNumber",
        type: "string",
        title: "Phone Number",
      },
      {
        name: "address",
        type: "string",
        title: "Address",
      },
      {
        name: "city",
        type: "string",
        title: "City",
      },
    ],
  };
  