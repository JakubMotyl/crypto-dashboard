import { useEffect, useState } from "react";
import { getTopCoins } from "../../../api/cryptoApi";
import type { TopCoins } from "../../../types/crypto";

const TableTop = () => {
  const [value, setValue] = useState<number | "">("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [popular, setPopular] = useState<TopCoins[]>([]);
  const [buyCat, setBuyCat] = useState<boolean>(true);
  const [toBuy, setToBuy] = useState<TopCoins>({
    image:
      "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    name: "Bitcoin",
    symbol: "btc",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopCoins();
      console.log(data.slice(0, 4));
      setPopular(data.slice(0, 4));
    };
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(input))
      setValue(input === "" ? "" : parseFloat(input));
  };

  return (
    <div className="col-span-2 row-span-3 bg-[#1F243A] rounded-2xl p-container flex flex-col justify-between">
      {/* Buttons */}
      <div className="bg-black p-2 rounded-2xl flex items-center gap-2">
        <button
          className={`table-btn p-item ${buyCat ? "bg-[#4A90E2]" : "bg-black"}`}
          onClick={() => setBuyCat(true)}
        >
          Buy
        </button>
        <button
          className={`table-btn p-item ${
            !buyCat ? "bg-[#4A90E2]" : "bg-black"
          }`}
          disabled
          onClick={() => setBuyCat(false)}
        >
          Sell
        </button>
      </div>
      {/* Exchange container */}
      <div className="flex gap-2">
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="coin" className="text-white font-light text-[0.8rem]">
            Coin
          </label>
          <div className="table-exchange p-item relative">
            <div id="coin" className="table-option">
              <div className="flex items-center justify-between">
                <img src={toBuy?.image} alt={toBuy?.name} className="h-5 w-5" />
                <p className="uppercase text-xs">{toBuy?.symbol}</p>
                <div
                  className="cursor-pointer hover:text-[#4A90E2] active:text-[#4A90E2] duration-200"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </div>
              {isOpen && (
                <ul className="absolute top-full left-0 bg-black rounded-2xl overflow-hidden w-full flex flex-col">
                  {popular.map((item, index) => (
                    <li
                      key={index}
                      className="cursor-pointer p-item flex items-center justify-between hover:bg-[#4A90E2] duration-200"
                      onClick={() => {
                        setToBuy(item);
                        setIsOpen(false);
                      }}
                    >
                      <img
                        src={item?.image}
                        alt={item.name}
                        className="h-5 w-5"
                      />
                      <span className="text-[0.85rem]">{item?.name}</span>
                      <p className="uppercase text-xs">{item?.symbol}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="ammount"
            className="text-white font-light text-[0.8rem]"
          >
            Ammount
          </label>
          <div className="table-exchange p-item flex items-center gap-2">
            <span className="text-white">$</span>
            <input
              type="number"
              placeholder="1000"
              value={value}
              className="table-input"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-300 text">Total:</p>
        <span className="text-white font-semibold">
          ${value === "" ? 0 : value}
        </span>
      </div>
      <div className="flex justify-center">
        <button className="table-btn p-item bg-[#4A90E2]">Buy</button>
      </div>
    </div>
  );
};

export default TableTop;
