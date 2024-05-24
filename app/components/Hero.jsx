import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full max-w-7xl h-72 opacity-95 mt-6 xl:rounded-lg overflow-hidden">
      <Image
        priority
        src="/images/hero.jpg"
        alt="Hero Image"
        fill
        style={{
          objectFit: "cover",
        }}
        className="w-full h-full opacity-80"
      ></Image>
      <div className="bg-black w-full h-full"></div>
    </div>
  );
}
