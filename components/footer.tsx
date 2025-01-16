"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Socials } from "@/components/socials";

import { fadeIn } from "@/lib/variants";

export const Footer = () => {
  return (
    <footer className="relative pt-12 xl:pt-0 bg-soft_green-secondary">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
        >
          <div className="flex flex-col xl:flex-row bg-white p-8 rounded-xl min-h-[394px] xl:p-20 xl:-translate-y-36 xl:gap-x-12 ">
            <div className="xl:w-[470px] mb-6 xl:mb-0">
              <Link href="/">
                <Image
                  src="/footer/logo.svg"
                  alt="logo"
                  width={80}
                  height={36}
                  className="mb-2"
                />
              </Link>
              <p className="text-lg leading-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                ratione esse qui eligendi animi eius reiciendis perferendis,
                fugit et dolores.
              </p>
            </div>
            <div className="flex xl:gap-x-16 xl:ml-32">
              <div className="flex-1">
                <h4 className="h4 mb-6">Navigation</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>
                    <Link href="/" className="capitalize">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="capitalize">
                      Find hotel
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="capitalize">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="capitalize">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="h4 mb-6 capitalize">Contact us</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>+62 123 456 789</li>
                  <li>info@hotely.com</li>
                  <li>hotely.com</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="py-12 xl:-mt-32 flex flex-col xl:flex-row xl:justify-between">
          <p className="text-sm text-black font-semibold text-center mb-4 xl:mb-0">
            Copyright &copy; 2025. All rights reserved
          </p>
          <Socials containerStyles="flex items-center gap-x-4 text-black mx-auto xl:mx-0" />
        </div>
      </div>
    </footer>
  );
};
