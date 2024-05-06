"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import AgentCard from "../components/AgentCard";
import PropertyDescription from "../components/PropertyDescription";
import Inspections from "../components/Inspections";

export default function propertyInfo(props) {
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
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-max-5xl m-4 pr-8 border-r-0 md:border-r-2 border-black border-opacity-30">
          <div className="flex flex-col border-b-2  border-black border-opacity-30 pb-4 ">
            <h1 className="text-3xl text-black opacity-80 font-bold">
              {property.city}
            </h1>
            <div className="flex items-center space-x-3">
              <p className="text-xl text-black opacity-80">
                {property.address}
              </p>
              <span className="w-2 h-2 bg-black opacity-80 rounded-full"></span>
              <p className="text-xl text-black opacity-80 font-bold">
                {property.type}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-b-2 border-black border-opacity-30 pb-4">
            <div className="flex items-center space-x-4">
              <Image
                src={`/images/beds.svg`}
                alt={`beds`}
                height={24}
                width={24}
                className="opacity-80"
              ></Image>
              <p className="text-xl text-black opacity-80">
                {property.beds} {property.beds === 1 ? "bedroom" : "bedrooms"}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src={`/images/baths.svg`}
                alt={`baths`}
                height={24}
                width={24}
                className="opacity-80"
              ></Image>
              <p className="text-xl text-black opacity-80">
                {property.baths}{" "}
                {property.baths === 1 ? "bathroom" : "bathrooms"}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src={`/images/parking.svg`}
                alt={`parking`}
                height={24}
                width={24}
                className="opacity-80"
              ></Image>
              <p className="text-xl text-black opacity-80">
                {property.parking}{" "}
                {property.parking === 1 ? "carport" : "carports"}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src={`/images/floorspace.svg`}
                alt={`floorspace`}
                height={24}
                width={24}
                className="opacity-60"
              ></Image>
              <p className="text-xl text-black opacity-80">
                {property.floorspace}m<sup>2</sup> of floorspace
              </p>
            </div>
          </div>
          <PropertyDescription />
          <div>
            <Inspections></Inspections>
          </div>
        </div>
        <div className="px-4 py-4">
          <AgentCard />
        </div>
      </div>
    );
  }
}
