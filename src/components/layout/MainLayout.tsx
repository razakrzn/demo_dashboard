import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  Bell,
  Search,
  Settings,
  LayoutDashboard,
  BarChart2,
  FileText,
  Settings as SettingsIcon,
  X,
} from "lucide-react";
import ProfileNotificationBar from "@/components/dashboard/ProfileNotificationBar";
import { useTheme } from "@/contexts/ThemeContext";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const isBranchOverview = location.pathname === "/";
  const isSettings = location.pathname === "/settings";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className={cn(
        "min-h-screen",
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      )}
    >
      {/* Header */}
      <header
        className={cn(
          "backdrop-blur-sm border-b sticky top-0 z-50",
          isDarkMode
            ? "bg-slate-800/80 border-slate-700"
            : "bg-white/80 border-slate-200"
        )}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                {isSidebarOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
              <button onClick={() => navigate("/")}>
                <div className="flex items-center gap-4">
                  <img
                    src="/icons/logo.png"
                    alt="Logo"
                    className="h-10 w-auto"
                  />
                  <h1 className="text-xl font-bold bg-gradient-to-r text-[#1E9CED] bg-clip-text">
                    Dashboard
                  </h1>
                </div>
              </button>
            </div>

            <div className="flex items-center gap-6">
              {/* Profile and Notifications */}
              <ProfileNotificationBar />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed left-0 top-[73px] z-40 h-[calc(100vh-73px)] border-r overflow-hidden backdrop-blur-sm",
            isDarkMode
              ? "bg-slate-800/80 border-slate-700"
              : "bg-white/80 border-slate-200",
            "lg:translate-x-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full",
            "w-64 transition-transform duration-300 lg:w-16 lg:hover:w-64"
          )}
        >
          <nav className="flex h-full flex-col p-4 pl-2">
            <div className="space-y-1">
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start relative",
                  isBranchOverview &&
                    "text-[#1E9CED] hover:text-[#1E9CED] hover:bg-transparent",
                  isBranchOverview &&
                    "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#1E9CED] before:rounded-r",
                  isDarkMode && "hover:bg-slate-700/50"
                )}
                onClick={() => {
                  navigate("/");
                  setIsSidebarOpen(false);
                }}
              >
                <LayoutDashboard
                  className={cn(
                    "h-5 w-5 shrink-0",
                    isBranchOverview && "text-[#1E9CED]"
                  )}
                />
                <span className="ml-2 truncate">Branch Overview</span>
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  isDarkMode && "hover:bg-slate-700/50"
                )}
                onClick={() => setIsSidebarOpen(false)}
              >
                <BarChart2 className="h-5 w-5 shrink-0" />
                <span className="ml-2 truncate">Analytics</span>
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  isDarkMode && "hover:bg-slate-700/50"
                )}
                onClick={() => setIsSidebarOpen(false)}
              >
                <FileText className="h-5 w-5 shrink-0" />
                <span className="ml-2 truncate">Reports</span>
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start relative",
                  isSettings &&
                    "text-[#1E9CED] hover:text-[#1E9CED] hover:bg-transparent",
                  isSettings &&
                    "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#1E9CED] before:rounded-r",
                  isDarkMode && "hover:bg-slate-700/50"
                )}
                onClick={() => {
                  navigate("/settings");
                  setIsSidebarOpen(false);
                }}
              >
                <SettingsIcon
                  className={cn(
                    "h-5 w-5 shrink-0",
                    isSettings && "text-[#1E9CED]"
                  )}
                />
                <span className="ml-2 truncate">Settings</span>
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-16">
          <div className="container mx-auto p-6">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
