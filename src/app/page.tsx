// import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import SignOutButton from "~/components/signOut";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession()
  !(session?.user) && redirect("/sign-in")

  // const session = useSession();
  // console.log(session);

  return (
    <div>
      
      <div className="flex justify-end px-20">
        <SignOutButton />
      </div>

      <div className="flex justify-center py-32">
      {
        session?.user &&  <User session={session?.user} />
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
