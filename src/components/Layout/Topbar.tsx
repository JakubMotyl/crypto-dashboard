import { useState, useEffect, type Dispatch, type SetStateAction } from "react";
import type { NavProps } from "../../types/layout";
import type { TopCoins } from "../../types/crypto";
import { getTopCoins } from "../../api/cryptoApi";

interface TopBarProps extends NavProps {
  setCoinData: Dispatch<SetStateAction<string>>;
}

export default function Topbar({ setShowNav, setCoinData }: TopBarProps) {
  const [popular, setPopular] = useState<TopCoins[]>([]);
  const [showFirst, setShowFirst] = useState<TopCoins>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopCoins();
      setShowFirst(data[0]);
      setPopular(data.slice(0, 4));
    };
    fetchData();
  }, []);

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
      <div className="flex items-center gap-4">
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

        {/* MD+ DEVICES */}
        <div className="md:flex hidden items-center gap-3 bg-[#1F243A] rounded-full px-3 py-2 duration-200">
          {popular.map((item, id) => (
            <div
              className="text-white cursor-pointer group relative"
              key={id}
              onClick={() => setCoinData(item.id.toLowerCase())}
            >
              <img src={item?.image} alt={item.name} className="h-7 w-7" />
              <span className="absolute top-full opacity-0 group-hover:opacity-100 duration-200 md:text-sm text-xs">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* MD- DEVICES */}
        <div className="md:hidden relative">
          <button className="flex items-center text-sm gap-2 text-white topbar-icon">
            <img
              src={showFirst?.image}
              alt={showFirst?.symbol.toUpperCase()}
              className="w-7 h-7"
            />
            <div
              className="cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <i className="fa-solid fa-arrow-down"></i>
            </div>
          </button>
          {isOpen && (
            <ul className="absolute top-full left-0 z-50 bg-[#1F243A] min-w-max rounded-2xl overflow-hidden flex flex-col mt-2">
              {popular.map((item, id) => (
                <li
                  key={id}
                  className="text-white px-4 py-2 flex gap-2 items-center cursor-pointer hover:bg-[#2A3250] duration-200"
                  onClick={() => {
                    setCoinData(item.id.toLowerCase());
                    setIsOpen(false);
                  }}
                >
                  <img src={item?.image} alt={item?.name} className="w-7 h-7" />
                  <span>{item?.symbol.toUpperCase()}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
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
