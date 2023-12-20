import { Card, Checkbox, Typography } from "@material-tailwind/react";
import { FaRegSquareMinus } from "react-icons/fa6";
import { IoIosArrowRoundDown } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { IoIosExpand } from "react-icons/io";
import ExpandableText from "./ExpandableText";
import { TABLE_ROWS } from "../data/table-data";

const DashboardTable = () => {
  const TABLE_HEAD = [
    "عنوان حساب",
    "کد حساب",
    "شماره حساب",
    "شماره شبا",
    "شماره کارت",
    "",
  ];

  return (
    <Card className="mt-7 w-full h-full" placeholder={undefined}>
      <table className="w-full h-full min-w-max table-auto">
        <thead className="text-right">
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 flex items-center gap-2"
                  placeholder={undefined}
                >
                  {index === 0 && (
                    <FaRegSquareMinus className="cursor-pointer text-xl" />
                  )}{" "}
                  {head}
                  {index === 0 && <IoIosArrowRoundDown className="text-xl" />}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(
            (
              { accountCode, accountNumber, accountTitle, cardNumber, sheba },
              index
            ) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={accountCode}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal flex items-center"
                      placeholder={undefined}
                    >
                      <Checkbox color="blue" crossOrigin={undefined} />
                      <ExpandableText maxChar={12}>
                        {accountTitle}
                      </ExpandableText>
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                    >
                      {accountCode}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                    >
                      {accountNumber}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                    >
                      <ExpandableText maxChar={18} number={true}>
                        {sheba}
                      </ExpandableText>
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                    >
                      {cardNumber}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium flex gap-4 text-gray-600 items-center justify-center"
                      placeholder={undefined}
                    >
                      <IoIosExpand className="text-xl cursor-pointer" />
                      <TbEdit className="text-xl cursor-pointer" />
                      <RiDeleteBin5Line className="text-xl cursor-pointer" />
                    </Typography>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default DashboardTable;
