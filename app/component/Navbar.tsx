import { Setting } from "./Icon";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between z-20 top-0 left-0 right-0 fixed bg-[#282c3c] p-3">
        <div className="flex gap-3 items-center">
          <img
            src="/logo.jpg"
            width={50}
            height={50}
            className=" rounded-full"
          />
          <p className="text-[20px] font-bold">InnoTech</p>
        </div>
        <div className="flex justify-center items-center gap-3 mr-3">
          <img
            src="/profile.jpg"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p className="text-[14px]">Rugsit</p>
          <Setting
            width={20}
            height={20}
            fill="#ffffff"
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
