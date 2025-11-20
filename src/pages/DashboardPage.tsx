import { useState } from "react";
import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";
import Dashboard from "../components/Dashboard/Dashboard";

export default function DashboardPage() {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <main className="relative w-full">
      <Sidebar showNav={showNav} setShowNav={setShowNav} />
      <div className="flex flex-col min-h-screen w-full">
        <Topbar setShowNav={setShowNav} showNav={showNav} />
        <Dashboard />
      </div>
    </main>
  );
}
