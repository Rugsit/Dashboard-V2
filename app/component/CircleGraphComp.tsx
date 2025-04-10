"use client";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const sourceData = [
  {
    name: "Mobile",
    value: 400,
  },
  {
    name: "Desktop",
    value: 300,
  },
  {
    name: "Laptop",
    value: 300,
  },
  {
    name: "Tablet",
    value: 200,
  },
];

const COLORS = ["#237ef3", "#43b79b", "#f17b49", "#f4b542"];
export default function CircleGraphComp() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Tooltip />
        <Legend />
        <Pie
          data={sourceData}
          dataKey="value"
          nameKey="name"
          innerRadius="60%"
          cx="50%"
          cy="50%"
          paddingAngle={5}
        >
          {sourceData.map((item, index) => {
            return <Cell key={index} fill={COLORS[index]}></Cell>;
          })}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
