import React from "react";
import CardSliderModule from "../modules/CardSliderModule";
import PropertySearch from "../components/PropertySearch";
import HeroModule from "../modules/HeroModule";
import PropertyGridModule from "../modules/PropertyGridModule";
import PhoneAppModule from "../modules/PhoneAppModule";
import useSearchTerm from "../hooks/useSearchTerm";

export default function BuyPage() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl flex flex-col">
        <HeroModule></HeroModule>
        <div className="relative w-full flex justify-center h-32 pb-52">
          <div className="absolute -top-32 w-full max-w-5xl mx-16">
            <PropertySearch></PropertySearch>
          </div>
        </div>
        <PropertyGridModule
          criteria={{ intent: "sell" }}
          mode="sale"
        ></PropertyGridModule>

        <div className="">
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

        <PhoneAppModule></PhoneAppModule>
      </div>
    </div>
  );
}
