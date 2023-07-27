import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  isLoading:Boolean=false
  APIerror:string=''
constructor(private _auth:AuthService,private _router:Router){
  if(localStorage.getItem('userToken')!=null){
    this._router.navigate(['/home'])
  }
}

regisiterForm:FormGroup= new FormGroup({
  name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.pattern(/^[A-z][a-z0-9]{3,8}$/)]),
  rePassword: new FormControl('',[Validators.required,Validators.pattern(/^[A-z][a-z0-9]{3,8}$/)]),
  phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)])
})
register(regisiterForm:FormGroup){
  console.log("hi",regisiterForm);
  if(regisiterForm.valid){
    this.isLoading=true
    this._auth.register(regisiterForm.value).subscribe({
      next:(res:any)=>{console.log(res);
      this.isLoading=false
      this._router.navigate(['/sign-in'])
    },
      error:(err:any)=>{console.log(err.error.message)
        this.isLoading=false,
      this.APIerror=err.error.message}
      
      
    })


  }

  
}

}
