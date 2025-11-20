import type { NavProps } from "../../types/layout";

export default function Topbar({ setShowNav }: NavProps) {
  return (
    <div className="flex items-center justify-between w-full h-20 gap-4 p-item">
      <div>
        <button
          onClick={() => setShowNav((prev) => !prev)}
          className="topbar-icon"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className="bg-[#1F243A] p-item rounded-2xl flex items-center gap-2 max-w-sm flex-1">
        <div className="text-gray-400 cursor-pointer text-xl hover:text-white active:text-white duration-200">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          type="text"
          placeholder="Bitcoin"
          className="border-none text-white placeholder:text-gray-400 outline-none min-w-0 w-full"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="topbar-icon">
          <i className="fa-regular fa-bell"></i>
        </div>
        <div className="topbar-icon">
          <i className="fa-regular fa-circle-user"></i>
        </div>
      </div>
    </div>
  );
}
