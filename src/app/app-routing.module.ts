import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SettingsModule } from './settings/settings.module';
import { CheckOutComponent } from './cart/check-out/check-out.component';
import { OrdersComponent } from './cart/orders/orders.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:'full'},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent,title:'home component'},
  {path:"about",canActivate:[AuthGuard],component:AboutComponent,title:'about component'},
  {path:"products",canActivate:[AuthGuard],component:ProductsComponent,title:'products component'},
  {path:"brands",canActivate:[AuthGuard],component:BrandsComponent,title:'brands component'},
  {path:"categories",canActivate:[AuthGuard],component:CategoriesComponent,title:'categories component'},
  {path:"ProductDetails/:id",canActivate:[AuthGuard],component:ProductDetailsComponent,title:'ProductDetails component'},
  {path:"settings",loadChildren:()=>import('./settings/settings.module').then((m)=>m.SettingsModule)},
  
  {path:"sign-in",component:SignInComponent,title:'sign-in component'},
  {path:"sign-up",component:SignUpComponent,title:'sign-up component'},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  {path:"check-out/:cartId",canActivate:[AuthGuard],component:CheckOutComponent,title:'check-out component'},
  {path:"allorders",canActivate:[AuthGuard],component:OrdersComponent,title:'orders component'},

  { path: 'wishList', loadChildren: () => import('./wish-list/wish-list.module').then(m => m.WishListModule) },




  {path:"**",component:NotFoundComponent,title:'not found'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
