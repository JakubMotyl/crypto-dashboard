import { useEffect, useState } from "react";
import type { Coin } from "../../../types/crypto";
import { getCoinData } from "../../../api/cryptoApi";
import CardDetails from "./CardDetails";

export default function Cards() {
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
    <div className="col-start-1 col-end-5 row-span-1 row-start-2 grid grid-cols-4 gap-4">
      <CardDetails
        name={"Market Cap"}
        price={coin?.market_data.market_cap?.usd}
      />
      <CardDetails
        name={"Volume"}
        price={coin?.market_data?.total_volume?.usd}
      />
      <CardDetails name={"Low 24h"} price={coin?.market_data?.low_24h?.usd} />
      <CardDetails name={"High 24h"} price={coin?.market_data?.high_24h.usd} />
    </div>
  );
}
