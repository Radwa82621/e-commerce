import { Component, DoCheck, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Category } from '../shared/interfaces/category';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { LoaderService } from '../shared/services/loader.service';
// interface category{

// }
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
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }

    },
    nav: true
  }
  category:{}={}
  allCategories:Category[]=[]
  categoryId:string=""
  subCategories!:any[]
  name:any
  constructor(private _products:ProductsService,private _router:Router,public _LoaderService:LoaderService){
  }
 
  ngOnInit(): void {
   this.getCategories() 
  
  }
  getCategories(){
this._products.getCategoeies().subscribe(res=>
  {
   this.allCategories=res.data
}
)
  }
  getSpecificCategory(slide:any){

this.categoryId=slide._id

localStorage.setItem("name",slide.name)
this.name=slide.name


    this._products.getSubCategories(this.categoryId).subscribe(res=>
      {
        this.subCategories=res.data

       
    }
    )
  }



}
