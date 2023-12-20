import { IoMdTime } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { format } from "date-fns-jalali";
import Time from "./Time";
function HeaderDateTime() {
  const today = format(new Date(), "d MMMM yyyy");
  return (
    <>
      <IoMdTime className="text-xl" />
      <div className="flex gap-2">
        <span>ساعت</span>
        <Time />
      </div>
      <MdOutlineCalendarMonth className="text-xl" />
      <div>{today}</div>
    </>
  );
}

export default HeaderDateTime;
