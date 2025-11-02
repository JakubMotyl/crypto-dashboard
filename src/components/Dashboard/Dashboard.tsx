import Header from "./Header";
import Table from "./Table/Table";

function Dashboard() {
  return (
    <div className="flex-1 grid grid-cols-6 grid-rows-6 gap-4 p-container">
      <Header />
      <Table />
    </div>
  );
}

export default Dashboard;
