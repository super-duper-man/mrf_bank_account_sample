import { IconButton, Input } from "@material-tailwind/react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import AppDialog from "./AppDialog";
import useDialog from "../hooks/useDialog";

function DashboardFilter() {
  const [open, setOpen] = useDialog();

  const toggleDialog = () => setOpen(!open);

  return (
    <>
      <div className="flex items-center justify-start gap-2">
        <Input
          type="search"
          placeholder="جستجو"
          className="!border !border-gray-300 bg-gray-300 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 w-[250px]"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
          crossOrigin={undefined}
          icon={<i className="fas fa-search" />}
        />
        <IconButton
          placeholder={undefined}
          variant="outlined"
          size="md"
          className="w-40"
          color="blue-gray"
          onClick={toggleDialog}
        >
          <HiOutlineAdjustmentsHorizontal className="text-2xl" />
        </IconButton>
      </div>
      <AppDialog
        open={open}
        onClose={toggleDialog}
        onConfirm={toggleDialog}
        dialogHeader="فیلترها"
        dialogBody="فیلتر"
        confirmText="فیلتر"
      />
    </>
  );
}

export default DashboardFilter;
