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
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-500">{title}</h3>
          <p className="text-2xl font-bold text-slate-900">{value}</p>
        </div>
        <div className={`p-2 rounded-xl ${iconBg}`}>
          <div className={`${iconColor}`}>{icon}</div>
        </div>
      </div>
      {change && changeText && (
        <p className={`mt-2 text-sm ${changeColor}`}>
          {change} <span className="text-slate-400">{changeText}</span>
        </p>
      )}
    </div>
  );
          }

