import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '../../api/sign-in'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()

  const { register, handleSubmit, formState } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })
  const { isSubmitting } = formState

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email })

      toast.success(
        'An authentication link has been sent to your email address.',
        {
          action: {
            label: 'Resend',
            onClick: () => handleSignIn(data),
          },
        },
      )
    } catch {
      toast.error('Invalid credentials.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="w-full max-w-[350px] p-4 sm:p-8">
        <div className="flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Access dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Track your sales through the partner dashboard!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Your email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Access dashboard
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
