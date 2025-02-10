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

const items = [
  {
    title: "Agenda",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Clientes",
    url: "#",
    icon: NotebookTabs,
  },
  {
    title: "Produtos",
    url: "#",
    icon: Barcode,
  },
  {
    title: "Serviços",
    url: "#",
    icon: Armchair,
  },
  {
    title: "Financeiro",
    url: "#",
    icon: DollarSign,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Studio A</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="py-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
