import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetComponent } from './reset-password/reset.component';

const routes: Routes = [
  {path:"",component:ChangePasswordComponent,pathMatch:'full'},
  {path:"change-password",component:ChangePasswordComponent,title:'home component'},
  {path:"reset-password",component:ResetComponent,title:'about component'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
