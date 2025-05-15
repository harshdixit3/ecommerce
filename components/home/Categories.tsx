"use client";
import React from "react";

import Container from "@/components/custom/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import useSWR, { Fetcher } from "swr";
import { Slide } from "@/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";

const Categories = () => {
  const animation = {
    hide: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
    },
  };

  const router = useRouter();

  // Client-side data fetching with SWR
  const fetcher: Fetcher<Slide[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);
  const { data, error, isLoading } = useSWR<Slide[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/slides",
    fetcher
  );

  const handleClick = (link: string) => {
    router.push(link);
  };
  return (
    <section className="py-10 w-full">
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
              .filter((item: Slide) => item.slug === "top-categories-home")
              .map((item: Slide) => (
                <SwiperSlide
                  key={item._id}
                  className="relative [&>button]:block hover:scale-105 duration-300 ease-linear cursor-pointer"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    height: "600px",
                    width: "auto",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                >
                  <div className="absolute porse bg-white rounded-lg p-4 bottom-10 w-40 shadow-xl cursor-pointer hover:bg-black hover:text-white drop-shadow-xl duration-300 ease-linear capitalize">
                    <m.h6
                      initial={animation.hide}
                      whileInView={animation.show}
                      //   transition={{ delay: 0.1 + idx / 6 }}
                      className={cn("capitalize")}
                      style={{
                        color: `${item.textColor}`,
                      }}
                      onClick={() => handleClick(item.link)}
                    >
                      {item.title}
                    </m.h6>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </Container>
    </section>
  );
};
export default Categories;
