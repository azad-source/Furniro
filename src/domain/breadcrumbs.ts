import { RoutePath, RoutePathType, routeInfo } from "./routPaths";

interface ICrumb {
  link: string;
  caption: string;
  title: string;
}

export function getBreadCrumbs(pathname?: string): ICrumb[] {
  const crumbs: ICrumb[] = [{ link: "/", caption: "Home", title: "Home" }];

  if (!pathname) return [];

  pathname = pathname.replace(/\/{2,}/g, "/");
  const pageAliasList = pathname
    .split("/")
    .filter((i) => !RoutePath.baseUrl.includes(i));

  pageAliasList.forEach((i, index) => {
    const link = pageAliasList.slice(0, index).join("/");
    const info = routeInfo[i as RoutePathType];

    crumbs.push({ link, caption: info.crumbCaption, title: info.title });
  });

  return crumbs;
}
