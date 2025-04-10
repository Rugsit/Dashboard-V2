import { Chart } from "./Icon";

export default function Sidebar() {
  return (
    <>
      <div className="fixed flex-col gap-3 border-r-2 border-[#575e78] p-3 w-[200px] bottom-0 top-0 pt-[90px] bg-[#282c3c] z-10 lg:flex hidden">
        <p className="text-[12px] text-[#898fa3]">ANALYTICS</p>
        <button className="flex gap-3 pl-3 cursor-pointer hover:bg-[#575e78] p-2 rounded-lg transition-colors ">
          <Chart width={20} height={20} fill="#ffffff" />
          <p className="text-[18px]">Charts</p>
        </button>
      </div>
    </>
  );
}
