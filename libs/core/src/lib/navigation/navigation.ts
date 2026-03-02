import type { Route } from '@angular/router';
import type { ServerRouteCommon } from '@angular/ssr';

export const PATHS = {
  current: '',
  any: '**',
  notFound: '/404',

  home: '/',
  about: '/about',
  project: '/project',
  novels: '/novels',
} as const;

export type PathValues = (typeof PATHS)[keyof typeof PATHS];

type Filter<T extends string> = T extends `:${infer Param}` ? Param : never;

type Split<Value extends string> = Value extends `${infer LValue}/${infer RValue}`
  ? Filter<LValue> | Split<RValue>
  : Filter<Value>;

export type GetPathParams<T extends string> = {
  [key in Split<T>]: string | number;
};

export interface NavigationLink {
  readonly [key: string]: unknown;

  readonly label: string;
  readonly route: PathValues;
  readonly fragment?: string;
  readonly routerLinkActiveOptions?: boolean;
}

export interface NavigationRoute extends Route {
  readonly path: PathValues;
}

export interface NavigationServerRoute extends ServerRouteCommon {
  readonly path: PathValues;
}

export function getRoute<T extends string>(path: T, params: Record<string, string | number> = {}): (string | number)[] {
  const segments = path.split('/').filter((value) => value.length);
  const routeWithParams: (string | number)[] = ['/'];

  for (const segment of segments) {
    if (segment.charAt(0) === ':') {
      const paramName = segment.slice(1);
      const prop = params[paramName];
      if (prop) {
        routeWithParams.push(params[paramName]);
      } else {
        routeWithParams.push(paramName);
      }
    } else {
      routeWithParams.push(segment);
    }
  }

  return routeWithParams;
}

export function toPath(path: PathValues, params?: GetPathParams<PathValues>): string {
  const route = getRoute(path, params);

  return route.length > 1 ? `/${route.slice(1).join('/')}` : `${route[0]}`;
}

export function withNavigationRoutes<T extends NavigationRoute | NavigationServerRoute>(
  routes: T[],
  parent?: string,
): T[] {
  if (!parent) {
    parent = PATHS.current;
  }

  return routes.map((route) => {
    if (!route.path || route.path === PATHS.any) {
      return route;
    }

    return {
      ...route,
      path: route.path.substring(parent.length + 1),
    };
  });
}
