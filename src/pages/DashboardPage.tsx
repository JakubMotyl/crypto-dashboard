import { useEffect, useState } from "react";
import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";
import Dashboard from "../components/Dashboard/Dashboard";
import type { Coin } from "../types/crypto";
import { getCoinData } from "../api/cryptoApi";

export default function DashboardPage() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [coinData, setCoinData] = useState("bitcoin");
  const [coin, setCoin] = useState<Coin | null>(null);

  useEffect(() => {
    const getDataTimeout = setTimeout(async () => {
      const fetchedCoin = await getCoinData(coinData);
      setCoin(fetchedCoin);
    }, 300);
    return () => clearTimeout(getDataTimeout);
  }, [coinData]);

  return (
    <main className="relative w-full">
      <Sidebar showNav={showNav} setShowNav={setShowNav} />
      <div className="flex flex-col min-h-screen w-full">
        <Topbar
          setShowNav={setShowNav}
          showNav={showNav}
          setCoinData={setCoinData}
        />
        <Dashboard coin={coin} />
      </div>
    </main>
  );
}
