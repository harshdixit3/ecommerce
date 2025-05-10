import { cn } from "@/lib/utils";
import { Category, Page } from "@/types";

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
        <ul className="flex gap-32 justify-between items-center">
          {pageApi.data &&
            pageApi.data.map((item: Page) => (
              <li key={item._id} className="relative">
                <Link
                  href="/"
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
            </button>
          </li>
        </ul>
      </section>
    </>
  );
};

export default MainMenu;
