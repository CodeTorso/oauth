import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const data = JSON.stringify(await getServerAuthSession())
  return (
    <div>{data}</div>
  );
}
