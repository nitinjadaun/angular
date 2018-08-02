import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }   from './login/login.component';
import  { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dash', loadChildren: './dash/dash.module#DashModule'}
];
export const routing = RouterModule.forRoot(routes);
