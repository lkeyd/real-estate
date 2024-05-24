"use client";
import React from "react";
import HeroModule from "./modules/HeroModule";
import ImageSliderModule from "./modules/CardSliderModule";
import WhileYoureHere from "./modules/WhileYoureHere";
import FindYourAgent from "./modules/FindYourAgent";
import PhoneAppModule from "./modules/PhoneAppModule";
import PropertySearch from "./components/PropertySearch";

export default function Home() {
  const imageWidth = 384;
  const imageHeight = 256;
  const imageSpacing = 12;
  const borderWidth = 2;
  const numberOfDisplayImages = 3;

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl flex flex-col">
        <HeroModule></HeroModule>
        <div className="relative w-full flex justify-center h-32">
          <div className="absolute -top-32 w-full max-w-5xl mx-16">
            <PropertySearch></PropertySearch>
          </div>
        </div>
        <div className="px-4 xl:px-0">
          <div className="pt-24">
            <ImageSliderModule
              criteria={{ featured: true, intent: "sell" }}
              heading="Featured properties for sale"
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              imageSpacing={imageSpacing}
              borderWidth={borderWidth}
              numberOfDisplayImages={numberOfDisplayImages}
            />
          </div>

          <div className="pt-24">
            <ImageSliderModule
              criteria={{ intent: "rent", featured: true }}
              heading="Featured properties for rent"
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              imageSpacing={imageSpacing}
              borderWidth={borderWidth}
              numberOfDisplayImages={numberOfDisplayImages}
            />
          </div>
          <div className="pt-24">
            <WhileYoureHere></WhileYoureHere>
          </div>
          <div className="pt-24">
            <FindYourAgent></FindYourAgent>
          </div>
          <div className="pt-24">
            <PhoneAppModule></PhoneAppModule>
          </div>
        </div>
      </div>
    </div>
  );
}
