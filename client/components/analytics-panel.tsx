import React from "react";

export default function AnalyticsPanel({ stats, isStealthMode }: { stats: any, isStealthMode: boolean }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">Analytics</h3>
      <p className="text-sm">Detailed performance analytics are currently {isStealthMode ? "disabled" : "enabled"}.</p>
    </div>
  );
}
