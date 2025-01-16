"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";

export const Featured = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="relative bg-soft_green-secondary xl:h-60 max-w-[1305px] ml-auto xl:-top-[120px] rounded-l-[30px] px-5 md:px-20 py-[60px]"
    >
      <div className="flex flex-col xl:flex-row items-center h-full gap-x-7 text-center xl:text-left">
        <Image
          src="/featured/icon.svg"
          alt="Heart icon"
          width={73}
          height={84}
          className="xl:mr-12"
        />
        <h2 className="h2 flex-1 text-soft_green leading-relaxed">
          Book an awesome room in less than 1 minute.
        </h2>
        <p className="flex-1 text-soft_green leading-loose">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima omnis
          iure voluptates ullam sit iusto vitae quas amet nihil impedit? Neque
          cum quibusdam provident minima voluptas.
        </p>
      </div>
    </motion.section>
  );
};
