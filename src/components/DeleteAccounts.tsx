import { useDashboard } from "../context/DashboardContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import useDialog from "../hooks/useDialog";
import AppDialog from "./AppDialog";
import { IconButton } from "@material-tailwind/react";

function DeleteAccounts() {
  const { tableData, setTableData, selectedAccounts } = useDashboard();
  const [open, setOpen] = useDialog();

  const removeAccounts = (
    accounts: TableData[],
    selectedAccounts: number[]
  ) => {
    return accounts.filter(
      (account) => !selectedAccounts.includes(Number(account.accountCode))
    );
  };

  const handleDelete = () => {
    setTableData(removeAccounts(tableData, selectedAccounts));
  };

  const handleConfirmDialog = () => {
    handleDelete();
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        placeholder={undefined}
        variant="outlined"
        size="md"
        className="w-40"
        color="blue-gray"
        onClick={() => setOpen(!open)}
      >
        <RiDeleteBin5Line className="text-xl" />
      </IconButton>

      <AppDialog
        open={open}
        onClose={() => setOpen(!open)}
        onConfirm={handleConfirmDialog}
        dialogHeader="حذف حسابها"
        dialogBody="آیا از حذف حسابهای انتخاب شده مطمن هستید؟"
        confirmText="بله"
        confirmColor="red"
      />
    </>
  );
}

export default DeleteAccounts;
