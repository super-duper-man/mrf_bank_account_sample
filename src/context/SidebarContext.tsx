import { ReactNode, createContext, useContext, useState } from "react";

type SidebarContextType = {
  display: boolean;
  setDisplay: (display: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType>({
  display: false,
  setDisplay: () => {},
});

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ display, setDisplay }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (context === undefined)
    throw new Error("Sidebar context was used outside of the Sidebar provider");

  return context;
};

export { SidebarProvider };
