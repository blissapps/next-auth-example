import { LogoutButton } from "@/components/logoutButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
      <div>
        <p className="mb-4 text-xl font-semibold">
          session checked on server side you are authenticated
        </p>
        {session && <p className="mb-4">Welcome, {session?.user?.name}!</p>}
        <LogoutButton />
      </div>
    </div>
  );
}
