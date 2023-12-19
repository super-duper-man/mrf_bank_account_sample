import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([{ path: "/", element: <Dashboard /> }]);

function App() {
  return (
    <AppLayout>
      <RouterProvider router={router} />
    </AppLayout>
  );
}

export default App;
