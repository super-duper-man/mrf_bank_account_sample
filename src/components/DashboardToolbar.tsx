import DashboardFilter from "./DashboardFilter";
import DashboardTools from "./DashboardTools";

const DashboardToolbar = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <DashboardFilter />
        <DashboardTools />
      </div>
    </>
  );
};

export default DashboardToolbar;
