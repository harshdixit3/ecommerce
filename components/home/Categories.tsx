"use client"
import React from 'react'

import Container from "@/components/custom/Container";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {cn} from "@/lib/utils";
import useSWR, {Fetcher} from "swr";
import {Slide} from "@/types";

const Categories = () => {

    // Client-side data fetching with SWR
    const fetcher: Fetcher<Slide[], string> = (args) =>
        fetch(args)
            .then((res) => res.json())
            .then((res) => res.data);
    const { data, error, isLoading } = useSWR<Slide[]>(
        process.env.NEXT_PUBLIC_API_URL + "/api/slides",
        fetcher
    );
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
                            slidesPerView: 5,
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
                    {
                        data && data.filter((item: Slide)=> item.slug === "top-categories-home")
                            .map((item: Slide) => (
                                <SwiperSlide key={item._id} className="relative [&>button]:block hover:scale-105 duration-300 ease-linear cursor-pointer"
                                             style={{
                                                 backgroundImage: `url(${item.image})`,
                                                 height: "600px",
                                                 width: "auto",
                                                 backgroundSize: "cover",
                                                 backgroundPosition: "top",
                                             }}
                                >
                                   <div>
                                       <h6>
                                           {item.title}
                                       </h6>
                                   </div>
                                </SwiperSlide>
                            ))
                    }
                </Swiper>
            </Container>
        </section>
    )
}
export default Categories
