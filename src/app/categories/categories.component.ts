import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Category } from '../shared/interfaces/category';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
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
        items: 8
      }
    },
    nav: true
  }
  allCategories:Category[]=[]
  constructor(private _products:ProductsService){

  }
  ngOnInit(): void {
   this.getCategories() 
  
  }
  getCategories(){
this._products.getCategoeies().subscribe(res=>
  {console.log(res);
   this.allCategories=res.data
}
)
  }

}
