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
wishlist:any=''
list:any[]=[]
count:number=0
  @Input() product:Product={} as Product 

  constructor(private _cart:CartService,private _wish:WishListService){
    // if(!localStorage.getItem('list')){
    //   this.list=[]
    // }else{
    //   this.list=JSON.parse(`${localStorage.getItem('list')}`)
    // }
   
    
  }
  ngDoCheck(): void {
    // console.log(this._wish.product);
    
  }
  addToCart(id:string){
    this._cart.addToCart(id).subscribe({
      next:(res)=>{console.log(res);
      this._cart.numOfCartItems.next(res.numOfCartItems)},
      error:(err)=>console.log(err)
      
      })
  }
  addToWishList(products:Product){
this._wish.product.push(this.product)
localStorage.setItem('wishList',JSON.stringify(this._wish.product))
  
   
    
  }


  }
  
  

