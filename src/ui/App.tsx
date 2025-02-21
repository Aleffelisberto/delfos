import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppSidebar } from "./components/app-sidebar";
import { ThemeProvider } from "./components/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
import { Customers } from "./pages/customers";
import { Agenda } from "./pages/agenda";
import { Products } from "./pages/products";
import { Services } from "./pages/services";
import { Finances } from "./pages/finances";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <SidebarProvider>
          <AppSidebar />
          <Routes>
            <Route index path="/" element={<Agenda />} />
            <Route path="customers" element={<Customers />} />
            <Route path="products" element={<Products />} />
            <Route path="services" element={<Services />} />
            <Route path="financial" element={<Finances />} />
          </Routes>
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
