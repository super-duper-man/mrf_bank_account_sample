import { create } from "zustand";

type SidebarDisplayState = {
  display: boolean;
  setDisplay: (display: boolean) => void;
};

export const useSidebarToggle = create<SidebarDisplayState>((set) => ({
  display: false,
  setDisplay: (display) => set(() => ({ display })),
}));
