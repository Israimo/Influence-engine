import React from "react";

export default function StealthMode({ settings }: { settings: any }) {
  return (
    <div className="bg-slate-800 text-white p-6 rounded-xl">
      <h3 className="text-lg font-semibold">Stealth Mode</h3>
      <p className="text-sm text-slate-300">
        {settings?.stealthMode ? "Active" : "Inactive"}
      </p>
    </div>
  );
}
