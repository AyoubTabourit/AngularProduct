import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../Models/ProductModel";
import {ProductService} from "../Services/product.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-edite-product',
  templateUrl: './edite-product.component.html',
  styleUrls: ['./edite-product.component.css']
})
export class EditeProductComponent implements  OnInit{
currentProduct =new ProductModel();
constructor(
  private productService: ProductService,
  private activateRoute : ActivatedRoute,
  private route : Router
) {


}
ngOnInit() {
  //console.log(this.activateRoute.snapshot.params['id']);
this.currentProduct= this.productService.editProduct(this.activateRoute.snapshot.params['id']);
}

updateProduct(){
  this.productService.updateProduct(this.currentProduct);
  this.route.navigate(['products-list']);
}
}
