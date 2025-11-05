import {
  LineElement,
  LineController,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import type { Coin } from "../../types/crypto";
import { getCoinData } from "../../api/cryptoApi";

export default function Charts() {
  const [coin, setCoin] = useState<Coin | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCoin = await getCoinData("bitcoin");
      setCoin(fetchedCoin);
      console.log(fetchedCoin);
    };
    fetchData();
  }, []);

  return (
    <div className="col-start-1 col-end-5 row-start-3 row-end-7 rounded-2xl bg-[#1F243A] p-item"></div>
  );
}
