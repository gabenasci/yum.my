import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getDailyOrders } from '../../../api/get-daily-orders'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'
import { MetricCardSkeleton } from './metric-card-skeleton'

export function DailyOrdersCard() {
  const { data: dailyOrders } = useQuery({
    queryFn: getDailyOrders,
    queryKey: ['metrics', 'day-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Orders (day)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dailyOrders ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dailyOrders.amount.toLocaleString('en-US')}
            </span>
            <p className="text-xs text-muted-foreground">
              {dailyOrders.diffFromYesterday >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{dailyOrders.diffFromYesterday}%
                  </span>{' '}
                  compared to last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {dailyOrders.diffFromYesterday}%
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
