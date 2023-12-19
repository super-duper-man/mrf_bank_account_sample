import { Breadcrumbs } from "@material-tailwind/react";
import { LuLayoutGrid } from "react-icons/lu";

const DashboardBreadcrumbs = () => {
  return (
    <Breadcrumbs placeholder={undefined}>
      <span>
        <LuLayoutGrid />
      </span>
      <span>خزانه داری</span>
      <span>تعریف حساب بانکی</span>
    </Breadcrumbs>
  );
};

export default DashboardBreadcrumbs;
