"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import PropertyCard from "./PropertyCard";
import Image from "next/image";
import { Contrail_One } from "next/font/google";

export default function ImageSlider(props) {
  const imageWidth = 384;
  const imageHeight = 256;
  const imageSpacing = 12;
  const borderWidth = 2;
  const containerWidth =
    (imageWidth + borderWidth * 2) * 3 + imageSpacing * 2 * 4;
  const [position, setPosition] = useState(1);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  console.log(containerWidth);

  const handleNextClick = (direction, data) => {
    console.log(direction);
    const dataLength = data.property.length;
    if (direction === "right") {
      console.log("right", position);
      if (position < dataLength - 2) {
        setPosition(position + 1);
      }
    } else if (direction === "left") {
      if (position > 1) {
        setPosition(position - 1);
      }
    }
  };

  useEffect(() => {
    const xOffset =
      (position - 1) * (imageWidth + 2 * borderWidth + imageSpacing * 4);
    sliderRef.current.style.transform = `translateX(-${xOffset}px)`;
  }, [position]);

  useEffect(() => {
    containerRef.current.style.width = `${containerWidth}px`;
  }, [containerWidth]);

  return (
    <div className="flex justify-center">
      <div
        ref={containerRef}
        className="relative flex w-auto h-auto overflow-x-hidden"
        style={{ boxSizing: "border-box" }}
      >
        <div
          ref={sliderRef}
          className={`flex space-x-12 duration-300 ease-in-out`}
        >
          {props.data.property.map((property, index) => {
            return (
              <PropertyCard
                key={index}
                data={property}
                width={imageWidth}
                height={imageHeight}
              ></PropertyCard>
            );
          })}
        </div>
        <button
          data={props.data}
          onClick={() => handleNextClick("right", props.data)}
          className="group hover:scale-110 duration-200 absolute top-1/4 right-2 flex items-center justify-center bg-white bg-opacity-60 rounded-full w-12 h-12 "
        >
          <Image
            src="/images/chevronright.svg"
            alt="chevron.svg"
            width={32}
            height={32}
            className="opacity-80 pl-1 transition-colors duration-300 group-hover:text-green-600"
          ></Image>
        </button>
        <button
          data={props.data}
          onClick={() => handleNextClick("left", props.data)}
          className="group hover:scale-110 duration-200 absolute top-1/4 left-2 flex items-center justify-center bg-white bg-opacity-60 rounded-full w-12 h-12 "
        >
          <Image
            src="/images/chevronleft.svg"
            alt="chevron.svg"
            width={32}
            height={32}
            className="fill-white opacity-80 pr-1 group-hover:fill-red-600"
          ></Image>
        </button>
      </div>
    </div>
  );
}
