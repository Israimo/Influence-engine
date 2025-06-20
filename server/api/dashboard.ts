// server/api/dashboard.ts

export async function GET() {
  return new Response(
    JSON.stringify({
      stats: {
        totalFollowers: 12840,
        engagementRate: "5.1%",
        scheduledPosts: 18,
      },
      settings: {
        stealthMode: false,
      },
      socialAccounts: [
        { platform: "Instagram", username: "@yourhandle" },
        { platform: "TikTok", username: "@yourhandle" },
        { platform: "X", username: "@yourhandle" },
      ],
      activities: [
        { id: 1, action: "Posted a reel on Instagram", time: "2025-06-15T12:00:00Z" },
        { id: 2, action: "Scheduled a TikTok post", time: "2025-06-14T09:30:00Z" },
        { id: 3, action: "Gained 100 new followers on X", time: "2025-06-13T18:15:00Z" },
      ],
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
          }

