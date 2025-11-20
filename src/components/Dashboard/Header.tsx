import { getCoinData } from "../../api/cryptoApi";
import type { Coin } from "../../types/crypto";
import { useEffect, useState } from "react";

function Header() {
  const [coin, setCoin] = useState<Coin | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCoin = await getCoinData("bitcoin");
      setCoin(fetchedCoin);
      // console.log(fetchedCoin);
    };
    fetchData();
  }, []);

  return (
    <div className="text-white flex items-center justify-between col-start-1 md:col-end-5 col-end-3 row-start-1 row-end-2 relative">
      <div className="flex items-center gap-4">
        <img
          src={coin?.image?.small}
          alt={coin?.name}
          className="md:w-12 md:h-12 h-10 w-10 object-cover"
        />
        <div>
          <p className="text-sm">{coin?.name}</p>
          <span className="text-xs">{coin?.symbol.toUpperCase()}</span>
        </div>
      </div>

      {/* MD- */}
      <div className="md:hidden flex">
        <button
          className="topbar-icon"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <i className="fa-regular fa-lightbulb"></i>
        </button>
        {isOpen && (
          <div className="flex items-center justify-between p-item absolute top-full left-0 bg-[#0D111F] shadow-[0_0_10px_rgba(255,255,255,0.45)] w-full rounded-2xl">
            <div className="topbar-icon text-sm">
              <i className="fa-regular fa-star"></i>
            </div>
            <div className="topbar-icon text-sm">
              <i className="fa-regular fa-share-from-square"></i>
            </div>
            <button className="p-item flex items-center gap-2 border rounded-2xl md:text-sm text-xs hover:bg-white hover:text-[#4A90E2] duration-200">
              <i className="fa-solid fa-plus rounded-full"></i>
              <span>Add Liquidity</span>
            </button>
            <button className="p-item md:text-sm text-xs flex items-center gap-2 border border-[#4A90E2] bg-[#4A90E2] hover:bg-[#4A90E2]/80 duration-200 rounded-2xl">
              Trade
            </button>
          </div>
        )}
      </div>

      {/* MD+ */}
      <div className="md:flex hidden items-center gap-2">
        <div className="topbar-icon text-sm">
          <i className="fa-regular fa-star"></i>
        </div>
        <div className="topbar-icon text-sm">
          <i className="fa-regular fa-share-from-square"></i>
        </div>
        <button className="p-item flex items-center gap-2 border rounded-2xl md:text-sm text-xs hover:bg-white hover:text-[#4A90E2] duration-200">
          <i className="fa-solid fa-plus rounded-full"></i>
          <span>Add Liquidity</span>
        </button>
        <button className="p-item md:text-sm text-xs flex items-center gap-2 border border-[#4A90E2] bg-[#4A90E2] hover:bg-[#4A90E2]/80 duration-200 rounded-2xl">
          Trade
        </button>
      </div>
    </div>
  );
}

export default Header;
