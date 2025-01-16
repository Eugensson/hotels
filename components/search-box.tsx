"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/date-picker";
import { GuestSelect } from "@/components/guest-select";

import { fadeIn } from "@/lib/variants";

export const SearchBox = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="w-full max-w-[488px] max-h-max bg-white flex flex-col border-outline rounded-[20px] p-10 gap-y-5"
    >
      <div className="mb-5">
        <Label htmlFor="destination">Where are you going?</Label>
        <div className="relative flex items-center mb-5">
          <Input
            name="destination"
            id="destination"
            placeholder='try "Singapore"'
          />
          <MapPin size={20} className="absolute right-6 text-black" />
        </div>

        <div className="flex flex-col xl:flex-row gap-x-7 gap-y-5 xl:gap-y-0">
          <div className="flex flex-1 flex-col">
            <Label>Check in</Label>
            <DatePicker />
          </div>
          <div className="flex flex-1 flex-col">
            <Label>Check out</Label>
            <DatePicker />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col flex-1">
          <Label>Guests</Label>
          <GuestSelect />
        </div>
        <div className="flex items-center gap-x-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="mb-0">
            Pay when checking in?
          </Label>
        </div>
        <Button size="lg" variant="accent" className="capitalize">
          Search hotel
        </Button>
      </div>
    </motion.div>
  );
};
