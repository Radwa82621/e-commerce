import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent {
  verifycodeForm:FormGroup= new FormGroup({
    code: new FormControl('',[Validators.required]),
  })
isFalse:boolean=false
  constructor( private _AuthService:AuthService,private _router:Router){

  }

  verifyCode(){
    console.log(this.verifycodeForm.value.code);
    this._AuthService.VerifyResetCode(this.verifycodeForm.value.code).subscribe({
      next:(res:any)=>{console.log(res,"hello");
      this._router.navigate(['/reset-password'])
    },
      error:(err:any)=>{console.log(err)
       this.isFalse=true

    }
    
  })

}
}
