export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/restrict-sample/check-session-middleware"],
};
