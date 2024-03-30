import { redirect } from "next/navigation";
import SignInButtons from "~/components/signInButtons";
import { getServerAuthSession } from "~/server/auth";

export default async function Dashboard({searchParams,}: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
  const callbackError = searchParams.callbackUrl
  const session = await getServerAuthSession();
  session?.user && redirect("/") 

  return (
    <div className="w-full lg:grid  lg:grid-cols-2 h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Authenticate</h1>
            <p className="text-balance text-muted-foreground">
              {
                callbackError? `You do something wrong bro:   ${searchParams.error}`: `We don't supprt email authorisation, but don't worry my boy!`
              }
            </p>
          </div>
          <div className="grid gap-4">
            <SignInButtons provider="google" />
            <SignInButtons provider="github" />
            <SignInButtons provider="discord" />
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <div
          className="py-32 px-12 gap-4 flex flex-col justify-end items-end text-white h-full w-full bg-black object-cover dark:brightness-[0.2] dark:grayscale"
        >
            <h1 className="font-semibold text-4xl">We prioritise safety over everything</h1>
            <h1 className="text-xl italic">- Stockton Rush</h1>
        </div>
      </div>
    </div>
  )
}
