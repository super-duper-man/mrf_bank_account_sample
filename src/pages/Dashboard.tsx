import DashboardBreadcrumbs from "../components/DashboardBreadcrumbs";
import DashboardTitle from "../components/DashboardTitle";

function Dashboard() {
  return (
    <div className="flex flex-col px-7">
      <DashboardBreadcrumbs />
      <DashboardTitle />
    </div>
  );
}

export default Dashboard;
