import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class WishListService {
  product:Product[]=[]

 constructor(){}

}
