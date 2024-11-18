"use client";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      onClick={() =>
        signIn("google", {
          callbackUrl: "/restrict-sample/check-session-client-side",
        })
      }
      className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600 transition"
    >
      Login
    </button>
  );
};
