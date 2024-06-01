import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AgentSticky(props) {
  const [agents, setAgents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewportBottomHeight, setViewportBottomHeight] = useState(0);
  const [entirePageHeight, setEntirePageHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/agents.json");
        const jsonData = await response.json();
        setAgents(jsonData.agents);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch data only if it's not already cached
    if (!agents) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      const newViewportBottomHeight = window.scrollY + window.innerHeight;
      const newEntirePageHeight = document.body.scrollHeight;
      const newFooterHeight = document.querySelector("Footer").offsetHeight;

      setViewportBottomHeight(newViewportBottomHeight);
      setEntirePageHeight(newEntirePageHeight);
      setFooterHeight(newFooterHeight);
    };

    // Initial update
    updateDimensions();

    // Event listener for scroll and resize events
    window.addEventListener("scroll", updateDimensions);
    window.addEventListener("resize", updateDimensions);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", updateDimensions);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  if (!loading && agents) {
    const isBottomStuck =
      viewportBottomHeight < entirePageHeight - footerHeight;
    const agent = agents[props.agent];
    return (
      <div
        className={`flex justify-between h-32 w-full fixed ${
          isBottomStuck ? `bottom-0` : `invisible`
        } left-0 right-0 bg-gray-800 items-center z-100`}
      >
        <div className="flex">
          <div className="relative h-24 w-24 ml-2 rounded-full border-2 border-white overflow-hidden">
            <Image
              src={agent.image}
              alt="agent"
              fill
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
          <div className="flex flex-col justify-between space-y-4 bg-gray-800 pl-4">
            <p className="text-white text-lg md:text-2xl font-bold">
              Prime Property
            </p>
            <div className="flex w-full flex-col">
              <p className="text-white text-md md:text-xl font-bold flex">
                {agent.name}
              </p>
              <p className="text-white text-md md:text-xl flex">{agent.info}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center pr-4 space-y-2">
          <div className="flex rounded-md">
            <Link
              href=""
              className="flex justify-center bg-green-500 rounded-md py-2 px-4"
            >
              <Image
                src="/images/email.svg"
                alt="email"
                width={32}
                height={32}
              ></Image>
            </Link>
          </div>
          <div className="flexrounded-md justify-center">
            <Link
              href=""
              className="flex justify-center w-full bg-white rounded-md py-2 px-4"
            >
              <Image
                src="/images/call.svg"
                alt="call"
                width={32}
                height={32}
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
