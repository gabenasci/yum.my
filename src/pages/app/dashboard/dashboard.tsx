import { Helmet } from 'react-helmet-async'

import { DailyOrdersCard } from './daily-orders-card'
import { MonthlyCanceledOrdersCard } from './monthly-canceled-orders-card'
import { MonthlyOrdersCard } from './monthly-orders-card'
import { MonthlyRevenueCard } from './monthly-revenue-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MonthlyRevenueCard />
          <MonthlyOrdersCard />
          <DailyOrdersCard />
          <MonthlyCanceledOrdersCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-9 gap-4">
          <div className="lg:col-span-5">
            <RevenueChart />
          </div>
          <div className="lg:col-span-4">
            <PopularProductsChart />
          </div>
        </div>
      </div>
    </>
  )
}
