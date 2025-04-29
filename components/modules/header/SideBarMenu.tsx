import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import React from "react";
import { cn } from "@/lib/utils";

const SideBarMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <CiMenuFries size={34} />
        </SheetTrigger>
        <SheetContent
          className={cn("px-4 w-full [&>#closeBtn]:text-3xl", "md:w-[400px]")}
        >
          <div className="mt10"></div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideBarMenu;
