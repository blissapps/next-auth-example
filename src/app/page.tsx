import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
      <div>
        <h1 className="mb-6 text-2xl font-bold">Choose an Option</h1>
        <div className="space-y-4">
          <Link href="/restrict-sample/check-session-server-side" passHref>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition">
              go to route checked by server side
            </button>
          </Link>

          <Link href="/restrict-sample/check-session-client-side" passHref>
            <button className="px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition">
              go to route checked by client side
            </button>
          </Link>

          <Link href="/restrict-sample/check-session-middleware" passHref>
            <button className="px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition">
              go to route checked by middleware
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
