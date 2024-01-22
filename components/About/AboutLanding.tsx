"use client";
import React from "react";
import aboutImage from "@/assets/images/about/about.png";
import Image from "next/image";
import { About } from "@/components/styles/AboutStyles";

const AboutLanding = () => {
  return (
    <About>
      <Image
        src={aboutImage}
        width={300}
        height={100}
        alt="about image"
        className="w-full md:h-80"
      />
    </About>
  );
};

export default AboutLanding;
