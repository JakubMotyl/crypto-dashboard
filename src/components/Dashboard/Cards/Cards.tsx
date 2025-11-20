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
    <div className="col-start-1 md:col-end-5 col-end-3 row-start-2 md:row-end-3 row-end-4 grid md:grid-cols-4 grid-cols-2 gap-4">
      <CardDetails
        name={"Market Cap"}
        price={coin?.market_data.market_cap?.usd}
      />
      <CardDetails
        name={"Volume"}
        price={coin?.market_data?.total_volume?.usd}
      />
      <CardDetails
        name={"Lowest 24h"}
        price={coin?.market_data?.low_24h?.usd}
      />
      <CardDetails
        name={"Highest 24h"}
        price={coin?.market_data?.high_24h.usd}
      />
    </div>
  );
}
