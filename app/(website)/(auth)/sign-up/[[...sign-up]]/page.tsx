import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <>
      <div className="h-full grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex bg-cover bg-center bg-[url('https://res.cloudinary.com/dlm0ieiyt/image/upload/v1724509796/ecommerce-carrefour/register_d8djpt.png')] lg:flex"></div>
        <div className="justify-center flex items-center">
          <SignUp />;
        </div>
      </div>
    </>
  );
};

export default page;
