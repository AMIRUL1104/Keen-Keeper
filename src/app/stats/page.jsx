"use client";

import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";

export default function StatsPage({ isAnimationActive = true }) {
  const storedData = localStorage.getItem("timelineData");
  const data = storedData ? JSON.parse(storedData) : [];

  const chartData = [
    { name: "Call", value: 0, fill: "#244D3F" },
    { name: "Text", value: 0, fill: "#00C49F" },
    { name: "Video", value: 0, fill: "#8528ff" },
  ];

  if (data.length !== 0) {
    data.forEach((element) => {
      if (element.label.toLowerCase() === "call") {
        chartData[0].value += 1;
      } else if (element.label.toLowerCase() === "text") {
        chartData[1].value += 1;
      } else {
        chartData[2].value += 1;
      }
    });
  }

  if (data.length === 0) {
    return (
      <div className="flex items-center flex-col justify-center h-screen w-full">
        <h1 className="sm:text-4xl text-2xl font-bold text-gray-800 text-left mb-4">
          Friendship Analytics
        </h1>

        <p className="text-gray-500 text-sm">
          No data available. Please check in with your frienlods to see stats
          here.
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center flex-col justify-center h-screen w-full">
      <h1 className="sm:text-4xl text-2xl font-bold text-gray-800 text-left mb-4">
        Friendship Analytics
      </h1>
      <div className="w-full max-w-137.5 aspect-square max-h-[80vh] bg-white rounded-xl shadow-md p-6">
        <p className="text-lg font-semibold text-left mb-4">
          By interaction type
        </p>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              innerRadius="40%" // this will create a donut chart
              outerRadius="55%" // this will create a donut chart
              cornerRadius={6} // this will round the corners of the slices
              paddingAngle={5} // this will add space between the slices
              dataKey="value" // this will determine the size of each slice based on the value
              isAnimationActive={isAnimationActive}
              label={({ name, value }) => `${name}: ${value}`} // this will show the label name and value
            >
              {/* this will map through the chartData and assign the fill color to each slice */}
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
