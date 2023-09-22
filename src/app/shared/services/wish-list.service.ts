import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WishListService {
  product:Product[]=[]
  token:any=localStorage.getItem('userToken')

 constructor(private _httpClient:HttpClient){}




addToWishlist(id:string):Observable<any>{
return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
{
  "productId": id
})
}

getWishList():Observable<any>{
  const httpHeaders: HttpHeaders = new HttpHeaders({
    token: this.token
})
  return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{ headers: httpHeaders })
}
removeFromWishList(id:string){
  const httpHeaders: HttpHeaders = new HttpHeaders({
    token: this.token
})
  return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{ headers: httpHeaders })
}

}

