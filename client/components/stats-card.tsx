import React from "react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
  changeText?: string;
  iconBg?: string;
  iconColor?: string;
  changeColor?: string;
}

export default function StatsCard({
  title,
  value,
  icon,
  change,
  changeText,
  iconBg = "bg-slate-100",
  iconColor = "text-slate-700",
  changeColor = "text-green-500",
}: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-500">{title}</span>
        <div className={cn("p-2 rounded-md", iconBg)}>
          <span className={iconColor}>{icon}</span>
        </div>
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      {change && (
        <div className="text-xs text-slate-500">
          <span className={changeColor}>{change}</span> {changeText}
        </div>
      )}
    </div>
  );
}
