import { Injectable } from '@angular/core';
import {ProductModel} from "../Models/ProductModel";
import {CategoryModel} from "../Models/Category.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:ProductModel[];
  product! :ProductModel;
  categories:CategoryModel[];
  constructor() {
this.categories=[
  {categoryId:1,categoryName:"Bakery"},
  {categoryId:2,categoryName:"Dairy"},
  {categoryId:3,categoryName:"Meat"},
  {categoryId:4,categoryName:"Frozen Food"},
  {categoryId:5,categoryName:"Seafood"}
]
    this.products=[
      {productId:1,productName:"cheese",productPrice:34,dateCreation:new Date(),
      category:{categoryId:2,categoryName:"Dairy"}},
      {productId:2,productName:"BREAD",productPrice:354,dateCreation:new Date(),
        category:{categoryId:1,categoryName:"Bakery"}},
      {productId:3,productName:"MILK",productPrice:20,dateCreation:new Date(),
        category:{categoryId:3,categoryName:"Meat"}}
    ];
  }
  productlist(){
    return this.products;
  }
  addProduct(newProduct : ProductModel){
    this.products.push(newProduct);

  }
  deleteProduct(product : ProductModel){
    const  index = this.products.indexOf(product,0);
    this.products.splice(index,1);
  }
  editProduct(id:number){
this.product=this.products.find(p=>p.productId==id)!;
return this.product;

  }
  updateProduct(product : ProductModel){
    this.deleteProduct(product);
    this.addProduct(product);
    this.sortProduct();
  }
  sortProduct(){
    this.products.sort((x,y)=>(x.productId! > y.productId! ? 1 : -1));
  }
}
