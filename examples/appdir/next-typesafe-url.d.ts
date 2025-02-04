
// This file is generated by next-typesafe-url
// Do not edit this file directly.

// @generated
// prettier-ignore
/* eslint-disable */

import { type RouteType as Route_0 } from "./src/app/(test)/foo/[id]/nest/routeType"
import { type RouteType as Route_1 } from "./src/app/(test)/foo/[id]/routeType"
import { type RouteType as Route_2 } from "./src/app/client/[...client]/routeType"
import { type RouteType as Route_3 } from "./src/app/[slug]/[...foo]/routeType"
import { type RouteType as Route_4 } from "./src/pages/dynamic"
import type { InferRoute, StaticRoute } from "next-typesafe-url";

declare module "@@@next-typesafe-url" {
  interface DynamicRouter {
    "/foo/[id]/nest": InferRoute<Route_0>;
    "/foo/[id]": InferRoute<Route_1>;
    "/client/[...client]": InferRoute<Route_2>;
    "/[slug]/[...foo]": InferRoute<Route_3>;
    "/dynamic": InferRoute<Route_4>;
  }

  interface StaticRouter {
    "/": StaticRoute;
    "/static": StaticRoute;
  }
}
