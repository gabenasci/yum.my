export const mockOrders = [
  {
    orderId: '1',
    customerName: 'John Doe',
    status: 'delivered',
    items: [
      { name: 'Margherita Pizza', quantity: 1, price: 10 },
      { name: 'Pepperoni Pizza', quantity: 2, price: 15 },
    ],
    total: 40,
  },
  {
    orderId: '2',
    customerName: 'Jane Smith',
    status: 'pending',
    items: [
      { name: 'Veggie Pizza', quantity: 1, price: 12 },
      { name: 'BBQ Chicken Pizza', quantity: 1, price: 18 },
    ],
    total: 30,
  },
  {
    orderId: '3',
    customerName: 'Alice Johnson',
    status: 'processing',
    items: [
      { name: 'Hawaiian Pizza', quantity: 1, price: 14 },
      { name: 'Meat Lovers Pizza', quantity: 1, price: 20 },
    ],
    total: 34,
  },
  // Add more mock orders as needed
]

export const mockRevenue = [
  { date: '2023-01-01', revenue: 100 },
  { date: '2023-01-02', revenue: 150 },
  { date: '2023-01-03', revenue: 200 },
  // Add more mock revenue data as needed
]