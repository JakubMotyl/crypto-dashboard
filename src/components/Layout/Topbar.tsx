export default function Topbar() {
  return (
    <div className="flex items-center justify-between w-full h-24 gap-4 p-item">
      <div className="bg-[#1F243A] p-item rounded-2xl flex items-center gap-2 max-w-sm flex-1">
        <div className="text-gray-400 cursor-pointer text-xl hover:text-white active:text-white duration-200">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          type="text"
          placeholder="Start writing or type a command"
          className="border-none text-white placeholder:text-gray-400 outline-none flex-1"
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
