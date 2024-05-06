"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import PropertyCard from "./PropertyCard";
import Image from "next/image";

export default function CardSlider(props) {
  const [position, setPosition] = useState(1);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  /*######### Provide these values ###########*/
  /*    All necessary values are in rem       */
  const imageWidth =
    props.imageWidth; /* For this slider, objects must be same width and height */
  const imageHeight = props.imageHeight;
  const imageSpacing = props.imageSpacing;
  const borderWidth = props.borderWidth;
  const numberOfDisplayImages = props.numberOfDisplayImages;
  /*#########################################*/

  const containerWidth =
    (imageWidth + borderWidth * 2) * numberOfDisplayImages +
    imageSpacing * (numberOfDisplayImages - 1) * 4;

  useEffect(() => {
    if (sliderRef.current) {
      const xOffset =
        (position - 1) * (imageWidth + 2 * borderWidth + imageSpacing * 4);
      sliderRef.current.style.transform = `translateX(-${xOffset}px)`;
    }
  }, [position]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.width = `${containerWidth}px`;
      console.log(containerWidth);
    }
  }, [containerWidth]);

  const handleNextClick = (direction) => {
    if (direction === "right") {
      if (position < props.objects.length - numberOfDisplayImages + 1) {
        setPosition(position + 1);
      } else {
        setPosition(1);
      }
    } else if (direction === "left") {
      if (position > 1) {
        setPosition(position - 1);
      } else {
        setPosition(props.objects.length - numberOfDisplayImages + 1);
      }
    } 
  };
  console.log(props.objects);

  return (
    <div className="flex justify-center">
      <div
        ref={containerRef}
        className="relative flex w-auto h-auto overflow-x-hidden"
      >
        <div
          ref={sliderRef}
          className={`flex space-x-12 duration-300 ease-in-out`}
        >
          {props.objects.map((property, index) => {
            return (
              <PropertyCard
                key={index}
                object={property}
                width={imageWidth}
                height={imageHeight}
              ></PropertyCard>
            );
          })}
        </div>
        <button
          onClick={() => handleNextClick("right")}
          className="group hover:scale-110 hover:bg-opacity-80 duration-200 absolute top-1/4 right-2 flex items-center justify-center bg-white bg-opacity-60 rounded-full w-12 h-12 "
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
          onClick={() => handleNextClick("left")}
          className="group hover:scale-110 hover:bg-opacity-80 duration-200 absolute top-1/4 left-2 flex items-center justify-center bg-white bg-opacity-60 rounded-full w-12 h-12 "
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
