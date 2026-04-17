"use client";
import { TimelineContext } from "@/context/TimelineContest";
import { useContext } from "react";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";

export default function StatsPage({ isAnimationActive = true }) {
  const { data } = useContext(TimelineContext);

  const chartData = [
    { name: "Call", value: 0, fill: "#0088FE" },
    { name: "Text", value: 0, fill: "#00C49F" },
    { name: "Video", value: 0, fill: "#FFBB28" },
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
      <div className="flex items-center justify-center h-screen w-full">
        <p className="text-gray-500 text-sm">
          No data available. Please check in with your frienlods to see stats
          here.
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-full max-w-[550px] aspect-square max-h-[80vh] ">
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
