import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Category } from '../shared/interfaces/category';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
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
  categoryId:string=""
  subCategories!:any[]
  constructor(private _products:ProductsService,private _router:Router){

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
  getSpecificCategory(slide:any){
console.log(slide._id);
this.categoryId=slide._id
    this._products.getSubCategories(this.categoryId).subscribe(res=>
      {console.log(res.data);
        this.subCategories=res.data
    }
    )
  }



}
