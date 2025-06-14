import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Package,
  Target,
  DollarSign,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const MetricsCards = () => {
  const { isDarkMode } = useTheme();

  const metrics = [
    {
      title: "Total Sales",
      value: "₹74.77L",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
      darkBgColor: "bg-green-900/30",
    },
    {
      title: "Active Dealers",
      value: "156",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      darkBgColor: "bg-blue-900/30",
    },
    {
      title: "Products Sold",
      value: "2,355",
      change: "-2.1%",
      trend: "down",
      icon: Package,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      darkBgColor: "bg-purple-900/30",
    },
    {
      title: "Target Achievement",
      value: "89.3%",
      change: "+5.7%",
      trend: "up",
      icon: Target,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      darkBgColor: "bg-orange-900/30",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
        const trendColor =
          metric.trend === "up" ? "text-green-600" : "text-red-600";
        const trendBg = metric.trend === "up" ? "bg-green-100" : "bg-red-100";
        const darkTrendBg =
          metric.trend === "up" ? "bg-green-900/50" : "bg-red-900/50";

        return (
          <Card
            key={index}
            className={cn(
              "shadow-lg border-0 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
              isDarkMode ? "bg-slate-800/50" : "bg-white/70"
            )}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p
                    className={cn(
                      "text-sm font-medium",
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    )}
                  >
                    {metric.title}
                  </p>
                  <p
                    className={cn(
                      "text-2xl font-bold",
                      isDarkMode ? "text-white" : "text-slate-900"
                    )}
                  >
                    {metric.value}
                  </p>
                  <div
                    className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                      isDarkMode ? darkTrendBg : trendBg,
                      trendColor
                    )}
                  >
                    <TrendIcon className="w-3 h-3 mr-1" />
                    {metric.change}
                  </div>
                </div>
                <div
                  className={cn(
                    "p-3 rounded-full",
                    isDarkMode ? metric.darkBgColor : metric.bgColor
                  )}
                >
                  <Icon
                    className={cn(
                      "w-6 h-6",
                      isDarkMode ? "text-white" : metric.color
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MetricsCards;
