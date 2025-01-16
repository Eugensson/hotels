"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { fadeIn } from "@/lib/variants";

const hotels = [
  {
    id: "1",
    image: "/find/hotel-1.png",
    name: "Hotel de luna",
    description: "",
    location: "Singapore",
  },
  {
    id: "2",
    image: "/find/hotel-2.png",
    name: "Ina tretes hotel",
    description: "",
    location: "Indonesia",
  },
  {
    id: "3",
    image: "/find/hotel-3.png",
    name: "Delight hotel",
    description: "",
    location: "Albania",
  },
  {
    id: "4",
    image: "/find/hotel-4.png",
    name: "Mercusuar hotel",
    description: "",
    location: "Indonesia",
  },
];

export const Find = () => {
  return (
    <section className="py-12 xl:py-36">
      <div className="container mx-auto">
        <div className="text-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 mb-6"
          >
            Find your best hotel
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[638px] mx-auto mb-8"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolorem incidunt optio saepe porro laboriosam quo necessitatibus
            accusamus minus voluptates.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Button
              variant="accent"
              className="capitalize px-12 mb-14 xl:mb-28"
            >
              View all
            </Button>
          </motion.div>
        </div>
        <motion.ul
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          {hotels.map(({ id, image, name, location }) => (
            <li key={id}>
              <Card className="overflow-hidden rounded-xl border-2 border-outline w-full max-w-[270px] hover:cursor-pointer group hover:bg-soft_green transition-all duration-700">
                <CardContent className="p-0 overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={300}
                    className="aspect-square"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle className="h4 group-hover:text-white transition-all duration-300 capitalize">
                    {name}
                  </CardTitle>
                  <CardDescription className="group-hover:text-white transition-all duration-300">
                    {location}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
