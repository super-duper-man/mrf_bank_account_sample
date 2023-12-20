import SideListHeader from "../components/SideListHeader";
import SideList from "../components/SideList";
import SidebarFooter from "../components/SidebarFooter";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Children } from "../types";

function AppLayout({ children }: Children) {
  return (
    <main className="h-screen flex flex-row justify-start bg-gray-50">
      <div className="">
        <Sidebar
          sideHeader={<SideListHeader />}
          sideList={<SideList />}
          sideFooter={<SidebarFooter />}
        />
      </div>

      <div className="flex-1">
        <Header />
        <main className="flex-1 p-4 h-screen">{children}</main>
      </div>
    </main>
  );
}

export default AppLayout;
