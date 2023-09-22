import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { CartService } from '../shared/services/cart.service';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  numOfCartItems:number=0
isLoggedIn:boolean=false
constructor(private _auth:AuthService ,private _cart:CartService ){
 
}
  ngOnInit(): void {
    this._auth.userData.subscribe((res)=>{console.log(res);
      if(res!=null){
        this.isLoggedIn=true;
      }else{
        this.isLoggedIn=false;
    
      }
    this._cart.numOfCartItems.subscribe(res=>{
      this.numOfCartItems=res
    })
    })  }
logOut(){
  this._auth.logOut()
}
}
