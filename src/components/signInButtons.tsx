"use client"

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"


function SignInButtons({provider} : {provider: string}) {
  return (
        <Button onClick={()=> signIn(provider)} variant="outline" className="w-full dark:bg-transparent dark:border-gray-800">
            Login with {provider}
        </Button>
  )
}

export default SignInButtons