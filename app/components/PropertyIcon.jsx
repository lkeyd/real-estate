import React from "react";
import Image from "next/image";

export default function PropertyIcon(props) {
  return (
    <div className="flex justify-center items-center space-x-1">
      <p className="text-gray-800 text-bold text-xl">
        {props.property[props.icon]}
      </p>
      <Image
        src={`/images/${props.icon}.svg`}
        alt={`${props.icon}`}
        height={24}
        width={24}
        className="opacity-80"
      ></Image>
    </div>
  );
}
