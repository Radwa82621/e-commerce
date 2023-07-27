import { Component, DoCheck, OnInit } from '@angular/core';
import { WishListService } from '../shared/services/wish-list.service';
import { Product } from '../shared/interfaces/product';
import { CartService } from '../shared/services/cart.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit ,DoCheck {
  wishList:Product[]=[]
  isExist:boolean=false
  constructor(private _wish:WishListService,private _cart:CartService){
    if(!localStorage.getItem('wishList')){
      this.wishList=[]
      this.isExist=true
    }else{
      this.isExist=false
      this.wishList=JSON.parse(`${localStorage.getItem('wishList')}`)
    }
  }
  ngDoCheck(): void {
// console.log(this.wishList,this.isExist);

  }
  ngOnInit(): void {
  
    if(this.isExist){
      this.wishList=this._wish.product
    }
   
  }

  addToCart(id:string){
    this._cart.addToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
      this._cart.numOfCartItems.next(res.numOfCartItems)},
      error:(err)=>console.log(err)
      
      })
  }


}


