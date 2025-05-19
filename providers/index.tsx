"use client";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import FramerMotionProvider from "./FramerMotionProvider";
import { dark } from "@clerk/themes";
import { Provider } from "react-redux";
import store from "@/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Provider store={store}>
        <ClerkProvider
          //custom style
          appearance={{
            baseTheme: dark,
            layout: {
              socialButtonsPlacement: "bottom",
              socialButtonsVariant: "blockButton",
              logoImageUrl: "/assets/images/sign-in-logo.png",
            },
          }}
          afterSignOutUrl="/sign-in"
          afterSignInUrl="/account/dashboard"
          signInUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`}
          signUpUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}`}
          signInFallbackRedirectUrl="/"
          signUpFallbackRedirectUrl="/"
        >
          <FramerMotionProvider>{children}</FramerMotionProvider>
        </ClerkProvider>
      </Provider>
    </div>
  );
};

export default Providers;
