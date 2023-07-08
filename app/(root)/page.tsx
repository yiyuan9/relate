import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
      <div className="text-md">Relate CMS</div>
    </>
  )
}
