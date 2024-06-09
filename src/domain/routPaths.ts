export class RoutePath {
  public static readonly baseUrl = "/furniro/";
  public static readonly shop = "shop";
  public static readonly about = "about";
  public static readonly contact = "contact";
  public static readonly paymentOptions = "payment-options";
  public static readonly returns = "returns";
  public static readonly privacyPolicies = "privacy-policies";
  public static readonly products = "products";

  public static readonly getProductDetailsPath = (id: string) => {
    return `${this.products}/${id}`;
  };
}
