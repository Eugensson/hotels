"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";

import { Stats } from "@/components/stats";
import { Button } from "@/components/ui/button";

import { fadeIn } from "@/lib/variants";

export const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [ref, inView] = useInView({
    threshold: !isMobile ? 0.5 : undefined,
  });

  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex flex-1 relative"
          >
            <Image
              src="/about/img2.png"
              alt="Hotel picture"
              width={559}
              height={721}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="xl:max-w-[470px]"
          >
            <h2 className="capitalize h2 mb-[38px]">About hotely</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              maxime ea soluta nostrum iure dolore, ipsa similique consequuntur,
              recusandae, officiis nulla obcaecati repellendus non eligendi ad
              fugiat debitis blanditiis unde?
            </p>
            <div className="my-5 xl:my-10 min-h-[35px]">
              {inView && <Stats />}
            </div>
            <p className="mb-10">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sapiente deserunt est molestias voluptatum soluta illum quidem ut,
              omnis architecto.
            </p>
            <Button variant="accent" className="capitalize">
              Explore more
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
