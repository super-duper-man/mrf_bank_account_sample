import { ReactNode } from "react";
import Sidebar from "../layout/Sidebar";

type Props = {
  children: ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <main className="flex flex-row justify-start bg-blue-gray-50 h-screen">
      <Sidebar />
      <main className="flex-1 p-4">{children}</main>
    </main>
  );
}

export default AppLayout;
