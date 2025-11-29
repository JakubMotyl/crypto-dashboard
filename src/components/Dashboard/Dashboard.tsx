import Header from "./Header";
import Table from "./Table/Table";
import Cards from "./Cards/Cards";
import Charts from "./Charts";
import type { Coin } from "../../types/crypto";

function Dashboard({ coin }: { coin: Coin | null }) {
  return (
    <div className="grid flex-1 lg:grid-cols-6 lg:grid-rows-[repeat(6,1fr)] md:grid-cols-4 md:grid-rows-[repeat(8,auto)] grid-cols-2 grid-rows-[repeat(7,auto)] gap-4 p-container">
      <Header coin={coin} />
      <Cards coin={coin} />
      <Charts coin={coin} />
      <Table />
    </div>
  );
}

export default Dashboard;
