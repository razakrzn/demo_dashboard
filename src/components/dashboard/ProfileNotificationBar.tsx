import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell, Settings, LogOut, User, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const ProfileNotificationBar = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const notifications = [
    {
      id: 1,
      title: "New dealer registration",
      message: "ABC Motors has registered as a new dealer",
      time: "2 mins ago",
      unread: true,
    },
    {
      id: 2,
      title: "Sales target achieved",
      message: "Branch Kerala has achieved monthly target",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      title: "Payment received",
      message: "₹2.5L payment received from XYZ Dealers",
      time: "3 hours ago",
      unread: false,
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...");
  };

  return (
    <div className="flex items-center gap-4">
      {/* Notifications */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn("relative", isDarkMode && "hover:bg-slate-800/50")}
          >
            <Bell
              className={cn("h-5 w-5", isDarkMode ? "text-slate-300" : "")}
            />
            {unreadCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500 text-white"
              >
                {unreadCount}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={cn(
            "w-80",
            isDarkMode ? "bg-slate-800 border-slate-700" : ""
          )}
          align="end"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4
                className={cn("font-semibold", isDarkMode ? "text-white" : "")}
              >
                Notifications
              </h4>
              <Badge variant="secondary">{unreadCount} new</Badge>
            </div>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "p-3 rounded-lg border",
                    notification.unread
                      ? isDarkMode
                        ? "bg-blue-900/30 border-blue-800"
                        : "bg-blue-50 border-blue-200"
                      : isDarkMode
                      ? "bg-slate-700/50 border-slate-600"
                      : "bg-slate-50 border-slate-200"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <p
                        className={cn(
                          "text-sm font-medium",
                          isDarkMode ? "text-white" : ""
                        )}
                      >
                        {notification.title}
                      </p>
                      <p
                        className={cn(
                          "text-xs",
                          isDarkMode ? "text-slate-300" : "text-slate-600"
                        )}
                      >
                        {notification.message}
                      </p>
                      <p
                        className={cn(
                          "text-xs",
                          isDarkMode ? "text-slate-400" : "text-slate-400"
                        )}
                      >
                        {notification.time}
                      </p>
                    </div>
                    {notification.unread && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className={cn(
                "w-full",
                isDarkMode &&
                  "border-slate-700 text-slate-300 hover:bg-slate-700/50"
              )}
              size="sm"
            >
              View all notifications
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      {/* Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "flex items-center gap-2 px-3",
              isDarkMode && "hover:bg-slate-800/50"
            )}
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block text-left">
              <p
                className={cn(
                  "text-sm font-medium",
                  isDarkMode ? "text-white" : ""
                )}
              >
                John Doe
              </p>
              <p
                className={cn(
                  "text-xs",
                  isDarkMode ? "text-slate-300" : "text-slate-500"
                )}
              >
                Regional Manager
              </p>
            </div>
            <ChevronDown
              className={cn(
                "h-4 w-4",
                isDarkMode ? "text-slate-300" : "text-slate-500"
              )}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={cn(
            "w-72",
            isDarkMode ? "bg-slate-800 border-slate-700" : ""
          )}
          align="end"
        >
          <DropdownMenuLabel className={isDarkMode ? "text-white" : ""}>
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator className={isDarkMode ? "bg-slate-700" : ""} />
          <DropdownMenuItem
            className={cn(
              "cursor-pointer",
              isDarkMode &&
                "text-slate-300 hover:bg-slate-700/50 hover:text-white"
            )}
            onClick={handleProfileClick}
          >
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={cn(
              "cursor-pointer",
              isDarkMode &&
                "text-slate-300 hover:bg-slate-700/50 hover:text-white"
            )}
            onClick={handleSettingsClick}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className={isDarkMode ? "bg-slate-700" : ""} />
          <DropdownMenuItem
            className={cn(
              "cursor-pointer text-red-600",
              isDarkMode && "hover:bg-slate-700/50"
            )}
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileNotificationBar;
