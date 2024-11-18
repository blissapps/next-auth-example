import "./globals.css";
import { getServerSession } from "next-auth";
import { LoginButton } from "@/components/loginButton";
import { LogoutButton } from "@/components/logoutButton";
import SessionProvider from "@/components/sessionProvider";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className="min-h-screen bg-gray-50 text-gray-800">
          <header className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white shadow-md">
            <div className="text-xl font-bold tracking-wide">
              {`Welcome ${session?.user?.name ?? "To Project Example"}`}
            </div>

            <div>{session ? <LogoutButton /> : <LoginButton />}</div>
          </header>

          <main className="p-6">{children}</main>
        </body>
      </SessionProvider>
    </html>
  );
}
