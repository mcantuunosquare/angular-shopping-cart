import { ICategory } from "./icategory";
import { IImage } from "./iimage";

export interface IProduct {
  id: number;
  productName: string;
  price: number,
  currency: string,
  code: string,
  category: ICategory[] ;
  images: IImage[] ;
  uid:string
}
