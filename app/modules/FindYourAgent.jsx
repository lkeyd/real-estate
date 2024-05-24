import React, { useEffect } from "react";
import AgentCard from "../components/AgentCard";
import AgentSlider from "../components/AgentSlider";

export default function FindYourAgent() {
  const agentIndexes = [0, 1, 2, 3];
  return (
    <div className="">
      <div className="">
        <h2 className="flex text-3xl text-gray-800 font-bold pb-8">
          Find your agent
        </h2>
      </div>
      <AgentSlider
        objects={agentIndexes}
        imageWidth={96*4}
        imageHeight={96*4}
        imageSpacing={12}
        borderWidth={0}
        numberOfDisplayImages={3}
      />
    </div>
  );
}
