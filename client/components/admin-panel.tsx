import React, { useState } from "react";

export default function AdminPanel() {
  const [pin, setPin] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const checkPin = () => {
    if (pin === "2025") {
      setAccessGranted(true);
    } else {
      alert("Invalid admin pin");
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">Admin Panel</h3>
      {!accessGranted ? (
        <div className="space-y-2">
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Enter admin PIN"
          />
          <button
            onClick={checkPin}
            className="bg-slate-800 text-white px-4 py-2 rounded"
          >
            Unlock
          </button>
        </div>
      ) : (
        <div>
          <p className="text-success-600">Admin access granted!</p>
          <p className="text-sm text-slate-500 mt-2">You can now access advanced settings.</p>
        </div>
      )}
    </div>
  );
}
