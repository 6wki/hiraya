// import { getToken } from "next-auth/jwt";
// import {
//   type NextFetchEvent,
//   type NextRequest,
//   NextResponse,
// } from "next/server";

// export async function middleware(request: NextRequest, _next: NextFetchEvent) {
//   const { pathname } = request.nextUrl;
//   const protectedPaths = ["/admin"];
//   const matchesProtectedPath = protectedPaths.some((path) =>
//     pathname.startsWith(path)
//   );
//   if (matchesProtectedPath) {
//     const token = await getToken({ req: request });

//     if (!token) {
//       const url = new URL("/", request.url);
//       url.searchParams.set("callbackUrl", encodeURI(request.url));
//       return NextResponse.redirect(url);
//     }
//   }
//   return NextResponse.next();
// }

import { stackMiddlewares } from "./middleware/stackMiddlewares";
import { protectingRoutes } from "./middleware/protectingRoutes";

export default stackMiddlewares([protectingRoutes]);
