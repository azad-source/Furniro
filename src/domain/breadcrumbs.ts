import { RoutePath, RoutePathType, routeInfo } from "./routPaths";

interface ICrumb {
  link: string;
  caption: string;
  title: string;
}

export function getBreadCrumbs(pathname?: string): ICrumb[] {
  const crumbs: ICrumb[] = [
    { link: RoutePath.baseUrl, caption: "Home", title: "Home" },
  ];

  if (!pathname) return [];

  pathname = pathname.replace(/\/{2,}/g, "/");

  const pageAliasList = pathname.split("/");

  pageAliasList.forEach((i, index) => {
    const link = pageAliasList.slice(0, index + 1).join("/");

    const info = routeInfo[i as RoutePathType];

    if (info) {
      crumbs.push({ link, caption: info.crumbCaption, title: info.title });
    }
  });

  return crumbs;
}
