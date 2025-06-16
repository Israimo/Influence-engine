import React from "react";
import { useQuery } from "@tanstack/react-query";
import StatsCard from "@/components/stats-card";
import SocialConnector from "@/components/social-connector";
import PostComposer from "@/components/post-composer";
import StealthMode from "@/components/stealth-mode";
import AdminPanel from "@/components/admin-panel";
import ActivityFeed from "@/components/activity-feed";
import AnalyticsPanel from "@/components/analytics-panel";
import { Rocket, Users, Heart, Calendar } from "lucide-react";

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

export default function Dashboard() {
  const { data: dashboardData, isLoading } = useQuery<DashboardData>({
    queryKey: ["/api/dashboard"],
    queryFn: () => fetch("/api/dashboard").then(res => res.json()),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  const stats = dashboardData?.stats || {};
  const settings = dashboardData?.settings;
  const activities = dashboardData?.activities || [];
  const isStealthMode = settings?.stealthMode || false;

  React.useEffect(() => {
    if (isStealthMode) {
      const originalConsole = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        info: console.info
      };

      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
      console.info = () => {};

      return () => {
        Object.assign(console, originalConsole);
      };
    }
  }, [isStealthMode]);

  return (
    <div className={`bg-slate-50 font-sans text-slate-900 min-h-screen ${isStealthMode ? 'stealth-mode' : ''}`}>
      {/* Header */}
      <header className="gradient-header text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-500 p-2 rounded-lg">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Influence Engine</h1>
                <p className="text-slate-300 text-sm">Social Media Management Suite</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-slate-700/50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse-subtle"></div>
                <span className="text-sm">Live</span>
              </div>
              <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors">
                <Users className="h-4 w-4 mr-2 inline" />
                Profile
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Overview */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Dashboard Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Total Followers"
              value={stats.totalFollowers?.toLocaleString() || "12,450"}
              icon={<Users className="h-5 w-5" />}
              change="+3.7%"
              changeText="from last week"
              iconBg="bg-primary-50"
              iconColor="text-primary-500"
              changeColor="text-success-500"
            />
            <StatsCard
              title="Engagement Rate"
              value={stats.engagementRate || "4.3%"}
              icon={<Heart className="h-5 w-5" />}
              change="+0.8%"
              changeText="from last month"
              iconBg="bg-success-50"
              iconColor="text-success-500"
              changeColor="text-success-500"
            />
            <StatsCard
              title="Posts Scheduled"
              value={stats.scheduledPosts?.toString() || "24"}
              icon={<Calendar className="h-5 w-5" />}
              changeText="Next post in 2 hours"
              iconBg="bg-warning-50"
              iconColor="text-warning-500"
            />
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <SocialConnector />
            <PostComposer />
            <ActivityFeed activities={activities} />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <StealthMode settings={settings} />
            {!isStealthMode && <AnalyticsPanel stats={stats} isStealthMode={isStealthMode} />}
            {!isStealthMode && <AdminPanel />}
          </div>
        </div>
      </main>
    </div>
  );
    }
