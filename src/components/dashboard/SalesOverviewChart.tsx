import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const SalesOverviewChart = () => {
  const { isDarkMode } = useTheme();

  const data = [
    { month: "Jan", primary: 245, secondary: 198 },
    { month: "Feb", primary: 312, secondary: 267 },
    { month: "Mar", primary: 289, secondary: 245 },
    { month: "Apr", primary: 378, secondary: 298 },
    { month: "May", primary: 425, secondary: 356 },
    { month: "Jun", primary: 392, secondary: 334 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-lg">
          <p className="font-semibold text-slate-800">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value} trucks`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={isDarkMode ? "#475569" : "#e2e8f0"}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#64748b" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#64748b" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="primary"
            fill="#3b82f6"
            name="Primary Sales"
            radius={[4, 4, 0, 0]}
            fillOpacity={0.8}
          />
          <Bar
            dataKey="secondary"
            fill="#f97316"
            name="Secondary Sales"
            radius={[4, 4, 0, 0]}
            fillOpacity={0.8}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesOverviewChart;
