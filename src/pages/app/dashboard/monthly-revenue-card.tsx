import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthlyRevenue } from '../../../api/get-monthly-revenue'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'
import { MetricCardSkeleton } from './metric-card-skeleton'

export function MonthlyRevenueCard() {
  const { data: monthlyRevenue } = useQuery({
    queryFn: getMonthlyRevenue,
    queryKey: ['metrics', 'month-revenue'],
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Total Revenue (month)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthlyRevenue ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthlyRevenue.receipt / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthlyRevenue?.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthlyRevenue?.diffFromLastMonth}%
                  </span>{' '}
                  compared to last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthlyRevenue?.diffFromLastMonth}%
                  </span>{' '}
                  compared to last month
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
