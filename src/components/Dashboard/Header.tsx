import { getCoinData } from "../../api/cryptoApi";
import type { Coin } from "../../types/crypto";
import { useEffect, useState } from "react";

function Header() {
  const [coin, setCoin] = useState<Coin | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCoin = await getCoinData("bitcoin");
      setCoin(fetchedCoin);
      // console.log(fetchedCoin);
    };
    fetchData();
  }, []);

  return (
    <div className="text-white flex items-center justify-between col-span-4 row-span-1">
      <div className="flex items-center gap-4">
        <img
          src={coin?.image?.small}
          alt={coin?.name}
          className="w-12 h-12 object-cover"
        />
        <div>
          <p className="text-sm">{coin?.name}</p>
          <span className="text-xs">{coin?.symbol.toUpperCase()}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="topbar-icon text-sm">
          <i className="fa-regular fa-star"></i>
        </div>
        <div className="topbar-icon text-sm">
          <i className="fa-regular fa-share-from-square"></i>
        </div>
        <button className="p-item flex items-center gap-2 border rounded-2xl text-sm hover:bg-white hover:text-[#4A90E2] duration-200">
          <i className="fa-solid fa-plus rounded-full"></i>
          <span>Add Liquidity</span>
        </button>
        <button className="p-item text-sm flex items-center gap-2 border border-[#4A90E2] bg-[#4A90E2] hover:bg-[#4A90E2]/80 duration-200 rounded-2xl">
          Trade
        </button>
      </div>
    </div>
  );
}

export default Header;
