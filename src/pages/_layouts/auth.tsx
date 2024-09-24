import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import YummyLogoDark from '../../../public/YummyLogoDark.svg'
import YummyLogoLight from '../../../public/YummyLogoLight.svg'
import { useTheme } from '../../components/theme/theme-provider'
import BackgroundImage from '../../../public/pizza-background.jpg'

export function AuthLayout() {
  const { resolvedTheme } = useTheme()

  return (
    <>
      <header className="bg-white border-b p-4 shadow w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-lg font-medium text-foreground">
            <img
              src={resolvedTheme === 'light' ? YummyLogoLight : YummyLogoDark}
              alt=""
              className="h-8 w-8"
            />{' '}
            <span className="font-bold">yum.my</span>
          </div>
          <div className="text-sm">
            <Button variant="ghost" asChild>
              <Link to="/sign-up">New establishment</Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="grid min-h-[calc(100vh-72px)] grid-cols-1 md:grid-cols-2 antialiased">
        <div
          className="hidden md:flex z-10 h-full flex-col justify-center bg-muted p-10 text-muted-foreground"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
          }}
        >
        </div>

        <div className="relative flex flex-col items-center justify-center bg-background">
          <Outlet />
          <div className="absolute bottom-4 right-4 text-sm">
            Partner Dashboard &copy; yum.my - {new Date().getFullYear()}{' '}
          </div>
        </div>
      </div>
    </>
  )
}
