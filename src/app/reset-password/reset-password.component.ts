import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from '../shared/services/password.service';
import { Route, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  
  resetPasswordForm:FormGroup= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    newPassword: new FormControl('',[Validators.required,Validators.pattern(/^[A-z][a-z0-9]{3,8}$/)]),

  })
  constructor(private AuthService:AuthService,private _router:Router,private _AuthService:AuthService){

  }



  resetPassword(){
  this.AuthService.restPassword(this.resetPasswordForm.value.email,this.resetPasswordForm.value.newPassword).subscribe({
    next:(res:any)=>{
    localStorage.setItem("userToken",res.token)
    this._AuthService.getUserData()

    this._router.navigate(['/sign-in'])

  },
    error:(err:any)=>{console.log(err)
      
  }
  })
    
  }
}
