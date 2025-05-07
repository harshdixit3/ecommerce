import Row from "@/components/custom/Row";
import { Button } from "@/components/ui/button";
import React from "react";
import { CiSearch } from "react-icons/ci";
import SearchBar from "./SearchBar";

const IconsGroups = ({
  openSearchBar,
  setOpenSearchBar,
}: {
  openSearchBar: boolean;
  setOpenSearchBar: (v: boolean) => void;
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
          <CiSearch size="40" className="hover:text-primary-900" />
        </Button>
      </Row>
    </section>
  );
};

export default IconsGroups;
