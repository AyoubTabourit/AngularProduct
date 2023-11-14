import { Component } from '@angular/core';
import {ProductModel} from "../Models/ProductModel";
import {ProductService} from "../Services/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
newProduct = new ProductModel();
constructor(private productservice : ProductService) {

}
addProduct(){
  this.productservice.addProduct(this.newProduct);
}

}
