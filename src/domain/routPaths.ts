export class RoutePath {
  public static readonly baseUrl = "/furniro/";

  public static readonly pages = {
    shop: "shop",
    productComparison: "product-comparison",
    about: "about",
    contact: "contact",
    paymentOptions: "payment-options",
    returns: "returns",
    privacyPolicies: "privacy-policies",
  };

  public static readonly product = "shop/:productId";

  public static readonly getProductDetailsPath = (id: string) => {
    return `${this.baseUrl}${this.pages.shop}/${id}`;
  };
}

export type RoutePathType = keyof typeof RoutePath.pages;

export const routeInfo: Record<
  RoutePathType,
  { title: string; crumbCaption: string }
> = {
  shop: { title: "Shop", crumbCaption: "Shop" },
  productComparison: {
    title: "Product Comparison",
    crumbCaption: "Comparison",
  },
  about: { title: "About Us", crumbCaption: "About" },
  contact: { title: "Contact", crumbCaption: "Contact" },
  paymentOptions: { title: "Payment options", crumbCaption: "Payment options" },
  returns: { title: "Returns", crumbCaption: "Returns" },
  privacyPolicies: { title: "Privacy Policies", crumbCaption: "Privacy" },
};
