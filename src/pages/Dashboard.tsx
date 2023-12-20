import DashboardBreadcrumbs from "../components/DashboardBreadcrumbs";
import DashboardTitle from "../components/DashboardTitle";
import DashboardTools from "../components/DashboardTools";

function Dashboard() {
  return (
    <div className="flex flex-col px-7">
      <DashboardBreadcrumbs />
      <DashboardTitle />
      <DashboardTools />
    </div>
  );
}

export default Dashboard;
