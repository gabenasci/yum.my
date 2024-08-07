import { useQuery } from '@tanstack/react-query'
import { PackageX } from 'lucide-react'

import { getMonthlyCanceledOrders } from '../../../api/get-monthly-canceled-orders'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'

export function MonthyCanceledOrdersCard() {
  const { data: monthlyCanceledOrders } = useQuery({
    queryFn: getMonthlyCanceledOrders,
    queryKey: ['metrics', 'month-canceled-orders-amount'],
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Canceled orders (month)
        </CardTitle>
        <PackageX className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthlyCanceledOrders && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthlyCanceledOrders.amount.toLocaleString('en-US')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthlyCanceledOrders?.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthlyCanceledOrders?.diffFromLastMonth}%
                  </span>{' '}
                  compared to last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{monthlyCanceledOrders?.diffFromLastMonth}%
                  </span>{' '}
                  compared to last month
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
