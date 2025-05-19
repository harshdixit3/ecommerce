import React from "react";
import { Metadata } from "next";
import CtaOne from "@/components/home/CtaOne";
import HomeSlide from "@/components/home/HomeSlide";
import Payments from "@/components/custom/Payments";
import Categories from "@/components/home/Categories";
import FeaturesProducts from "@/components/home/FeaturesProducts";
import CtaTwo from "@/components/home/CtaTwo";

const Page = () => {
  return (
    <>
      <HomeSlide />
      <Payments />
      <Categories />
      <FeaturesProducts />
      <CtaTwo />
      <CtaOne />
    </>
  );
};

export default Page;

export const metadata: Metadata = {
  title: "Ecommer - Home page",
  description:
    "A Ecommerce app. We are selling clothing, shoes for mens womens and kids",
  icons: {
    icon: "/assets/images/broWser-logo.png",
  },

  //For SEO: Sharing on social media twitter, whatsapp, Linkeidn etc
  // openGraph: mergeOpenGraph({
  //     title: `Ecommer - Home page`,
  //     url: `/`,
  // }),
};
