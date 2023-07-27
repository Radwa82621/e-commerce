import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  numOfCartItems:BehaviorSubject<number>=new BehaviorSubject(0)
  cardId:BehaviorSubject<string>=new BehaviorSubject("")

 token:string|null=localStorage.getItem('userToken')
  constructor(private _hTTp:HttpClient) {
    this.getCard().subscribe({
      next:(res)=>{
        this.numOfCartItems.next(res.numOfCartItems)
this.cardId.next(res.data._id)
      }
      
    })
   }

  addToCart(id:string):Observable<any>{
    
    
return this._hTTp.post(`https://ecommerce.routemisr.com/api/v1/cart`,
{productId:id},
)

  }


  getCard():Observable<any>{
    
    
return this._hTTp.get(`https://ecommerce.routemisr.com/api/v1/cart`,

)

  }



  UpdateCart(id:string,count:number):Observable<any>{
    
    
return this._hTTp.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
{count:count},
)

  }
  removeItem(id:string):Observable<any>{
    
    
return this._hTTp.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
)

  }
  clearCart():Observable<any>{  
return this._hTTp.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
)

  }

  generateOnlinePayment(cartId:string,shippingAddress:any):Observable<any>{
    
    
    return this._hTTp.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {shippingAddress:shippingAddress},
    )
    
      }
 
}
