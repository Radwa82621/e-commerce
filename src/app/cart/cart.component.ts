import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { Cart } from '../shared/interfaces/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartDetails:Cart={} as Cart

constructor(private _cartService :CartService ,private _router:Router){}
  ngOnInit(): void {
this.getCart();

  }
getCart(){
  this._cartService.getCard().subscribe({
    next:(res)=>{
    this.cartDetails=res
  console.log( this.cartDetails);
  },
    error:(err)=>{console.log(err);}
  })
}
updateCart(id:string,count:number){
  this._cartService.UpdateCart(id,count).subscribe({
    next:(res)=>{ console.log(res)
      this.cartDetails=res } ,
    error:(err)=> console.log(err)
    
  })

}
removeItem(id:string){
  this._cartService.removeItem(id).subscribe({
    next:(res)=>{console.log(res);
    this.cartDetails=res},
    error:(err)=>console.log(err),})
}
clearCart(){
  this._cartService.clearCart().subscribe({
    next:(res)=>{console.log(res);
    this.cartDetails=res
  this._router.navigate(['/home'])},
    error:(err)=>console.log(err),})
}
}

