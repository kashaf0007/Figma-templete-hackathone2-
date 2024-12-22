import React from "react";
import Image from "next/image";

const Style = () => {
  return (
    <div className="w-[90%] max-w-[1440px] h-[866px] mx-auto mt-12 bg-[#F0F0F0] rounded-2xl p-14">
      <div className="text-center mb-6">
        <h1 className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] my-12">
          BROWSE  BY DRESS STYLE
        </h1>
      </div>


      <div className="grid grid-cols-4 gap-4">
    
        <div className="col-span-1">
          <div className="w-[400px] h-[289px] relative ml-14">
            <Image
              src="/casual.jpg" 
              alt="Dress Style 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        <div className="col-span-3 ">
          <div className="w-[500px] h-[289px] relative ml-40 gap-4">
            <Image
              src="/Formal.jpg" 
              alt="Dress Style 2"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>


        <div className="col-span-1">
          <div className="w-[400px] h-[289px] relative ml-14">
            <Image
              src="/Party.jpg"
              alt="Dress Style 3"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

   
        <div className="col-span-3">
          <div className="w-[500px] h-[289px] relative ml-40">
            <Image
              src="/gym.jpg" 
              alt="Dress Style 4"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

    </div>
   
      </div>
     
  );
};

export default Style;