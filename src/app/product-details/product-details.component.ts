import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../shared/services/cart.service';
import { WishListService } from '../shared/services/wish-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId:string=''
  productDetails:Product= {} as Product
  count:number=0
  wishListArray:string[]=[]
  constructor(private _activatedRoute:ActivatedRoute,private _product:ProductsService,private _cart:CartService ,private _WishListService:WishListService){
    this._activatedRoute.paramMap.subscribe((res:any)=>{console.log(res.params.id)
    this.productId=res.params.id
    this.getProdycrById()
    }
    )
  }

  getProdycrById(){
this._product.getProductByID(this.productId).subscribe({
  next:(res)=>{console.log(res)
  this.productDetails=res.data
},
  error:(err)=>{console.log(err);
  }
  
})
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  addToCart(id:string){
    this._cart.addToCart(id).subscribe({
      next:(res)=>{console.log(res);
        this._cart.numOfCartItems.next(res.numOfCartItems)},
      error:(err)=>console.log(err)
      
      })
  }
  addToWishlist(id:any){
    this._WishListService.addToWishlist(id).subscribe({
      next:(res)=>{
      this.wishListArray=res.data
    console.log(this.wishListArray);
    },
        error:(err)=>console.log(err)
    })

    
  }

}
