import { Component, DoCheck, OnInit } from '@angular/core';
import { WishListService } from '../shared/services/wish-list.service';
import { Product } from '../shared/interfaces/product';
import { CartService } from '../shared/services/cart.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit  {
  wishList:any[]=[]
  constructor(private _wish:WishListService,private _cartService :CartService){
   
    }

  

  ngOnInit(): void {
    this.getWishList()
    }
   
    getWishList(){
this._wish.getWishList().subscribe({
  next:(res)=>{
  this.wishList=res.data
console.log(this.wishList);
},
  error:(err)=>console.log(err)
  
  })
    }
    removeFromWishList(id:string){
      this._wish.removeFromWishList(id).subscribe({
        next:(res)=>{
    console.log(res);
    this.getWishList()
    
      },
        error:(err)=>console.log(err)
        
        })
    }

    addToCart(id:string){
this._cartService.addToCart(id).subscribe({
  next:(res)=>{console.log(res);
    this._cartService.numOfCartItems.next(res.numOfCartItems)
  this.removeFromWishList(id)},
  error:(err)=>console.log(err)
  
  })

    }

  }






