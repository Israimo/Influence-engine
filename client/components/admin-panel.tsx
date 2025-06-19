import React from "react";

interface ActivityFeedProps {
  activities: any[];
}

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <ul className="space-y-2">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <li key={index} className="text-sm text-slate-700">
              {activity.message || "New activity..."}
            </li>
          ))
        ) : (
          <li className="text-sm text-slate-400">No recent activity.</li>
        )}
      </ul>
    </div>
  );
}
