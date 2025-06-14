import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Phone } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const DealerCollectionTable = () => {
  const { isDarkMode } = useTheme();

  const dealerData = [
    {
      name: "Kerala Auto Dealers",
      location: "Kochi",
      amount: "₹5,00,000",
      status: "Collected",
      contact: "+91 98765 43210",
    },
    {
      name: "Tamil Nadu Motors",
      location: "Chennai",
      amount: "₹1,24,377",
      status: "Pending",
      contact: "+91 98765 43211",
    },
    {
      name: "Bangalore Trucks",
      location: "Bangalore",
      amount: "₹2,45,000",
      status: "Overdue",
      contact: "+91 98765 43212",
    },
    {
      name: "Hyderabad Motors",
      location: "Hyderabad",
      amount: "₹1,89,500",
      status: "Collected",
      contact: "+91 98765 43213",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      Collected: "bg-green-100 text-green-700 border-green-200",
      Pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
      Overdue: "bg-red-100 text-red-700 border-red-200",
    };
    return variants[status as keyof typeof variants] || variants.Pending;
  };

  return (
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
          Dealer Collections
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <div
            className={cn(
              "overflow-x-auto",
              dealerData.length > 4 ? "max-h-[280px] overflow-y-auto" : ""
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
                    Dealer
                  </th>
                  <th
                    className={cn(
                      "text-left py-4 px-4 font-semibold text-sm uppercase tracking-wider",
                      isDarkMode ? "text-slate-200" : "text-slate-700"
                    )}
                  >
                    Location
                  </th>
                  <th
                    className={cn(
                      "text-right py-4 px-4 font-semibold text-sm uppercase tracking-wider",
                      isDarkMode ? "text-slate-200" : "text-slate-700"
                    )}
                  >
                    Amount
                  </th>
                  <th
                    className={cn(
                      "text-center py-4 px-4 font-semibold text-sm uppercase tracking-wider",
                      isDarkMode ? "text-slate-200" : "text-slate-700"
                    )}
                  >
                    Status
                  </th>
                  <th
                    className={cn(
                      "text-center py-4 px-4 font-semibold text-sm uppercase tracking-wider",
                      isDarkMode ? "text-slate-200" : "text-slate-700"
                    )}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {dealerData.map((dealer, index) => (
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
                      <div>
                        <p
                          className={cn(
                            "font-medium",
                            isDarkMode ? "text-white" : "text-slate-800"
                          )}
                        >
                          {dealer.name}
                        </p>
                        <p
                          className={cn(
                            "text-sm",
                            isDarkMode ? "text-slate-400" : "text-slate-500"
                          )}
                        >
                          {dealer.contact}
                        </p>
                      </div>
                    </td>
                    <td
                      className={cn(
                        "py-3 px-4",
                        isDarkMode ? "text-slate-300" : "text-slate-600"
                      )}
                    >
                      {dealer.location}
                    </td>
                    <td
                      className={cn(
                        "py-3 px-4 text-right font-semibold",
                        isDarkMode ? "text-white" : "text-slate-800"
                      )}
                    >
                      {dealer.amount}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Badge
                        className={`${getStatusBadge(dealer.status)} border`}
                      >
                        {dealer.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className={cn(
                            isDarkMode &&
                              "border-slate-700 text-slate-300 hover:bg-slate-700/50"
                          )}
                        >
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className={cn(
                            isDarkMode &&
                              "border-slate-700 text-slate-300 hover:bg-slate-700/50"
                          )}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div
          className={cn(
            "md:hidden",
            dealerData.length > 3
              ? "max-h-[600px] overflow-y-auto pr-2"
              : "space-y-4"
          )}
        >
          {dealerData.map((dealer, index) => (
            <div
              key={index}
              className={cn(
                "p-4 rounded-lg mb-4",
                isDarkMode
                  ? "bg-slate-800/50 border border-slate-700"
                  : "bg-white border border-slate-200"
              )}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3
                    className={cn(
                      "font-medium",
                      isDarkMode ? "text-white" : "text-slate-800"
                    )}
                  >
                    {dealer.name}
                  </h3>
                  <p
                    className={cn(
                      "text-sm",
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    )}
                  >
                    {dealer.location}
                  </p>
                </div>
                <Badge className={`${getStatusBadge(dealer.status)} border`}>
                  {dealer.status}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p
                    className={cn(
                      "text-sm",
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    )}
                  >
                    Contact
                  </p>
                  <p
                    className={cn(
                      "font-medium",
                      isDarkMode ? "text-white" : "text-slate-800"
                    )}
                  >
                    {dealer.contact}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={cn(
                      "text-sm",
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    )}
                  >
                    Amount
                  </p>
                  <p
                    className={cn(
                      "font-semibold",
                      isDarkMode ? "text-white" : "text-slate-800"
                    )}
                  >
                    {dealer.amount}
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-3 pt-3 border-t border-slate-200">
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    isDarkMode &&
                      "border-slate-700 text-slate-300 hover:bg-slate-700/50"
                  )}
                >
                  <Phone className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    isDarkMode &&
                      "border-slate-700 text-slate-300 hover:bg-slate-700/50"
                  )}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "mt-4 p-4 rounded-lg",
            isDarkMode
              ? "bg-gradient-to-r from-blue-900/30 to-indigo-900/30"
              : "bg-gradient-to-r from-blue-50 to-indigo-50"
          )}
        >
          <div className="flex justify-between items-center">
            <span
              className={cn(
                "font-semibold",
                isDarkMode ? "text-white" : "text-slate-800"
              )}
            >
              Total Collections
            </span>
            <span
              className={cn(
                "text-xl font-bold",
                isDarkMode ? "text-blue-300" : "text-blue-600"
              )}
            >
              ₹10,58,877
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DealerCollectionTable;
