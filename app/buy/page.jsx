"use client";
import React from "react";
import HeroModule from "../modules/HeroModule";
import CardSliderModule from "../modules/CardSliderModule";

export default function BuyPage() {

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl flex flex-col">
        <HeroModule className="bg-opacity-50"></HeroModule>
        <div className="pt-12">
          <CardSliderModule
            criteria={{ intent: "sell", featured: true }}
            heading="Featured properties for sale"
            imageWidth={384}
            imageHeight={256}
            imageSpacing={12}
            borderWidth={2}
            numberOfDisplayImages={3}
          />
        </div>
      </div>
    </div>
  );
}
