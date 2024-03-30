// import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import SignOutButton from "~/components/signOut";
import { ModeToggle } from "~/components/themeToggler";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession()
  !(session?.user) && redirect("/sign-in")

  // const session = useSession();
  // console.log(session);

  return (
    <div>
      
      <div className="gap-5 flex justify-end px-20">
        <ModeToggle />
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
    <div className="border-[1px] border-gray-300 rounded-lg py-6 px-12  dark:text-white flex flex-col items-center gap-1">
      <Image className="rounded-full" height={100} width={100} src={image ?? ""} alt={name ?? ""} />
      <p>{name}</p>
      <p>{email}</p>
    </div>
  )
}
