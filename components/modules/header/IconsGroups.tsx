import Row from "@/components/custom/Row";
import { Button } from "@/components/ui/button";
import React from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import SearchBar from "./SearchBar";

const IconsGroups = ({
  openSearchBar,
  setOpenSearchBar,
  openCartBar,
  setOpenCartBar,
}: {
  openSearchBar: boolean;
  setOpenSearchBar: (v: boolean) => void;
  openCartBar: boolean;
  setOpenCartBar: (v: boolean) => void;
}) => {
  return (
    <section>
      <Row>
        <SearchBar
          openSearchBar={openSearchBar}
          setOpenSearchBar={setOpenSearchBar}
        />

        <Button
          variant="nostyle"
          size="icon"
          onClick={() => setOpenSearchBar(!openSearchBar)}
        >
          <CiSearch size="40" className="" />
        </Button>
        <Button
          id="openCart"
          onClick={() => setOpenCartBar(!openCartBar)}
          className="hidden lg:block relative"
          variant="nostyle"
          size="icon"
        >
          <CiShoppingCart size={100} className="font-bold" />
          <span className="absolute flex items-center justify-center  text-white text-base -top-0 justify-items-stretch -left-[1] -right-[1] h-3 w-3 rounded-full bg-primary-500">
            {/* {cart.cartItems.length} */}
          </span>
        </Button>
        <Button
          className="hidden lg:block relative"
          variant="nostyle"
          size="icon"
          // onClick={() => router.push("/account/dashboard")}
        >
          <CiUser size={40} />
        </Button>
      </Row>
    </section>
  );
};

export default IconsGroups;
