"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context to manage the data caching
const DataContext = createContext();

// Custom hook to access the cached data
export const useCachedData = () => useContext(DataContext);

// Data provider component
const DataProvider = ({ children }) => {
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

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
