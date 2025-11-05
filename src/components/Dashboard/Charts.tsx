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
import { getMarketChart } from "../../api/cryptoApi";

ChartJS.register(
  LineElement,
  LineController,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip
);

function formatNumber(value?: number) {
  if (value === undefined || value === null) return "-";

  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
}

export default function Charts() {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const marketData = await getMarketChart("bitcoin");
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
            fill: true,
          },
        ],
      });
    };
    fetchData();
  }, []);

  return (
    <div className="col-start-1 col-end-5 row-start-3 row-end-7 rounded-2xl bg-[#1F243A] p-item">
      {chartData ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
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
  );
}
