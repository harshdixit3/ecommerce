import { SignOutButton, UserButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div>
      this is protected page
      <UserButton />
      <SignOutButton />
    </div>
  );
};

export default page;
