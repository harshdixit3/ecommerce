import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const MainMenu = () => {
  return (
    <section className="hidden lg:flex z-[9] relative">
      <ul className="flex gap-32 justify-between items-center">
        {
          <li className="relative">
            <Link
              href="/"
              className={cn(
                "h-full duration-300 after:absolute after:top-[26px] after:left-0  after:w-0 after:h-1 after:bg-primary-400 after:duration-100 after:ease-linear hover:after:w-full"
              )}
            >
              link1
            </Link>
          </li>
        }
      </ul>
    </section>
  );
};

export default MainMenu;
