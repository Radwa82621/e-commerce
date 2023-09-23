import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {
  cartId:string=''
shippingAddress:FormGroup=new FormGroup({
 "details":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  "phone": new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/gm)]) ,
  "city": new FormControl(null,Validators.required)
})
constructor(private _cart:CartService ,private _activatedRoute:ActivatedRoute){
  // this._activatedRoute.paramMap.subscribe((res:any)=>{
  //   this.cartId=res.params.cartId 
  // })
  this._cart.cardId.subscribe(res=>{
    this.cartId=res
  })
}

handleOnline(){
this._cart.generateOnlinePayment(this.cartId,this.shippingAddress.value).subscribe({
  next:(res)=>{
    if(res.status=="success"){
  
      window.location.href=res.session.url

    }
   
    
  },
  error:(err)=>console.log(err)
  
  
})
}
}
