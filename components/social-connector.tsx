import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Twitter, Youtube, Link } from "lucide-react";

const accounts = [
  {
    name: "Facebook",
    connected: true,
    icon: <Facebook className="w-4 h-4 text-blue-600" />,
  },
  {
    name: "Instagram",
    connected: true,
    icon: <Instagram className="w-4 h-4 text-pink-500" />,
  },
  {
    name: "X (Twitter)",
    connected: false,
    icon: <Twitter className="w-4 h-4 text-black" />,
  },
  {
    name: "TikTok",
    connected: false,
    icon: <Youtube className="w-4 h-4 text-gray-900" />,
  },
];

export default function SocialConnector() {
  return (
    <Card className="bg-white shadow-sm">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4">Connected Accounts</h2>
        <div className="grid grid-cols-2 gap-4">
          {accounts.map((acc, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="flex items-center space-x-2">
                {acc.icon}
                <span className="text-sm font-medium">{acc.name}</span>
              </div>
              {acc.connected ? (
                <span className="text-xs text-green-600 font-semibold">Connected</span>
              ) : (
                <Button variant="outline" className="text-xs px-2 py-1 h-auto">
                  Connect
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

