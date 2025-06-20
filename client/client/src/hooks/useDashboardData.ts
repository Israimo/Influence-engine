// client/src/hooks/useDashboardData.ts
import { useQuery } from "@tanstack/react-query";

interface Stats {
  totalFollowers?: number;
  engagementRate?: string;
  scheduledPosts?: number;
}

interface DashboardData {
  socialAccounts: any[];
  settings: any;
  stats: Stats;
  activities: any[];
  scheduledPosts: number;
}

export function useDashboardData() {
  return useQuery<DashboardData>({
    queryKey: ["/api/dashboard"],
    queryFn: () =>
      fetch("/api/dashboard").then((res) => {
        if (!res.ok) throw new Error("Failed to fetch dashboard data");
        return res.json();
      }),
  });
}
