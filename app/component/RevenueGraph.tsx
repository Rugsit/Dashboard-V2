"use client";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueType } from "../page";

export default function RevenueGraph({ data }: { data: revenueType[] }) {
  return (
    <>
      <div className="flex flex-col 2xl:flex-2 h-[400px] rounded-lg border-2 border-[#575e78] p-5 gap-6">
        <p className="font-bold text-[20px]">Revenue Analytics</p>
        <div className="flex-2">
          <ResponsiveContainer>
            <AreaChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Area
                dataKey={"value1"}
                fill="#60b848"
                stroke="#60b848"
                type="monotone"
              ></Area>
              <Area
                dataKey={"value2"}
                type="monotone"
                fill="#c75a5a"
                stroke="#c75a5a"
              ></Area>
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
