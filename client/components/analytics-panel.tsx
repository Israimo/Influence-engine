import React from "react";

interface AnalyticsPanelProps {
  stats: any;
  isStealthMode: boolean;
}

export default function AnalyticsPanel({ stats, isStealthMode }: AnalyticsPanelProps) {
  if (isStealthMode) return null;

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-4">Analytics Summary</h3>
      <p className="text-sm text-slate-600 mb-2">Follower growth: {stats?.totalFollowers || 0}</p>
      <p className="text-sm text-slate-600 mb-2">Engagement rate: {stats?.engagementRate || "0%"}</p>
      <p className="text-sm text-slate-600">Scheduled posts: {stats?.scheduledPosts || 0}</p>
    </div>
  );
}
