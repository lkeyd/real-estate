"use client";
import React from "react";
import HeroModule from "./modules/HeroModule";
import ImageSliderModule from "./modules/CardSliderModule";

export default function Home() {
  const imageWidth = 384;
  const imageHeight = 256;
  const imageSpacing = 12;
  const borderWidth = 2;
  const numberOfDisplayImages = 3;

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl flex flex-col">
        <HeroModule className="bg-opacity-50"></HeroModule>

        <div className="pt-12">
          <ImageSliderModule
            heading="Featured properties for sale"
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            imageSpacing={imageSpacing}
            borderWidth={borderWidth}
            numberOfDisplayImages={numberOfDisplayImages}
          />
        </div>

        <div className="pt-12">
          <ImageSliderModule
            heading="Featured properties for rent"
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            imageSpacing={imageSpacing}
            borderWidth={borderWidth}
            numberOfDisplayImages={numberOfDisplayImages}
          />
        </div>
      </div>
    </div>
  );
}
