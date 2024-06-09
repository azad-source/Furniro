import { IProduct } from "models/product.models";
import Product1 from "assets/images/products/1.png";
import Product2 from "assets/images/products/2.png";
import Product3 from "assets/images/products/3.png";
import Product4 from "assets/images/products/4.png";
import Product5 from "assets/images/products/5.png";
import Product6 from "assets/images/products/6.png";
import Product7 from "assets/images/products/7.png";
import Product8 from "assets/images/products/8.png";

export default class ProductMock {
  base(): IProduct {
    return {
      id: "e5fce157-1791-4fba-803c-119176f00377",
      name: "Syltherine",
      shortDescription: "Stylish cafe chair",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur aliquam magni laborum facilis commodi alias suscipit iusto, deserunt ad nisi, explicabo sunt, fugiat corporis totam rerum. Quasi, accusantium. At, fugit.",
      price: 2500,
      inStock: true,
    };
  }

  product1(): IProduct {
    return {
      ...this.base(),
      id: "594c79f5-2582-4275-9b0f-eeb9b06aebd0",
      oldPrice: 3500,
      imgPreview: Product1,
    };
  }

  product2(): IProduct {
    return {
      ...this.base(),
      id: "98a6e261-03d3-42e3-bd12-09535f2d9d5e",
      name: "Leviosa",
      shortDescription: "Stylish cafe chair",
      price: 2500,
      imgPreview: Product2,
    };
  }

  product3(): IProduct {
    return {
      ...this.base(),
      id: "53b97d05-916a-40b3-811b-308d2313670c",
      name: "Lolito",
      shortDescription: "Luxury big sofa",
      price: 7000,
      oldPrice: 14000,
      imgPreview: Product3,
    };
  }

  product4(): IProduct {
    return {
      ...this.base(),
      id: "5bbaaf01-4a2f-4786-972b-ad010ccf2a7e",
      name: "Respira",
      shortDescription: "Outdoor bar table and stool",
      price: 500,
      isNew: true,
      imgPreview: Product4,
    };
  }

  product5(): IProduct {
    return {
      ...this.base(),
      id: "5a85f9e4-faae-4847-b5e9-7304b393db4f",
      name: "Grifo",
      shortDescription: "Night lamp",
      price: 1500,
      imgPreview: Product5,
    };
  }

  product6(): IProduct {
    return {
      ...this.base(),
      id: "e7257b28-a8a0-4982-9cff-eea8d05df927",
      name: "Muggo",
      shortDescription: "Small mug",
      price: 150,
      isNew: true,
      imgPreview: Product6,
    };
  }

  product7(): IProduct {
    return {
      ...this.base(),
      id: "c87f9521-5797-4c54-b653-a197c2f92172",
      name: "Pingky",
      shortDescription: "Cute bed set",
      price: 7000,
      oldPrice: 14000,
      imgPreview: Product7,
    };
  }

  product8(): IProduct {
    return {
      ...this.base(),
      id: "391cd54e-ef6d-4d36-9c8f-e6d3b0422192",
      name: "Potty",
      shortDescription: "Minimalist flower pot",
      price: 7000,
      isNew: true,
      imgPreview: Product8,
    };
  }

  list(): IProduct[] {
    return [
      this.product1(),
      this.product2(),
      this.product3(),
      this.product4(),
      this.product5(),
      this.product6(),
      this.product7(),
      this.product8(),
    ];
  }
}
