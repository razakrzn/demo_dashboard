import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Info, ChevronLeft, ChevronRight } from "lucide-react";
import SalesOverviewChart from "@/components/dashboard/SalesOverviewChart";
import InfluencerTable from "@/components/dashboard/InfluencerTable";
import ProductStatusChart from "@/components/dashboard/ProductStatusChart";
import DealerCollectionTable from "@/components/dashboard/DealerCollectionTable";
import MetricsCards from "@/components/dashboard/MetricsCards";
import ProfileNotificationBar from "@/components/dashboard/ProfileNotificationBar";
import MainLayout from "@/components/layout/MainLayout";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { useState } from "react";

const BranchOverview = () => {
  const { isDarkMode } = useTheme();
  const [currentTab, setCurrentTab] = useState("influencer");
  const tabs = ["influencer", "products", "dealers", "collections"];
  const tabLabels = {
    influencer: "Influencer Sales",
    products: "Product Status",
    dealers: "Dealer Performance",
    collections: "Collections",
  };

  const handleTabChange = (direction: "prev" | "next") => {
    const currentIndex = tabs.indexOf(currentTab);
    if (direction === "prev") {
      const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
      setCurrentTab(tabs[prevIndex]);
    } else {
      const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
      setCurrentTab(tabs[nextIndex]);
    }
  };

  const getAdjacentTabs = () => {
    const currentIndex = tabs.indexOf(currentTab);
    const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;

    return {
      prev: tabs[prevIndex],
      next: tabs[nextIndex],
    };
  };

  return (
    <MainLayout>
      {/* title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1E9CED] to-indigo-600 bg-clip-text text-transparent">
          Branch Overview
        </h1>
        <p
          className={cn(
            "mt-1",
            isDarkMode ? "text-slate-300" : "text-slate-600"
          )}
        >
          Comprehensive sales and performance analytics
        </p>
      </div>
      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-8">
        <div className="flex items-center gap-2">
          <CalendarDays
            className={cn(
              "h-4 w-4",
              isDarkMode ? "text-slate-400" : "text-slate-500"
            )}
          />
          <Select defaultValue="2025-2026">
            <SelectTrigger
              className={cn(
                "w-32",
                isDarkMode && "bg-slate-800/50 border-slate-700 text-white"
              )}
            >
              <SelectValue placeholder="FY" />
            </SelectTrigger>
            <SelectContent
              className={cn(isDarkMode && "bg-slate-800 border-slate-700")}
            >
              <SelectItem
                value="2025-2026"
                className={cn(
                  isDarkMode &&
                    "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                )}
              >
                FY 2025-2026
              </SelectItem>
              <SelectItem
                value="2024-2025"
                className={cn(
                  isDarkMode &&
                    "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                )}
              >
                FY 2024-2025
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Select defaultValue="may">
          <SelectTrigger
            className={cn(
              "w-28",
              isDarkMode && "bg-slate-800/50 border-slate-700 text-white"
            )}
          >
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent
            className={cn(isDarkMode && "bg-slate-800 border-slate-700")}
          >
            <SelectItem
              value="may"
              className={cn(
                isDarkMode &&
                  "text-slate-300 hover:bg-slate-700/50 hover:text-white"
              )}
            >
              May
            </SelectItem>
            <SelectItem
              value="april"
              className={cn(
                isDarkMode &&
                  "text-slate-300 hover:bg-slate-700/50 hover:text-white"
              )}
            >
              April
            </SelectItem>
            <SelectItem
              value="march"
              className={cn(
                isDarkMode &&
                  "text-slate-300 hover:bg-slate-700/50 hover:text-white"
              )}
            >
              March
            </SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="kerala">
          <SelectTrigger
            className={cn(
              "w-32",
              isDarkMode && "bg-slate-800/50 border-slate-700 text-white"
            )}
          >
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent
            className={cn(isDarkMode && "bg-slate-800 border-slate-700")}
          >
            <SelectItem
              value="kerala"
              className={cn(
                isDarkMode &&
                  "text-slate-300 hover:bg-slate-700/50 hover:text-white"
              )}
            >
              Kerala
            </SelectItem>
            <SelectItem
              value="tamil-nadu"
              className={cn(
                isDarkMode &&
                  "text-slate-300 hover:bg-slate-700/50 hover:text-white"
              )}
            >
              Tamil Nadu
            </SelectItem>
            <SelectItem
              value="karnataka"
              className={cn(
                isDarkMode &&
                  "text-slate-300 hover:bg-slate-700/50 hover:text-white"
              )}
            >
              Karnataka
            </SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger
            className={cn(
              "w-28",
              isDarkMode && "bg-slate-800/50 border-slate-700 text-white"
            )}
          >
            <SelectValue placeholder="Branch" />
          </SelectTrigger>
          <SelectContent
            className={cn(isDarkMode && "bg-slate-800 border-slate-700")}
          >
            <SelectItem
              value="all"
              className={cn(
                isDarkMode &&
                  "text-slate-300 hover:bg-slate-700/50 hover:text-white"
              )}
            >
              All
            </SelectItem>
            <SelectItem
              value="branch-1"
              className={cn(
                isDarkMode &&
                  "text-slate-300 hover:bg-slate-700/50 hover:text-white"
              )}
            >
              Branch 1
            </SelectItem>
            <SelectItem
              value="branch-2"
              className={cn(
                isDarkMode &&
                  "text-slate-300 hover:bg-slate-700/50 hover:text-white"
              )}
            >
              Branch 2
            </SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          size="sm"
          className={cn(
            isDarkMode &&
              "border-slate-700 text-slate-300 hover:bg-slate-800/50"
          )}
        >
          <Info className="h-4 w-4 mr-2" />
          Details
        </Button>
      </div>

      {/* Key Metrics */}
      <MetricsCards />

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">
        {/* Sales Overview - Takes 2 columns */}
        <div className="xl:col-span-2">
          <Card
            className={cn(
              "h-full shadow-lg border-0 backdrop-blur-sm",
              isDarkMode ? "bg-slate-800/50" : "bg-white/70"
            )}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle
                    className={cn(
                      "text-xl font-semibold",
                      isDarkMode ? "text-white" : "text-slate-800"
                    )}
                  >
                    Sales Performance
                  </CardTitle>
                  <CardDescription
                    className={isDarkMode ? "text-slate-300" : ""}
                  >
                    Secondary vs Primary Sales (Trucks)
                  </CardDescription>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className={isDarkMode ? "text-slate-300" : ""}>
                      Primary
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className={isDarkMode ? "text-slate-300" : ""}>
                      Secondary
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <SalesOverviewChart />
            </CardContent>
          </Card>
        </div>

        {/* Indents Dispatch */}
        <Card
          className={cn(
            "shadow-lg border-0 backdrop-blur-sm",
            isDarkMode ? "bg-slate-800/50" : "bg-white/70"
          )}
        >
          <CardHeader className="pb-4">
            <CardTitle
              className={cn(
                "text-xl font-semibold",
                isDarkMode ? "text-white" : "text-slate-800"
              )}
            >
              Indents Dispatch
            </CardTitle>
            <CardDescription className={isDarkMode ? "text-slate-300" : ""}>
              Indents Dispatch vs Monthly Target
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto">
                  <svg
                    className="w-32 h-32 transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className={
                        isDarkMode ? "text-slate-700" : "text-slate-200"
                      }
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-emerald-500"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="25.3, 100"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-600">
                      18.08
                    </span>
                    <span
                      className={cn(
                        "text-xs",
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                      )}
                    >
                      of 71.50
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <Badge
                  variant="secondary"
                  className="bg-emerald-100 text-emerald-700"
                >
                  25.3% Complete
                </Badge>
                <p
                  className={cn(
                    "text-sm",
                    isDarkMode ? "text-slate-300" : "text-slate-600"
                  )}
                >
                  Target Achievement
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Tables Section */}
      <div className="mt-8">
        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          className="space-y-6"
        >
          <div className="relative">
            <TabsList
              className={cn(
                "grid w-full grid-cols-4 backdrop-blur-sm hidden sm:grid",
                isDarkMode ? "bg-slate-800/50" : "bg-white/70"
              )}
            >
              <TabsTrigger
                value="influencer"
                className={cn(
                  "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white",
                  isDarkMode &&
                    "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white"
                )}
              >
                Influencer Sales
              </TabsTrigger>
              <TabsTrigger
                value="products"
                className={cn(
                  "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white",
                  isDarkMode &&
                    "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white"
                )}
              >
                Product Status
              </TabsTrigger>
              <TabsTrigger
                value="dealers"
                className={cn(
                  "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white",
                  isDarkMode &&
                    "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white"
                )}
              >
                Dealer Performance
              </TabsTrigger>
              <TabsTrigger
                value="collections"
                className={cn(
                  "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white",
                  isDarkMode &&
                    "data-[state=active]:bg-[#1E9CED] data-[state=active]:text-white"
                )}
              >
                Collections
              </TabsTrigger>
            </TabsList>

            {/* Mobile Tab Navigation */}
            <div className="sm:hidden">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleTabChange("prev")}
                  className={cn(
                    "h-8 w-8",
                    isDarkMode && "text-slate-300 hover:bg-slate-800/50"
                  )}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex-1 mx-4 overflow-hidden">
                  <div className="flex transition-transform duration-300 ease-in-out">
                    <div className="flex-shrink-0 w-full text-center">
                      <div
                        className={cn(
                          "px-4 py-2 rounded-md text-sm font-medium",
                          isDarkMode
                            ? "bg-slate-800/50 text-white"
                            : "bg-white/70 text-slate-800"
                        )}
                      >
                        {tabLabels[currentTab as keyof typeof tabLabels]}
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleTabChange("next")}
                  className={cn(
                    "h-8 w-8",
                    isDarkMode && "text-slate-300 hover:bg-slate-800/50"
                  )}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-center gap-2 mb-4">
                {tabs.map((tab) => (
                  <div
                    key={tab}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      currentTab === tab
                        ? isDarkMode
                          ? "bg-blue-400 w-4"
                          : "bg-blue-600 w-4"
                        : isDarkMode
                        ? "bg-slate-600"
                        : "bg-slate-300"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          <TabsContent value="influencer" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InfluencerTable />
              <Card
                className={cn(
                  "shadow-lg border-0 backdrop-blur-sm",
                  isDarkMode ? "bg-slate-800/50" : "bg-white/70"
                )}
              >
                <CardHeader>
                  <CardTitle
                    className={cn(
                      "text-lg font-semibold",
                      isDarkMode ? "text-white" : "text-slate-800"
                    )}
                  >
                    Sales Executive Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div
                      className={cn(
                        "flex justify-between items-center p-3 rounded-lg",
                        isDarkMode ? "bg-slate-700/50" : "bg-slate-50"
                      )}
                    >
                      <span
                        className={cn(
                          "font-medium",
                          isDarkMode ? "text-white" : ""
                        )}
                      >
                        Top Performer
                      </span>
                      <Badge variant="default">Achievement: 112%</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className={isDarkMode ? "text-slate-300" : ""}>
                          Monthly Target
                        </span>
                        <span
                          className={cn(
                            "font-medium",
                            isDarkMode ? "text-white" : ""
                          )}
                        >
                          ₹45.2L
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className={isDarkMode ? "text-slate-300" : ""}>
                          Achieved
                        </span>
                        <span className="font-medium text-green-600">
                          ₹50.6L
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products">
            <ProductStatusChart />
          </TabsContent>

          <TabsContent value="dealers">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <Card
                className={cn(
                  "shadow-lg border-0 backdrop-blur-sm",
                  isDarkMode ? "bg-slate-800/50" : "bg-white/70"
                )}
              >
                <CardHeader>
                  <CardTitle
                    className={cn(
                      "text-lg font-semibold",
                      isDarkMode ? "text-white" : "text-slate-800"
                    )}
                  >
                    Outstanding
                  </CardTitle>
                  <CardDescription
                    className={isDarkMode ? "text-slate-300" : ""}
                  >
                    After GST
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">
                    ₹18.99M
                  </div>
                  <p
                    className={cn(
                      "text-sm mt-2",
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    )}
                  >
                    Top dealer: ₹4.92M
                  </p>
                </CardContent>
              </Card>

              <Card
                className={cn(
                  "shadow-lg border-0 backdrop-blur-sm",
                  isDarkMode ? "bg-slate-800/50" : "bg-white/70"
                )}
              >
                <CardHeader>
                  <CardTitle
                    className={cn(
                      "text-lg font-semibold",
                      isDarkMode ? "text-white" : "text-slate-800"
                    )}
                  >
                    Pending Orders
                  </CardTitle>
                  <CardDescription
                    className={isDarkMode ? "text-slate-300" : ""}
                  >
                    Indents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">2.09</div>
                  <p
                    className={cn(
                      "text-sm mt-2",
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    )}
                  >
                    Trucks pending
                  </p>
                </CardContent>
              </Card>

              <Card
                className={cn(
                  "shadow-lg border-0 backdrop-blur-sm",
                  isDarkMode ? "bg-slate-800/50" : "bg-white/70"
                )}
              >
                <CardHeader>
                  <CardTitle
                    className={cn(
                      "text-lg font-semibold",
                      isDarkMode ? "text-white" : "text-slate-800"
                    )}
                  >
                    Sales Volume
                  </CardTitle>
                  <CardDescription
                    className={isDarkMode ? "text-slate-300" : ""}
                  >
                    Primary & Secondary
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">0.84</div>
                  <p
                    className={cn(
                      "text-sm mt-2",
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    )}
                  >
                    Average per dealer
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="collections">
            <DealerCollectionTable />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default BranchOverview;
