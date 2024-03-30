"use client"

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"


function SignInButtons({provider} : {provider: string}) {
  return (
        <Button onClick={()=> signIn(provider)} variant="outline" className="w-full">
            Login with {provider}
        </Button>
  )
}

export default SignInButtons