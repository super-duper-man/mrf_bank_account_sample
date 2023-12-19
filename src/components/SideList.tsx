import { SideAccordion } from "./SideAccordion";
import { LuLayoutGrid } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LiaBoxSolid } from "react-icons/lia";
import { LuWarehouse } from "react-icons/lu";
import { BsCartDash } from "react-icons/bs";
import { BsDatabaseLock } from "react-icons/bs";
import { PiCalculatorLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

const SideList = () => {
  return (
    <>
      <SideAccordion
        headerText={<div>داشبورد</div>}
        body={<div>داشبورد</div>}
        headerIcon={<LuLayoutGrid />}
      />
      <SideAccordion
        headerText={<div>طرف حساب</div>}
        body={<div>طرف حساب</div>}
        headerIcon={<LuUsers />}
      />
      <SideAccordion
        headerText={<div>کالا و خدمات</div>}
        body={<div>کالا و خدمات</div>}
        headerIcon={<LiaBoxSolid />}
      />
      <SideAccordion
        headerText={<div>انبارداری</div>}
        body={<div>انبارداری</div>}
        headerIcon={<LuWarehouse />}
      />
      <SideAccordion
        headerText={<div>فروش</div>}
        body={<div>فروش</div>}
        headerIcon={<BsCartDash />}
      />
      <SideAccordion
        headerText={<div>خزانه داری</div>}
        body={<div>خزانه داری</div>}
        headerIcon={<BsDatabaseLock />}
      />
      <SideAccordion
        headerText={<div>حسابداری</div>}
        body={<div>حسابداری</div>}
        headerIcon={<PiCalculatorLight />}
      />
      <SideAccordion
        headerText={<div>تنظیمات</div>}
        body={<div>تنظمیات</div>}
        headerIcon={<IoSettingsOutline />}
      />
    </>
  );
};

export default SideList;
