
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  iconColor?: string;
  changeValue?: string | number;
  changeType?: "increase" | "decrease" | "neutral";
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  iconColor = "text-blue-500",
  changeValue,
  changeType,
}: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className={`h-4 w-4 ${iconColor}`} />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
        {changeValue && (
          <div className="flex items-center mt-1">
            <span
              className={`text-xs ${
                changeType === "increase"
                  ? "text-green-500"
                  : changeType === "decrease"
                  ? "text-red-500"
                  : ""
              }`}
            >
              {changeType === "increase" && "+"}
              {changeValue}
              {changeType === "increase" ? " ↑" : changeType === "decrease" ? " ↓" : ""}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
