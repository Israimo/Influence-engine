import React from "react";

interface Props {
  settings: any;
}

export default function StealthMode({ settings }: Props) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">Stealth Mode</h3>
      <p className="text-sm text-slate-600">
        {settings?.stealthMode
          ? "Stealth mode is active. Console outputs are hidden."
          : "Stealth mode is disabled."}
      </p>
    </div>
  );
}
