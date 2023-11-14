import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "./products-list/products-list.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {EditeProductComponent} from "./edite-product/edite-product.component";

const routes: Routes = [
  {path:"products-list",component:ProductsListComponent},
  {path:"add-list",component:AddProductComponent},
  {path:"edit-Product/:id",component:EditeProductComponent},
  {path:"",redirectTo:"products-list",pathMatch:"full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
