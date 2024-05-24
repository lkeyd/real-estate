"use client";
import { useState, useEffect } from "react";
import React from "react";
import CardSlider from "../components/CardSlider"

export default function CardSliderModule(props) {
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
    const filteredProperties = !props.criteria
      ? data
      : data.filter((property) => {
          // Check if all keys and values in filterCriteria match property
          return Object.keys(props.criteria).every((key) => {
            // Check if the current key exists in property and its value matches the value in filterCriteria
            return property[key] === props.criteria[key];
          });
        });

    return (
      <div>
        <div>
          {props.heading ? (
            <h2 className="text-gray-800 font-bold text-3xl pb-8">
              {props.heading}
            </h2>
          ) : (
            0
          )}
        </div>
        <CardSlider
          objects={filteredProperties}
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
