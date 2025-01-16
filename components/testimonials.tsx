"use client";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { fadeIn } from "@/lib/variants";

const testimonialData = [
  {
    id: "1",
    image: "/testimonials/img-1.png",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque ad quisquam repellat maiores harum similique magni delectus dolores quae accusamus, minima neque ab excepturi? Nesciunt tempora pariatur excepturi quae, unde vitae iusto tenetur possimus vero repellat! Odit quibusdam architecto aperiam laborum excepturi, commodi voluptatibus.",
    personName: "Robert Pele",
    location: "Singapore",
  },
  {
    id: "2",
    image: "/testimonials/img-2.png",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque ad quisquam repellat maiores harum similique magni delectus dolores quae accusamus, minima neque ab excepturi? Nesciunt tempora pariatur excepturi quae, unde vitae iusto tenetur possimus vero repellat! Odit quibusdam architecto aperiam laborum excepturi, commodi voluptatibus.",
    personName: "Makr Crimson",
    location: "LA, USA",
  },
];

export const Testimonials = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="bg-soft_green xl:h-[880px]"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="container mx-auto"
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="xl:h-[680px] overflow-hidden"
        >
          {testimonialData.map(
            ({ id, image, message, personName, location }) => (
              <SwiperSlide key={id}>
                <div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
                  <Image
                    src={image}
                    alt={personName}
                    width={470}
                    height={470}
                    quality={100}
                    className="hidden xl:flex aspect-square object-cover object-center"
                  />
                  <div className="flex-1 bg-white/20 text-white p-12">
                    <p className="text-lg leading-9 mb-8">{message}</p>
                    <p className="text-xl font-bold mb-2">{personName}</p>
                    <p>{location}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};
