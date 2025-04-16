
import { Home, BarChart3, Shield, Settings, MapPin, Bell, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-gas-blue rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute inset-1 bg-gas-blue rounded-full flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 text-white"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 19.5C4.5 20.8807 5.61929 22 7 22L17 22C18.3807 22 19.5 20.8807 19.5 19.5L19.5 4.5C19.5 3.11929 18.3807 2 17 2L7 2C5.61929 2 4.5 3.11929 4.5 4.5L4.5 19.5Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18H12.01"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="gas-flame-icon animate-flame"
                  d="M10 8.5C10 7.4 10.5 6.5 11.5 6C11.5 8.5 14 8 14 10.5C14 12 12.5 13 11.4 13C10 13 9 11.5 9 10.2C9 9.5 9.5 9 10 8.5Z"
                  fill="#FF9800"
                  stroke="#FF9800"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </div>
          <div className="font-bold text-xl">GazSmart</div>
        </div>
      </SidebarHeader>
      <SidebarContent className="pt-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/">
                <Home className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/monitoring">
                <BarChart3 className="w-5 h-5" />
                <span>GazEssentiel</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/security">
                <Shield className="w-5 h-5" />
                <span>GazSecure</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/optimization">
                <Settings className="w-5 h-5" />
                <span>GazOptim</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/suppliers">
                <MapPin className="w-5 h-5" />
                <span>GazAuto</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/notifications">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <div className="mt-auto p-4">
        <button className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-full py-2">
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </Sidebar>
  );
}
