//layout
import React from "react";
import Header from "@/components/modules/header";
import Footer from "@/components/modules/footer";
import MobileBottom from "@/components/custom/MobileBottom";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MobileBottom />
      {children}
      <Footer />
    </>
  );
}
