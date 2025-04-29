import React from "react";
import SideBarMenu from "./SideBarMenu";

const MobileButton = () => {
  return (
    <div className="block lg:hidden">
      <SideBarMenu />
    </div>
  );
};

export default MobileButton;
