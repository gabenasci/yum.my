import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthlyOrders } from '../../../api/get-monthly-orders'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'
import { MetricCardSkeleton } from './metric-card-skeleton'

export function MonthlyOrdersCard() {
  const { data: monthlyOrders } = useQuery({
    queryFn: getMonthlyOrders,
    queryKey: ['metrics', 'month-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Orders (month)
        </CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthlyOrders ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthlyOrders?.amount.toLocaleString('en-US')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthlyOrders?.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthlyOrders?.diffFromLastMonth}%
                  </span>{' '}
                  compared to last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthlyOrders?.diffFromLastMonth}%
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
