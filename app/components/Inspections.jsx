import React from "react";

export default function Inspections() {
  const inspections = [
    { name: "1", id: "1", date: "13-May-2023", start: "2:30pm", finish: "3:30pm" },
    { name: "2", id: "2", date: "14-May-2023", start: "2:30pm", finish: "3:30pm"  },
    { name: "3", id: "3", date: "21-May-2023", start: "2:30pm", finish: "3:30pm"  },
    { name: "4", id: "4", date: "22-May-2023", start: "2:30pm", finish: "3:30pm"  },
    { name: "5", id: "5", date: "27-May-2023", start: "2:30pm", finish: "3:30pm"  },
    { name: "6", id: "6", date: "28-May-2023", start: "2:30pm", finish: "3:30pm"  },
    { name: "7", id: "7", date: "29-May-2023", start: "2:30pm", finish: "3:30pm"  },
  ];
  return (
    <div className=" relative flex flex-col">
      <div className="flex">
        <p className="text-2xl text-gray-800 font-bold">Inspection times</p>
      </div>
    </div>
  );
}
