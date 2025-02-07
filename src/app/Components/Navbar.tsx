"use client";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import SearchBar from "./Searchbar";
import { useAtom } from "jotai";
import { cartAtom } from "@/store";
import dynamic from "next/dynamic";

// ✅ Clerk Components ko dynamically import kar rahe hain
const SignedOut = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignedOut), { ssr: false });
const SignedIn = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignedIn), { ssr: false });
const SignInButton = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignInButton), { ssr: false });
const UserButton = dynamic(() => import("@clerk/nextjs").then((mod) => mod.UserButton), { ssr: false });

const Navbar = () => {
  const [cartItems] = useAtom(cartAtom);

  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col w-1440px">
      {/* Top banner */}
      <div className="bg-black text-white py-2 text-sm flex justify-between items-center px-8 w-full">
        <div className="text-center flex-1">
          Sign up and get 20% off to your first order.
          <a href="#" className="underline hover-text-slate-300"> Sign Up Now </a>
        </div>
        <div className="text-white text-xl">
          <RxCross2 />
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-extrabold bg-white text-black px-24">
            SHOP.CO
          </h1>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 py-3 items-center">
          <Link href="/Sidebar" className="text-gray-900 text-xl hover:text-black float-start underline">Shop</Link>
          <div className="text-black text-xl"><IoIosArrowDown /></div>
          <Link href="/Sidebar" className="text-gray-900 text-xl hover:text-black float-start">On Sale </Link>
          <Link href={"/Arrivals"} className="text-gray-900 text-xl hover:text-black float-start">New Arrivals</Link>
          <Link href="#brand" className="text-gray-900 text-xl hover:text-black float-start">Brands</Link>
        </nav>

        {/* Search, Cart & Auth */}
        <div className="flex items-center space-x-6">
          <SearchBar />
          <Link href="/Cart" className="relative">
            <LuShoppingCart className="text-3xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Authentication */}
        <Link href="/Login">
          <IoPersonCircleOutline className="text-3xl" />
        </Link>

        {/* Clerk Authentication (Dynamic Import) */}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Navbar;
