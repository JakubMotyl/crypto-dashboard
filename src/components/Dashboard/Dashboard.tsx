import Header from "./Header";
import Table from "./Table/Table";
import Cards from "./Cards/Cards";
import Charts from "./Charts";

function Dashboard() {
  return (
    <div className="flex-1 grid grid-cols-6 grid-rows-6 gap-4 p-container">
      <Header />
      <Cards />
      <Charts />
      <Table />
    </div>
  );
}

export default Dashboard;
