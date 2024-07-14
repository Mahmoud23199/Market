import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/components/products/products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"cart",component:CartComponent},

  {path:"",redirectTo:"products",pathMatch:'full'},
  {path:"**",component:ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
