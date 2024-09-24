import React from 'react'
import { mockOrders } from '../pages/app/orders/mockOrders'

export function OrdersList() {
  return (
    <div>
      <h2>Orders List</h2>
      <ul>
        {mockOrders.map((order) => (
          <li key={order.orderId}>
            <p>Order ID: {order.orderId}</p>
            <p>Customer Name: {order.customerName}</p>
            <p>Status: {order.status}</p>
            <p>Total: ${order.total}</p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.quantity} x ${item.price}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}