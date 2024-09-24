import { Helmet } from 'react-helmet-async'
import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <>
      <Helmet title="404">
        <div className="flex h-screen flex-col items-center justify-center gap-2">
          <h1 className="text-4xl font-bold">Whoops, something happened...</h1>
          <p className="text-accent-foreground">An error has occured:</p>
          <pre>{error?.message || JSON.stringify(error)}</pre>
          <p className="text-accent-foreground">
            Return to{' '}
            <Link to="/" className="text-sky-500 dark:text-sky-400">
              Dashboard
            </Link>
          </p>
        </div>
      </Helmet>
    </>
  )
}
