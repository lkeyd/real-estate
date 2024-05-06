"use client";
import { useState, useEffect } from "react";
import React from "react";
import PropertyImageSlider from "../components/PropertyImageSlider";

export default function PropertyImageSliderModule(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setData(jsonData.property);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch data only if it's not already cached
    if (!data) {
      fetchData();
    }
  }, []);

  if (!loading) {
    const property = data.find((property) => property.id === props.id);

    return (
      <div className="flex justify-center pt-12">
        <div>
          {props.heading ? (
            <h2 className="text-black font-bold text-4xl opacity-80 pb-4">
              {props.heading}
            </h2>
          ) : (
            <div></div>
          )}
        </div>
        <PropertyImageSlider
          images={property.image}
          imageWidth={props.imageWidth}
          imageHeight={props.imageHeight}
          imageSpacing={props.imageSpacing}
          borderWidth={props.borderWidth}
          numberOfDisplayImages={props.numberOfDisplayImages}
        />
      </div>
    );
  }
}
