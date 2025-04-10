import { topDealsType } from "../page";

export default function ListDeals({
  topDealsData,
}: {
  topDealsData: topDealsType[];
}) {
  return (
    <div className="border-2 border-[#575e78] rounded-lg p-4 flex-3 flex flex-col overflow-hidden">
      <p className="mb-3 text-[20px] font-bold">Top Deals</p>
      <div className="flex-1 overflow-auto p-3">
        <div className="flex flex-col gap-7">
          {topDealsData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex sm:flex-row flex-col  gap-2 justify-between"
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={`/${(Math.round(Math.random() * 10) % 4) + 1}.png`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col text-[12px] lg:text-[14px]">
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                  </div>
                </div>

                <p>{`$${item.cost}`}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
