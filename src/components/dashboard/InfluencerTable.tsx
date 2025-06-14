import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";

const InfluencerTable = () => {
  const { isDarkMode } = useTheme();

  const influencerData = [
    { name: "Rajesh Kumar", calls: 2, sheets: 229, performance: "Excellent" },
    { name: "Priya Sharma", calls: 4, sheets: 228, performance: "Good" },
    { name: "Mohammed Ali", calls: 3, sheets: 216, performance: "Average" },
    { name: "Anjali Menon", calls: 0, sheets: 186, performance: "Poor" },
    { name: "Suresh Nair", calls: 3, sheets: 170, performance: "Good" },
  ];

  const getPerformanceBadge = (performance: string) => {
    const variants = {
      Excellent: "bg-green-100 text-green-700 border-green-200",
      Good: "bg-blue-100 text-blue-700 border-blue-200",
      Average: "bg-yellow-100 text-yellow-700 border-yellow-200",
      Poor: "bg-red-100 text-red-700 border-red-200",
    };
    return variants[performance as keyof typeof variants] || variants.Average;
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card
      className={cn(
        "shadow-lg border-0 backdrop-blur-sm",
        isDarkMode ? "bg-slate-800/50" : "bg-white/70"
      )}
    >
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between">
          <CardTitle
            className={cn(
              "text-lg font-semibold",
              isDarkMode ? "text-white" : "text-slate-800"
            )}
          >
            Influencer Performance
          </CardTitle>
          <div className="flex items-center gap-2">
            <CalendarDays
              className={cn(
                "h-4 w-4",
                isDarkMode ? "text-slate-400" : "text-slate-500"
              )}
            />
            <span
              className={cn(
                "text-sm",
                isDarkMode ? "text-slate-300" : "text-slate-600"
              )}
            >
              {currentDate}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            "overflow-x-auto",
            influencerData.length > 4 ? "max-h-[280px] overflow-y-auto" : ""
          )}
        >
          <table className="w-full">
            <thead className="sticky top-0 z-10">
              <tr
                className={cn(
                  "border-b",
                  isDarkMode
                    ? "border-slate-700 bg-slate-800/50"
                    : "border-slate-200 bg-slate-50"
                )}
              >
                <th
                  className={cn(
                    "text-left py-4 px-4 font-semibold text-sm uppercase tracking-wider",
                    isDarkMode ? "text-slate-200" : "text-slate-700"
                  )}
                >
                  Influencer
                </th>
                <th
                  className={cn(
                    "text-center py-4 px-4 font-semibold text-sm uppercase tracking-wider",
                    isDarkMode ? "text-slate-200" : "text-slate-700"
                  )}
                >
                  Calls
                </th>
                <th
                  className={cn(
                    "text-center py-4 px-4 font-semibold text-sm uppercase tracking-wider",
                    isDarkMode ? "text-slate-200" : "text-slate-700"
                  )}
                >
                  Sheets
                </th>
                <th
                  className={cn(
                    "text-center py-4 px-4 font-semibold text-sm uppercase tracking-wider",
                    isDarkMode ? "text-slate-200" : "text-slate-700"
                  )}
                >
                  Performance
                </th>
              </tr>
            </thead>
            <tbody>
              {influencerData.map((influencer, index) => (
                <tr
                  key={index}
                  className={cn(
                    "border-b",
                    isDarkMode
                      ? "border-slate-700/50 hover:bg-slate-700/50"
                      : "border-slate-100 hover:bg-slate-50"
                  )}
                >
                  <td className="py-3 px-4">
                    <p
                      className={cn(
                        "font-medium",
                        isDarkMode ? "text-white" : "text-slate-800"
                      )}
                    >
                      {influencer.name}
                    </p>
                  </td>
                  <td
                    className={cn(
                      "py-3 px-4 text-center",
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    )}
                  >
                    {influencer.calls}
                  </td>
                  <td
                    className={cn(
                      "py-3 px-4 text-center",
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    )}
                  >
                    {influencer.sheets}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Badge
                      className={`${getPerformanceBadge(
                        influencer.performance
                      )} border`}
                    >
                      {influencer.performance}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className={cn(
            "mt-4 p-3 rounded-lg",
            isDarkMode ? "bg-blue-900/30" : "bg-blue-50"
          )}
        >
          <div className="flex justify-between items-center text-sm">
            <span
              className={cn(
                "font-medium",
                isDarkMode ? "text-blue-300" : "text-blue-800"
              )}
            >
              Total
            </span>
            <div
              className={cn(
                "flex gap-4",
                isDarkMode ? "text-blue-300" : "text-blue-700"
              )}
            >
              <span>Calls: 12</span>
              <span>Sheets: 1,029</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfluencerTable;
