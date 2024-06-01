import React from "react";
import CardSliderModule from "../modules/CardSliderModule";
import PropertySearch from "../components/PropertySearch";
import HeroModule from "../modules/HeroModule";
import PropertyGridModule from "../modules/PropertyGridModule";
import PhoneAppModule from "../modules/PhoneAppModule";

export default function RentPage() {
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
          criteria={{ intent: "rent" }}
          mode="rent"
        ></PropertyGridModule>

        <div className="py-32">
          <CardSliderModule
            criteria={{ intent: "rent", featured: true }}
            heading="Featured properties for rent"
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
