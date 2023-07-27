import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { FilterCartPipe } from './filter-cart.pipe';
import { CheckOutComponent } from './check-out/check-out.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    CartComponent,
    FilterCartPipe,
    CheckOutComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,ReactiveFormsModule
  ]
})
export class CartModule { }
