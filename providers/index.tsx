import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import FramerMotionProvider from "./FramerMotionProvider";
import {dark, neobrutalism, shadesOfPurple} from "@clerk/themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
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
        </div>
    );
};

export default Providers;