import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data1 = [{ name: "percentage", value: 78 }, { name: "remaining", value: 22 }];
const data2 = [{ name: "percentage", value: 95 }, { name: "remaining", value: 5 }];
const data3 = [{ name: "percentage", value: 59 }, { name: "remaining", value: 41 }];

const COLORS = ["#00DFA2", "#9BE8D8"]; // Change #FF0000 to your highest color

const PieGraph = () => {
  return (
    <div className="flex mt-4">
      <div style={{width: "40%", height: 100, marginLeft: "8px"  }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data1}
              dataKey="value" 
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              startAngle={90}
              endAngle={-270}
            >
              {data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={20}>
              {data1[0].value}%
            </text>
            
          </PieChart>
        </ResponsiveContainer>
        <p className="text-center text-gray-500  font-semibold ">Average</p>
      </div>
      <div style={{ width: "40%", height: 100, marginLeft: "8px" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data2}
              dataKey="value" 
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              startAngle={90}
              endAngle={-270}
            >
              {data2.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={20}>
              {data2[0].value}%
            </text>
          </PieChart>
        </ResponsiveContainer>
        <p className="text-center text-gray-500  font-semibold ">Top</p>
      </div>
      <div style={{ width: "40%", height: 100, marginLeft: "8px" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data3}
              dataKey="value" 
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              startAngle={90}
              endAngle={-270}
            >
              {data3.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={20}>
              {data3[0].value}%
            </text>
          </PieChart>
        </ResponsiveContainer>
        <p className="text-center text-gray-500  font-semibold">Me</p>
      </div>
    </div>
  );
};

export default PieGraph;
