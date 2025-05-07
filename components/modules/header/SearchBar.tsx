"use client";
import React, { useState } from "react";
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
import { useRouter } from "next/navigation";
import useSWR, { Fetcher } from "swr";
import { Product } from "@/types";

import { getBestPriceWithDiscountFromProduct } from "@/lib/utils";
import Image from "next/image";
import Loading from "@/components/custom/Loading";

const SearchBar = ({
  openSearchBar,
  setOpenSearchBar,
}: {
  openSearchBar: boolean;
  setOpenSearchBar: (v: boolean) => void;
}) => {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const fetcher: Fetcher<Product[]> = (args: string) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);

  const { data, error, isLoading, isValidating } = useSWR<Product[]>(
    "https://fractal-api-zeta.vercel.app/api/products?search=" + search,
    fetcher
  );

  if (error) return <div>data is fetching...</div>;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  return (
    <>
      {(isValidating || isLoading) && <Loading isLoading={true} />}
      <Dialog open={!openSearchBar}>
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
          <div className="flex h-[600px] overflow-y-auto w-full py-12 gap-4 flex-col justify-start items-center px-12">
            {data &&
              data.map((item: Product, idx: number) => (
                <div
                  className="lg:h-fit group flex flex-col  justify-start gap-8 px-8  items-center w-full py-4 hover:border-gray-50 cursor-pointer  hover:scale-105 transition-all hover:shadow-lg lg:flex-row lg:px-2 lg:gap-32 "
                  onClick={() => router.push(`/products/${item.slug}`)}
                  key={idx}
                >
                  <Image
                    src={item.subProducts[0].options[0].images[0]}
                    height={80}
                    width={60}
                    className="object-contain"
                    alt="product"
                  />
                  <h6 className="capitalize">{item.name.substring(0, 100)}</h6>
                  <div className="w-40 text-right lg:ms-auto font-bold text-xl text-primary-900">
                    {`${getBestPriceWithDiscountFromProduct(item)}`}
                  </div>
                </div>
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchBar;
