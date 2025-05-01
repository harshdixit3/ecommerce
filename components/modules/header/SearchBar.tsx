"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogHeader,
  // DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = ({
  openSearchBar,
  setOpenSearchBar,
}: {
  openSearchBar: boolean;
  setOpenSearchBar: (v: boolean) => void;
}) => {
  const handleSearch = () => {
    // TODO
  };
  return (
    <Dialog open={openSearchBar}>
      <DialogContent className="lg:max-w-screen-xl z-[99999] [&>.closeBtn]:hidden">
        <div className="flex items-center w-full gap-4">
          <Search className="text-slate-300" />
          <Input
            onInput={handleSearch}
            placeholder="women shirt, shoes"
            className="outline-none text-slate-500 text-base"
          />
          <Button
            onClick={() => setOpenSearchBar(!openSearchBar)}
            type="button"
            variant="outline"
            className="hover:bg-primary-700"
          >
            <X className="bg-transparent text-black hover:text-white" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
