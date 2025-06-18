import React from "react";

export default function ActivityFeed({ activities }: { activities: any[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">Recent Activities</h3>
      <ul className="space-y-2 text-sm">
        {activities.length > 0 ? (
          activities.map((a, i) => (
            <li key={i} className="text-slate-600">
              {a.timestamp}: {a.message}
            </li>
          ))
        ) : (
          <li>No recent activity.</li>
        )}
      </ul>
    </div>
  );
}
