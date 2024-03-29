"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";


export default function HomePage() {
  const session = useSession();

  console.log(session);

  return (
    <div>
      
      <div className="flex justify-end px-20">
      { session.data?.user? <button onClick={()=> signOut()}>SignOut</button>:
      <button onClick={()=> signIn()}>SignIn</button>
      }</div>


      <div className="flex justify-center py-32">
      {
        session.data?.user?  <User session={session.data?.user} /> : "Please Sign In"
      }
      </div>

    </div>
  );
}

interface userProps {
  session: {
    id: string;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
}
}

function User({session}: userProps){
  const {name, email, image} = session; 
  return (
    <div className="rounded-lg py-6 px-12 bg-gray-500 text-white flex flex-col items-center gap-1">
      <Image className="rounded-md" height={100} width={100} src={image ?? ""} alt={name ?? ""} />
      <div>{name}</div>
      <div>{email}</div>
    </div>
  )
}
