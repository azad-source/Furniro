export class RoutePath {
  public static readonly baseUrl = "/furniro/";

  public static readonly pages = {
    shop: this.baseUrl + "shop",
    productComparison: this.baseUrl + "product-comparison",
    about: this.baseUrl + "about",
    contact: this.baseUrl + "contact",
    paymentOptions: this.baseUrl + "payment-options",
    returns: this.baseUrl + "returns",
    privacyPolicies: this.baseUrl + "privacy-policies",
    cart: this.baseUrl + "cart",
    checkout: this.baseUrl + "checkout",
  };

  public static readonly product = this.baseUrl + "shop/:productId";

  public static readonly getProductDetailsPath = (id: string) => {
    return `${this.pages.shop}/${id}`;
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
  cart: { title: "Cart", crumbCaption: "Cart" },
  checkout: { title: "Checkout", crumbCaption: "Checkout" },
};
