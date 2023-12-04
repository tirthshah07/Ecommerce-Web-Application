import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CartComponent } from './Pages/cart/cart.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details/product-details.component';
import { ShippingComponent } from './Pages/shipping/shipping.component';

const routes: Routes = [{path:'', redirectTo:'/home', pathMatch:"full"}
,{path:'home', component:HomeComponent}, 
{path:'addtocart', component:CartComponent},
{path:'products/:productId', component: ProductDetailsComponent},
{path:'shipping', component:ShippingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
