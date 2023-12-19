import { IconButton } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { PiFilePdfDuotone } from "react-icons/pi";
function DashboardTitle() {
  return (
    <div className="flex justify-between items-center mt-5">
      <div>
        <span className="font-bold text-3xl">تعریف حساب بانکی</span>
      </div>
      <div className="flex items-center gap-2">
        <IconButton placeholder={undefined} variant="outlined" size="sm">
          <PiFilePdfDuotone className="text-2xl" />
        </IconButton>
        <Button variant="outlined" placeholder={undefined} size="sm">
          آموزش ویدیویی
        </Button>
      </div>
    </div>
  );
}

export default DashboardTitle;
