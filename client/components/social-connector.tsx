import React from "react";

export default function SocialConnector() {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">Connected Accounts</h3>
      <p className="text-sm text-slate-600">Log in with Instagram, X, TikTok, and Facebook.</p>
      {/* Placeholder buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        {["Instagram", "X", "TikTok", "Facebook"].map((platform) => (
          <button
            key={platform}
            className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
          >
            Connect {platform}
          </button>
        ))}
      </div>
    </div>
  );
}
