"use client";
import { useState, useEffect } from "react";
import React from "react";
import PropertyGridCard from "../components/PropertyGridCard";
import { useSearchParams } from "next/navigation";

const PageButton = (props) => {
  return (
    <button
      onClick={() => props.onClick()}
      className={`flex justify-center w-10 text-2xl text-gray-800 rounded-md border-2 border-gray-800 shadow-md ${
        props.index === props.page
          ? `border-opacity-100 text-opacity-100`
          : `border-opacity-50 text-opacity-50`
      }`}
    >
      {props.index + 1}
    </button>
  );
};

export default function PropertyGridModule(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const resultsPerPage = 5;
  const [page, setPage] = useState(0);
  const [firstPropertyIndex, setFirstPropertyIndex] = useState(0);
  const [finalPropertyIndex, setFinalPropertyIndex] = useState(
    resultsPerPage - 1
  );
  const [displayArray, setDisplayArray] = useState([]);
  let filteredProperties = [];

  const handlePageClick = (props) => {
    console.log(displayArray)
    setPage(props);
    setFirstPropertyIndex(props * resultsPerPage);
    setFinalPropertyIndex(props * resultsPerPage + resultsPerPage -1);
    setDisplayArray(
      filteredProperties.slice(firstPropertyIndex, finalPropertyIndex)
    );
  };

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

  useEffect(() => {
    const tempArray = filteredProperties;
    setDisplayArray(tempArray.slice(firstPropertyIndex, finalPropertyIndex))
  }, [loading]);

  if (!loading && search) {
    filteredProperties = !props.criteria
      ? data
      : data.filter((property) => {
          // Check if all keys and values in filterCriteria match property
          return Object.keys(props.criteria).every((key) => {
            // Check if the current key exists in property and its value matches the value in filterCriteria
            return property[key] === props.criteria[key];
          });
        });
    const numberOfProperties = filteredProperties.length;
    const numberOfPages = Math.ceil(numberOfProperties / resultsPerPage);
    const pagesArray = Array.from({ length: numberOfPages });
    console.log(displayArray)

    return (
      <div className="flex flex-col items-center space-y-12">
        <h1 className="flex w-full text-3xl text-gray-800 font-bold">{`There are ${numberOfProperties} properties for ${props.mode} matching '${search}'`}</h1>
        <div className="flex flex-col w-full space-y-2 h-auto">
          {displayArray.map((property, index) => {
            return (
              <PropertyGridCard
                property={property}
                key={index}
              ></PropertyGridCard>
            );
          })}
        </div>
        <div className="flex space-x-4">
          {pagesArray.map((_, index) => {
            return (
              <PageButton
                key={index}
                index={index}
                page={page}
                onClick={() => handlePageClick(index)}
              ></PageButton>
            );
          })}
        </div>
      </div>
    );
  }
}
