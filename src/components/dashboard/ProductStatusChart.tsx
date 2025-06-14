import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { Progress } from "@/components/ui/progress";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const ProductStatusChart = () => {
  const { isDarkMode } = useTheme();

  const productData = [
    {
      name: "Ashok Leyland",
      trucks: 22.15,
      percentage: 29.73,
      color: "#10b981",
    },
    { name: "Eicher Pro", trucks: 18.18, percentage: 24.53, color: "#3b82f6" },
    {
      name: "Mahindra Bolero",
      trucks: 9.06,
      percentage: 11.95,
      color: "#f59e0b",
    },
    { name: "Tata Motors", trucks: 7.13, percentage: 9.27, color: "#ef4444" },
    { name: "Force Motors", trucks: 5.15, percentage: 6.98, color: "#8b5cf6" },
  ];

  const totalTrucks = productData.reduce((sum, item) => sum + item.trucks, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            Product Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={productData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="trucks"
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                  labelLine={false}
                >
                  {productData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value} trucks`, name]}
                  contentStyle={{
                    backgroundColor: isDarkMode ? "#1e293b" : "#fff",
                    border: isDarkMode
                      ? "1px solid #334155"
                      : "1px solid #e2e8f0",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    color: isDarkMode ? "#e2e8f0" : "#1e293b",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
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
            Product Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {productData.map((product, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: product.color }}
                    ></div>
                    <span
                      className={cn(
                        "text-sm font-medium",
                        isDarkMode ? "text-slate-300" : "text-slate-700"
                      )}
                    >
                      {product.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <p
                      className={cn(
                        "text-sm font-semibold",
                        isDarkMode ? "text-white" : "text-slate-800"
                      )}
                    >
                      {product.trucks} trucks
                    </p>
                    <p
                      className={cn(
                        "text-xs",
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                      )}
                    >
                      {product.percentage}%
                    </p>
                  </div>
                </div>
                <Progress
                  value={product.percentage}
                  className={cn("h-2", isDarkMode && "bg-slate-700")}
                />
              </div>
            ))}
            <div
              className={cn(
                "pt-3 border-t",
                isDarkMode ? "border-slate-700" : "border-slate-200"
              )}
            >
              <div className="flex justify-between items-center">
                <span
                  className={cn(
                    "font-semibold",
                    isDarkMode ? "text-white" : "text-slate-800"
                  )}
                >
                  Total
                </span>
                <span
                  className={cn(
                    "font-bold",
                    isDarkMode ? "text-white" : "text-slate-800"
                  )}
                >
                  {totalTrucks.toFixed(2)} trucks
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductStatusChart;
