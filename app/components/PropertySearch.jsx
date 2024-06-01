"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="py-2 px-4 text-lg lg:text-2xl text-black w-full"
    >
      {props.children}
    </button>
  );
};

export default function PropertySearch({ params }) {
  const [mode, setMode] = useState("buy");

  const inputRef = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [inputText, setInputText] = useState(search || "");

  const handleBuyClick = () => {
    if (mode !== "buy") {
      setMode("buy");
    }
  };

  const handleRentClick = () => {
    if (mode !== "rent") {
      setMode("rent");
    }
  };

  const handleSearchClick = () => {
    const query = inputRef.current.value;
    if (query) {
      router.push(`/${mode}?search=${encodeURIComponent(query)}`);
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    if (search !== null && search !== undefined) {
      setInputText(search);
    }
  }, [search]);

  return (
    <div className="flex flex-col bg-white w-auto shadow-lg rounded-sm px-4 md:px-8 lg:px-16 py-8 max-w-5xl mx-8 lg:mx-0">
      <div className="flex pb-2">
        <div className="flex flex-col items-center -space-y-1">
          <div className="relative">
            <SearchButton onClick={handleBuyClick}>Buy</SearchButton>
          </div>
          <span
            className={`bg-red-800 h-[2px] transition-all duration-300 ease-out ${
              mode === "buy" ? `w-[64px]` : "w-0"
            }`}
          ></span>
        </div>
        <div className="flex flex-col items-center -space-y-1">
          <div className="relative">
            <SearchButton onClick={handleRentClick}>Rent</SearchButton>
          </div>
          <span
            className={`bg-red-800 h-[2px] transition-all duration-300 ease-out ${
              mode === "rent" ? `w-[64px]` : "w-0"
            }`}
          ></span>
        </div>
      </div>
      <div className="flex space-x-2">
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Try a location or a school name"
          value={inputText}
          ref={inputRef}
          className="h-16 lg:h-20 w-full border-gray-800 border-opacity-20 border-2
          text-gray-800 text-sm md:text-xl indent-4"
        />
        <button
          onClick={handleSearchClick}
          className="bg-red-800 text-white text-lg lg:text-xl px-2 lg:px-4 rounded-lg hover:bg-red-700 transition-colors duration-200 ease-in-out"
        >
          Search
        </button>
      </div>
    </div>
  );
}
