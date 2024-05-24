"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import AgentCard from "./AgentCard";
import Image from "next/image";

export default function AgentSlider(props) {
  const [numberOfDisplayImages, setNumberOfDisplayImages] = useState(3);
  const [containerWidth, setContainerWidth] = useState(0);
  const [position, setPosition] = useState(1);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const parentRef = useRef(null);

  /*######### Provide these values ###########*/
  /*    All necessary values are in rem       */
  const imageWidth =
    props.imageWidth; /* For this slider, objects must be same width and height */
  const imageHeight = props.imageHeight;
  const imageSpacing = props.imageSpacing;
  const borderWidth = props.borderWidth;
  /*#########################################*/

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
    }
  }, [containerWidth]);

  useEffect(() => {
    setContainerWidth(
      (imageWidth + borderWidth * 2) * numberOfDisplayImages +
        imageSpacing * (numberOfDisplayImages - 1) * 4
    );
  }, [numberOfDisplayImages]);

  useEffect(() => {
    // Define the resize handler function
    const handleResize = () => {
      if (containerRef.current) {
        const parentActualWidth =
          parentRef.current.getBoundingClientRect().width;
        setNumberOfDisplayImages(
          Math.floor(
            parentActualWidth /
              (imageWidth + 2 * borderWidth + imageSpacing * 3)
          )
        );
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call the handler initially to set the initial size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  return (
    <div ref={parentRef} className="flex justify-center">
      <div
        ref={containerRef}
        className="relative flex w-auto h-auto overflow-x-hidden"
      >
        <div
          ref={sliderRef}
          className={`flex space-x-12 duration-300 ease-in-out`}
        >
          {props.objects.map((agentIndex) => {
            return <AgentCard agent={agentIndex}></AgentCard>;
          })}
        </div>
        <button
          onClick={() => handleNextClick("right")}
          className="group hover:scale-110 hover:bg-opacity-80 duration-200 absolute top-1/2 right-2 flex items-center justify-center bg-gray-400 bg-opacity-60 rounded-full w-12 h-12 "
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
          className="group hover:scale-110 hover:bg-opacity-80 duration-200 absolute top-1/2 left-2 flex items-center justify-center bg-gray-400 bg-opacity-60 rounded-full w-12 h-12 "
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
