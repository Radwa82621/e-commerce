import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from '../shared/services/password.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  forgetPasswordForm:FormGroup= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
  })
  sucess:boolean=false

  constructor(private _AuthService:AuthService,private _router:Router){}

  forgetPassword(forgetPasswordForm:FormGroup){

this._AuthService.forgetPassword(forgetPasswordForm.value.email).subscribe({
  next:(res)=>{console.log(res);
this.sucess=true
this._router.navigate(['/verify-code'])
  },
  error:(err)=>{console.log(err);
  }
})

  }
}
