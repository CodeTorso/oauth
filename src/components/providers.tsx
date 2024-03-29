"use client"

import { SessionProvider } from "next-auth/react";

function Providers({children}: {children: any}) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default Providers