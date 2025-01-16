"use client";

import "swiper/css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@/components/ui/button";

import { fadeIn } from "@/lib/variants";

const recommendationData = [
  {
    id: "1",
    name: "Shanghai Hotel",
    image: "/recommendation/hotel-1.png",
    location: "Shanghai, China",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quasi delectus minima aut similique asperiores eos perspiciatis totam beatae tempora.",
    price: 40,
    testimonial: {
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi amet, harum inventore accusantium at ex recusandae, minus enim totam adipisci soluta eos distinctio vero.",
      personName: "John Smith",
    },
  },
  {
    id: "2",
    name: "Peaks Lodge",
    image: "/recommendation/hotel-2.png",
    location: "Aspen, USA",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quasi delectus minima aut similique asperiores eos perspiciatis totam beatae tempora.",
    price: 90,
    testimonial: {
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita, quod officia possimus voluptate sapiente necessitatibus harum voluptas nihil eius eaque eos.",
      personName: "Robert Johnson",
    },
  },
  {
    id: "3",
    name: "Tropical Oasis Resort",
    image: "/recommendation/hotel-3.png",
    location: "Bali, Indonesia",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quasi delectus minima aut similique asperiores eos perspiciatis totam beatae tempora.",
    price: 140,
    testimonial: {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus amet est dicta, hic officiis quae veritatis nostrum itaque cupiditate laborum.",
      personName: "Leandro Kaplan",
    },
  },
];

export const Recommendation = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="relative pb-12 xl:pt-[157px] xl:pb-[112px] bg-soft_green-secondary"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          loop
          speed={2000}
          spaceBetween={30}
          slidesPerView={1}
        >
          {recommendationData.map(
            ({
              id,
              name,
              image,
              location,
              description,
              price,
              testimonial,
            }) => (
              <SwiperSlide key={id}>
                <div className="flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0">
                  <div className="max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0">
                    <h2 className="h2 mb-4">{name}</h2>
                    <p className="text-soft_green text-sm mb-6">{location}</p>
                    <p className="mb-[60px]">{description}</p>
                    <div className="flex items-center gap-x-[50px]">
                      <Button variant="accent" className="px-11 capitalize">
                        Book now
                      </Button>
                      <div className="text-black">
                        <span className="font-semibold text-2xl">${price}</span>
                        <span className="text-sm">/Night</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative order-1 xl:order-2 flex flex-1 justify-center xl:justify-end h-[634px]">
                    <div>
                      <Image
                        src={image}
                        alt={name}
                        width={905}
                        height={528}
                        quality={100}
                        className="xl:rounded-l-[20px]"
                      />
                      <div className="bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] xl:min-h-[212px] xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl xl:px-10">
                        <p className="mb-3 xl:mb-6 max-w-md mx-auto xl:max-w-none xl:mx-0">
                          {testimonial.message}
                        </p>
                        <p className="text-xl font-bold">
                          {testimonial.personName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </motion.div>
      <Image
        src="/recommendation/pattern.svg"
        alt="Pattern"
        width={240}
        height={240}
        className="aspect-square hidden xl:flex absolute left-[135px] -bottom-[120px]"
      />
    </motion.section>
  );
};
