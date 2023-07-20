import React from "react";
import { BarChart, Bar, XAxis, YAxis,CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Chart_contributions = () => {
  const data = [
    { name: "20", "Data 1": 10, "Data 2": 15, "Data 3": 20 },
    { name: "", "Data 1": 15, "Data 2": 20, "Data 3": 25 },
    { name: "25", "Data 1": 20, "Data 2": 25, "Data 3": 30 },
    { name: "", "Data 1": 25, "Data 2": 30, "Data 3": 35 },
    { name: "30", "Data 1": 30, "Data 2": 35, "Data 3": 40 },
    { name: "", "Data 1": 35, "Data 2": 40, "Data 3": 45 },
    { name: "35", "Data 1": 40, "Data 2": 45, "Data 3": 50 },
    { name: "", "Data 1": 45, "Data 2": 50, "Data 3": 55 },
    { name: "40", "Data 1": 50, "Data 2": 55, "Data 3": 60 },
    { name: "", "Data 1": 55, "Data 2": 60, "Data 3": 65 },
    { name: "60", "Data 1": 60, "Data 2": 65, "Data 3": 70 },
    { name: "", "Data 1": 65, "Data 2": 70, "Data 3": 75 },
    { name: "65", "Data 1": 70, "Data 2": 75, "Data 3": 80 },
    { name: "", "Data 1": 75, "Data 2": 80, "Data 3": 85 },
  ];

  const yTickFormatter = (value) => `${value}$`;

  return (
    <div>
      <div className="mt-2" style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis tickFormatter={yTickFormatter} />
            <Tooltip />
            <Bar dataKey="Data 1" stackId="a" fill="#0D47A1" />
            <Bar dataKey="Data 2" stackId="a" fill="rgba(6, 57, 212)" />
            <Bar dataKey="Data 3" stackId="a" fill="rgba(129, 180, 247)" />
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(204, 204, 204, 0.4)"  />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart_contributions;
