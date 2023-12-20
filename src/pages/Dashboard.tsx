import DashboardBreadcrumbs from "../components/DashboardBreadcrumbs";
import DashboardTable from "../components/DashboardTable";
import DashboardTitle from "../components/DashboardTitle";
import DashboardToolbar from "../components/DashboardToolbar";

function Dashboard() {
  return (
    <div className="flex flex-col px-7">
      <DashboardBreadcrumbs />
      <DashboardTitle />
      <DashboardToolbar />
      <DashboardTable />
    </div>
  );
}

export default Dashboard;
