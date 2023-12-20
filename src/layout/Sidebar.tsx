import { IconButton } from "@material-tailwind/react";
import { ReactNode } from "react";
import { useSidebar } from "../context/SidebarContext";

type Props = {
  sideHeader: ReactNode;
  sideList: ReactNode;
  sideFooter: ReactNode;
};

function Sidebar({ sideHeader, sideList, sideFooter }: Props) {
  const { display, setDisplay } = useSidebar();

  return (
    <div
      className={`fixed h-screen px-4 pt-4 pb-4 flex justify-between flex-col transition-transform border-l-2 border-gray-400  ${
        !display ? "w-80" : "w-20"
      }`}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <i className="fas fa-house text-2xl text-blue-500" />
            <h3 className={`font-extrabold text-3xl ${display && "hidden"}`}>
              ثمینا
            </h3>
          </div>
          <IconButton
            className={`rounded-full absolute left-[-33px] mt-5 p-4 duration-300 transition-all bg-blue-gray-50 border-2 border-gray-400 text-gray-600 ${
              display ? "rotate-180" : "rotate-0"
            }`}
            placeholder={undefined}
            onClick={() => setDisplay(!display)}
            size="sm"
            ripple={false}
          >
            <i className="fas fa-arrow-right pt-1" />
          </IconButton>
        </div>
        <div>
          <div>{sideHeader}</div>
          <div>{sideList}</div>
        </div>
      </div>
      <div>{sideFooter}</div>
    </div>
  );
}

export default Sidebar;
