import React from "react";
import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <>
      <div className="h-full grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex bg-cover bg-center bg-[url('https://res.cloudinary.com/dlm0ieiyt/image/upload/v1724509216/ecommerce-carrefour/login_onnsp6.png')] lg:flex"></div>
        <div className="justify-center flex items-center">
          <SignIn />;
        </div>
      </div>
    </>
  );
};

export default page;
