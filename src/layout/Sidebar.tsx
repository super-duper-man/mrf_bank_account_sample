import { useState } from "react";
import { IconButton } from "@material-tailwind/react";
function Sidebar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  return (
    <div
      className={`h-screen px-4 pt-8 pb-4 flex justify-between flex-col duration-300 transition-all border-l-2 border-gray-400  ${
        !toggleSidebar ? "w-80" : "w-20"
      }`}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <h3 className={`${toggleSidebar && "hidden"}`}>LOGO</h3>
          </div>
          <IconButton
            className={`rounded-full absolute left-[-35px] p-4 duration-300 transition-all ${
              toggleSidebar ? "rotate-180" : "rotate-0"
            }`}
            placeholder={undefined}
            onClick={() => setToggleSidebar(!toggleSidebar)}
            variant="outlined"
          >
            <i className="fas fa-arrow-right" />
          </IconButton>
        </div>
        <div>/* side children */</div>
      </div>
      <div>/* side footer */</div>
    </div>
  );
}

export default Sidebar;
