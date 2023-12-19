import { IoMdTime } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";
import Time from "./Time";
function HeaderDateTime() {
  return (
    <>
      <IoMdTime className="text-xl" />
      <div className="flex gap-2">
        <span>ساعت</span>
        <Time />
      </div>
      <MdOutlineCalendarMonth className="text-xl" />
      <div>پنجشنبه، 27 مرداد 1402</div>
    </>
  );
}

export default HeaderDateTime;
