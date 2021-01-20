import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AddblogComponent} from './addblog/addblog.component'


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'addblog',
    component:AddblogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
