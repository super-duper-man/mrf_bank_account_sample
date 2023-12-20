import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import { SidebarProvider } from "./context/SidebarContext";

const router = createBrowserRouter([{ path: "/", element: <Dashboard /> }]);

function App() {
  return (
    <SidebarProvider>
      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </SidebarProvider>
  );
}

export default App;
