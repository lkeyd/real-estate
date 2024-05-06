"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function PropertyImageSlider(props) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [position, setPosition] = useState(1);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const handleNextClick = (direction) => {
    console.log(props.images);
    if (direction === "right") {
      if (position < props.images.length) {
        setPosition(position + 1);
      } else {
        setPosition(1);
      }
    } else if (direction === "left") {
      if (position > 1) {
        setPosition(position - 1);
      } else {
        setPosition(props.images.length);
      }
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      const xOffset = (position - 1) * containerWidth;
      sliderRef.current.style.transform = `translateX(-${xOffset}px)`;
    }
  }, [position]);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    // Call the function to update container width once after component is rendered
    updateContainerWidth();

    // Update container width whenever the window is resized
    window.addEventListener("resize", updateContainerWidth);

    // Clean up the event listener
    return () => window.removeEventListener("resize", updateContainerWidth);
  }, []); // Empty dependency array ensures this effect runs only once after initial render
  return (
    <div
      className="relative flex w-full h-auto overflow-hidden rounded-lg"
      ref={containerRef}
    >
      <div className="flex duration-500 ease-in-out" ref={sliderRef}>
        {props.images.map((image, index) => {
          return (
            <div
              key={index}
              style={{ width: containerWidth }}
              className="relative h-[512px] rounded-md"
            >
              <Image
                src={image}
                alt={image}
                fill
                style={{ objectFit: "cover" }}
                sizes="75vw"
              />
            </div>
          );
        })}
      </div>
      <button
        onClick={() => handleNextClick("right")}
        className="group hover:scale-110 hover:bg-opacity-80 duration-200 absolute top-1/2 right-4 flex items-center justify-center bg-white bg-opacity-60 rounded-full w-16 h-16 "
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
        className="group hover:scale-110 hover:bg-opacity-80 duration-200 absolute top-1/2 left-4 flex items-center justify-center bg-white bg-opacity-60 rounded-full w-16 h-16 "
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
  );
}
