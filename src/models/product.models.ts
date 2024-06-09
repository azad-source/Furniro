export interface IProduct {
  id: string;
  name: string;
  img?: string;
  imgPreview?: string;
  inStock: boolean;
  price: number;
  shortDescription?: string;
  description?: string;
  oldPrice?: number;
  isNew?: boolean;
}
