import CompanyHeader from "../components/CompanyHeader";
import SideList from "../components/SideList";
import SidebarFooter from "../components/SidebarFooter";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Children } from "../types";

function AppLayout({ children }: Children) {
  return (
    <main className="flex flex-row justify-start bg-blue-gray-50">
      <Sidebar
        sideHeader={<CompanyHeader />}
        sideList={<SideList />}
        sideFooter={<SidebarFooter />}
      />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 p-4 h-screen">{children}</main>
      </div>
    </main>
  );
}

export default AppLayout;
