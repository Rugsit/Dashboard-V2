"use client";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import { topVisitType } from "../page";

export default function BarGraphComp({
  title,
  data,
  color,
}: {
  title: string;
  data: topVisitType[];
  color: string;
}) {
  return (
    <>
      <div className="border-2 border-[#575e78] rounded-lg p-4 w-ful flex flex-col 2xl:flex-1 h-[200px]">
        <p className="text-[20px] font-bold ">{title}</p>
        <div className="flex-1 ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Tooltip />
              <Bar dataKey="visit" fill={color} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
