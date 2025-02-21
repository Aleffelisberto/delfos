import { Armchair, Barcode, Calendar, DollarSign, NotebookTabs } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

const items = [
  { title: "Agenda", url: "/", icon: Calendar },
  { title: "Clientes", url: "/customers", icon: NotebookTabs },
  { title: "Produtos", url: "/products", icon: Barcode },
  { title: "Serviços", url: "/services", icon: Armchair },
  { title: "Financeiro", url: "/financial", icon: DollarSign },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="gap-1">
            Studio <span className="text-rose-900">A</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="py-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url ? true : false}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p className="text-center text-sm text-gray-500">© 2024 Studio A</p>
      </SidebarFooter>
    </Sidebar>
  );
}
