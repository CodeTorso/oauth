"use client"

import { signOut } from 'next-auth/react';

function SignOutButton() {
  return (
    <button onClick={()=> signOut()}>Sign Out</button>
  )
}

export default SignOutButton;