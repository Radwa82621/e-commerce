import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/interfaces/product';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  
allPoducts:Product[]=[]
searchTerm:string=''
  constructor(private _products:ProductsService){

}
  ngOnInit(): void {
this.getProducts();  }
getProducts(){
  this._products.getProducts().subscribe(
  {
    next:(res)=>{console.log(res);
    this.allPoducts=res.data},
    error:(err) =>console.log(err),
    
  }
  )
}
}
