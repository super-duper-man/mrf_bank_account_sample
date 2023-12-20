import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { SlPrinter } from "react-icons/sl";
import { FiPlusSquare } from "react-icons/fi";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";

import AppDialog from "./AppDialog";
import AddAccount from "./AddAccount";

function DashboardTools() {
  const [open, setOpen] = React.useState(false);

  const toggleDialog = () => setOpen(!open);
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <IconButton
          placeholder={undefined}
          variant="outlined"
          size="md"
          className="w-40"
          color="blue-gray"
        >
          <SlPrinter className="text-xl" />
        </IconButton>
        <IconButton
          placeholder={undefined}
          variant="outlined"
          size="md"
          className="w-40"
          color="blue-gray"
        >
          <PiMicrosoftExcelLogo className="text-xl" />
        </IconButton>
        <IconButton
          placeholder={undefined}
          variant="outlined"
          size="md"
          className="w-40"
          color="blue-gray"
        >
          <RiDeleteBin5Line className="text-xl" />
        </IconButton>
        <Button
          placeholder={undefined}
          color="blue"
          className="flex justify-start items-center gap-2"
          onClick={toggleDialog}
        >
          <FiPlusSquare className="text-base" />
          حساب جدید
        </Button>
      </div>
      <AppDialog
        open={open}
        onClose={toggleDialog}
        dialogHeader="حساب جدید"
        dialogBody={<AddAccount />}
        confirmText="ایجاد"
      />
    </>
  );
}

export default DashboardTools;
