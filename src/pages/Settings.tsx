import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import MainLayout from "@/components/layout/MainLayout";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const Settings = () => {
  const { isDarkMode, setTheme } = useTheme();

  const handleDarkModeToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1E9CED] to-indigo-600 bg-clip-text text-transparent">
          Settings
        </h1>
        <p
          className={cn(
            "mt-1",
            isDarkMode ? "text-slate-300" : "text-slate-600"
          )}
        >
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid gap-6">
        <Tabs defaultValue="appearance" className="space-y-6">
          <TabsList
            className={cn(
              "grid w-full grid-cols-4",
              isDarkMode ? "bg-slate-800/50" : "bg-white/70",
              "backdrop-blur-sm"
            )}
          >
            <TabsTrigger
              value="appearance"
              className={cn(
                "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white",
                isDarkMode &&
                  "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white"
              )}
            >
              Appearance
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className={cn(
                "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white",
                isDarkMode &&
                  "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white"
              )}
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className={cn(
                "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white",
                isDarkMode &&
                  "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white"
              )}
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className={cn(
                "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white",
                isDarkMode &&
                  "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white"
              )}
            >
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="appearance">
            <Card
              className={cn(
                "shadow-lg border-0 backdrop-blur-sm",
                isDarkMode ? "bg-slate-800/50" : "bg-white/70"
              )}
            >
              <CardContent className="space-y-6 ">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className={isDarkMode ? "text-white" : ""}>
                        Dark Mode
                      </Label>
                      <p
                        className={cn(
                          "text-sm",
                          isDarkMode ? "text-slate-300" : "text-slate-500"
                        )}
                      >
                        Enable dark mode for the dashboard
                      </p>
                    </div>
                    <Switch
                      checked={isDarkMode}
                      onCheckedChange={handleDarkModeToggle}
                      className="data-[state=checked]:bg-[#1E9CED] data-[state=checked]:[&>span]:bg-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card
              className={cn(
                "shadow-lg border-0 backdrop-blur-sm",
                isDarkMode ? "bg-slate-800/50" : "bg-white/70"
              )}
            >
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className={isDarkMode ? "text-white" : ""}
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className={cn(
                          isDarkMode &&
                            "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className={isDarkMode ? "text-white" : ""}
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className={cn(
                          isDarkMode &&
                            "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                        )}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className={isDarkMode ? "text-white" : ""}
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className={cn(
                        isDarkMode &&
                          "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className={isDarkMode ? "text-white" : ""}
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className={cn(
                        isDarkMode &&
                          "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      )}
                    />
                  </div>
                </div>
                <Button className="bg-[#1E9CED] hover:bg-[#1E9CED]/90">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card
              className={cn(
                "shadow-lg border-0 backdrop-blur-sm",
                isDarkMode ? "bg-slate-800/50" : "bg-white/70"
              )}
            >
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className={isDarkMode ? "text-white" : ""}>
                        Email Notifications
                      </Label>
                      <p
                        className={cn(
                          "text-sm",
                          isDarkMode ? "text-slate-300" : "text-slate-500"
                        )}
                      >
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch className="data-[state=checked]:bg-[#1E9CED] data-[state=checked]:[&>span]:bg-white" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className={isDarkMode ? "text-white" : ""}>
                        Push Notifications
                      </Label>
                      <p
                        className={cn(
                          "text-sm",
                          isDarkMode ? "text-slate-300" : "text-slate-500"
                        )}
                      >
                        Receive push notifications
                      </p>
                    </div>
                    <Switch className="data-[state=checked]:bg-[#1E9CED] data-[state=checked]:[&>span]:bg-white" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className={isDarkMode ? "text-white" : ""}>
                        Marketing Emails
                      </Label>
                      <p
                        className={cn(
                          "text-sm",
                          isDarkMode ? "text-slate-300" : "text-slate-500"
                        )}
                      >
                        Receive marketing and promotional emails
                      </p>
                    </div>
                    <Switch className="data-[state=checked]:bg-[#1E9CED] data-[state=checked]:[&>span]:bg-white" />
                  </div>
                </div>
                <Button className="bg-[#1E9CED] hover:bg-[#1E9CED]/90">
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card
              className={cn(
                "shadow-lg border-0 backdrop-blur-sm",
                isDarkMode ? "bg-slate-800/50" : "bg-white/70"
              )}
            >
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="currentPassword"
                      className={isDarkMode ? "text-white" : ""}
                    >
                      Current Password
                    </Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      className={cn(
                        isDarkMode &&
                          "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="newPassword"
                      className={isDarkMode ? "text-white" : ""}
                    >
                      New Password
                    </Label>
                    <Input
                      id="newPassword"
                      type="password"
                      className={cn(
                        isDarkMode &&
                          "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="confirmPassword"
                      className={isDarkMode ? "text-white" : ""}
                    >
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      className={cn(
                        isDarkMode &&
                          "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      )}
                    />
                  </div>
                </div>
                <Button className="bg-[#1E9CED] hover:bg-[#1E9CED]/90">
                  Update Password
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Settings;
