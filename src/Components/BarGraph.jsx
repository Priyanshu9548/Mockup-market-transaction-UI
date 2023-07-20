import React from "react";
import { BarChart, Bar, XAxis, YAxis,CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Chart_contributions = () => {
  const data = [
    { name: "20", "Employer": 10, "Employee 2": 15, "Total Interested": 20 },
    { name: "", "Employer": 15, "Employee": 20, "Total Interested": 25 },
    { name: "25", "Employer": 20, "Employee": 25, "Total Interested": 30 },
    { name: "", "Employer": 25, "Employee": 30, "Total Interested": 35 },
    { name: "30", "Employer": 30, "Employee": 35, "Total Interested": 40 },
    { name: "", "Employer": 35, "Employee": 40, "Total Interested": 45 },
    { name: "35", "Employer": 40, "Employee": 45, "Total Interested": 50 },
    { name: "", "Employer": 45, "Employee": 50, "Total Interested": 55 },
    { name: "40", "Employer": 50, "Employee": 55, "Total Interested": 60 },
    { name: "", "Employer": 55, "Employee": 60, "Total Interested": 65 },
    { name: "60", "Employer": 60, "Employee": 65, "Total Interested": 70 },
    { name: "", "Employer": 65, "Employee": 70, "Total Interested": 75 },
    { name: "65", "Employer": 70, "Employee": 75, "Total Interested": 80 },
    { name: "", "Employer": 75, "Employee": 80, "Total Interested": 85 },
  ];

  const yTickFormatter = (value) => `${value}$`;

  return (
    <div>
      <div className="mt-2" style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <BarChart data={data} barSize={16} barGap={5}>
            <XAxis dataKey="name" />
            <YAxis tickFormatter={yTickFormatter} />
            <Tooltip />
            <Bar dataKey="Employer" stackId="a" fill="#0D47A1" />
            <Bar dataKey="Employee" stackId="a" fill="rgba(6, 57, 212)" />
            <Bar dataKey="Total Interested" stackId="a" fill="rgba(129, 180, 247)" />
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(204, 204, 204, 0.5)"  />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart_contributions;
