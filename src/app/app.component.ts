import { Component,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './shared/services/products.service';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
 
  title = 'e-commerce';
  constructor(private _products:ProductsService,private _router:Router,private _LoaderService:LoaderService){

  }
  ngDoCheck(): void {
    if(this._router.url=="/categories"){
      this._LoaderService.shouldRender=true
    }else{
      this._LoaderService.shouldRender=false
    }
  }
}
