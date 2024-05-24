import React from 'react';
import AgentCard from './AgentCard';
import AgentSticky from './AgentSticky';

const AgentComponent = ({ agentIndex }) => {
  return (
    <div className="sticky z-10 top-0 px-4 py-4">
      {/* Display AgentSticky on small screens and hide on medium and larger screens */}
      <div className="sticky md:hidden top-4">
        <AgentSticky agent={agentIndex} />
      </div>
      
      {/* Display AgentCard on medium and larger screens and hide on small screens */}
      <div className="hidden md:block">
        <AgentCard agent={agentIndex} />
      </div>
    </div>
  );
};

export default AgentComponent;
