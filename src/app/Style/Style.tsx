import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
import Image from "next/image";

const Style = () => {
  return (
    <div className="w-[90%] max-w-[1440px] h-[866px] mx-auto mt-12 bg-[#F0F0F0] rounded-2xl p-14">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] my-12">
          BROWSE  BY DRESS STYLE
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 gap-4">
        {/* First Image */}
        <div className="col-span-1">
          <div className="w-[400px] h-[289px] relative ml-14">
            <Image
              src="/casual.jpg" // Replace with your image path
              alt="Dress Style 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Second Image */}
        <div className="col-span-3 ">
          <div className="w-[500px] h-[289px] relative ml-40 gap-4">
            <Image
              src="/Formal.jpg" // Replace with your image path
              alt="Dress Style 2"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Third Image */}
        <div className="col-span-1">
          <div className="w-[400px] h-[289px] relative ml-14">
            <Image
              src="/Party.jpg" // Replace with your image path
              alt="Dress Style 3"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Fourth Image */}
        <div className="col-span-3">
          <div className="w-[500px] h-[289px] relative ml-40">
            <Image
              src="/gym.jpg" // Replace with your image path
              alt="Dress Style 4"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
      
        

      </div>

      <div className="bg-black items-center ">
            <img src="footer-bar.png" alt="footerbar"/>
            </div>



      <div className="bg-[#F0F0F0] w-full h-auto pt-16 pb-8 px-4 sm:px-8 lg:px-20">
        <div className="max-w-[1440px] max-h-[499px] mx-auto pt-20 pb-0 flex flex-col lg:flex-row justify-between items-start lg:h-[499px]  lg:space-y-0">
          {/* Company Info Section */}
          <div className="flex flex-col gap-4 justify-start items-start ">
            <h3 className="font-satoshi w-[167px] h-[23px] text-4xl font-bold mb-4">SHOP.CO</h3>
            <p className="font-satoshi w-[248px] h-[66px] text-sm text-[#00000099] mb-8">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
          
            <div className="flex gap-4">
              <div className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center">
                <IoLogoTwitter className="text-xl" />
              </div>
              <div className="h-[35px] w-[35px] rounded-full bg-black text-white flex justify-center items-center">
                <RiFacebookFill className="text-xl" />
              </div>
              <div className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center">
                <FaInstagram className="text-xl" />
              </div>
              <div className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center">
                <IoLogoGithub className="text-xl" />
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex flex-wrap lg:w-2/3 justify-between">
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h5 className="font-satoshi text-lg font-semibold mb-4 tracking-wide">COMPANY</h5>
              <ul className="font-satoshi text-sm text-[#00000099] space-y-4">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h5 className="font-satoshi text-lg font-semibold mb-4 tracking-wide">HELP</h5>
              <ul className="font-satoshi text-sm text-[#00000099] space-y-4">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h5 className="font-satoshi text-lg font-semibold mb-4 tracking-wide">FAQ</h5>
              <ul className="font-satoshi text-sm text-[#00000099] space-y-4">
                <li>Account</li>
                <li>Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h5 className="font-satoshi text-lg font-semibold mb-4 tracking-wide">RESOURCES</h5>
              <ul className="font-satoshi text-sm text-[#00000099] space-y-4">
                <li>Free eBooks</li>
                <li>Developer Tutorials</li>
                <li>How-to Blogs</li>
                <li>YouTube Playlists</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#0000001A] mt-0 mb-4"></div>

        {/* Footer Bottom Section */}
        <div className="flex justify-between items-center ">
          <div className="font-satoshi text-sm text-[#00000099]">Shop.co © 2000-2023, All Rights Reserved</div>
          <Image src={"/Badge (3).jpg"} alt={"Paypal.jpg"} height={30} width={20} />
          <Image src={"/Mastercard.jpg"} alt={"Paypal.jpg"} height={30} width={20} />
          <Image src={"/paypal.jpg"} alt={"Paypal.jpg"} height={30} width={20} />
          <Image src={"/Badge.jpg"} alt={"Paypal.jpg"} height={30} width={20} />

          <Image src={"/Badge (2).jpg"} alt={"Paypal.jpg"} height={30} width={20} />
        </div>
      </div>

      </div>
     
  );
};

export default Style;