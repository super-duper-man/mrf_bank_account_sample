import React from "react";

import { Button, IconButton, Input } from "@material-tailwind/react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FiPlusSquare } from "react-icons/fi";

const DashboardTools = () => {
  return (
    <div className="flex items-center justify-between mt-4">
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
        >
          <HiOutlineAdjustmentsHorizontal className="text-2xl" />
        </IconButton>
      </div>
      <div className="flex justify-center items-center gap-2">
        <IconButton
          placeholder={undefined}
          variant="outlined"
          size="md"
          className="w-40"
          color="blue-gray"
        >
          <HiOutlineAdjustmentsHorizontal className="text-2xl" />
        </IconButton>
        <IconButton
          placeholder={undefined}
          variant="outlined"
          size="md"
          className="w-40"
          color="blue-gray"
        >
          <HiOutlineAdjustmentsHorizontal className="text-2xl" />
        </IconButton>
        <IconButton
          placeholder={undefined}
          variant="outlined"
          size="md"
          className="w-40"
          color="blue-gray"
        >
          <HiOutlineAdjustmentsHorizontal className="text-2xl" />
        </IconButton>
        <Button
          placeholder={undefined}
          color="blue"
          className="flex justify-start items-center gap-2"
        >
          <FiPlusSquare className="text-base" />
          حساب جدید
        </Button>
      </div>
    </div>
  );
};

export default DashboardTools;
