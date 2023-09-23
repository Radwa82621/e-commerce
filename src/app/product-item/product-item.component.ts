import { Component, DoCheck, Input, Output } from '@angular/core';
import { Product } from '../shared/interfaces/product';
import { CartService } from '../shared/services/cart.service';
import { WishListService } from '../shared/services/wish-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements DoCheck {
  @Input() product:Product={} as Product 

  wishListArray:string[]=[]
  constructor(private _cart:CartService,private _WishListService:WishListService){
   
   
    
  }
  ngDoCheck(): void {
    
  }
  addToCart(id:string){
    
    
    this._cart.addToCart(id).subscribe({
      next:(res)=>{
      this._cart.numOfCartItems.next(res.numOfCartItems)},
      error:(err)=>console.log(err)
      
      })
  }
  addToWishlist(id:any){
    this._WishListService.addToWishlist(id).subscribe({
      next:(res)=>{
      this.wishListArray=res.data
    },
        error:(err)=>console.log(err)
    })

    
  }



  }
  
  

