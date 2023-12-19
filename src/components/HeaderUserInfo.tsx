import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { LuBellDot } from "react-icons/lu";
import { LuSmartphone } from "react-icons/lu";

function HeaderUserInfo() {
  return (
    <>
      <div className="flex justify-around items-center gap-3">
        <HiOutlinePresentationChartLine />
        <span>سال مالی 1402</span>
        <i className="fas fa-chevron-down self-end" />
      </div>
      <div className="flex justify-around items-center gap-4">
        <LuSmartphone />
        <LuBellDot />

        <img
          src="/user-image.jpeg"
          className="rounded-full border-[3px] border-green-500 p-[1px]"
          width={50}
          height={50}
        />
      </div>
    </>
  );
}

export default HeaderUserInfo;
