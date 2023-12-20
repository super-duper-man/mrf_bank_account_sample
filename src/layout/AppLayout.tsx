import SideListHeader from "../components/SideListHeader";
import SideList from "../components/SideList";
import SidebarFooter from "../components/SidebarFooter";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Children } from "../types";
import { useSidebarToggle } from "../store/sidebar-store";

function AppLayout({ children }: Children) {
  const display = useSidebarToggle((state) => state.display);
  {
    !display ? "md:w-80" : "md:w-20";
  }
  return (
    <div className="h-screen flex flex-row w-full justify-start bg-gray-50">
      <aside className={`hidden ${!display ? "md:w-80" : "md:w-20"} md:block`}>
        <Sidebar
          sideHeader={<SideListHeader />}
          sideList={<SideList />}
          sideFooter={<SidebarFooter />}
        />
      </aside>

      <main className="flex-1 w-full min-h-screen">
        <Header />
        <div className="flex-1 p-4 h-screen">{children}</div>
      </main>
    </div>
  );
}

export default AppLayout;
