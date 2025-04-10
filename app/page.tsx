import BarGraphComp from "./component/BarGraphComp";
import CardGraph from "./component/CardGraph";
import CircleGraphComp from "./component/CircleGraphComp";
import { Money, Product, Start, User } from "./component/Icon";
import ListDeals from "./component/ListDeals";
import RevenueGraph from "./component/RevenueGraph";

export type topDealsType = {
  img: string;
  name: string;
  email: string;
  cost: string;
};

export type topVisitType = {
  month: string;
  visit: number;
};

export type revenueType = {
  day: string;
  value1: number;
  value2: number;
};
const topDealsData: topDealsType[] = [
  {
    img: "",
    name: "Elva McDonald",
    email: "elva@gmail.com",
    cost: "3.668",
  },
  {
    img: "user_image_001.jpg",
    name: "Jett Weaver",
    email: "jett.weaver@example.com",
    cost: "12.50",
  },
  {
    img: "avatar_002.png",
    name: "Raquel Stanton",
    email: "raquel.stanton88@sample.org",
    cost: "89.99",
  },
  {
    img: "",
    name: "Brycen Schmidt",
    email: "brycen_s@workplace.net",
    cost: "55.75",
  },
  {
    img: "profile_pic.jpeg",
    name: "Zoe Rivera",
    email: "zoe.r@personalmail.co",
    cost: "21.10",
  },
  {
    img: "",
    name: "Elva McDonald",
    email: "elva@gmail.com",
    cost: "3.668",
  },
  {
    img: "user_image_001.jpg",
    name: "Jett Weaver",
    email: "jett.weaver@example.com",
    cost: "12.50",
  },
  {
    img: "avatar_002.png",
    name: "Raquel Stanton",
    email: "raquel.stanton88@sample.org",
    cost: "89.99",
  },
  {
    img: "",
    name: "Brycen Schmidt",
    email: "brycen_s@workplace.net",
    cost: "55.75",
  },
  {
    img: "profile_pic.jpeg",
    name: "Zoe Rivera",
    email: "zoe.r@personalmail.co",
    cost: "21.10",
  },
  {
    img: "",
    name: "Elva McDonald",
    email: "elva@gmail.com",
    cost: "3.668",
  },
  {
    img: "user_image_001.jpg",
    name: "Jett Weaver",
    email: "jett.weaver@example.com",
    cost: "12.50",
  },
  {
    img: "avatar_002.png",
    name: "Raquel Stanton",
    email: "raquel.stanton88@sample.org",
    cost: "89.99",
  },
  {
    img: "",
    name: "Brycen Schmidt",
    email: "brycen_s@workplace.net",
    cost: "55.75",
  },
  {
    img: "profile_pic.jpeg",
    name: "Zoe Rivera",
    email: "zoe.r@personalmail.co",
    cost: "21.10",
  },
];

const topVisit: topVisitType[] = [
  { month: "January", visit: 15 },
  { month: "February", visit: 20 },
  { month: "March", visit: 25 },
  { month: "April", visit: 18 },
  { month: "May", visit: 22 },
  { month: "June", visit: 30 },
  { month: "July", visit: 28 },
  { month: "August", visit: 35 },
  { month: "September", visit: 26 },
  { month: "October", visit: 24 },
  { month: "November", visit: 19 },
  { month: "December", visit: 21 },
];

const revenueData: revenueType[] = [
  { day: "Mon", value1: 12000, value2: 20000 },
  { day: "Tue", value1: 15000, value2: 18000 },
  { day: "Wed", value1: 17000, value2: 22000 },
  { day: "Thu", value1: 14000, value2: 21000 },
  { day: "Fri", value1: 16000, value2: 23000 },
  { day: "Sat", value1: 18000, value2: 24000 },
  { day: "Sun", value1: 19000, value2: 25000 },
];

export default function Home() {
  return (
    <>
      <div className="pl-[20px] lg:pl-[220px] pt-[94px] h-screen flex 2xl:flex-row flex-col gap-6 pr-[20px] pb-[20px]">
        <div className="flex flex-col gap-3 h-full 2xl:flex-1">
          <ListDeals topDealsData={topDealsData} />
          <BarGraphComp title="Total visit" data={topVisit} color="#c3633b" />
        </div>
        <div className="flex flex-col gap-6 2xl:h-full h-fit 2xl:flex-2">
          <div className="flex md:flex-row flex-col md:flex-1 gap-6">
            <CardGraph
              color="#8742ff"
              value={11.238}
              percent={45}
              data={topVisit}
              title={"Total Users"}
              icon={<User width={20} height={20} fill="#ffffff" />}
            />
            <CardGraph
              color="#4271ff"
              value={56.432}
              percent={-12}
              data={topVisit}
              title={"Total Revenue"}
              icon={<Money width={20} height={20} fill="#ffffff" />}
            />
          </div>
          <div className="flex md:flex-row flex-col md:flex-1 gap-6">
            <CardGraph
              color="#4af9ff"
              value={238}
              percent={21}
              data={topVisit}
              title={"Total Product"}
              icon={<Product width={20} height={20} fill="#ffffff" />}
            />
            <CardGraph
              color="#ffae4a"
              value={2.6}
              percent={12}
              data={topVisit}
              title={"Total Ratio"}
              icon={<Start width={20} height={20} fill="#ffffff" />}
            />
          </div>
          <RevenueGraph data={revenueData} />
        </div>
        <div className="2xl:flex-1 flex flex-col gap-3">
          <div className="2xl:flex-2 h-[500px] flex flex-col rounded-lg border-2 border-[#575e78] p-5">
            <p className="text-[20px] font-bold">Leads by Source</p>
            <div className="flex-1 ">
              <CircleGraphComp />
            </div>
          </div>
          <BarGraphComp title="Profit Earned" data={topVisit} color="#6364a2" />
        </div>
      </div>
    </>
  );
}
