import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../shared/services/brands.service';
import { Product } from '../shared/interfaces/product';
interface Brand{
createdAt:string, 
image: string,
name: string,
slug: string,
updatedAt: string,
_id: string,
}
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
brands:Brand[]=[]
SpecificBrand:any
openModal:boolean=false
  constructor(private _brandService:BrandsService){

}
  ngOnInit(): void {
   this.getBrands()
  }
  getBrands(){
    this._brandService.getBrands().subscribe({
      next:(res)=>{
        this.brands=res.data

      },
      error:(err)=>{console.log(err);
      }
    })
  }
  GetSpecificBrand(id:string){
    this.SpecificBrand={
      image:"",
      name:"",
      slug:""
    }
    this._brandService.GetSpecificBrand(id).subscribe({
      next:(res)=>{
      this.SpecificBrand=res.data
      this.openModal=true

      },
      error:(err)=>{console.log(err);
      }
    })
  }

}
