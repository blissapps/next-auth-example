"use client";

import { useSession } from "next-auth/react";
import { LogoutButton } from "@/components/logoutButton";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";

export default function Page() {
  const { data: session, status } = useSession();
  const isAuth = status === "authenticated";

  if (!isAuth) {
    redirect("/");
  }

  useEffect(() => {
    if (status === "authenticated" && session?.user?.accessToken) {
      axios
        .get(`${process.env.NEXT_PUBLIC_EXTERNAL_API}/protected`, {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [status, session]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
      <div>
        <p className="mb-4 text-xl font-semibold">
          session checked on client side you are authenticated
        </p>
        {isAuth && <p className="mb-4">Welcome, {session?.user?.name}!</p>}
        <LogoutButton />
      </div>
    </div>
  );
}
