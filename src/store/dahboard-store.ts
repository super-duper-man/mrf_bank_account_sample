import { create } from "zustand";
import { TABLE_ROWS } from "../data/table-data";

type DashboardState = {
  selectedAccounts: number[];
  tableRows: TableData[];
  setSelectedAccounts: (selectedAccounts: number[]) => void;
  setTableRows: (tableData: TableData[]) => void;
};

export const useDashboardState = create<DashboardState>((set) => ({
  selectedAccounts: [],
  tableRows: TABLE_ROWS,
  setSelectedAccounts: (selectedAccounts) => set(() => ({ selectedAccounts })),
  setTableRows: (tableData) => () => ({ tableData }),
}));
