import { Outlet } from 'react-router-dom'

import YummyLogoDark from '../../../public/YummyLogoDark.svg'
import YummyLogoLight from '../../../public/YummyLogoLight.svg'
import { useTheme } from '../../components/theme/theme-provider'

export function AuthLayout() {
  const { resolvedTheme } = useTheme()

  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <img
            src={resolvedTheme === 'light' ? YummyLogoLight : YummyLogoDark}
            alt=""
            className="h-8 w-8"
          />{' '}
          <span className="font-semibold">yum.my</span>
        </div>
        <footer className="text-sm">
          Partner Dashboard &copy; yum.my - {new Date().getFullYear()}{' '}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
