import React from "react";
import { m, AnimatePresence } from "framer-motion";

const CartBar = ({
  openCartBar,
  setOpenCartBar,
}: {
  openCartBar: boolean;
  setOpenCartBar: (v: boolean) => void;
}) => {
  return (
    <AnimatePresence>
      {openCartBar && (
        <div className="absolute top-[54px] right-0 h-fit w-[340px] bg-white p-4 shadow-2xl">
          <div className="flex"></div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartBar;
