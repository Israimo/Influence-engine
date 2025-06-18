import React from "react";

export default function SocialConnector() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">Connect Social Accounts</h3>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Connect Instagram</button>
      <button className="bg-black text-white px-4 py-2 rounded-lg ml-2">Connect X</button>
      <button className="bg-pink-500 text-white px-4 py-2 rounded-lg ml-2">Connect TikTok</button>
    </div>
  );
}
