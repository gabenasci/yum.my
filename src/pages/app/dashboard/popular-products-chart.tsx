import { useQuery } from '@tanstack/react-query'
import { BarChart, Loader2 } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { getPopularProducts } from '../../../api/get-popular-products'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'

const mockData = [
  { product: 'Pepperoni Pizza', amount: 40 },
  { product: 'Mussarella Pizza', amount: 30 },
  { product: 'Margherita Pizza', amount: 50 },
  { product: 'Mushroom Pizza', amount: 16 },
  { product: 'Bacon Pizza', amount: 12 },
]

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

interface PieLabelProps {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  value: number
  index: number
}

export function PopularProductsChart() {
  // const { data: popularProducts } = useQuery({
  //   queryKey: ['metrics', 'popular-products'],
  //   queryFn: getPopularProducts,
  // })

  const pieLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index,
  }: PieLabelProps) => {
    const RADIAN = Math.PI / 180
    const isMobile = window.innerWidth < 640 // Assuming 640px as the breakpoint for mobile
    const radius = (isMobile ? 1 : 10) + innerRadius + (outerRadius - innerRadius)
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        className="fill-muted-foreground text-[10px] sm:text-xs"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {mockData &&
          (mockData[index].product.length > 16
            ? mockData[index].product.substring(0, 16).concat('...')
            : mockData[index].product)}{' '}
        ({value})
      </text>
    )
  }
  return (
    <Card className="col-span-3 h-full">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Popular Products
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        {mockData ? (
          <ResponsiveContainer width="100%" height={240}>
            <PieChart className="scale-[80%] sm:scale-100" style={{ width: '100%', fontSize: 12 }}>
              <Pie
                data={mockData}
                dataKey="amount"
                nameKey="product"
                cx="50%"
                cy="50%"
                outerRadius={86}
                innerRadius={64}
                strokeWidth={8}
                label={pieLabel}
                labelLine={false}
              >
                {mockData.map((_, index) => {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index]}
                      className="stroke-background hover:opacity-80"
                    />
                  )
                })}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
