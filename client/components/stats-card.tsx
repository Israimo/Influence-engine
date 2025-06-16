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
  changeColor = "text-gray-500"
}: StatsCardProps) {
  return (
    <div className="p-6 rounded-xl shadow bg-white space-y-2 border border-slate-200">
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-full ${iconBg}`}>
          <div className={`${iconColor}`}>{icon}</div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-slate-500">{title}</h4>
          <p className="text-xl font-semibold text-slate-900">{value}</p>
        </div>
      </div>
      {changeText && (
        <p className={`text-sm ${changeColor}`}>
          {change && <span className="font-medium">{change}</span>} {changeText}
        </p>
      )}
    </div>
  );
}
