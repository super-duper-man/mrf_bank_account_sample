import DashboardBreadcrumbs from "../components/DashboardBreadcrumbs";
import DashboardTable from "../components/DashboardTable";
import DashboardTitle from "../components/DashboardTitle";
import DashboardToolbar from "../components/DashboardToolbar";
import { DashboardProvider } from "../context/DashboardContext";

function Dashboard() {
  return (
    <DashboardProvider>
      <div className="flex flex-col px-7">
        <DashboardBreadcrumbs />
        <DashboardTitle />
        <DashboardToolbar />
        <DashboardTable />
      </div>
    </DashboardProvider>
  );
}

export default Dashboard;
