"use client";
import React from "react";
import ImageSlider from "../components/ImageSlider";
import { useState, useEffect } from "react";

export default function ImageSliderModule(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="pt-12">
      <div>
        <h2 className="text-black font-bold text-4xl opacity-80 pb-4">{props.heading}</h2>
      </div>
      {loading ? <p>Loading...</p> : <ImageSlider data={data} />}
    </div>
  );
}
