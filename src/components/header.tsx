import { Home, UtensilsCrossed } from 'lucide-react'

import YummyLogoDark from '../../public/YummyLogoDark.svg'
import YummyLogoLight from '../../public/YummyLogoLight.svg'
import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { useTheme } from './theme/theme-provider'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  const { resolvedTheme } = useTheme()
  return (
    <div className="border-b">
      <div className="flex z-1 h-16 items-center gap-6 px-6">
        <a href="/">
          <img
            src={resolvedTheme === 'light' ? YummyLogoLight : YummyLogoDark}
            alt=""
            className="h-8 w-8"
          />
        </a>
        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/" className="items-center gap-1.5 hidden sm:flex">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/orders" className="flex items-center gap-1.5">
            <UtensilsCrossed className="h-4 w-4" />
            <span>Orders</span>
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
