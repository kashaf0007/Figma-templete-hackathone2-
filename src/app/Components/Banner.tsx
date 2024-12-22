import Image from "next/image";
import React from "react";

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "versace",
    srcUrl: "/vector.jpg",
  },
  {
    id: "zara",
    srcUrl: "/zara.jpg",
  },
  {
    id: "gucci",
    srcUrl: "/gucci-logo.png",
  },
  {
    id: "prada",
    srcUrl: "/logo.jpg",
  },
  {
    id: "calvin-klein",
    srcUrl: "/calvin.png",
  },
];

const Brand = () => {
  return (
    <div id="brand">
    <div className="bg-black">
      <div className=" mr-4 max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
        {brandsData.map((brand) => (
          <Image
            key={brand.id}
            priority
            src={brand.srcUrl}
            height={170}
            width={150}
            alt={brand.id}
            className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11"
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Brand;