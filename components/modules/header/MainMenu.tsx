import { cn } from "@/lib/utils";
import { Category, Page, SubCategory } from "@/types";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import useSWR, { Fetcher } from "swr";

const MainMenu = () => {
  const pathname = usePathname();

  const fetcher: Fetcher<Category[]> = (args: string) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);

  const { data, error, isLoading } = useSWR<Category[]>(
    "https://fractal-api-zeta.vercel.app/api/categories",
    fetcher
  );
  const pageApi = useSWR<Category[]>(
    "https://fractal-api-zeta.vercel.app/api/pages",
    fetcher
  );

  if (error) return <div>data fetching category error</div>;

  if (pageApi.error) return <div>data fetching error</div>;

  const [show, setShow] = useState(false);

  return (
    <>
      <section className="hidden lg:flex z-[9] relative">
        <ul className="flex gap-32 justify-between items-center capitalize">
          {pageApi.data &&
            pageApi.data.map((item: Page) => (
              <li key={item._id} className="relative">
                <Link
                  href={item.link}
                  className={cn(
                    "h-full duration-300 after:absolute after:top-[26px] after:left-0  after:w-0 after:h-1 after:bg-primary-400 after:duration-100 after:ease-linear hover:after:w-full",
                    pathname === item.link && "border-b-2 border-primary-400"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          <li className="group">
            <button
              className="capitalize inline-flex items-center "
              onClick={() => setShow(!show)}
            >
              Categories
              <ChevronDown className="mt-1" />
            </button>
            <AnimatePresence>
              {show && (
                <m.div
                  initial={{
                    opacity: 0,
                    y: -15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { type: "spring", duration: 0.7 },
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    filter: "blur(5px)",
                    transition: { ease: "easeIn", duration: 0.22 },
                  }}
                  className="grid grid-cols-4 justify-items-center grid-rows-auto
          fixed bg-white py-4 px-4 h-[560px] w-[1100px] z-[999999] 
          right-[300px] top-[54px] gap-12 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-neutral-500"
                >
                  {data &&
                    data.slice(0, 8).map((item: Category) => (
                      <ul
                        className="flex flex-col gap-4 text-xl"
                        key={item._id}
                      >
                        <li>
                          <Link
                            href={`/categories/${item.link}/products`}
                            className="font-bold group/item w-full 
                            transition-all flex items-center 
                            gap-2 duration-100 ease-linear hover:translate-x-1"
                          >
                            <h5 className="transition ease-in-out hover:text-primary-500 capitalize">
                              {item.name}
                            </h5>
                          </Link>
                        </li>
                        {item.submenu &&
                          item.submenu.length > 0 &&
                          item.submenu.map(
                            (subCat: SubCategory, idx: number) => (
                              <li
                                key={idx}
                                className="font-normal duration-300 hover:translate-x-1"
                              >
                                <Link
                                  className="hover:text-secondary-500"
                                  href={`/categories${subCat.link}/products`}
                                >
                                  {subCat.name}
                                </Link>
                              </li>
                            )
                          )}
                      </ul>
                    ))}
                </m.div>
              )}
            </AnimatePresence>
          </li>
        </ul>
      </section>
    </>
  );
};

export default MainMenu;
