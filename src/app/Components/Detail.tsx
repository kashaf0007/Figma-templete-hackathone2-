
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";


export default function Detail() {

  const CustomerData = [
    {
      text: "Sarah M.",
      description:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      date: "2024-12-05",
    },
    {
      text: "Alex K.",
      description:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      date: "2024-12-04",
    },
    {
      text: "James L.",
      description:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      date: "2024-12-03",
    },
    {
      text: "Emily R.",
      description:
        "The customer service at Shop.co is top-notch! They were incredibly helpful in assisting me with my order. I will definitely be returning for more shopping.",
      date: "2024-12-02",
    },
    {
      text: "Michael T.",
      description:
        "I appreciate how Shop.co prioritizes quality without compromising on affordability. Their collection is a breath of fresh air in the fashion world.",
      date: "2024-12-01",
    },
    {
      text: "Olivia P.",
      description:
        "Shop.co has completely revolutionized my shopping experience. Their user-friendly platform, coupled with amazing products, makes for an unbeatable combo!",
      date: "2024-11-30",
    },
  ];

  return (
    <div className="flex font-Satoshi flex-col justify-between items-center m-auto gap-0">
      {/* Header */}
      <div className="w-[90%] h-[80px] flex justify-start   items-center m-auto">
        <div className="flex w-2/3 h-[20px] justify-start gap-2 items-center mx-auto">
        <h1 className="flex gap-4 sm:h-[58px] sm:w-[654px]  w-[286px] h-[20px] left-4 text-[#000000] lg:left-[100px] top-[150px] text-[20px] sm:text-[28px] sm:mt-[50px] leading-[57.px] font-semibold mb-2 mx-auto">
          All Reviews 
          <h2 className=" text-lg items-baseline text-gray-500">(415)</h2>
        </h1>
        
        </div>
        <div className="flex w-1/3 justify-end items-center gap-2 my-auto">
          <GoDotFill className="w-[24px] h-[24px] text-2xl text-gray-700" />
          <GoDotFill className="w-[24px] h-[24px] text-2xl text-gray-400" />
          <GoDotFill className="w-[24px] h-[24px] text-2xl text-gray-400" />

        </div>
      </div>

 
   
     
       
        <div className="col-span-full flex justify-center mt-8 mb-12">
          <button className="text-lg font-Satoshi font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-full">
            Load More Reviews
          </button>
          </div>
          <div className="bg-black items-center ">
            <img src="footer-bar.png" alt="footerbar" className="w-full"/>

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
}