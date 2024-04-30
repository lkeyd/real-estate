import React from "react";
import HeroModule from "../modules/HeroModule";
import ImageSliderModule from "../modules/ImageSliderModule";

export default function Buy() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl flex flex-col">
        <HeroModule className="bg-opacity-50"></HeroModule>
        <ImageSliderModule heading="Featured properties for sale"/>
      </div>
    </div>
  );
}
