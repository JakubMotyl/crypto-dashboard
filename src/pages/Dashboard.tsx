import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";

export default function Dashboard() {
  return (
    <main className="h-screen bg-[#0D111F] w-full flex items-center divide-x divide-gray-600">
      <Sidebar />
      <div>
        <Topbar />
      </div>
    </main>
  );
}
