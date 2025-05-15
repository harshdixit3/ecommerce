"use client";
import React from "react";

import Container from "@/components/custom/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import useSWR, { Fetcher } from "swr";
import { Product } from "@/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Loading from "../custom/Loading";
import ProductCard from "../custom/ProductCard";

const FeaturesProducts = () => {
  const router = useRouter();

  // Client-side data fetching with SWR
  const fetcher: Fetcher<Product[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);
  const { data, error, isLoading } = useSWR<Product[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/products",
    fetcher
  );

  if (error) return toast.error("Data fetching error");

  return (
    <section className="py-10 w-full">
      {isLoading && <Loading isLoading={true} />}
      <Container>
        <Swiper
          breakpoints={{
            // when window width is >= 340
            340: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            // when window width is >= 768
            575: {
              slidesPerView: 2,
              spaceBetween: 40,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            // when window width is >= 1024
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={5}
          navigation={false}
          pagination={true}
          history={{
            key: "slide",
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className={cn(
            "mySwiper shadow-xl w-full flex items-center justify-between  border border-gray-200 rounded-md px-20 py-10"
          )}
        >
          {data &&
            data
              .filter((item: Product) => item.featured === true)
              .map((item: Product, idx: number) => (
                <SwiperSlide key={item._id}>
                  {/* <ProductCard item={Product} /> */}
                </SwiperSlide>
              ))}
        </Swiper>
      </Container>
    </section>
  );
};
export default FeaturesProducts;
