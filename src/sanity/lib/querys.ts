export const products= `
*[_type == "products"]{
    _id,
    name,
    description,
    price,
    "imageurl":image.asset->Url,
    category,
    discountPercent,
    isNew,
    sizes,
  }`