import CompanyHeader from "../components/CompanyHeader";
import SideList from "../components/SideList";
import SidebarFooter from "../components/SidebarFooter";
import Sidebar from "../layout/Sidebar";
import { Children } from "../types";

function AppLayout({ children }: Children) {
  return (
    <main className="flex flex-row justify-start bg-blue-gray-50 h-screen">
      <Sidebar
        sideHeader={<CompanyHeader />}
        sideList={<SideList />}
        sideFooter={<SidebarFooter />}
      />
      <main className="flex-1 p-4">{children}</main>
    </main>
  );
}

export default AppLayout;
