import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isLoading:Boolean=false
  APIerror:string=''
  email:string=""
constructor(private _auth:AuthService,private _router:Router){
if(localStorage.getItem('userToken')!=null){
  this._router.navigate(['/home'])
}
}

loginForm:FormGroup= new FormGroup({
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.pattern(/^[A-z][a-z0-9]{3,15}$/)]),
})
login(loginForm:FormGroup){
  
  if(loginForm.valid){
    this.isLoading=true
    this._auth.login(loginForm.value).subscribe({
      next:(res:any)=>{
      this.isLoading=false
      this.email=res.user.email
      localStorage.setItem('userEmail',this.email)
      localStorage.setItem('userToken',res.token)
   

      this._auth.getUserData()
      this._router.navigate(['/home'])
    },
      error:(err:any)=>{
        this.isLoading=false,
      this.APIerror=err.error.message}
      
      
    })


  }

  
}
gotoForgetPass(){
  this._router.navigate(['/forget-password'])
}

}