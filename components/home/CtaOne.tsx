"use client";
import React from "react";
import { m } from "framer-motion";
import { useRouter } from "next/navigation";
import { Slide } from "@/types";
import useSWR, { Fetcher } from "swr";
import "swiper/css/navigation";

const CtaOne = () => {
  const router = useRouter();

  // Client-side data fetching with SWR
  const fetcher: Fetcher<Slide[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);
  const { data } = useSWR<Slide[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/slides",
    fetcher
  );

  //   const handleClick = (link: string) => {
  //     router.push(link);
  //   };
  return (
    <m.section
      initial={{
        x: -100,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
        type: "tween ",
        delay: 0.2,
      }}
      className="my-10 hover:cursor-pointer"
    >
      <div
        className="flex w-full"
        style={{
          backgroundImage: `url(${data?.filter((item: Slide) => item.slug === "cta-home-two")[0].image})`,
          height: "500px",
          width: "100%",
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "repeat",
        }}
      ></div>
    </m.section>
  );
};
export default CtaOne;
