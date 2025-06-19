import React from "react";
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
  iconBg = "bg-gray-100",
  iconColor = "text-gray-700",
  changeColor = "text-gray-500",
}: StatsCardProps) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-lg ${iconBg}`}>
          <div className={`${iconColor}`}>{icon}</div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <p className="text-2xl font-bold text-slate-900">{value}</p>
          {change && (
            <p className={`text-sm ${changeColor}`}>{change} {changeText}</p>
          )}
        </div>
      </div>
    </div>
  );
}
