import { Component } from '@angular/core';
import {ProductModel} from "../Models/ProductModel";
import {ProductService} from "../Services/product.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products:ProductModel[];
  constructor(private productservice : ProductService) {
    this.products=productservice.productlist();
}
deleteProduct(product : ProductModel){
    let msg = confirm("voulez vous supprimer ce produit ?");
    if(msg)
      this.productservice.deleteProduct(product);
}
}
