import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";
import Dashboard from "../components/Dashboard/Dashboard";

export default function DashboardPage() {
  return (
    <main className="h-screen bg-[#0D111F] w-full flex divide-x divide-gray-600">
      <Sidebar />
      <div className="flex flex-col gap-10 flex-1">
        <Topbar />
        <Dashboard />
      </div>
    </main>
  );
}
