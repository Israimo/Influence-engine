import React, { useState } from "react";

export default function AdminPanel() {
  const [pin, setPin] = useState("");
  const [granted, setGranted] = useState(false);

  const handleSubmit = () => {
    if (pin === "1984") setGranted(true);
    else alert("Incorrect PIN");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">Admin Panel</h3>
      {granted ? (
        <div>Welcome, Admin! You have full access.</div>
      ) : (
        <div>
          <input
            type="password"
            placeholder="Enter PIN"
            className="border px-2 py-1 rounded"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="ml-2 bg-slate-800 text-white px-3 py-1 rounded"
          >
            Access
          </button>
        </div>
      )}
    </div>
  );
          }
