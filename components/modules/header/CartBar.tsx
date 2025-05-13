"use client";
import React from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Trash } from "lucide-react";
import { CartItem } from "@/types";
import CurrencyFormat from "@/components/custom/CurrencyFormat";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CartBar = ({
  openCartBar,
  setOpenCartBar,
}: {
  openCartBar: boolean;
  setOpenCartBar: (v: boolean) => void;
}) => {
  const handleRemoveItem = (item: CartItem) => {
    // Todo
  };

  const addToCartHandler = () => {
    //  try {
    //  }catch{
    //  }
  };

  return (
    <AnimatePresence>
      {openCartBar && (
        <m.div
          onMouseLeave={() => setOpenCartBar(!openCartBar)}
          initial={{ opacity: 0, y: -15 }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", duration: 0.7 },
          }}
          exit={{
            y: -20,
            opacity: 0,
            filter: "blur(5px)",
            scale: "scale(0)",
            transition: { ease: "easeIn", duration: 0.22 },
          }}
          className="absolute top-[50px] right-0 h-fit w-[360px] bg-white z-[9999] p-4 shadow-2xl"
        >
          <div className="flex flex-col justify-between gap-8">
            <span className="text-center">
              You have <strong>0</strong> Items in your cart
            </span>
            {/* Todo */}
            <div className="flex flex-col snap-y max-h-[360px]: gap-6 border-b border-gray-200 pb-4 overflow-y-auto">
              <div className="flex justify-bewteen gap-4 snap-center cursor-grab">
                <Image
                  src=""
                  width={200}
                  height={200}
                  alt="prod"
                  className="h-20 w-20 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <span className="capitalize">Name Here</span>
                  <div className="inline-flex gap-4 font-bold">
                    <span className="font-bold">2</span>
                    <span>X</span>
                    <span className="font-bold">$200</span>
                  </div>
                  <div className="inline-flex justify-between">
                    <div className="inline-flex justify-between gap-1 items-center">
                      <span>Style:</span>
                      <span className="font-bold">Style Name</span>
                    </div>
                    <div className="inline-flex gap-1">
                      <span>Option:</span>
                      <span className="font-bold">Option name</span>
                    </div>
                  </div>
                </div>
                <div
                  className="flex item-start"
                  role="button"
                  onClick={() => handleRemoveItem(item)}
                >
                  <Trash className="hover:text-primary-500" size={20} />
                </div>
              </div>
              <div className="flex justify-bewteen gap-4 snap-center cursor-grab">
                <Image
                  src=""
                  width={200}
                  height={200}
                  alt="prod"
                  className="h-20 w-20 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <span className="capitalize">Name Here</span>
                  <div className="inline-flex gap-4 font-bold">
                    <span className="font-bold">2</span>
                    <span>X</span>
                    <span className="font-bold">$200</span>
                  </div>
                  <div className="inline-flex justify-between">
                    <div className="inline-flex justify-between gap-1 items-center">
                      <span>Style:</span>
                      <span className="font-bold">Style Name</span>
                    </div>
                    <div className="inline-flex gap-1">
                      <span>Option:</span>
                      <span className="font-bold">Option name</span>
                    </div>
                  </div>
                </div>
                <div
                  className="flex item-start"
                  role="button"
                  onClick={() => handleRemoveItem(item)}
                >
                  <Trash className="hover:text-primary-500" size={20} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex justify-center font-bold">
                <div className="text-xl ">Subtotal :</div>
                <strong>
                  <CurrencyFormat value={200} className="text-right" />
                </strong>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/cart"
                  className="rounded-sm py-4 flex justify-center text-sm hover:bg-red-500 hover:text-white uppercase border-border"
                >
                  view cart
                </Link>
                <Button
                  onClick={() => {
                    addToCartHandler();
                  }}
                  variant="default"
                  size="lg"
                  className="rounded-sm py-8 bg-black text-white hover:text-black hover:bg-white text-sm capitalize"
                >
                  CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default CartBar;
