import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AgentCard(props) {
  const [agents, setAgents] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (!loading && agents) {
    const agent = agents[props.agent];
    return (
      <div className="">
        <div className="relative flex flex-col w-96 border-black border-l-2 border-opacity-20 overflow-hidden">
          <div className="flex justify-end bg-gray-800 h-16 items-center pr-4">
            <p className="text-white text-xl font-bold">Prime Property</p>
          </div>
          <div className="absolute left-4 top-4 h-32 w-32 rounded-full border-2 border-white overflow-hidden">
            <Image
              src={agent.image}
              alt="agent"
              fill
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <div className="flex w-full flex-col pr-4 pt-2 pb-8">
              <p className="text-gray-800 text-xl font-bold flex justify-end">
                {agent.name}
              </p>
              <p className="text-gray-800 opacity-90 text-xl flex justify-end">
                {agent.info}
              </p>
            </div>
            <div className="flex w-64 rounded-md justify-center py-2">
              <Link
                href=""
                className="flex justify-center w-full bg-green-500 rounded-md py-2 space-x-2"
              >
                <Image
                  src="/images/email.svg"
                  alt="email"
                  width={24}
                  height={24}
                ></Image>
                <p className="text-white text-xl font-bold">Enquire</p>
              </Link>
            </div>
            <div className="flex w-64 rounded-md justify-center py-2">
              <Link
                href=""
                className="flex justify-center w-full bg-white rounded-md py-2 space-x-2 border-gray-800 border-2"
              >
                <Image
                  src="/images/call.svg"
                  alt="call"
                  width={24}
                  height={24}
                ></Image>
                <p className="text-gray-800 font-bold text-xl">
                  {agent.number}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
