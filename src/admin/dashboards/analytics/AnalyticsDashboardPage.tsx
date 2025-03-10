import { type AuthUser } from 'wasp/auth';
import { useQuery, getDailyStats } from 'wasp/client/operations';
import TotalSignupsCard from './TotalSignupsCard';
import TotalPageViewsCard from './TotalPageViewsCard';
import TotalPayingUsersCard from './TotalPayingUsersCard';
import TotalRevenueCard from './TotalRevenueCard';
import RevenueAndProfitChart from './RevenueAndProfitChart';
import SourcesTable from './SourcesTable';
import DefaultLayout from '../../layout/DefaultLayout';
import { useRedirectHomeUnlessUserIsAdmin } from '../../useRedirectHomeUnlessUserIsAdmin'
import React from 'react';

const Dashboard = ({ user }: { user: AuthUser }) => {
  useRedirectHomeUnlessUserIsAdmin({ user })

  const { data: stats, isLoading } = useQuery(getDailyStats);

  return (
    <DefaultLayout user={user}>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
        <TotalPageViewsCard
          totalPageViews={stats?.dailyStats.totalViews}
          prevDayViewsChangePercent={stats?.dailyStats.prevDayViewsChangePercent}
        />
        <TotalRevenueCard dailyStats={stats?.dailyStats} weeklyStats={stats?.weeklyStats} isLoading={isLoading} />
        <TotalPayingUsersCard dailyStats={stats?.dailyStats} isLoading={isLoading} />
        <TotalSignupsCard dailyStats={stats?.dailyStats} isLoading={isLoading} />
      </div>

      <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'>
        <RevenueAndProfitChart weeklyStats={stats?.weeklyStats} isLoading={isLoading} />

        <div className='col-span-12 xl:col-span-8'>
          <SourcesTable sources={stats?.dailyStats?.sources} />
        </div>
      </div>
      <div className="force-tailwind hidden"></div>
    </DefaultLayout>
  );
};

export default Dashboard;
