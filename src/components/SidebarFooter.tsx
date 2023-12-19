import { TfiHelpAlt } from "react-icons/tfi";
import { PiChatCircleTextLight } from "react-icons/pi";
import { useSidebarToggle } from "../store/sidebar-store";
const SidebarFooter = () => {
  const displaySidebar = useSidebarToggle((state) => state.display);

  return (
    <div className={`flex flex-col gap-4 ${displaySidebar && "hidden"}`}>
      <div className="flex justify-start items-center gap-2">
        <TfiHelpAlt className="text-xl" />
        <span>راهنما</span>
      </div>
      <div className="flex justify-between ">
        <div className="flex justify-start gap-2">
          <PiChatCircleTextLight className="text-2xl" />
          <span>پشتیبانی</span>
        </div>
        <span className="text-xs">ورژن 1.0.4</span>
      </div>
    </div>
  );
};

export default SidebarFooter;
