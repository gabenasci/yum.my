import React from 'react'
import { OrdersList } from '../../components/orders-list'
import { RevenueChart } from '../../components/revenue-chart'

export function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <RevenueChart />
      <OrdersList />
    </div>
  )
}