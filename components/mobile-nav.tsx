"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Nav } from "@/components/nav";
import { Socials } from "@/components/socials";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} className="text-white" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col justify-between p-12 h-full"
      >
        <SheetHeader>
          <SheetTitle className="">
            <Link href="/" className="mb-24">
              <Image
                src="/footer/logo.svg"
                alt="Logo"
                width={90}
                height={46}
                priority
              />
            </Link>
          </SheetTitle>
          <SheetDescription className="sr-only">Mobile menu</SheetDescription>
        </SheetHeader>
        <Nav
          containerStyles="text-black"
          listStyles="flex flex-col gap-y-6 text-xl"
        />
        <Socials containerStyles="flex items-center gap-x-4 text-black" />
      </SheetContent>
    </Sheet>
  );
};
