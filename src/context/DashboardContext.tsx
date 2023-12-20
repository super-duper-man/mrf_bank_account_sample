import { ReactNode, createContext, useContext, useState } from "react";
import { TABLE_ROWS } from "../data/table-data";

type DashboardContextType = {
  tableData: TableData[];
  selectedAccounts: number[];
  deletionRow: string;
  setTableData: (tableData: TableData[]) => void;
  setSelectedAccounts: (accountCodes: number[]) => void;
  setDeletionRow: (code: string) => void;
};

const DashboardContext = createContext<DashboardContextType>({
  tableData: [],
  selectedAccounts: [],
  deletionRow: "",
  setTableData: () => {},
  setSelectedAccounts: () => {},
  setDeletionRow: () => {},
});

const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [tableData, setTableData] = useState<TableData[]>(TABLE_ROWS);
  const [selectedAccounts, setSelectedAccounts] = useState<number[]>([]);
  const [deletionRow, setDeletionRow] = useState<string>("");

  return (
    <DashboardContext.Provider
      value={{
        tableData,
        setTableData,
        selectedAccounts,
        setSelectedAccounts,
        deletionRow,
        setDeletionRow,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);

  if (context === undefined)
    throw new Error(
      "Dashboard context was used outside of the Dashboard Provider"
    );

  return context;
};

export { DashboardProvider };
