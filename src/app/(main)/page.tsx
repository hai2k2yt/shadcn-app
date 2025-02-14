import DashboardCard from "@/components/dashboards/DashboardCard";
import {Folder, MessageCircle, Newspaper, User} from "lucide-react";
import React from "react";
import PostsTable from "@/components/posts/PostsTable";
import AnalyticsChart from "@/components/dashboards/AnalyticsChart";

export default function Home() {
  return (
    <>
      <div className={'flex flex-col md:flex-row justify-between gap-5 mb-5'}>
        <DashboardCard
          title={'Posts'}
          count={10}
          icon={<Newspaper className={'text-slate-500'} size={72}/>}
        />
        <DashboardCard
          title={'Categories'}
          count={10}
          icon={<Folder className={'text-slate-500'} size={72}/>}
        />
        <DashboardCard
          title={'Users'}
          count={10}
          icon={<User className={'text-slate-500'} size={72}/>}
        />
        <DashboardCard
          title={'Comments'}
          count={10}
          icon={<MessageCircle className={'text-slate-500'} size={72}/>}
        />
      </div>
      <AnalyticsChart/>
      <PostsTable/>
    </>
  );
}
