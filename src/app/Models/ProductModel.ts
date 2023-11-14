import {CategoryModel} from "./Category.model";

export class ProductModel{
  productId? : number;
  productName?:String;
  productPrice?:number;
  dateCreation? : Date;
  category? : CategoryModel;
}
