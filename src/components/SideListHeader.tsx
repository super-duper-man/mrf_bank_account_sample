import { useSidebar } from "../context/SidebarContext";
import { BsApple } from "react-icons/bs";

const SideListHeader = () => {
  const { display: displaySidebar } = useSidebar();

  return (
    <div className="flex justify-between items-center mt-5 mb-5 transition-all">
      <div className="flex gap-4 font-bold items-center">
        {/* <i className="fa-brands fa-apple text-xl" /> */}
        <BsApple className="text-xl" />
        <span className={`text-lg ${displaySidebar && "hidden"}`}>
          شرکت اپل
        </span>
      </div>
      <i
        className={`fa-regular fa-credit-card text-xl text-gray-700 ${
          displaySidebar && "hidden"
        }`}
      />
    </div>
  );
};

export default SideListHeader;
