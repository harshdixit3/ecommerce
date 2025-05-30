"use client";
import { IRootState } from "@/store";
import { FolderKanban, Home, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { memoize } from "proxy-memoize";
import React from "react";
import { useSelector } from "react-redux";

export default function MobileBottom() {
  const { cart } = useSelector(memoize((state: IRootState) => ({ ...state })));
  return (
    <div className="bg-gray-200 z-40 w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 border-t border-t-gray-300 h-16 fixed shadow-slate-600 shadow-md bottom-0 left-0 lg:hidden">
      <div className="flex items-center justify-center gap-8 w-full h-full">
        <Link
          href="/products"
          className="flex flex-col gap-1 items-center justify-center"
        >
          <FolderKanban className="text-slate-600 h-5 w-5" />
          <span className="font-normal text-sm text-slate-600 text">Store</span>
        </Link>

        <Link
          href="/"
          className="flex flex-col gap-1 items-center justify-center"
        >
          <Home className="text-slate-600 h-5 w-5" />
          <span className="font-normal text-sm text-slate-600 text">Home</span>
        </Link>
        <Link
          href="/cart"
          className="flex flex-col gap-1 items-center justify-center relative"
        >
          <ShoppingCart className="text-slate-600 h-5 w-5" />
          <span className="absolute flex justify-center items-center -top-3 -right-2  bg-red-600 text-white rounded-full text-sm w-5 h-5 text-center">
            {cart.cartItems.length}
          </span>
          <span className="font-normal text-sm text-slate-600 text">Cart</span>
        </Link>
        <Link
          href="/sign-in"
          className="flex flex-col gap-1 items-center justify-center"
        >
          <User className="text-slate-600 h-5 w-5" />
          <span className="font-normal text-sm text-slate-600 text">
            Account
          </span>
        </Link>
      </div>
    </div>
  );
}
