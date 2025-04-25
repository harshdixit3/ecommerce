import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider> {children}</ClerkProvider>
    </div>
  );
};

export default Providers;
