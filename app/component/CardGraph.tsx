"use client";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { topVisitType } from "../page";

export default function CardGraph({
  color,
  value,
  percent,
  title,
  icon,
  data,
}: {
  color: string;
  value: number;
  percent: number;
  title: string;
  icon: React.ReactNode;
  data: topVisitType[];
}) {
  return (
    <>
      <div className="flex-1 rounded-lg border-2 border-[#575e78] p-5 flex flex-col gap-2">
        <div className="flex w-full h-[50px] items-start">
          <div className="flex gap-4 items-center">
            {icon}
            <p className="text-[14px]">{title}</p>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={100}>
              <AreaChart data={data}>
                <Area
                  dataKey={"visit"}
                  type="monotone"
                  stroke={color}
                  fillOpacity={0}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <p className="font-bold text-2xl">{value}</p>
        <div className="flex justify-between">
          <p
            className={`text-[14px] cursor-pointer`}
            style={{ color: `${color}` }}
          >
            View all
          </p>
          <div className="flex flex-col justify-center">
            <p
              className={
                "text-end " + (percent < 0 ? " text-red-400" : "text-green-400")
              }
            >{`${percent}%`}</p>
            <p>this month</p>
          </div>
        </div>
      </div>
    </>
  );
}
