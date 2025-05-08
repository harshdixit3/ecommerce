import React from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Trash } from "lucide-react";
import { CartItem } from "@/types";

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
  return (
    <AnimatePresence>
      {openCartBar && (
        <div className="absolute top-[54px] right-0 h-fit w-[340px] bg-white p-4 shadow-2xl">
          <div className="flex flex-col justify-between gap-8">
            <span className="text-center">
              You have <strong>0</strong> Items in your cart
            </span>
            <div className="flex flex-col snap-y max-h-[360px]: gap-6 border-b border-grey-200 pb-4">
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
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartBar;
