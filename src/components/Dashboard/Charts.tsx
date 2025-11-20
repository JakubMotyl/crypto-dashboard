import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  LineController,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { getMarketChart, getCoinData } from "../../api/cryptoApi";
import type { Coin } from "../../types/crypto";

ChartJS.register(
  LineElement,
  LineController,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip
);

const CHART_TIME: string[] = ["1H", "1D", "3D", "1W", "1M"];

export default function Charts() {
  const [chartData, setChartData] = useState<any>(null);
  const [coin, setCoin] = useState<Coin | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const marketData = await getMarketChart("bitcoin");
      const coinData = await getCoinData("bitcoin");
      setCoin(coinData);
      const allPrices: [number, number][] = marketData.prices;
      const dailyPrices = allPrices.filter((_, index) => index % 24 === 0);
      const labels = dailyPrices.map((p: [number, number]) =>
        new Date(p[0]).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })
      );
      const prices = dailyPrices.map(([_, price]: [number, number]) => price);

      setChartData({
        labels,
        datasets: [
          {
            label: "Bitcoin (USD)",
            data: prices,
            borderColor: "#4A90E2",
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.3,
          },
        ],
      });
    };
    fetchData();
  }, []);

  return (
    <div className="col-start-1 md:col-end-5 col-end-3 md:row-start-3 row-start-4 md:row-end-7 row-end-6 rounded-2xl flex flex-col gap-4 justify-between bg-[#1F243A] p-item">
      <div className="flex items-center justify-between">
        <div>
          <span className="lg:text-3xl md:text-2xl text-xl font-semibold text-white">
            ${coin?.market_data?.current_price?.usd.toLocaleString("en-US")}
          </span>
          <span className="text-gray-300 font-light lg:text-2xl md:text-xl text-base ml-2">
            USD
          </span>
        </div>
        <div className="flex items-center rounded-2xl overflow-hidden bg-black">
          {CHART_TIME.map((time, index) => (
            <div
              key={index}
              className={`hover:bg-[#4A90E2] duration-200 md:px-3 md:py-2 px-2 py-1 lg:text-base md:text-sm text-[0.7rem] cursor-pointer rounded-2xl ${
                time === "1W" ? "bg-[#4A90E2]" : "bg-black"
              }`}
            >
              <span className="text-white font-semibold">{time}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full min-h-0 overflow-hidden">
        {chartData ? (
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              resizeDelay: 0,
              scales: {
                x: {
                  ticks: { color: "#FFF" },
                },
                y: {
                  ticks: { color: "#FFF" },
                },
              },
            }}
          />
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
}
