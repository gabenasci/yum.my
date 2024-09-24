import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text when order status is pending', () => {
    /* Pending */
    const wrapper = render(<OrderStatus status="pending" />)

    // wrapper.debug()

    const statusText = wrapper.getByText('Pending')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should display the right text when order status is canceled', () => {
    /* Canceled */
    const wrapper = render(<OrderStatus status="canceled" />)

    // wrapper.debug()

    const statusText = wrapper.getByText('Canceled')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should display the right text when order status is processing', () => {
    /* processing */
    const wrapper = render(<OrderStatus status="processing" />)

    // wrapper.debug()

    const statusText = wrapper.getByText('Processing')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status is delivering', () => {
    /* delivering */
    const wrapper = render(<OrderStatus status="delivering" />)

    // wrapper.debug()

    const statusText = wrapper.getByText('Delivering')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status is delivered', () => {
    /* delivered */
    const wrapper = render(<OrderStatus status="delivered" />)

    // wrapper.debug()

    const statusText = wrapper.getByText('Delivered')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
